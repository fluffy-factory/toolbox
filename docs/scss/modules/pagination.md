# Pagination

## Html structure
```html
<div class="pagination_wrapper">
	<ul class="pagination">
		<li class="first"><a href=""></a></li>
		<li class="prev"><a href=""></a></li>
		<li><a href="">2</a></li>
		<li><span class="is-active">3</span></li>
		<li><a href="">4</a></li>
		<li class="next"><a href=""></a></li>
		<li class="last"><a href=""></a></li>
	</ul>
</div>
```

## Classic

* [Pagination-classic.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/components/pagination/_pagination-classic.scss)

<PaginationClassic></PaginationClassic>

### Extend

```scss
$pagination-margin-top: 20px;

$pagination-color-base: #949494;
$pagination-color-active: #ffffff;
$pagination-color-hover: #6266cb;
$pagination-bg-color-base: #e7e7e7;
$pagination-bg-color-active: #6266cb;
$pagination-bg-color-hover: #d3eeff;
```

## Custom

* [Pagination-custom.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/components/pagination/_pagination-custom.scss)

<PaginationCustom></PaginationCustom>

### Extend

```scss
$pagination-margin-top: 20px;

$pagination-color-base: $color-black-text;
$pagination-color-active: #ffffff;
$pagination-color-hover: $color-primary;

$icon-collection: ('first', 'prev', 'next', 'last');

%pagination-icon-first {
  @extend %icon-chevron-left-double;
}

%pagination-icon-prev {
  @extend %icon-chevron-left;
}

%pagination-icon-next {
  @extend %icon-chevron-right;
}

%pagination-icon-last {
  @extend %icon-chevron-right-double;
}
```