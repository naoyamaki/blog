const { description } = require('../../package')

module.exports = {
  title: 'nyamakiの開発日記',
  base: '/blog/',
  dest: 'docs',
  locales: {
    '/': {
      lang: 'ja',
    },
  },
  head: [
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    ["meta", { charset: "utf-8" }],
    ["meta", { property: "og:site_name", content:"nyamakiの開発日記" }],
    ["meta", { property: "og:locale", content:"ja_JP" }],
    ["meta", { property: "og:type", content:"article" }],
    ["meta", { property: "twitter:card", content:"summary_large_image" }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    lang: 'ja-JP',
    nav: [
      {
        text: '開発',
        link: '/category/dev/'
      },
      {
        text: '日常',
        link: '/category/diary/'
      }
    ],
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/markdown-it',
    [
      "@vuepress/plugin-blog",
      {
        directories: [
          {
              id: 'post',
              dirname: 'posts',
              itemPermalink: '/:slug',
          },
      ],
        frontmatters: [
          {
            id: 'category',
            keys: ['category'],
            path: '/category/',
            layout: 'Categories',
            scopeLayout: 'Category'
        },
          {
            id: "tag",
            keys: ['tags'],
            path: "/tag/",
            layout: "Tags",
            scopeLayout: "Tag"
          }
        ]
      }
    ]
  ]
}
