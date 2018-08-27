# Buttons
<Buttons-btn></Buttons-btn>

```html
<!-- link -->
<a href="#" class="btn-primary">button primary</a>
<a href="#" class="btn-primary disabled">button primary</a>

<!-- button -->
<button class="btn-primary" type="button">button primary</button>
<button class="btn-primary" type="button" disabled>button primary</button>

<!-- input type button disabled -->
<input class="btn-primary" type="button" disabled value="input button primary">
```

# Animation
Each letter must be in a `<span> tag`  
<br>
<Buttons-btn-animation></Buttons-btn-animation>

```html
<a href="#" class="btn-animation">
	<div>
		<span>B</span><span>t</span><span>n</span>
		...
	</div>
	<div>
		<span>B</span><span>t</span><span>n</span>
		...
	</div>
</a>
```

```twig
{# Twig example #}
{% set words = 'Btn animation'|trim|split(' ') %}
{% for letter in words %}
		<span>{{ letter }}</span>
{% endfor %}
```

# Buttons wrapper
<br/>
<Buttons-btn-wrapper></Buttons-btn-wrapper>

```html
<!-- collapse to each side -->
<div class="buttons_wrapper collapse">
	<a href="#" class="btn-secondary">button secondary</a>
	<a href="#" class="btn-primary">button primary</a>
</div>

<!-- align center -->
<div class="buttons_wrapper right">
	<a href="#" class="btn-secondary">button secondary</a>
	<a href="#" class="btn-primary">button primary</a>
</div>

<!-- align right -->
<div class="buttons_wrapper center">
	<a href="#" class="btn-secondary">button secondary</a>
	<a href="#" class="btn-primary">button primary</a>
</div>

<!-- align left -->
<div class="buttons_wrapper">
	<a href="#" class="btn-secondary">button secondary</a>
	<a href="#" class="btn-primary">button primary</a>
</div>
```