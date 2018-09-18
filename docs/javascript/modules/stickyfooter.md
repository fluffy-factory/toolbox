# StickyFooter.js

* [StickyFooter.js](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/js/modules/StickyFooter.js)

**Config:**
```js
elementSticky: document.querySelectorAll('footer')[0],
elementContainer: document.querySelectorAll('main')[0],
css: {
	elementSticky: {
		position: 'fixed',
		zIndex: -1,
		left: 0,
		right: 0,
		bottom: 0
	},
	elementContainer: {
		position: 'relative',
		zIndex: 1,
		background: 'white'
	}
}
```