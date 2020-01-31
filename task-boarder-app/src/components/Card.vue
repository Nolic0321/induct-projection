<style scoped>
.card {
  border-style: solid;
}
</style>

<template>
  <div class="card" v-draggable>
    Name: {{ associate.name }}
    <br />
    Login: {{ associate.login }}
    <br />
    Workdays: {{ associate.workdays }}
  </div>
</template>

<script>
import { Draggable } from "draggable-vue-directive";
export default {
  name: "card",
  props: ["associate"],
  directives: {
    Draggable
  }
};
</script>
