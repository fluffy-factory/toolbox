module.exports = {
  theme: '',
  title: ' Toolbox',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  port: 8088,
  base: '/toolbox/',
  configureWebpack: {},
  themeConfig: {
    logo: '/toolbox_full.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Scss', link: '/scss/' },
      { text: 'Javascript', link: '/javascript/' },
      { text: 'Devtools', link: '/devtools/' },
      { text: 'github', link: 'https://github.com/fluffy-factory/toolbox' },
    ],
    sidebar: {
      '/scss/': [
        {
          title: 'Components',
          collapsable: true,
          children: [
            'modules/box-message',
            'modules/buttons',
            'modules/pagination',
            'modules/grid',
            'modules/breadcrumb',
          ]
        },
        {
          title: 'Forms',
          collapsable: true,
          children: [
            'forms/',
            'forms/checkboxes-radios',
            'forms/input',
            'forms/inputfile',
          ]
        },
        {
          title: 'Tips',
          collapsable: true,
          children: [
            'tips/ie'
          ]
        }
      ],
      '/javascript/': [
        {
          title: 'Modules',
          collapsable: true,
          children: [
            'modules/foldable',
            'modules/scrollspy',
          ]
        },
        {
          title: 'Forms',
          collapsable: true,
          children: [
            'forms/materialinput',
            'forms/showpassword',
            'forms/inputfile',
            'forms/inputmedia',
          ]
        },
        {
          title: 'Utils',
          collapsable: true,
          children: [
            'utils/setRequiredFields',
            'utils/debounce',
            'utils/throttle',
          ]
        }],
        '/devtools/': [
          'iconfont/icon-font',
          'livereload/browser-sync'
        ],
        // fallback
        '/': []
    }
  }
};