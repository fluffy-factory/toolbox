# Grid 

A flexbox grid system with some helper classes for `alignment`, `space distribution` ...  
 - [grid.scss](https://github.com/fluffy-factory/toolbox/blob/master/src/scss/layout/_grid.scss)
 - [See IE bugs](https://github.com/philipwalton/flexbugs)


## Base 
Arguments defaults:
 - **$gridSelector:** `` string 'grid' ``
 - **$colSelector:** `` string 'col' ``
 - **$columns:** `` number 12 ``
 - **$gutter:** `` css value 20px ``
 - **$breakpoints:** `` list () ``

<br/>
<Grid-base></Grid-base>

```html
<div class="grid-collapse">
	<div class="col-s-7">
		<div>...</div>
	</div>
	<div class="col-s-5">
		<div>...</div>
	</div>
</div>
```

```scss
// Breakpoints list
$grid-breakpoints: (
	('-s', $screen-s),
	('-m', $screen-m),
	('-l', $screen-l),
	('-ml', $screen-ml)
);

@include generateGrid('grid', 'col', 12, 20px, $grid-breakpoints);
```

<br/>


## Nested
<br/>
<Grid-nested></Grid-nested>

```html
<div class="grid-collapse">
	<div class="col-s-12">
		<div>
			<div class="grid grid-collapse">
				<div class="col-s-7">
					<div>...</div>
				</div>
				<div class="col-s-5">
					<div>...</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

<br/>

## Alignments
Use **align-items**: `flex-start`, `center`, `flex-end` ...
<br/>
<br/>
<Grid-align></Grid-align>

## Distributions
Use **justify-content**: `space-around`, `center`, `space-between` ...
<br/>
<br/>
<Grid-distribution></Grid-distribution>