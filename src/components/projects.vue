<template>
  <div class="projects">
    <div
      class="project"
      v-for="project in projects"
      :key="project.id"
    >
      <g-link :to="`/projects/${project.id}`" class="project-link">
        <g-image :src="backendBase + project.img.url" class="thumbnail" />
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="categories">
          <span
            class="category"
            v-for="category in project.categories"
            :key="category.id"
          >{{ category.title }}</span>
        </div>
      </g-link>
    </div>
  </div>
</template>

<script>
import { backendBase } from '@/config/index.js';

export default {
  name: 'Projects',
  props: {
    projects: Array,
  },
  data() {
    return {
      backendBase,
    }
  },
}
</script>

<style lang="less" scoped>

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem
}

.project {
  grid-column: auto/span 2;
  text-align: center
}

.project-link {
  text-decoration: none
}

.thumbnail {
  height: 560px;
  -o-object-fit: cover;
  object-fit: cover;
  transition: all .15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,.25)
}

.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem
}

.categories {
  font-size: .8rem;
  color: var(--color-contrast-1)
}

.category {
  margin-right: .8rem
}

.category:last-of-type {
  margin: 0
}

.project:hover .thumbnail {
  transform: scale(1.02);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,.25)
}

@media (min-width: 920px) {
  .project {
    grid-column:auto/span 1
  }

  .project:nth-child(3n+1) {
    grid-column: auto/span 2
  }
}

</style>
