/**
 * Set attribute required on input elements
 * @param {String} element
 * @param {String} data
 */
export function inputFile(element, data = 'data-multiple-caption') {

  let $element = document.querySelectorAll(element);
  init($element);

  function init(elements) {
    for (let element of elements) {

      let $input = element.querySelector('input');
      let $label = element.querySelector('label');
      let labelHtml = $label.innerHTML;

      $input.addEventListener('change', function (e) {

        let fileName = '';

        if(this.files && this.files.length > 1) {
          fileName = ( this.getAttribute(data) || '').replace( '{count}', this.files.length );
        } else {
          fileName = e.target.value.split( '\\' ).pop();
        }

        if(fileName) {
          $label.querySelector('span').innerHTML = fileName;
        } else {
          $label.innerHTML = labelHtml;
        }

      });

    }
  }

}