export class Scrollspy {

  constructor (config) {

    let defaults = {
      navLinks: null,
      activeClass: 'is-active',
      activeZoneOffset: 0,
      activeCallback: null,
      notActiveCallback: null,
    };

    this.config = {...defaults, ...config};
    this._docHeight = document.documentElement.scrollHeight;
    this._winHeight = window.innerHeight;

    this.navLinks = [...this.config.navLinks];
    this.activeClass = this.config.activeClass;
    this.activeZoneOffset = this.config.activeZoneOffset;
    this.activeCallback = this.config.activeCallback;
    this.notActiveCallback = this.config.notActiveCallback;

    this.targets = [];
    this.targetsOffsets = [];
    this.data = [];
    this.activeLinks = [];

    // Init
    this.init();
  }

  /**
   *  Retrun the real offset of element, check all parents offsets.
   * @param {HTMLElement} el
   * @param {HTMLElement} parent
   * @returns {number}
   */
  static getOffsetTop (el, parent) {
    let rect = el.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }

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

  init () {
    try {
      if (!this.navLinks instanceof NodeList) {
        new Error('navLinks must be a NodeList.');
      } else {
        this.updateAllData();

        // Computed the targets 's positions if the viewport height has changed.
        window.addEventListener('resize', Scrollspy.debounce(() => {
          if (this.heightHasChanged()) {
            this._docHeight = document.documentElement.scrollHeight;
            this._winHeight = innerHeight;
            this.updateAllData();
            this.spy(window.pageYOffset);
          }
        }, 100));

        window.addEventListener('scroll', Scrollspy.throttle(() => {
          this.spy(window.pageYOffset);
        }, 50));

        this.spy(window.pageYOffset);
      }
    } catch (err) {
      throw err;
    }
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
    return targetsArray.map((targetNode) => Scrollspy.getOffsetTop(targetNode, document.body));
  }

  assembleAllData () {
    let windowHeight = window.innerHeight;
    let data;
    for (let i = 0; i < this.navLinks.length; i++) {
      data = {
        link: this.navLinks[i],
        target: this.targets[i],
        offset: this.targetsOffsets[i],
        activeArea: {
          start: (this.targetsOffsets[i] - windowHeight),
          end: (this.targetsOffsets[i] + this.targets[i].offsetHeight)
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
    this.targets = this.stockTargetsNodes(this.navLinks);
    this.targetsOffsets = this.stockOffsets(this.targets);
    // then assemble all together
    this.assembleAllData();
  }

  /**
   *
   * @param {Function} fn
   * @param {Object} current
   * @param {HTMLElement} current.link
   * @param {HTMLElement} current.target
   */
  execCallback (fn, current) {
    fn.call(this, {link: current.link, target: current.target})
  }

  /**
   *
   * @param {number} scrollPosY
   */
  // TODO: Split into small functions
  spy (scrollPosY) {
    let i = 0;
    let len = this.data.length;

    for (i; i < len; i++) {
      let current = this.data[i];
      let inView = Scrollspy.inActiveArea(scrollPosY, current.activeArea);

      if (inView) {
        // in activeArea
        if (!current.active) {
          this.execCallback(this.activeCallback, current);
        }
        current.active = inView;
        current.link.classList.add(this.activeClass);
      } else {
        // out activeArea
        if (current.active) {
          this.execCallback(this.notActiveCallback, current);
        }
        current.active = false;
        current.link.classList.remove(this.activeClass);
      }

    }

    console.log('DATA', this.data);

  }

}