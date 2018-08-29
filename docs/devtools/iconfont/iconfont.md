# :meat_on_bone: Iconfont

- :package: [npm package: webfont-generator](https://www.npmjs.com/package/webfonts-generator)
- [Github src](https://github.com/fluffy-factory/toolbox/tree/master/bin/iconfont)

## Setup
```bash
npm i -D webfonts-generator
yarn add -D webfonts-generator
```
**Package.json**
```json
{
  "iconfont": "node bin/iconfont/iconfont.js"
}
```
**Run command**
```bash
npm run iconfont
yarn iconfont
```

## Folder structure for the example
```
.
├─ assets/
│  ├─ icons
│  │  ├─ icon-1.svg
│  │  └─ ...
│  ├─ src/
│  │  ├─ scss/
│  │  │  ├─ typography
│  │  │  │  └─ _iconfont.scss
├─ └─ └─ └─ ...
├─ bin/
│  ├─ iconfont/
│  │  ├─ iconfont.js // Config file to generate
│  └─ └─ template.hbs
...
```

## Config file

[:page_facing_up: iconfont.js](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/bin/iconfont/iconfont.js)

```js
// ...

/*---- config ------------------------------------------*/
const config = {
  dir: 'src/icons', // Where icons are
  filesType: '.svg',
  output: {
    scss: 'src/scss/typography/_iconfont.scss',
    dir: 'path/to/public/fonts/'
  },
  fontName: 'icon',
  baseSelector: '.icon',
  classPrefix: '.icon-',
};

// ...
```

## Template file

[:page_facing_up: template.hbs](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/bin/iconfont/template.hbs)

```handlebars
@font-face {
  font-family: "{{fontName}}";
  src: {{{src}}};
}

@if not variable-exists('webfont-icons') {
  $webfont-icons: () !global;
}

$webfont-icons: map-merge($webfont-icons, (
  {{#each codepoints}}
     '{{@key}}': ('{{../fontName}}' '\\{{this}}'),
  {{/each}}
));

@mixin webfont-icon($name) {
  line-height: 1;
  $icon: map-get($webfont-icons, $name);
  &:before {
     font-family: nth($icon, 1);
     font-style: normal;
     font-weight: normal;
     vertical-align: bottom;
     content: nth($icon, 2);
  }
}

.icon {
  font-family: "{{fontName}}";
  vertical-align: bottom;
}

.{{classPrefix}}:before {
  font-family: {{fontName}};
  font-style: normal;
  font-weight: normal;
  vertical-align: bottom;
}

{{#each codepoints}}
  .{{../classPrefix}}{{@key}}:before {
     content: "\\{{this}}";
     vertical-align: bottom;
  }
  // To extend just the codepoint if you need it
  %{{../classPrefix}}{{@key}} {
     content: "\\{{this}}";
  }
{{/each}}
```

## Use case

```html
<p>HTML way to use the iconfont: <i class="icon icon-name"></i></p>
```
```scss
.my-btn {
  @extend .icon;
  @extend .icon-name; // :before
}

// But if i need it in :after
.my-btn {
  @extend .icon;
  &:after {
    @extend %icon-name; // content property
    vertical-align: middle;
    // ...
  }
}
```