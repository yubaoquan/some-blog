<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">{{ project.title }}</h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">Categories</span>
                <span class="category" v-for="category in project.categories" :key="category.id">{{ category.title }}</span>
              </div>
            </div>
            <div class="year-container">
              <span class="label">Year</span>
              <div>{{ project.year }}</div>
            </div>
          </div>
        </div>
        <div class="content" v-html="getHtml(project.content)"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  project: strapiProject  (id: $id) {
    title
    year
    color
    categories {
      id
      title
    }
    author
    content
  }
}
</page-query>

<script>
export default {
  name: 'ProjectDetailPage',
  computed: {
    project() {
      return this.$page.project;
    },
  },
}
</script>

<style lang="less" scoped>
.project-header {
  padding: 20vh 0 4rem;
}

.project-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}

.project-info {
  display: flex;
  flex-wrap: wrap;
  font-size: .8rem;
}

.project-info>div {
  margin-right: 4rem;
}

.project-info>div:last-of-type {
  margin: 0;
}

.category:after {
  content: ", ";
}

.category:last-of-type:after {
  content: "";
}
</style>
