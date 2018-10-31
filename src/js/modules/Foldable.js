export class Foldable {

  constructor (config) {

    let defaults = {
      eventType: 'click',
      trigger: [],
      target: [],
      classActive: 'is-active',
      breakpoint: {min: 0, max: 0},
      openCallback: null,
      closeCallback: null,
    };

    this.config = {...defaults, ...config};
    this.config.trigger = (config.trigger instanceof NodeList) ? [...config.trigger] : [config.trigger];
    this.isOpen = this.getIsOpen();
    this.isAnimated = false;

    let eventHandler = (e) => {
      if (this.config.eventType === 'click' || this.config.eventType === 'touchstart') {
        e.preventDefault();
      }
      if (this.config.eventType === 'change') {
        this.config.trigger.forEach((trigger) => trigger.disabled = true);
      }
      this.toggle();
    };

    this.addRemoveEvents(eventHandler);

    // Window resize to add or remove event listener
    window.addEventListener('resize' , this._debounce(() => {
      this.addRemoveEvents(eventHandler);
    }, 300));

  }

  /**
   * Execute callback after the delay
   * @param {Function} callback
   * @param {Number} delay
   * @returns {Function}
   * @private
   */
  _debounce (callback, delay) {
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

  addRemoveEvents (handler) {
    let windowWidth = window.innerWidth;
    // For events
    if (this.config.breakpoint.min === 0 && this.config.breakpoint.max === 0) {
      this.config.trigger.forEach((trigger) => {
        trigger.addEventListener(this.config.eventType, handler);
      });
      return false;
    } else if (windowWidth > this.config.breakpoint.min && windowWidth < this.config.breakpoint.max) {
      // Add click event
      this.config.trigger.forEach((trigger) => {
        trigger.addEventListener(this.config.eventType, handler);
      });
    } else {
      // Remove click event
      this.config.trigger.forEach((trigger) => {
        trigger.removeEventListener(this.config.eventType, handler);
      });
    }
  }

  // Get the target's state, opened or closed
  getIsOpen () {
    let active = this.config.trigger.filter((trigger) => {
      return trigger.classList.contains(this.config.classActive);
    });
    return active.length === this.config.trigger.length;
  }

  // Verify if the property open is a function and exec it
  execOpen () {
    if (this.config.openCallback !== null && typeof this.config.openCallback === 'function') {
      this.config.openCallback.call(this, {
        trigger: this.config.trigger.length > 1 ?  this.config.trigger : this.config.trigger[0],
        target: this.config.target,
        done: () => this.done()
      });
    } else {
      this.config.target.style.display = 'block';
      // reset isAnimated
      this.isAnimated = false;
    }
  }

  // Verify if the property close is a function and exec it
  execClose () {
    if (this.config.closeCallback !== null && typeof this.config.closeCallback === 'function') {
      this.config.closeCallback.call(this, {
        trigger: this.config.trigger.length > 1 ?  this.config.trigger : this.config.trigger[0],
        target: this.config.target,
        done: () => this.done()
      });
    } else {
      this.config.target.style.display = 'none';
      // reset isAnimated
      this.isAnimated = false;
    }
  }

  // Toggle state open / close
  toggle () {
    if (!this.isAnimated) {
      this.isAnimated = true;
      this.isOpen = this.getIsOpen();
      this.config.trigger.forEach((trigger) => {
        trigger.classList.toggle(this.config.classActive);
      });
      if (!this.isOpen) {
        this.execOpen();
      } else {
        this.execClose();
      }
    }
  }

  // Set isAnimated at false when the override animation is completed
  done () {
    this.isAnimated = false;
    if (this.config.eventType === 'change') {
      this.config.trigger.forEach((trigger) => trigger.disabled = false);
    }
  }

}
