# Input

## Classic
<br>
<Input-Classic></Input-Classic>

```html
<label for="text">Input text</label>
<input type="text" id="text" name="text" placeholder="Input text">
```

<<< @/src/scss/components/input/_classic.scss

## Custom
:::warning
These custom fields require the same HTML structure to work properly.
:::

<br>
<Input-Custom></Input-Custom>

```html
<div class="input-container">
	<input type="text" id="text" name="text" placeholder="Input text">
	<label for="text">Input text</label>
</div>
```

<<< @/src/scss/components/input/_custom.scss

## Material
:::warning
These custom fields require the same HTML structure to work properly.
:::

<br>
<Input-Material></Input-Material>

```html
<div class="input-validate">
	<i class="icon icon-lock"></i>
	<input type="text" id="text" name="text">
	<label for="text">Input text</label>
</div>
```

<<< @/src/scss/components/input/_material.scss

:::warning
To have the best results, add [MaterialInput.js](/javascript/forms/materialinput.html)
:::

## View password
<br>
<Input-Password></Input-Password>

:::tip
Works with the same design of Material and Custom input
:::

:::warning
To have the best results, add [ShowPassword.js](/javascript/forms/showpassword.html)
:::

```html
<div class="input-validate">
	<i data-view-password class="icon icon-eye"></i>
	<input type="password" id="password" name="password">
	<label for="password">Input Password</label>
</div>
```

<<< @/src/scss/components/input/_password.scss