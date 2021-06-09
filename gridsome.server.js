// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const fs = require('fs')
const path = require('path')

async function loadUsers(addCollection) {
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  const collection = addCollection('user')

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  data.forEach((item) => {
    collection.addNode(item)
  })
}

function loadList(addCollection, { collectionName, fileName }) {
  const collection = addCollection(collectionName)
  const filePath = path.resolve(__dirname, `./src/data/${fileName}`)
  const json = fs.readFileSync(filePath, 'utf-8')
  const list = JSON.parse(json)
  list.forEach(item => collection.addNode(item))
}

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    await loadUsers(addCollection)
    loadList(addCollection, { collectionName: 'journal', fileName: 'journals.json' })
    loadList(addCollection, { collectionName: 'project', fileName: 'projects.json' })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/ppp',
      component: './src/pages/alias.vue'
    })

    createPage({
      path: '/journal',
      component: './src/pages/journals.vue',
    })
  })
}
