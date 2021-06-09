<template>
  <header class="header" :class="{ sticky }">
    <div class="container">
      <div class="left">
        <g-link to="/" aria-current="page" class="home-link active--exact active">
          <img src="/logo.svg" alt="Nichlas W. Andersen" class="logo">
        </g-link>
      </div>
      <nav class="nav right">
        <g-link to="/journal" class="nav__link">Journal</g-link>
        <g-link to="/contact" class="nav__link">Say Hi!</g-link>
      </nav>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'Header',
  mounted() {
    console.info(this.$route)
  },
  computed: {
    sticky() {
      const { path } = this.$route;
      if (path === '/contact') return false
      if (path.startsWith('/journal/')) return false
      return true
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 6rem;
  z-index: 10;

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
}

.home-link {
  text-decoration: none;
}

.logo {
  height: 1.5rem
}

.nav {
  &>* {
    font-size: .9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border .15s;

    &.active, &:hover {
      border-color: inherit
    }

    &:last-of-type {
      margin: 0;
    }
  }
}
</style>
