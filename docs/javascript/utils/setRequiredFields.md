# setRequiredFields

Set some required fields to required or not.  
For [example](../modules/foldable.html#change-event) is usefull when you must show many fields when you checked a checkbox in a form.

```js
/**
 * Set attribute required on form elements
 * @param {String} labels
 * @param {Boolean} require
 */
export function setRequiredFields (labels, require) {
  [...labels].forEach((label) => {
    let target = label.getAttribute('for');
    document.getElementById(target).required = require;
  });
}
```