export class Scrollspy {

  constructor (config) {

    this._config = config || {};
    this._docHeight = document.documentElement.scrollHeight;
    this._winHeight = window.innerHeight;

    this.navLinks = config.navLinks || null;
    this.activeClass = config.activeClass || 'is-active';
    this.activeZoneOffset = config.activeZoneOffset || 0;
    this.activeCallback = config.activeCallback || null;
    this.notActiveCallback = config.notActiveCallback || null;

    this.targetsIds = [];
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
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
    //return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
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
  heightHasChanged() {
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
   *  Get all ids
   * @returns {string[]}
   */
  stockTargetsIds () {
    return [...this.navLinks].map((link) => link.getAttribute('href'));
  }

  /**
   *
   * @returns {(HTMLElementTagNameMap[T] | null)[]}
   */
  stockTargetsNodes () {
    return this.targetsIds.map((idSelector) => document.querySelector(idSelector));
  }

  /**
   * Get target's offsetTop
   * @returns {number[]}
   */
  stockOffsets () {
    return this.targets.map((targetNode) => {
      return Scrollspy.getOffsetTop(targetNode, document.body);
    });
  }

  assembleAllData () {
    this.data = [];
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
        callbackActiveExecuted: false, // To call callback once
        callbackDisableExecuted: false, // To call callback once
      };
      this.data.push(data);
    }
  }

  /**
   * Get targets ids, targets elements and targets offsets
   * After get all data assemble them
   */
  updateAllData () {
    this.targetsIds = this.stockTargetsIds();
    this.targets = this.stockTargetsNodes();
    this.targetsOffsets = this.stockOffsets();
    // then assemble all together
    this.assembleAllData();
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
      const current = this.data[i];
      let inView = Scrollspy.inActiveArea(scrollPosY, current.area);
      if (inView) {
        // in activeArea
        current.link.classList.add(this.activeClass);
        if (this.activeLinks.indexOf(current.link) === -1 && this.activeCallback !== null && !current.callbackActiveExecuted) {
          this.activeCallback.call(this, {link: current.link, target: current.target});
          current.callbackActiveExecuted = true;
          current.callbackDisableExecuted = false;
        }
        this.activeLinks.push(current.link);
      } else {
        // out activeArea
        let currentIndexActive = this.activeLinks.indexOf(current.link);
        if (this.activeLinks.indexOf(current.link) !== -1 && this.notActiveCallback !== null && !current.callbackDisableExecuted) {
          this.notActiveCallback.call(this, {link: current.link, target: current.target});
          current.callbackActiveExecuted = false;
          current.callbackDisableExecuted = true;
        }
        this.activeLinks = this.activeLinks.slice(currentIndexActive);
        current.link.classList.remove(this.activeClass);
      }
    }
  }

}