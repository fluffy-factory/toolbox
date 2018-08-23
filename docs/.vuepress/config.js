module.exports = {
  port: 8080,
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