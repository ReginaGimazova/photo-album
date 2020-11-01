<template>
  <header class="header">
    <div class="header__actions">
      <Link text="+ Создать альбом" />

      <tippy to="load" flip="false" multiple>
        Загрузить фото
      </tippy>

      <tippy to="load" theme="light" trigger="click" multiple>
        <Popover description="Загрузить фото" />
      </tippy>

      <TextButton text="Загрузить" name="load" />

      <GoogleButton />
    </div>
  </header>
</template>

<script>
import Link from '@/components/ui/Link';
import TextButton from '@/components/ui/buttons/TextButton';
import Popover from '@/components/ui/Popover';
import GoogleButton from '@/components/ui/buttons/GoogleButton';

export default {
  components: {
    GoogleButton,
    Link,
    TextButton,
    Popover,
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
