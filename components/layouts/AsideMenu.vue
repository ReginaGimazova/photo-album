<template>
  <aside class="aside-menu">
    <ul class="list">
      <li v-for="item in menuItems" :key="item.label" class="item">
        <span class="icon-wrapper">
          <component :is="item.component" />
        </span>
        <p>
          {{ item.label }}
        </p>
      </li>
    </ul>
  </aside>
</template>

<style></style>

<script>
import PhotoIcon from '~/static/icons/photo.svg?inline'
export default {
  data() {
    return {
      menuItems: [
        {
          label: 'Photo',
          component: PhotoIcon
        },
        {
          label: 'Video',
          component: null
        },
        {
          label: 'Albums',
          component: null
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.aside-menu {
  width: 8rem;
  height: inherit;
  padding: 2rem 0;
  text-align: center;
}

.list {
  padding: 0;
  list-style: none;
}

.item {
  color: $blue;
  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
}

.icon-wrapper {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.4rem;
  border-radius: 50%;
  background-color: lighten($blue, 50%);
  cursor: pointer;

  &:hover {
    background-color: lighten($blue, 45%);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: $blue;
  }
}
</style>
