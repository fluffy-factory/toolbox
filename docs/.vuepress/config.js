module.exports = {
  port: 8088,
  base: '/toolbox/',
  theme: '',
  configureWebpack: {
  },
  themeConfig: {
    navbar: false,
    sidebar: [
      {
        title: 'Components',
        collapsable: true,
        children: [
          '/modules/box-message',
          '/modules/buttons',
          '/modules/pagination',
          '/modules/grid',
          '/modules/breadcrumb',
        ]
      },
      {
        title: 'Forms',
        collapsable: true,
        children: [
          '/forms/',
          '/forms/checkboxes-radios',
          '/forms/input',
        ]
      }
    ]
  }
};