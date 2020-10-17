<template>
  <a class="link">{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss">
.link {
  padding: 0.4rem 0.8rem;
  color: $gray;
  font-weight: 600;
}
</style>
