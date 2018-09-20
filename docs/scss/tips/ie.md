# Media queries IE

Media queries for IE10+ and IE11

```scss
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
	/* IE10+ CSS styles go here */
}
```

or you can use mixin 

```scss
@include media-for($ie) {
	/* IE10+ CSS styles go here */
}
```

```scss
$ie: 'all and (-ms-high-contrast: none), (-ms-high-contrast: active)';

@mixin media-for($media) {
  @media #{$media} {
    @content;
  }
}
```