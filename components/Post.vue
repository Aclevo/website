<template>
  <div class="section">
    <div class="content">
      <nuxt-link :to="`/blog/`+ slug">
        <h2>{{ title }}</h2>
      </nuxt-link>
      <div class="content-inner" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Post",
  props: ["post", "id", "title", "content", "slug"],
};
</script>

<style>
</style>
