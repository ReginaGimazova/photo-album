<template>
  <header class="header">
    <div class="header__actions">
      <GoogleButton v-if="!user" />
      <PersonalBlock v-else :user="user" />
    </div>
  </header>
</template>

<script>
import GoogleButton from '~/components/ui/buttons/GoogleButton';
import PersonalBlock from '~/components/ui/PersonalBlock';

export default {
  components: {
    PersonalBlock,
    GoogleButton,
  },
  props: {
    user: String,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-bottom: 2px solid $light-gray;
  margin-bottom: 2rem;

  &__actions {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
