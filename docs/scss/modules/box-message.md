# Box messages

* [Box-message.scss](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/src/scss/components/_box-message.scss)

**Types:**  `info` `success` `warning` `error`
<Box-message type="info"></Box-message>
<Box-message type="success"></Box-message>
<Box-message type="warning"></Box-message>
<Box-message type="error"></Box-message>

```html
<div class="box-info">
	<p>Some text</p>
</div>

<div class="box-success">
	<p>Some text</p>
</div>

<div class="box-warning">
	<p>Some text</p>
</div>

<div class="box-error">
	<p>Some text</p>
</div>
```

**Extend**
```scss
$color-box-info: #3498db;
$color-box-success: #65d269;
$color-box-warning: #ff7a5a;
$color-box-error: #ff374d;

%box-info-icon {
  @extend %icon-info;
  font-family: $font-icon;
}

%box-success-icon {
  @extend %icon-check-circle;
  font-family: $font-icon;
}

%box-warning-icon {
  @extend %icon-exclamation-triangle;
  font-family: $font-icon;
}

%box-error-icon {
  @extend %icon-exclamation-triangle;
  font-family: $font-icon;
}

// (boxName, boxColor), (...)
$boxes :
  ('info', $color-box-info),
  ('success', $color-box-success),
  ('warning', $color-box-warning),
  ('error', $color-box-error);
```