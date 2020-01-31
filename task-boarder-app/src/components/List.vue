<style scoped>
</style>

<template>
  <div class="list">
    <div v-for="n in 10" v-bind:key="n">{{n}}</div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: ["title", "slots"]
};
</script>
