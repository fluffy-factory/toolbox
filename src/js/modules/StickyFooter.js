export class StickyFooter {

  constructor(config) {

    let defaults = {
      elementSticky: document.querySelector('footer'),
      elementContainer: document.querySelector('main'),
    };

    this.config = {...defaults, ...config};
    this.elementContainer = this.config.elementContainer;
    this.elementSticky = this.config.elementSticky;

    window.addEventListener('load', () => {
      this.init();
      this.elementContainer.style.marginBottom = StickyFooter.getHeightFooter(this.elementSticky);
    });
  }

  /**
   * Execute callback after the delay
   * @param {Function} callback
   * @param {Number} delay
   * @returns {Function}
   * @private
   */
  static debounce(callback, delay) {
    let timer;
    return () => {
      let args = arguments;
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, delay);
    }
  }

  /**
   * Get height of footer in PX
   * @param {Function} elementSticky
   * @returns {Function}
   * @private
   */
  static getHeightFooter(elementSticky) {

    let style = getComputedStyle(elementSticky);
    let position = style.position;

    if (position !== 'sticky') {
      return elementSticky.offsetHeight + 'px';
    }
  }

  /**
   * Set height of footer when user resize the browser
   * @param {Function} elementSticky
   * @param {Function} elementContainer
   * @param {Function} stickyCss
   * @private
   */
  static setHeightFooter(elementSticky, elementContainer) {
    window.addEventListener('resize', StickyFooter.debounce(() => {
      elementContainer.style.marginBottom = StickyFooter.getHeightFooter(elementSticky);
    }, 100));
  }

  init() {
    StickyFooter.setHeightFooter(this.elementSticky, this.elementContainer);
  }
}