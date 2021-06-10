import axios from 'axios';
import { backendBase } from '@/config/index.js';

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


export const fetchJournals = get('/journals');
export const fetchProjects = get('/projects')
export const fetchIndexConfig = get('/index-config')

export const createFeedback = config => {
  const { username, email, message } = config;

  return post('/feedbacks', {
    ...config,
    data: { username, email, message },
  })()
}
