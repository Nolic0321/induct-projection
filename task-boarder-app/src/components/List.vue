<style scoped>
</style>

<template>
  <div class="list">
    <div v-for="n in slots" v-bind:key="n"></div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: ["title", "slots"]
};
</script>
