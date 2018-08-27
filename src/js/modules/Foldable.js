export class Foldable {

  constructor (config) {
    this.eventType = config.eventType || 'click';
    this.trigger = (config.trigger instanceof NodeList) ? [...config.trigger] : [config.trigger];
    this.target = config.target || null;
    this.openCallback = config.openCallback || null;
    this.closeCallback = config.closeCallback || null;
    this.breakpoint = config.breakpoint || {min: 0, max: 0};
    this.isOpen = this.getIsOpen();
    this.isAnimated = false;

    let eventHandler = (e) => {
      if (this.eventType === 'click' || this.eventType === 'touchstart') {
        e.preventDefault();
      }
      if (this.eventType === 'change') {
        this.target.disabled = true;
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
    if (this.breakpoint.min === 0 && this.breakpoint.max === 0) {
      this.trigger.forEach((trigger) => {
        trigger.addEventListener(this.eventType, handler);
      });
      return false;
    } else if (windowWidth > this.breakpoint.min && windowWidth < this.breakpoint.max) {
      // Add click event
      this.trigger.forEach((trigger) => {
        trigger.addEventListener(this.eventType, handler);
      });
    } else {
      // Remove click event
      this.trigger.forEach((trigger) => {
        trigger.removeEventListener(this.eventType, handler);
      });
    }
  }

  // Get the target's state, opened or closed
  getIsOpen () {
    let active = this.trigger.filter((trigger) => {
      return trigger.classList.contains('is-active');
    });
    return active.length === this.trigger.length;
  }

  // Verify if the property open is a function and exec it
  execOpen () {
    if (this.openCallback !== null && typeof this.openCallback === 'function') {
      this.openCallback.call(this, {
        trigger: this.trigger,
        target: this.target,
        done: () => this.done()
      });
    } else {
      this.target.style.display = 'block';
      // reset isAnimated
      this.isAnimated = false;
    }
  }

  // Verify if the property close is a function and exec it
  execClose () {
    if (this.closeCallback !== null && typeof this.closeCallback === 'function') {
      this.closeCallback.call(this, {
        trigger: this.trigger,
        target: this.target,
        done: () => this.done()
      });
    } else {
      this.target.style.display = 'none';
      // reset isAnimated
      this.isAnimated = false;
    }
  }

  // Toggle state open / close
  toggle () {
    if (!this.isAnimated) {
      this.isAnimated = true;
      this.isOpen = this.getIsOpen();
      this.trigger.forEach((trigger) => {
        trigger.classList.toggle('is-active');
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
    if (this.eventType === 'change') {
      this.target.disabled = false;
    }
  }

}
