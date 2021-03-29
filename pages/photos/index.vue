<template>
  <div class="container">
    <Header :user="user" />
    <main class="menu">
      <AsideMenu />
    </main>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header.vue';
import AsideMenu from '~/components/AsideMenu';
import GoogleService from '~/services/GoogleService';

export default {
  components: {
    AsideMenu,
    Header,
  },
  async asyncData({ app }) {
    const googleToken = app.$cookies.get('auth._token.google');
    if (googleToken) {
      const googleService = new GoogleService(googleToken);
      await googleService.getProfilePhotos();
      const user = await googleService.getProfileData();
      return { user };
    }
  },
  fetchOnServer: false,
  data() {
    return {
      photos: [],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
.menu {
  height: 100%;
}
</style>
