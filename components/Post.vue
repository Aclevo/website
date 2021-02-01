<template>
  <div class="section">
    <div class="content">
      <img
        v-if="img"
        :src="`https://api.aclevo.xyz/assets/` +  img + `?fit=cover&height=200&width=600&quality=80`"
      />
      <nuxt-link :to="`/blog/post/`+ slug">
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
  props: ["post", "id", "title", "content", "slug", "img"],
};
</script>

<style>
</style>
