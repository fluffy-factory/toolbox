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
For the correct operation of the custom fields, not change the location of the `HTML`.
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
For the correct operation of the custom fields, not change the location of the `HTML`.
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
For optimal operation add [MaterialInput.js](/javascript/forms/materialinput.html)
:::

## View password
<br>
<Input-Password></Input-Password>

:::tip
Work with the same design of Material and Custom input
:::

:::warning
For optimal operation add [ShowPassword.js](/javascript/forms/showpassword.html)
:::

```html
<div class="input-validate">
	<i data-view-password class="icon icon-eye"></i>
	<input type="password" id="password" name="password">
	<label for="password">Input Password</label>
</div>
```

<<< @/src/scss/components/input/_password.scss