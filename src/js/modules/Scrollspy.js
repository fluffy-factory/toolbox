export class Scrollspy {

  constructor (config) {

    let defaults = {
      navLinks: [],
      activeClass: 'is-active',
      activeZoneOffset: {start: 0, end: 0},
      activeCallback: null,
      notActiveCallback: null,
      clickCallback: null,
    };

    this._docHeight = document.documentElement.scrollHeight;
    this._winHeight = window.innerHeight;

    this.config = {...defaults, ...config};
    this.navLinks = [...this.config.navLinks];
    this.activeClass = this.config.activeClass;
    this.activeZoneOffset = this.config.activeZoneOffset;
    this.activeCallback = this.config.activeCallback;
    this.notActiveCallback = this.config.notActiveCallback;

    this.targets = [];
    this.targetsOffsets = [];
    this.data = [];
  }

  /**
   * Recursive Fn for offsetTop
   * @param element
   * @returns {number}
   */
  static getOffsetTop (element) {
    let offset;
    offset = 0;
    while (element) {
      offset += element.offsetTop;
      element = element.offsetParent;
    }
    return offset;
  }

  /**
   * Exec callback to each interval of delay
   * @param {Function} callback
   * @param {Number} delay
   * @returns {Function}
   */
  static throttle (callback, delay) {
    let last;
    let timer;
    return function () {
      let context = this;
      let now = +new Date();
      let args = arguments;
      if (last && now < last + delay) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          callback.apply(context, args);
        }, delay);
      } else {
        last = now;
        callback.apply(context, args);
      }
    };
  }

  /**
   * Exec callback after a timeout of delay
   * @param {Function} callback
   * @param {Number} delay
   * @returns {Function}
   */
  static debounce (callback, delay) {
    let timer;
    return function (){
      let args = arguments;
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(function(){
        callback.apply(context, args);
      }, delay)
    }
  }

  /**
   * Check if scrollY is in area ...
   * @param {Number} scrollY
   * @param {Object} area
   * @param {Number} area.start
   * @param {Number} area.end
   * @returns {boolean}
   */
  static inActiveArea (scrollY, area) {
    return scrollY > area.start && scrollY < area.end;
  }

  /**
   * Check if the document.documentElement.scrollHeight has changed.
   * @returns {boolean}
   * */
  heightHasChanged () {
    return this._docHeight !== document.documentElement.scrollHeight || this._winHeight !== window.innerHeight;
  }

  /**
   *
   * @returns {(HTMLElement | null)[]}
   */
  stockTargetsNodes (links) {
    return links.map((link) => link.getAttribute('href')).map((idSelector) => document.querySelector(idSelector));
  }

  /**
   * Get target's offsetTop
   * @param targetsArray
   * @returns {*}
   */
  stockOffsets (targetsArray) {
    return targetsArray.map((targetNode) => Scrollspy.getOffsetTop(targetNode));
  }

  assembleAllData () {
    this.data = [];
    for (let i = 0; i < this.navLinks.length; i++) {
      let data = {
        link: this.navLinks[i],
        target: this.targets[i],
        offset: this.targetsOffsets[i],
        activeArea: {
          start: (this.targetsOffsets[i] - (this._winHeight - this.activeZoneOffset.end)),
          end: ((this.targetsOffsets[i] + this.targets[i].offsetHeight) - this.activeZoneOffset.start)
        },
        active: false
      };
      this.data.push(data);
    }
  }

  /**
   * Get targets ids, targets elements and targets offsets
   * After get all data assemble them
   */
  updateAllData () {
    this._docHeight = document.documentElement.scrollHeight;
    this._winHeight = window.innerHeight;
    this.targets = this.stockTargetsNodes(this.navLinks);
    this.targetsOffsets = this.stockOffsets(this.targets);
    // then assemble all together
    this.assembleAllData();
  }

  /**
   *
   * @param {Function} fn
   * @param {Object} data
   */
  execCallback (fn, data) {
    if (fn !== null && fn instanceof Function) {
      fn.call(this, data)
    }
  }

  /**
   *
   * @param {number} scrollPosY
   */
  spy (scrollPosY) {
    this.updateAllData();
    let i = 0;
    let len = this.data.length;

    for (i; i < len; i++) {
      let current = this.data[i];
      let inView = Scrollspy.inActiveArea(scrollPosY, current.activeArea);

      if (inView && !current.active) {
        // in activeArea
        this.execCallback(this.activeCallback, current);
        current.active = true;
        current.link.classList.add(this.activeClass);
      } else {
        // out activeArea
        this.execCallback(this.notActiveCallback, current);
        current.active = false;
        current.link.classList.remove(this.activeClass);
      }

    }

  }

  init () {
    try {
      if (!this.navLinks instanceof NodeList) {
        new Error('navLinks must be a NodeList.');
      } else {

        this.spy(window.pageYOffset);

        // Computed the targets 's positions if the viewport height has changed.
        window.addEventListener('resize', Scrollspy.debounce(() => {
          if (this.heightHasChanged()) {
            this.updateAllData();
            this.spy(window.pageYOffset);
          }
        }, 100));

        window.addEventListener('scroll', Scrollspy.throttle(() => {
          this.spy(window.pageYOffset);
        }, 50));

        if (this.config.clickCallback !== null) {
          this.navLinks.forEach((link, index) => {
            link.addEventListener('click', (e) => {
              e.preventDefault();
              this.execCallback(this.config.clickCallback, {link: link, targetOffset: this.data[index].offset});
            }, false);
          });
        }

      }
    } catch (err) {
      throw err;
    }
  }

}