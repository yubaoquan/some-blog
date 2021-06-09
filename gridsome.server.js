// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { fetchIndexConfig, fetchJournals, fetchProjects } = require('./src/api/index.js');
const { pick } = require('lodash')
const dbUrl = 'http://localhost:1337'

let addCollection

async function loadUsers() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  createCollection('user', data)
}

async function loadIndexConfig() {
  try {
    const { data } = await fetchIndexConfig()
    const collection = addCollection('indexConfig')
    collection.addNode(pick(data, ['title', 'description']))
  } catch (e) {
    console.error(e);
  }
}

async function loadJournals() {
  try {
    const { data } = await fetchJournals()
    createCollection('journal', data)
  } catch (e) {
    console.error(e);
  }
}

async function loadProjects() {
  try {
    const { data } = await fetchProjects()
    const projects = data.map(item => {
      const project = pick(item, [
        'id',
        'title',
        'color',
        'content',
        'author',
        'year',
      ])
      project.categories = item.categories.map(item => item.title)
      project.img = dbUrl + item.img.url
      return project
    })

    createCollection('project', projects)
  } catch (e) {
    console.error(e);
  }
}

function loadListFromFile({ name, fileName }) {
  const filePath = path.resolve(__dirname, `./src/data/${fileName}`)
  const json = fs.readFileSync(filePath, 'utf-8')
  createCollection(name, JSON.parse(json))
}

function createCollection(name, list) {
  const collection = addCollection(name)
  list.forEach(item => collection.addNode(item))
}

module.exports = function (api) {
  api.loadSource(async (ctx) => {
    addCollection = ctx.addCollection
    await loadUsers()
    await Promise.all([loadIndexConfig(), loadJournals(), loadProjects()])
    // loadListFromFile({ name: 'journal', fileName: 'journals.json' })
    // loadListFromFile({ name: 'project', fileName: 'projects.json' })
  })

  api.createPages(({ createPage }) => {
    createPage({
      path: '/journal',
      component: './src/pages/journals.vue',
    })
  })
}
