export class MaterialInput {
  constructor(config) {
    this.element = config.element;
    this.className = config.className || 'is-valid';
    this.init();
  }

  //Get Multiple listener in one function
  static addListener(element, eventNames, listener) {
    let events = eventNames.split(' ');
    for (let i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }

  //Check if the value input is empty
  checkIfInputIsEmpty(elem) {
    if (elem.value.length === 0) {
      elem.classList.remove(this.className);
    } else {
      elem.classList.add(this.className);
    }
  }

  init() {
    for (let elem of this.element) {
      let $input = elem.querySelector('input');

      // Check validate input
      MaterialInput.addListener($input, 'focus focusout keyup', () => {
        this.checkIfInputIsEmpty($input);
      });
    }
  }
}