<template>
  <nav class="photo-navigation">
    <span class="icon-wrapper arrow-wrapper" @click="back">
      <LeftArrow />
    </span>
    <ul class="items">
      <li v-for="item in navigationItems" :key="item.id" class="icon-wrapper">
        <component :is="item.component" v-bind="item.props" />
      </li>
    </ul>
  </nav>
</template>

<script>
import Additional from '~/static/icons/more.svg?inline';
import Trash from '~/static/icons/trash.svg?inline';
import Zoom from '~/static/icons/zoom.svg?inline';
import LeftArrow from '~/static/icons/left_arrow.svg?inline';

export default {
  components: { LeftArrow },
  data() {
    return {
      navigationItems: [
        {
          id: 0,
          component: Zoom,
          props: {
            withPopover: false,
          },
        },
        {
          id: 1,
          component: Trash,
          props: {
            withPopover: false,
          },
        },
        {
          id: 2,
          component: Additional,
          props: {
            withPopover: true,
            name: 'more',
          },
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.photo-navigation {
  position: absolute;
  width: 100%;
  top: 1.3rem;
  display: flex;
  justify-content: space-between;
  height: max-content;
  padding: 0 200px;
  z-index: 1;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: $white;
  }
}

.arrow-wrapper {
  &:hover {
    transform: translateX(-3px);
    transition: transform 0.3s ease 0s;
  }
}
</style>
