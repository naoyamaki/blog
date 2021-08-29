const { description } = require('../../package')

module.exports = {
  title: 'nyamakiの開発日記',
  description: description,
  locales: {
    '/': {
      lang: 'ja',
    },
  },
  head: [
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    lang: 'ja-JP',
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
    '@vuepress/markdown-it',
  ]
}
