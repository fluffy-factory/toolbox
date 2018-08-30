/**
 * Set attribute required on input file
 * @param {String} element
 * @param {Boolean} drag
 */
export class InputMedia {
  constructor(config) {
    let defaults = {
      element: null,
      drag: true
    };
    this.config = {...defaults, ...config};
    this.init();
  }

  //Get Multiple listener in one function
  static addListener(element, eventNames, listener) {
    let events = eventNames.split(' ');
    for (let i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }

  //Load image when user drop it
  static dropLoadImg($label, e) {
    $label.style.backgroundImage = null;

    let reader = new FileReader();
    reader.readAsDataURL(e.dataTransfer.files[0]);

    reader.onload = function (readEvent) {
      $label.style.backgroundImage = 'url(' + readEvent.target.result + ')';
    }
  }

  //Add and remove class on drag and drop
  static dragAndDrop($label) {
    InputMedia.addListener($label, 'drop dragover dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();

      $label.ondrop = function () {
        this.classList.remove('dragover');
        //Load image
        InputMedia.dropLoadImg(this, e);
      };

      $label.ondragover = function () {
        this.classList.add('dragover');
      };

      $label.ondragleave = function () {
        this.classList.remove('dragover');
      };
    });
  }

  init() {
    for (let element of this.config.element) {

      let $input = element.querySelector('input');
      let $label = element.querySelector('label');
      let actualImg = $label.style.backgroundImage;

      $input.addEventListener('change', function () {

        $label.style.backgroundImage = actualImg;

        //Get image of user and show this in label
        if (this.files && this.files[0]) {
          let reader = new FileReader();
          reader.onload = function (e) {
            $label.style.backgroundImage = 'url(' + e.target.result + ')';
          };
          reader.readAsDataURL(this.files[0]);
        }

      });

      // If drag config is true
      if (this.config.drag) {
        InputMedia.dragAndDrop($label);
      }

    }
  }
}