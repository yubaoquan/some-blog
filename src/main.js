// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '../static/index.css'
import Vue from 'vue'
import MarkdownIt from 'markdown-it'

const renderer = new MarkdownIt({
  html: true,
  breaks: true,
});

Vue.mixin({
  methods: {
    getHtml(markdown) {
      return renderer.render(markdown);
    },
  },
});

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
