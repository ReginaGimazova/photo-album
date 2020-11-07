<template>
  <form class="form">
    <header class="form__header">
      <GoogleLogo />
      <h1 class="form__title">Вход</h1>
    </header>
    <div class="form__inner">
      <Button v-bind:on-click="loginClicked">Перейти к Photo Album</Button>
    </div>
  </form>
</template>

<script>
import Button from '@/components/ui/buttons/Button';
import GoogleLogo from '@/static/icons/googleLogo.svg?inline';

export default {
  components: { Button, GoogleLogo },
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

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 450px;
  min-height: 300px;
  padding: 30px;
  border: 3px solid $light-gray;
  border-radius: 5px;

  @include for-phone {
    border: none;
    width: 100%;
    padding: 20px 10px;
  }
}

.form__header {
  display: flex;
  align-items: center;
}

.form__title {
  margin-left: 1rem;
  font-size: 1.6rem;
  color: $dark-gray;
  line-height: 1.5;
}

.form__inner {
  margin: 35px 0 0;
  width: 100%;
}
</style>
