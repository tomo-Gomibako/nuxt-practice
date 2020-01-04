<template>
  <div>
    <div>{{ res }}</div>
    <button @click="fetch">
      ping
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
      this.$store.dispatch('ping/fetch')
    }
  }
}
</script>

<style>
</style>
