<template>
  <button class="button">{{ this.text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss">
.button {
  background: none;
  color: $gray;
  font-weight: 600;
  padding: 0.8rem;
  border-radius: 0.2rem;

  &:hover {
    background-color: $light-gray;
  }
}
</style>
