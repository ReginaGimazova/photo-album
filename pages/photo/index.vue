<template>
  <div class="container">
    <PhotoItemNavigation />
  </div>
</template>

<script>
import PhotoItemNavigation from '~/components/layouts/PhotoItemNavigation.vue';

export default {
  components: {
    PhotoItemNavigation,
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: $black;
}
</style>
