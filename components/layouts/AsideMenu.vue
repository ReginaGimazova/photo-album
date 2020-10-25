<template>
  <aside class="aside-menu">
    <ul>
      <li v-for="item in menuItems" :key="item.label" class="item">
        <div class="icon-wrapper">
          <component :is="item.component" />
          <span class="label">{{ item.label }}</span>
        </div>
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
          link: '/photo',
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
.aside-menu {
  width: max-content;
  height: inherit;
  text-align: center;
}

.item {
  width: 40px;
  margin: 0 16px;
  color: $blue;
  background-color: transparentize($light-blue, 0.6);
  border-radius: 24px;
  transition: width 0.2s ease-in-out;

  &:hover {
    background-color: lighten($gray, 45%);
  }

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  @media screen and (min-width: $md) {
    width: 250px;
    margin: 0;
    border-radius: 0 24px 24px 0;
  }
}

.label {
  padding-left: 24px;
  display: none;

  @media screen and (min-width: $md) {
    display: inline;
  }
}

.icon-wrapper {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  width: 100%;

  svg {
    fill: $blue;
  }

  @media screen and (min-width: $md) {
    padding: 8px 16px;
  }
}
</style>
