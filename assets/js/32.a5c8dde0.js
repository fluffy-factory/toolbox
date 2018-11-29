(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{291:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("ul",[s("li",[t._v("📦 "),s("a",{attrs:{href:"https://www.npmjs.com/package/webfonts-generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm package: webfont-generator"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/fluffy-factory/toolbox/tree/master/bin/iconfont",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github src"),s("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[s("a",{attrs:{href:"https://raw.githubusercontent.com/fluffy-factory/toolbox/master/bin/iconfont/iconfont.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("📄 iconfont.js"),s("OutboundLink")],1)]),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[s("a",{attrs:{href:"https://raw.githubusercontent.com/fluffy-factory/toolbox/master/bin/iconfont/template.hbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("📄 template.hbs"),s("OutboundLink")],1)]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"iconfont"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iconfont","aria-hidden":"true"}},[this._v("#")]),this._v(" 🍖 Iconfont")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i -D webfonts-generator\nyarn add -D webfonts-generator\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Package.json")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"iconfont"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"node bin/iconfont/iconfont.js"')]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Run command")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" run iconfont\nyarn iconfont\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"folder-structure-for-the-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure-for-the-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Folder structure for the example")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v(".\n├─ assets/\n│  ├─ icons\n│  │  ├─ icon-1.svg\n│  │  └─ ...\n│  ├─ src/\n│  │  ├─ scss/\n│  │  │  ├─ typography\n│  │  │  │  └─ _iconfont.scss\n├─ └─ └─ └─ ...\n├─ bin/\n│  ├─ iconfont/\n│  │  ├─ iconfont.js // Config file to generate\n│  └─ └─ template.hbs\n...\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Config file")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("/*---- config ------------------------------------------*/")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dir"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'src/icons'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Where icons are")]),t._v("\n  filesType"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'.svg'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    scss"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'src/scss/typography/_iconfont.scss'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dir"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'path/to/public/fonts/'")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fontName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'icon'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  baseSelector"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'.icon'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  classPrefix"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'.icon-'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"template-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Template file")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-handlebars extra-class"},[s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[t._v('@font-face {\n  font-family: "'),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token variable"}},[t._v("fontName")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v('";\n  src: '),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{{")]),s("span",{attrs:{class:"token variable"}},[t._v("src")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}}")])]),t._v(";\n}\n\n@if not variable-exists('webfont-icons') {\n  $webfont-icons: () !global;\n}\n\n$webfont-icons: map-merge($webfont-icons, (\n  "),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token block keyword"}},[t._v("#each")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("codepoints")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n     '"),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("@")]),s("span",{attrs:{class:"token variable"}},[t._v("key")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("': ('"),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v("/")]),s("span",{attrs:{class:"token variable"}},[t._v("fontName")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("' '\\\\"),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token variable"}},[t._v("this")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("'),\n  "),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token block keyword"}},[t._v("/each")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v('\n));\n\n@mixin webfont-icon($name) {\n  line-height: 1;\n  $icon: map-get($webfont-icons, $name);\n  &:before {\n     font-family: nth($icon, 1);\n     font-style: normal;\n     font-weight: normal;\n     vertical-align: bottom;\n     content: nth($icon, 2);\n  }\n}\n\n.icon {\n  font-family: "'),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token variable"}},[t._v("fontName")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v('";\n  vertical-align: bottom;\n}\n\n.'),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token variable"}},[t._v("classPrefix")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v(":before {\n  font-family: "),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token variable"}},[t._v("fontName")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v(";\n  font-style: normal;\n  font-weight: normal;\n  vertical-align: bottom;\n}\n\n"),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token block keyword"}},[t._v("#each")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("codepoints")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n  ."),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v("/")]),s("span",{attrs:{class:"token variable"}},[t._v("classPrefix")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("@")]),s("span",{attrs:{class:"token variable"}},[t._v("key")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v(':before {\n     content: "\\\\'),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token variable"}},[t._v("this")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v('";\n     vertical-align: bottom;\n  }\n  // To extend just the codepoint if you need it\n  %'),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token punctuation"}},[t._v("/")]),s("span",{attrs:{class:"token variable"}},[t._v("classPrefix")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("@")]),s("span",{attrs:{class:"token variable"}},[t._v("key")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v(' {\n     content: "\\\\'),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token variable"}},[t._v("this")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v('";\n  }\n'),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token block keyword"}},[t._v("/each")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"use-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-case","aria-hidden":"true"}},[this._v("#")]),this._v(" Use case")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("HTML way to use the iconfont: "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon icon-name"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v(".my-btn ")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("@extend")]),t._v(" .icon"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("@extend")]),t._v(" .icon-name"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// :before")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// But if i need it in :after")]),t._v("\n"),s("span",{attrs:{class:"token selector"}},[t._v(".my-btn ")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("@extend")]),t._v(" .icon"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token selector"}},[s("span",{attrs:{class:"token parent important"}},[t._v("&")]),t._v(":after ")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("@extend")]),t._v(" "),s("span",{attrs:{class:"token placeholder selector"}},[t._v("%icon-name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// content property")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v("vertical-align")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"add-icons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-icons","aria-hidden":"true"}},[this._v("#")]),this._v(" Add icons")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To add more icons put them all in the right folder see "),a("a",{attrs:{href:"#folder-structure-for-the-example"}},[this._v("folder structure")])])}],!1,null,null,null);a.default=e.exports}}]);