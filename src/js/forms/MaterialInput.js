export class MaterialInput {
  constructor(elem, className = 'is-valid') {
    this.elem = document.querySelectorAll(elem);
    this.className = className;
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

    for (let elem of this.elem) {
      let $input = elem.querySelector('input');

      MaterialInput.addListener($input, 'focus focusout keyup', () => {
        this.checkIfInputIsEmpty($input);
      });
    }

  }

}