# Breadcrumb

* [breadcrumb.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/components/_breadcrumb.scss)

## Html structure

```html
<nav class="nav-breadcrumb">
	<ol class="breadcrumb">
		<li><a href="">Home</a></li>
		<li><a href="">Vehicles</a></li>
		<li><a href="">Voitures</a></li>
		<li><a href="">Cars</a></li>
		<li><a href="">Model</a></li>
		<li><a href="">Audi</a></li>
		<li aria-current="page"><span>A5</span></li>
	</ol>
</nav>
```

<Breadcrumb></Breadcrumb>

## Extend

```scss
$breadcrumb-bg-color: #eeeeee;

%breadcrumb-icon {
  @extend %icon-chevron-right;
}
```