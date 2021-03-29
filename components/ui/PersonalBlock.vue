<template>
  <nav class="nav">
    <Link text="+ Создать альбом" />

    <tippy to="load" flip="false" multiple>
      Загрузить фото
    </tippy>

    <tippy to="load" theme="light" trigger="click" multiple>
      <Popover description="Загрузить фото" />
    </tippy>

    <TextButton text="Загрузить" name="load" />

    <span class="user-name">{{ user }}</span>
  </nav>
</template>

<script>
import Link from '@/components/ui/Link';
import TextButton from '@/components/ui/buttons/TextButton';
import Popover from '@/components/ui/Popover';

export default {
  components: {
    Link,
    TextButton,
    Popover,
  },
  props: {
    user: String,
  },
};
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.user-name {
  margin-left: 10px;
  font-weight: 600;
  color: $purple;
}
</style>
