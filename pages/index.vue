<template>
  <div class="container">
    <Header />
    <main class="menu">
      <AsideMenu />
    </main>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header.vue'
import AsideMenu from '~/components/layouts/AsideMenu'

export default {
  components: {
    AsideMenu,
    Header
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
.menu {
  height: 100%;
}
</style>
