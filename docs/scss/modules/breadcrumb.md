# Breadcrumb

Classic breadcrumb example. For use this you need import :
* [variables.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/utils/_variables.scss)
* [reboot.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/utils/_reboot.scss)
* [resets.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/utils/_resets.scss)
* [mixins.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/utils/_mixins.scss)
* [iconfont.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/typography/_iconfont.scss)

<br>

<Breadcrumb></Breadcrumb>

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

<<< @/src/scss/components/_breadcrumb.scss