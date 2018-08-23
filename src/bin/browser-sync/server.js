const BS = require('browser-sync').create();

// configuration
let config = {
  host: 'localhost',
  port: 8000,
  open: false,
  proxy: "http://url.test", // todo : Mettre la bonne URL
  serveStatic: ['./public'],
  files: ['./public/**/*.css', './public/**/*.js', './templates/**/*.html.twig']
};

// init the server and start it
BS.init(config);
