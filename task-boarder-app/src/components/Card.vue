<template>
  <div>
    Name: {{associate.name}}
    <br />
    Login: {{associate.login}}
    <br />
    Workdays: {{associate.workdays}}
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["associate"]
};
</script>