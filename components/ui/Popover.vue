<template>
  <div id="popover">
    <input v-model="message" type="text" />
    <button
      v-tippy="{
        html: '#tooltip',
        interactive: true,
        reactive: true,
        arrow: true,
        animation: 'perspective',
        onShow: showMe,
        theme: 'light',
        position: 'bottom'
      }"
    >
      {{ reference }}
    </button>
    <div id="tooltip">
      <div>
        <p>{{ message }}</p>
        <button @click="clicked">Click me to update the message</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: '#popover',
  data() {
    return {
      message: 'This is a dynamic message'
    }
  },
  methods: {
    clicked() {
      this.message = `New number : ${this.rand()}`
    },

    showMe() {
      console.log('Let the show begin')
    },

    rand() {
      return Math.round(Math.random() * 100)
    }
  }
}
</script>
