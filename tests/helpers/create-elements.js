export function createOnceElement(nodeType) {
  return document.createElement(nodeType);
}

export function createLinks (n, hrefPrefix) {
  let links = [];

  for (let i = 0; i < n; i++) {
    let link = document.createElement('a');
    link.setAttribute('href', '' + hrefPrefix + '' + i);
    document.body.appendChild(link);
    links.push(link);
  }

  return links;
}

export function createTargets(n, idPrefix) {
  for (let i = 0; i < n; i++) {
    let target = document.createElement('div');
    target.setAttribute('id', '' + idPrefix +'' + i);
    target.classList.add('target');
    document.body.appendChild(target);
  }
}