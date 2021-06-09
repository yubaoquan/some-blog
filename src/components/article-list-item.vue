<template>
  <g-link :to="`/journal/${id}`" class="journal-post">
    <div class="container journal">
      <h2 class="journal-title">{{ title }}</h2>
      <p class="journal-excerpt">{{ desc }}</p>
    </div>
  </g-link>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    title: String,
    desc: String,
    id: String,
  }
}
</script>

<style lang="less" scoped>
.journal {
  &.container {
    max-width: 720px;
  }
}

.journal-post {
  display: block;
  padding: 2rem 0;
  text-decoration: none;
  transition: background .5s ease;



  &:hover {
    background-color: var(--color-base-1);

    &>* {
      transform: translateX(4rem);
    }
  }

  &>* {
    transition: transform .5s ease
  }

  h1,h2 {
    margin: 0;
    padding: 0;
  }
}

.journal-title {
  font-size: 2rem;
  color: var(--color-contrast);
}

.journal-excerpt {
  color: var(--color-contrast-1);
}


@media (min-width: 560px) {
  .journal-post {
    padding:3rem 0;
  }
}

@media (min-width: 860px) {
  .journal-post {
    padding:5rem 0;
  }
}

</style>
