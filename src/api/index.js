const axios = require('axios');

const request = axios.create({
  baseURL: 'http://localhost:1337',
});

function genApi(config) {
  return () => request(config);
}

function get(config) {
  config.method = 'GET';
  return () => request(config);
}

function post(config) {
  config.method = 'POST';
  return () => request(config);
}

function del(config) {
  config.method = 'DELETE';
  return () => request(config);
}

function put(config) {
  config.method = 'PUT';
  return () => request(config);
}


exports.fetchJournals = get({
  url: `/journals`,
});

exports.fetchProjects = get({
  url: '/projects',
})

exports.fetchIndexConfig = get({
  url: '/index-config'
})
