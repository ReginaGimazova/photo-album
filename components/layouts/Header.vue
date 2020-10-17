<template>
  <header class="header">
    <Logo />
    <div class="header__actions">
      <Link text="+ Создать альбом" />

      <tippy to="loadTippy" flip="false" multiple>
        Загрузить фото
      </tippy>

      <tippy to="loadTippy" theme="light" trigger="click" multiple>
        <Popover description="Загрузить фото" />
      </tippy>

      <TextButton text="Загрузить" content="I'm a Tippy tooltip!" name="loadTippy" />
    </div>
  </header>
</template>

<script>
import Link from '@/components/ui/Link';
import Logo from '@/components/ui/Logo';
import TextButton from '@/components/ui/buttons/TextButton';
import Popover from '@/components/ui/Popover';

export default {
  components: {
    Link,
    Logo,
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
  padding: 30px;

  &__actions {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
