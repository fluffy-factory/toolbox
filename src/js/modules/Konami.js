export class Konami {

  constructor (callback) {
    this.callback = callback;
    this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    this.userCode = [];
    this.konamiSuccess = false;

    this.init();
  }

  trimUserCode () {
    if (this.userCode.length > this.konamiCode.length) {
      this.userCode.shift();
    }
  }

  isSuccess () {
    if (this.userCode.length === this.konamiCode.length) {
      let result = this.userCode.filter((value, index) => {
        return this.konamiCode[index] !== value;
      });
      return result.length === 0;
    } else {
      return false;
    }
  }

  checkKeyCode (key) {
    if (!this.konamiSuccess) {
      this.userCode.push(key);
      // Trim to keep userCode to the same length from konamiCode
      this.trimUserCode();
      // Check if the konami code is validated
      if (this.isSuccess()) {
        this.konamiSuccess = true;
        try {
          this.callback();
        } catch (e) {
          throw e;
        }
      }
    }
  }

  init () {
    window.addEventListener('keyup', (e) => {
      let key = e.keyCode;
      this.checkKeyCode(key);
    });
  }
}