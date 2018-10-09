# StickyFooter.js

* [StickyFooter.js](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/js/modules/StickyFooter.js)

## Config
```js
{
	elementSticky: document.querySelector('footer'),
	elementContainer: document.querySelector('main')
}
```

## CSS

::: warning
Don't forget to add CSS to Sticky and Container element

Container element: 
`position: relative, z-index:1`

Sticky element: 
`position: fixed, z-index:-1, left: 0, right:0, bottom:0`
:::

## Example

<StickyFooter-StickyFooter></StickyFooter-StickyFooter>