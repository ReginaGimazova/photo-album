<template>
  <a class="link">{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>
<style>
.link {
  padding: 5px 10px;
  color: #4285f4;
  font-weight: 600;
}
</style>
