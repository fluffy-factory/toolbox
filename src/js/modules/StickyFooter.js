export class StickyFooter {

  constructor (config) {

    let defaults = {
      elementSticky: document.querySelector('footer'),
      elementContainer: document.querySelector('main'),
    };

    this.config = {...defaults, ...config};
    this.elementContainer = this.config.elementContainer;
    this.elementSticky = this.config.elementSticky;
    this.stickyHeight = 0;

    this.init();
  }

  /**
   * Return elementSticky's offsetHeight
   * @returns {number}
   */
  getStickyHeight () {
    let style = getComputedStyle(this.elementSticky);
    let position = style.position;

    if (position !== 'sticky') {
      return this.elementSticky.offsetHeight;
    }
  }

  /**
   * Set elementSticky's offsetHeight to elementContainer
   * @param value
   */
  setStickyHeight (value) {
    this.elementContainer.style.marginBottom = `${value}px`;
  }

  init() {
    window.addEventListener('load', () => this.update());
    window.addEventListener('resize', StickyFooter.debounce(() => this.update(), 100));
  }

  update () {
    this.stickyHeight = this.getStickyHeight();
    this.setStickyHeight(this.stickyHeight);
  }
}