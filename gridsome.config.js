// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Some Blog',
  titleTemplate: '%s - Some Blog',
  siteDescription: '这是一个无聊的博客',
  plugins: [],
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
    journal: [
      {
        path: '/journal/:id',
        component: './src/templates/journal.vue',
      },
    ],
    project: [
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
