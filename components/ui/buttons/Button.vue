<template>
  <button type="button" class="button_simple">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button_simple {
  display: block;
  margin: 20px 0 0 auto;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: $blue;
  color: $white;
}
</style>
