<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{ journal.title }}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">{{ journal.author }}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{ journal.date }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ journal.time }}</span>
            </div>
          </div>
        </div>
        <div class="journal-content" v-html="journal.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  journal  (id: $id) {
    title
    author
    date
    time
    content
  }
}
</page-query>

<script>
export default {
  name: 'JournalDetail',
  computed: {
    journal() {
      return this.$page.journal;
    },
  },
}
</script>

<style lang="less" scoped>
.journal-container {
  max-width: 840px;
}

.journal-header {
  padding: 2rem 0 4rem;
}

.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}

.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: .8rem;
}

.journal-meta>div {
  margin-right: 4rem;

  &:last-of-type {
    margin: 0
  }
}
</style>
