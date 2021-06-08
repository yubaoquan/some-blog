<template>
  <header class="header sticky">
    <div class="container">
      <div class="left">
        <a href="/" aria-current="page" class="home-link active--exact active">
        <img src="/logo.svg" alt="Nichlas W. Andersen" class="logo">
        </a>
      </div>
      <nav class="nav right">
        <a href="/journal" class="nav__link">Journal</a>
        <a href="/contact" class="nav__link">Say Hi!</a>
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

}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  height: 96px;
  z-index: 10;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 96px;
  }

  .logo {
    width: 60px;
    height: 24px;
  }
}
</style>
