# Input

Input library with classic and custom example. For use one of input you need import `varibles`, `reboot`, `resets` and `mixins` scss file.

## Classic
<br>
<Input-Classic></Input-Classic>

```html
<label for="text">Input text</label>
<input type="text" id="text" name="text" placeholder="Input text">
```

```scss
@include inputPlaceholder(font-style, italic);

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"],
input[type='datetime'],
input[type="search"],
input[type="url"] {
  @extend .input-reset;
}
```

## Custom
:::warning
For the correct operation of the custom fields, add scss of `classic input` and not change the location of the `HTML`.
:::

<br>
<Input-Custom></Input-Custom>

```html
<div class="input-container">
	<input type="text" id="text" name="text" placeholder="Input text">
	<label for="text">Input text</label>
</div>
```

```scss
.input-container {
  position: relative;

  input {
    width: 100%;
    margin-top: 15px;
    padding: 18px 15px 15px 15px;
    &:focus + label {
      transform: translateX(5px);
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 20px;
    max-width: calc(100% - 40px);
    padding: 3px 8px;
    color: white;
    background-color: $color-primary;
    font-size: $font-size-small;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: transform $duration $easeInOutCubic;
  }
}
```

## Custom version 2
<br>
<Input-Custom2></Input-Custom2>

```html
<div class="input-validate">
	<i class="icon icon-lock"></i>
	<input type="text" id="text" name="text">
	<label for="text">Input text</label>
</div>
```

```scss
$padding-left-right: 20px;
$padding-bottom: 10px;
$padding-top: 30px;

@include inputPlaceholder(font-style, italic);

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"],
input[type='datetime'],
input[type="search"],
input[type="url"] {
  @extend .input-reset;
}

.input-validate {
  position: relative;

  input {
    width: 100%;
    background-color: white;
    border: 0;
    border-radius: 5px;
    padding: $padding-top $padding-left-right $padding-bottom $padding-left-right;
    font-size: $font-size-small;
    &:focus + label,
    &[value] + label,
    &.is-valid + label {
      top: 0;
      font-size: $font-size-extra-small;
      color: $color-grey-dark;
      transform: translateY($padding-bottom);
    }
  }

  label {
    position: absolute;
    left: $padding-left-right;
    top: 50%;
    margin: 0;
    font-size: $font-size-small;
    font-weight: $font-weight-semi-bold;
    transform: translateY(-50%);
    pointer-events: none;
    transition: all $duration $easeInOutCubic;
  }

  .#{unquote($font-icon)} {
    position: absolute;
    right: $padding-left-right;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    & ~ input {
      padding-right: $padding-left-right + $font-size-base*2;
    }
  }
}
```

## View password
<br>
<Input-Password></Input-Password>

Include this JavaScript for the input verification and show password:

```js
new MaterialInput('.input-validate');
```

```js
export class MaterialInput {
  constructor(elem, className = 'is-valid', dataPassword = '[data-view-password]') {
    this.elem = document.querySelectorAll(elem);
    this.className = className;
    this.dataPassword = dataPassword;
    this.init();
  }

  //Get Multiple listener in one function
  static addListener(element, eventNames, listener) {
    let events = eventNames.split(' ');
    for (let i = 0, iLen = events.length; i < iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }

  //Check if the value input is empty
  checkIfInputIsEmpty(elem) {
    if (elem.value.length === 0) {
      elem.classList.remove(this.className);
    } else {
      elem.classList.add(this.className);
    }
  }

  togglePassword(elem) {
    if (elem.type === "password") {
      elem.type = "text";
    } else {
      elem.type = "password";
    }
  }

  hidePassword(elem) {
    if (elem.type === "text") {
      elem.type = "password";
    }
  }

  init() {

    for (let elem of this.elem) {
      let $input = elem.querySelector('input');
      let $showPasswordIcon = elem.querySelector(this.dataPassword);

      // Check validate input
      MaterialInput.addListener($input, 'focus focusout keyup', () => {
        this.checkIfInputIsEmpty($input);
      });

      // Click password icon for show content
      if ($showPasswordIcon) {
        $showPasswordIcon.addEventListener('click', () => {
          this.togglePassword($input);
        });

        document.addEventListener("click", (event) => {
          let classElem = elem.className;

          if (!event.target.closest('.'+classElem)) {
            this.hidePassword($input);
          }
        });
      }
    }
  }
}
```