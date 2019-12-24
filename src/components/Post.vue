<template>
  <div>
    <div>id: {{ id }}</div>
    <div>data: {{ data }}</div>
  </div>
</template>

<script>
export default {
  props: ["id", "data"]
};
</script>
