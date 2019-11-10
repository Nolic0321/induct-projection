<template>
  <div>
    <draggable-list v-bind:list="list1"></draggable-list>
    <draggable-list v-bind:list="list2"></draggable-list>
  </div>
</template>


<script>
import DraggableList from "./DraggableList";
export default {
  name: "task-board",
  components: {
    DraggableList
  },
  data: function() {
    return {
      list1: ["a", "b", "c"],
      list2: ["e", "f"]
    };
  }
};
</script>