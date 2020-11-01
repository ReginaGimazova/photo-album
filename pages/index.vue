<template>
  <div class="container">
    <Header />
    <main class="menu">
      <AsideMenu />
      <button @click="loginClicked">click</button>
    </main>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header.vue';
import AsideMenu from '~/components/layouts/AsideMenu';

export default {
  components: {
    AsideMenu,
    Header,
  },
  middleware: ['auth'],
  methods: {
    async loginClicked() {
      try {
        await this.$auth.loginWith('google');
      } catch (err) {
        console.log('login error: ' + err);
      }
    },
  },
};
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
