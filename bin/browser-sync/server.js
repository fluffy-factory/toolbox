const BS = require('browser-sync').create();

// configuration
let config = {
  host: 'localhost',
  port: 8000,
  open: false,
  server: './dist',
  files: ['./dist/**/*.css', './dist/**/*.js', './dist/*.html']
};

// init the server and start it
BS.init(config);
