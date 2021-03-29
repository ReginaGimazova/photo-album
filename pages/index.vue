<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
import Header from '~/components/layouts/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
