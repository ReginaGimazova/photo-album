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
  padding: 5px 10px;
  color: $gray;
  font-weight: 600;
}
</style>
