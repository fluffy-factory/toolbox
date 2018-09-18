export class StickyFooter {
  constructor(config) {

    let defaults = {
      elementSticky: document.querySelectorAll('footer')[0],
      elementContainer: document.querySelectorAll('main')[0],
      css: {
        elementSticky: {
          position: 'fixed',
          zIndex: -1,
          left: 0,
          right: 0,
          bottom: 0
        },
        elementContainer: {
          position: 'relative',
          zIndex: 1,
          background: 'white'
        }
      }
    };

    this.config = {...defaults, ...config};
    this.elementSticky = [...this.config.elementSticky];
    this.elementContainer = [...this.config.elementContainer];
    this.css = [...this.config.css];

    window.addEventListener('load', () => {
      this.init();
      this.config.elementContainer.style.marginBottom = StickyFooter.getHeightFooter(this.config.elementSticky);
    });
  }

  /**
   * Execute callback after the delay
   * @param {Function} callback
   * @param {Number} delay
   * @returns {Function}
   * @private
   */
  static debounce (callback, delay) {
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
    return elementSticky.offsetHeight+'px';
  }

  /**
   * Set height of footer when user resize the browser
   * @param {Function} elementSticky
   * @param {Function} elementContainer
   * @private
   */
  static setHeightFooter(elementSticky, elementContainer) {
    window.addEventListener('resize' , StickyFooter.debounce(() => {
      elementContainer.style.marginBottom = StickyFooter.getHeightFooter(elementSticky);
    }, 100));
  }

  init() {

    let elementSticky = this.config.elementSticky;
    let elementContainer = this.config.elementContainer;

    for (let item in this.config.css.elementSticky) {
      elementSticky.style[item] = this.config.css.elementSticky[item];
    }

    for (let item in this.config.css.elementContainer) {
      elementContainer.style[item] = this.config.css.elementContainer[item];
    }

    StickyFooter.setHeightFooter(elementSticky, elementContainer);
  }
}