<template>
  <Layout>
    <div class="container">
      <div  class="journal-hero">
        <h1 class="journal-header">a wise person once said...</h1>
      </div>
    </div>

    <!-- article list -->
    <ArticleListItem
      v-for="article in articles"
      :key="article.id"
      :title="article.title"
      :id="article.id"
      :desc="article.desc"
    />
  </Layout>
</template>

<page-query>
query {
  allJournal {
    edges {
      node {
        id
        title
        desc
      }
    }
  }
}
</page-query>

<script>
import ArticleListItem from '@/components/article-list-item.vue';

export default {
  name: 'JournalPage',
  components: { ArticleListItem },
  computed: {
    articles() {
      return this.$page.allJournal.edges.map(edge => edge.node)
    },
  },
}
</script>

<style lang="less" scoped>
.journal-hero {
  padding: 4rem 0;
  text-align: center;
  color: var(--color-base-1)
}

.journal-header {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0
}
</style>
