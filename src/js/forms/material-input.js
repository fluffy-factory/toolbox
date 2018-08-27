export class MaterialInput {
  constructor(elem) {
    this.elem = document.querySelectorAll(elem);
    this.init();
  }

  static addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (let i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }

  init() {

    for (let elem of this.elem) {
      let $input = elem.querySelector('input');

      MaterialInput.addListenerMulti($input, 'focus focusout keyup', function () {
        if (this.value.length === 0) {
          this.classList.remove('valid');
        } else {
          this.classList.add('valid');
        }
      });
    }

  }

}