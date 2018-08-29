# Checkboxes and Radios

* [Checkbox.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/components/_checkbox.scss)
* [Radio.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/components/_radio.scss)

## Checkbox
<Checkbox></Checkbox>
 ```html
<input type="checkbox" id="miamolex" name="cats">
<label for="miamolex">Miamolex</label>

<!-- disabled -->
<input type="checkbox" id="disabled" name="cats" disabled>
<label for="disabled">disabled</label>
```

```scss
// Checkboxes
%checkbox-icon-initial {
  content: '•';
}

// Use with a font icon 
%checkbox-icon-checked {
  @extend %icon-check;
  font-family: $font-icon;
}

%checkbox-icon-disabled {
  content: '•';
}

// Hide the input
input[type="checkbox"] {
  display: none;
}
```

## Radio
<Radio></Radio>
 ```html
<input type="radio" id="piapolex" name="cats">
<label for="piapolex">Piapolex</label>

<!-- disabled -->
<input type="radio" id="disabled2" name="cats" disabled>
<label for="disabled2">disabled</label>
```

## Extend
You can extend the content property to use a custom font.

```scss
// Radios
%radio-icon-initial {
  @extend %icon-point;
  font-family: $font-icon;
}

%radio-icon-checked {
  @extend %icon-point;
  font-family: $font-icon;
}

%radio-icon-disabled {
  @extend %icon-point;
  font-family: $font-icon;
}

// Hide the input
input[type="radio"] {
  display: none;
}
```
