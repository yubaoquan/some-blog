<template>
  <div>
    <div class="latest-journals-heading container">
      <span class="label">Latest and greatest</span>
    </div>
    <div class="latest-journals">
      <div class="container">
        <g-link :to="`/journal/${item.id}`" class="journal" v-for="item in list" :key="item.id">
          <h3 class="journal-title" @click="foo(item)">{{ item.title }}</h3>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestAndGreatest',
  props: {
    list: Array,
  },
  methods: {
    foo(item) {
      console.info(item)
    }
  }
}
</script>

<style lang="less" scoped>
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);

    &>.container {
      display: flex;
      flex-wrap: wrap;
    }

    &-heading {
      margin-top: 6rem;
      margin-bottom: 1rem;
      font-size: .6rem;
      font-weight: 400;
      text-transform: uppercase;
    }
}

.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background .25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);

  &:last-of-type {
    border-bottom: 0;
  }

  &:hover {
    background: var(--color-base-1);
  }

  &-title {
    font-size: 1rem;
    line-height: 1.35;
  }
}



@media (min-width: 580px) {
  .journal {
    flex:0 0 50%;

    &:first-child {
      border-right: 1px solid var(--color-base-1);
    }

    &:first-child,
    &:nth-child(2) {
      border-bottom: 1px solid var(--color-base-1);
    }

    &:nth-child(3) {
      border-right: 1px solid var(--color-base-1);
      border-bottom: 0;
    }
  }
}

@media (min-width: 920px) {
  .journal {
    flex:0 0 25%;

    &:first-child,
    &:nth-child(2),
    &:nth-child(3) {
      border: 0;
      border-right: 1px solid var(--color-base-1);
    }
  }


  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
}

</style>
