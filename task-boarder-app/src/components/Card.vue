<style scoped>
.card {
  border: solid 1px black;
  background-color: aliceblue;
  display: inline-block;
  flex-basis: content;
  margin: 2px;
  padding: 2px;
  position: relative;
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
