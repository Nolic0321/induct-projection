<template>
  <div>
    <h1>Task Board</h1>
    <List title="Test List" v-bind:slots="5"></List>
  </div>
</template>

<script>
import List from "../components/List";
export default {
  name: "task-board",
  components: {
    List
  },
  data: function() {
    return {
      associate: {
        name: "Hello World",
        login: "helworl",
        workdays: "mon-fri"
      }
    };
  }
};
</script>
