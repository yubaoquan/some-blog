<template>
  <div class="layout">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  components: { Header, Footer }
}
</script>

<style>
.layout {
  padding-top: 96px;
}
</style>
