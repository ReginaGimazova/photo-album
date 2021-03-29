<template>
  <aside class="menu">
    <ul>
      <li v-for="item in menuItems" :key="item.label" class="item" :class="item.active && 'item_active'">
        <nuxt-link :to="item.link" prefetch>
          <div class="item__inner">
            <component :is="item.component" class="icon" />
            <span class="icon__label">{{ item.label }}</span>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import PhotoIcon from '~/static/icons/photo.svg?inline';
import VideoIcon from '~/static/icons/video.svg?inline';
import AlbumIcon from '~/static/icons/album.svg?inline';

export default {
  data() {
    return {
      menuItems: [
        {
          label: 'Фото',
          component: PhotoIcon,
          active: this.$route.path === '/',
          link: '/',
        },
        {
          label: 'Видео',
          component: VideoIcon,
          link: '/video',
        },
        {
          label: 'Альбомы',
          component: AlbumIcon,
          link: '/albums',
        },
      ],
    };
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: max-content;
  height: inherit;
  text-align: center;
}

.item {
  width: 40px;
  margin: 0 16px;
  color: $blue;
  border-radius: 24px;
  transition: width 0.2s ease-in-out;
  line-height: 1.8;

  &:hover {
    background-color: transparentize($light-gray, 0.1);
  }

  @include for-tablet-landscape-up {
    width: 250px;
    margin: 0;
    border-radius: 0 24px 24px 0;
  }

  &_active {
    background-color: transparentize($light-blue, 0.6);

    &:hover {
      background-color: transparentize($light-blue, 0.4);
    }
  }
}

.item__inner {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  width: 100%;

  @include for-tablet-landscape-up {
    padding: 8px 16px;
  }
}

.icon {
  fill: $blue;

  &__label {
    padding-left: 24px;
    display: none;

    @include for-tablet-landscape-up {
      display: inline;
    }
  }
}
</style>
