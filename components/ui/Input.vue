<template>
  <input v-model="value" class="input" />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'input',
  },
  data: () => ({
    props: {
      value: {
        type: String,
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 2px solid $light-gray;
  border-radius: 5px;
  padding: 15px;

  &:focus,
  &:active {
    border: 2px solid $blue;
  }
}
</style>
