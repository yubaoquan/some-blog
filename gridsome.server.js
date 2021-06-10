// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { pick } = require('lodash')
const { backendBase } = require('./src/config/index.js')

let addCollection

async function loadUsers() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  createCollection('user', data)
}


function createCollection(name, list) {
  const collection = addCollection(name)
  list.forEach(item => collection.addNode(item))
}

module.exports = function (api) {
  api.loadSource(async (ctx) => {
    addCollection = ctx.addCollection
    await loadUsers()
  })

  api.createPages(({ createPage }) => {
    createPage({
      path: '/journal',
      component: './src/pages/journals.vue',
    })
  })
}
