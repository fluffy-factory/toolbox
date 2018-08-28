/**
 * Set attribute required on input elements
 * @param {String} element
 * @param {String} data
 */
export function showPassword(element, data = '[data-view-password]') {

  let $element = document.querySelectorAll(element);
  init($element, data);

  function password(elem, action) {
    if (action === 'hide') {

      elem.type = 'password';

    } else if (action === 'show') {

      elem.type = 'text';

    } else {

      if (elem.type === 'password') {
        elem.type = 'text';
      } else {
        elem.type = 'password';
      }

    }
  }

  function init(element, data) {
    for (let elem of element) {
      let $input = elem.querySelector('input');
      let $showPasswordIcon = elem.querySelector(data);

      // Click password icon for show content
      if ($showPasswordIcon) {
        $showPasswordIcon.addEventListener('click', () => {
          password($input);
        });

        document.addEventListener('click', (event) => {
          let classElem = elem.className;

          // If target is not element: hide password
          if (!event.target.closest('.' + classElem)) {
            password($input, 'hide');
          }
        });
      }
    }
  }
}