module.exports = {
  port: 8088,
  base: '/toolbox/',
  theme: '',
  title: 'Toolbox',
  configureWebpack: {},
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Scss', link: '/scss/' },
      { text: 'Javascript', link: '/javascript/' },
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
          ]
        },
      ],
      '/javascript/': [{
          title: 'Modules',
          collapsable: true,
          children: [
            'modules/foldable',
          ]
        },
        {
          title: 'Utils',
          collapsable: true,
          children: [
            'utils/setRequiredFields',
          ]
        }],
      // fallback
      '/': []
    }
  }
};