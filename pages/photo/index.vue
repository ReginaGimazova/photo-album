<template>
  <div class="container">
    <PhotoNavigation />
  </div>
</template>

<script>
import PhotoNavigation from '@/components/layouts/PhotoNavigation';

export default {
  components: {
    PhotoNavigation,
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: $black;
}

.image-container {
  width: 100%;
  height: auto;
  position: absolute;
}

.image {
  width: 100%;
  height: auto;
  position: absolute;
}
</style>
