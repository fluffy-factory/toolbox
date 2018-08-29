/*
* Use webfonts-generator
* */

const webfontsGenerator = require('webfonts-generator');
const fs = require('fs');
const path = require('path');

/*---- config -----------------------------------------------------------------------*/
const config = {
  dir: 'src/icons',
  filesType: '.svg',
  output: {
    scss: 'src/scss/typography/_iconfont.scss',
    dir: './docs/.vuepress/public/fonts'
  },
  fontName: 'icon',
  baseSelector: '.icon',
  classPrefix: '.icon-',
};

/*---- Process -----------------------------------------------------------------------*/

function getFileType(file, fileExt) {
  return path.extname(file) === fileExt;
}

function fileIsHidden(file) {
  return file.substr(0, 1) === '.';
}

function getAllFiles() {
  let files = fs.readdirSync(config.dir);
  files = files.filter((file) => {
    if (!fileIsHidden(file) && getFileType(file, config.filesType)) {
      return file;
    }
  });
  files = files.map((file) => {
    return `${config.dir}/${file}`;
  });
  return files;
}

const iconsFiles = getAllFiles();

/*---- Generate -----------------------------------------------------------------------*/
webfontsGenerator({
  fontName: config.fontName,
  files: iconsFiles,
  types: ['eot', 'woff', 'ttf', 'svg'],
  dest: config.output.dir,
  cssFontsUrl: '/toolbox/fonts/',
  cssTemplate: 'bin/iconfont/template.hbs',
  cssDest: config.output.scss,
  html: false,
  templateOption: {
    baseSelector: config.baseSelector,
    classPrefix: config.classPrefix,
  }
}, function(error) {
  if (error) {
    let msg = `
   ------------------------------------------
    ERROR :(
   ------------------------------------------
  `;
    console.log(msg, error);
  } else {
    let msg = `
   ------------------------------------------
    Iconfont success \\o/
   ------------------------------------------
  `;
    console.log(msg);
  }
});

