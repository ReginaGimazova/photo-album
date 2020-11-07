<template>
  <button class="button_google" @click="loginClicked">
    <GoogleIcon />
  </button>
</template>

<script>
import GoogleIcon from '~/static/icons/google.svg?inline';
import getGoogleProfile from '@/services/getGoogleProfile';

export default {
  middleware: ['auth'],
  components: {
    GoogleIcon,
  },
  methods: {
    async loginClicked() {
      try {
        await this.$auth.loginWith('google');
        await getGoogleProfile();
      } catch (err) {
        console.log('login error: ' + err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button_google {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  box-shadow: 2px 4px 3px -2px $light-gray;
  border: 1px solid $light-gray;
  border-radius: 3px;
  color: $gray;
  font-weight: 600;

  &::after {
    content: 'Sign in';
  }

  @include for-tablet-landscape-up {
    &::after {
      content: 'Sign in with Google';
    }
  }
}
</style>
