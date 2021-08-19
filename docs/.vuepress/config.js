const { description } = require('../../package')

module.exports = {
  title: 'タイトル',
  description: description,
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'AWS',
        link: '/aws/',
      },
      {
        text: '開発',
        link: '/dev/'
      },
      {
        text: '日常',
        link: '/diary/'
      }
    ],
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
