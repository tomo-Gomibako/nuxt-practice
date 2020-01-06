<template>
  <div>
    <div>{{ res }}</div>
    <input id="message" type="text" name="message">
    <button @click="fetch">
      emit
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    res () {
      return this.$store.state.ping.response
    }
  },
  methods: {
    fetch () {
      this.$store.dispatch('socket/getTimeline')
    }
  }
}
</script>

<style>
</style>
