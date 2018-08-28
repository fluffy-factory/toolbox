export class MaterialInput {
  constructor(elem, className = 'is-valid', dataPassword = '[data-view-password]') {
    this.elem = document.querySelectorAll(elem);
    this.className = className;
    this.dataPassword = dataPassword;
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

  togglePassword(elem) {
    if (elem.type === "password") {
      elem.type = "text";
    } else {
      elem.type = "password";
    }
  }

  hidePassword(elem) {
    if (elem.type === "text") {
      elem.type = "password";
    }
  }

  init() {

    for (let elem of this.elem) {
      let $input = elem.querySelector('input');
      let $showPasswordIcon = elem.querySelector(this.dataPassword);

      // Check validate input
      MaterialInput.addListener($input, 'focus focusout keyup', () => {
        this.checkIfInputIsEmpty($input);
      });

      // Click password icon for show content
      if ($showPasswordIcon) {
        $showPasswordIcon.addEventListener('click', () => {
          this.togglePassword($input);
        });

        document.addEventListener("click", (event) => {
          let classElem = elem.className;

          if (!event.target.closest('.'+classElem)) {
            this.hidePassword($input);
          }
        });
      }
    }
  }
}