<template>
  <form class="form">
    <GoogleLogo />
    <h1 class="form__title">Вход</h1>
    <p class="form__subtitle">Переход в Фото</p>
    <div class="form__inner">
      <Input value="" placeholder="Адрес эл. почты" />
      <Button>Далее</Button>
    </div>
  </form>
</template>

<script>
import Input from '@/components/ui/Input';
import Button from '@/components/ui/buttons/Button';
import GoogleLogo from '@/static/icons/googleLogo.svg?inline';

export default {
  components: { Input, Button, GoogleLogo },
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

.form__title {
  margin: 20px 0 10px;
  font-size: 1.6rem;
  color: $dark-gray;
  line-height: 1.5;
}

.form__subtitle {
  color: $dark-gray;
  line-height: 1;
}

.form__inner {
  margin: 35px 0 0;
  width: 100%;
}
</style>
