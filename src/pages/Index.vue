<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">Hi there, I'm an independent Digital Designer &amp; Art Director focused on digital
          design for brands that like to have fun.</h2>
      </div>

      <Projects :projects="projects" />

    </div>
    <Latest :list="latest" />
  </Layout>
</template>

<page-query>
query {
  allProject {
    edges {
      node {
        title
        year
        color
        categories
        path
      }
    }
  }

  allJournal (limit: 4) {
    edges {
      node {
        id
        title
        desc
        author
        date
        path
      }
    }
  }
}
</page-query>

<script>
import Projects from '@/components/projects.vue';
import Latest from '@/components/latest.vue';

export default {
  name: 'IndexPage',
  metaInfo: {
    title: 'Hello, world!'
  },
  components: { Projects, Latest },
  computed: {
    projects() {
      return this.$page.allProject.edges.map(edge => edge.node)
    },
    latest() {
      return this.$page.allJournal.edges.map(edge => edge.node)
    },
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
