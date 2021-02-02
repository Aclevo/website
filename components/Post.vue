<template>
  <div class="section">
    <div class="content">
      <img
        v-if="img"
        width="600"
        height="200"
        :src="`https://api.aclevo.xyz/assets/` +  img + `?fit=cover&height=200&width=600&quality=80`"
      />
      <nuxt-link :to="`/blog/post/`+ slug">
        <h2>
          <u>{{ title }}</u>
        </h2>
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
