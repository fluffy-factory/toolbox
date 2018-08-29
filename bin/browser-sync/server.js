const BS = require('browser-sync').create();

// configuration
let config = {
  host: 'localhost',
  port: 8000,
  open: false,
  server: './dist',
  files: ['./dist/**/*.css', './dist/**/*.js', './dist/*.html'],
  /* Symfony
   proxy: "http://url.test",
   files: ['./public/!**!/!*.css', './public/!**!/!*.js', './templates/!**!/!*.html.twig']
   */
};

// init the server and start it
BS.init(config);
