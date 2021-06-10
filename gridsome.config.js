// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const { backendBase } = require('./src/config/index.js')

module.exports = {
  siteName: 'Some Blog',
  titleTemplate: '%s - Some Blog',
  siteDescription: '这是一个无聊的博客',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: backendBase, // 这里替换成生产地址
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['project', 'journal', 'category'],
        singleTypes: ['index-config'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      },
    },
  ],
  permalinks: {
    trailingSlash: false,
  },
  templates: {
    user: [
      {
        path: '/user/:id',
        component: './src/templates/user.vue',
      },
    ],
    StrapiJournal: [
      {
        path: '/journal/:id',
        component: './src/templates/journal.vue',
      },
    ],
    StrapiProject: [
      {
        path: '/projects/:id',
        component: './src/templates/project.vue',
      },
    ],
  },
  css: {
    loaderOptions: {
      less: {},
    },
  },
}
