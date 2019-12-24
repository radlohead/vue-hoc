<template>
  <div>
    <h1>vue hoc</h1>
    <Post :id="1" />
  </div>
</template>

<script>
import Post from "./Post";
import { withRequest } from "./withRequest.js";

const postUrl = "https://jsonplaceholder.typicode.com/posts/1";

export default {
  components: {
    Post: withRequest(postUrl)(Post)
  }
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
