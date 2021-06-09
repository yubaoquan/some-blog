const axios = require('axios');
const { backendBase } = require('../config/index.js');

const request = axios.create({
  baseURL: backendBase,
});

function genApi(config) {
  return () => request(config);
}

function get(url, config = {}) {
  return () => request({
    ...config,
    url,
    method: 'GET',
  });
}

function post(url, config = {}) {
  return () => request({
    ...config,
    url,
    method: 'POST',
  });
}

function del(url, config = {}) {
  return () => request({
    ...config,
    url,
    method: 'DELETE',
  });
}

function put(url, config = {}) {
  return () => request({
    ...config,
    url,
    method: 'PUT',
  });
}


exports.fetchJournals = get('/journals');
exports.fetchProjects = get('/projects')
exports.fetchIndexConfig = get('/index-config')

exports.createFeedback = config => {
  const { username, email, message } = config;

  return post('/feedbacks', {
    ...config,
    data: { username, email, message },
  })()
}
