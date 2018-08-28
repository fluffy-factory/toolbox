/**
 * Set attribute required on form elements
 * @param {String} labels
 * @param {Boolean} required
 */
export function setRequiredFields (labels, required) {
  [...labels].forEach((label) => {
    let target = label.getAttribute('for');
    document.getElementById(target).required = required;
  });
}