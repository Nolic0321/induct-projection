<style scoped>
.slot {
  border-style: solid;
}
</style>

<template>
  <span class="list">
    <div class="slot" v-for="n in slots" v-bind:key="n">{{n}}</div>
  </span>
</template>

<script>
export default {
  name: "list",
  props: ["title", "slots"]
};
</script>
