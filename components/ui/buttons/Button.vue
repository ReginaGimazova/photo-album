<template>
  <button type="button" class="button_simple" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    onClick: Function,
  },
};
</script>

<style lang="scss" scoped>
.button_simple {
  display: block;
  width: 100%;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: $blue;
  color: $white;
}
</style>
