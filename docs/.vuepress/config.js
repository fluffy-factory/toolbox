module.exports = {
  port: 8088,
  base: '/toolbox/',
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
        ]
      },
      {
        title: 'Forms',
        collapsable: true,
        children: [
          '/forms/',
          '/forms/checkboxes-radios'
        ]
      },
    ]
  }
};