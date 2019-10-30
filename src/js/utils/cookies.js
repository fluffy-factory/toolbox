/**
 * Add Cookie
 * @param {string} name
 * @param {string} value
 * @param {string} path
 * @param {boolean} secure
 */
export function setCookie(name, value, path ='/', secure) {
  var expireDate = new Date();
  expireDate.setMonth(expireDate.getMonth() + 12);
  var _nameValue = name + '=' + value + '; ';
  var _date = 'expires=' + expireDate.toUTCString() + '; ';
  var _path = 'path=' + path + '; ';
  var _secure = secure ? ' secure;' : '';
  document.cookie = _nameValue + _date + _path + _secure;
}
