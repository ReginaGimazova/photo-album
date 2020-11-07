<template>
  <div class="container">
    <div class="container__empty" />
    <SignInForm />
    <div class="container__empty" />
  </div>
</template>

<script>
import SignInForm from '@/components/layouts/SignInForm/SignInForm';
export default {
  components: { SignInForm },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
}
.container__empty {
  flex: 0.5;

  @include for-tablet-portrait-up {
    flex: 1;
  }
}
</style>
