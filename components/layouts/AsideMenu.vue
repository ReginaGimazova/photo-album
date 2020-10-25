<template>
  <aside class="aside-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.label" class="item">
        <nuxt-link v-bind:to="item.link" prefetch>
          <span class="icon-wrapper">
            <component :is="item.component" />
            {{ item.label }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<style></style>

<script>
import PhotoIcon from '~/static/icons/photo.svg?inline';
import AlbumIcon from '~/static/icons/album.svg?inline';

export default {
  data() {
    return {
      menuItems: [
        {
          label: 'Фото',
          component: PhotoIcon,
          link: '/photo',
        },
        {
          label: 'Видео',
          component: null,
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
.aside-menu {
  width: 15rem;
  height: inherit;
  text-align: center;
}

.item {
  color: $blue;
  background-color: transparentize($light-blue, 0.6);
  border-radius: 0 24px 24px 0;

  &:hover {
    background-color: lighten($gray, 45%);
  }

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
}

.icon-wrapper {
  display: flex;
  align-items: center;
  margin: 0 auto 0.4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1rem;
    fill: $blue;
  }
}
</style>
