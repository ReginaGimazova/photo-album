<template>
  <header class="header">
    <Logo />
    <div>
      <Link text="+ Создать альбом" />
      <Link text="Загрузить" />
    </div>
  </header>
</template>

<script>
import Link from '~/components/ui/Link'
import Logo from '~/components/ui/Logo.vue'

export default {
  components: {
    Link,
    Logo
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 30px;
}
</style>
