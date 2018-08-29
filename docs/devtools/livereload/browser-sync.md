# :zap: Livereload

- :package: [npm package: browser-sync](https://www.npmjs.com/package/browser-sync)
- [Github src](https://github.com/fluffy-factory/toolbox/tree/master/bin/browser-sync)

## Setup
```bash
npm i -D browser-sync
yarn add -D browser-sync
```
**Package.json**
```json
{
  "livereload": "node bin/browser-sync"
}
```
**Run command**
```bash
npm run livereload
yarn livereload
```

## Folder structure for the example
```
.
├─ bin/
│  ├─ browser-sync/
│  └─ └─ index.js
...
```

## Config file
[:page_facing_up: server.js](https://raw.githubusercontent.com/fluffy-factory/toolbox/master/bin/browser-sync/server.js)  
See the [documentation](https://browsersync.io/docs) to have more options  


```js
// ...

// configuration
let config = {
  host: 'localhost',
  port: 8000,
  open: false,
  server: './dist',
  files: ['./dist/**/*.css', './dist/**/*.js', './dist/*.html'],
};

/* Symfony add ['proxy'] but delete ['server']
 proxy: "http://url.test",
 files: ['./public/!**!/!*.css', './public/!**!/!*.js', './templates/!**!/!*.html.twig']
 */

// init the server and start it
BS.init(config);

// ...
```