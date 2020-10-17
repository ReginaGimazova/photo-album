<template>
  <div class="popover">
    <p class="popover__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
  },
};
</script>

<style lang="scss">
.popover {
  background-color: $white;
  border-radius: 0.2rem;
  padding: 1.1rem 0.8rem;
  width: 300px;

  &__description {
    text-transform: uppercase;
    color: $gray;
    font-size: 0.75rem;
    text-align: left;
  }
}
</style>
