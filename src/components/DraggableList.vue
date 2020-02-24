<template>
  <div>
    <h3>Draggable List</h3>
    <draggable :list="list"></draggable>
  </div>
</template>

<script>
import draggable from "@/vuedraggable";

export default {
  name: "draggable-list",
  components: {
    draggable
  },
  props: ["list"]
};
</script>
