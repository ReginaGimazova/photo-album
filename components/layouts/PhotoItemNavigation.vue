<template>
  <nav class="photo-navigation">
    <span class="icon-wrapper">
      <LeftArrow />
    </span>
    <ul class="items">
      <li v-for="item in navigationItems" :key="item.id" class="icon-wrapper">
        <component :is="item.component" />
      </li>
    </ul>
    <Popover />
  </nav>
</template>

<script>
import MoreIcon from '~/static/icons/more.svg?inline';
import Trash from '~/static/icons/trash.svg?inline';
import Zoom from '~/static/icons/zoom.svg?inline';
import LeftArrow from '~/static/icons/left_arrow.svg?inline';
import Popover from '~/components/ui/Popover.vue';

export default {
  components: { Popover, LeftArrow },
  data() {
    return {
      navigationItems: [
        {
          id: 0,
          component: Zoom,
        },
        {
          id: 1,
          component: Trash,
        },
        {
          id: 2,
          component: MoreIcon,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.photo-navigation {
  position: absolute;
  width: 100%;
  top: 20px;
  display: flex;
  justify-content: space-between;
  height: max-content;
  padding: 0 200px;
}

.items {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 100%;
  height: max-content;
  padding: 0;
}

.icon-wrapper {
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: $white;
  }
}
</style>
