# Cookies

Add a cookie
```js
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
```

Get a cookie
```js
/**
 * Get Cookie's value
 * @param {string} name
 * @returns {string}
 */
export function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
}
```
