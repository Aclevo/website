<template>
  <div class="section">
    <div class="card article">
      <img
        v-if="img"
        width="1600"
        height="400"
        :src="`https://api.aclevo.xyz/assets/` +  img + `?fit=cover&height=400&width=1600&quality=80`"
      />
      <div class="content card-content">
        <div class="media-content has-text-centered">
          <nuxt-link :to="`/blog/post/`+ slug">
            <h2 class="title article-title">{{ title }}</h2>
          </nuxt-link>
        </div>
        <div class="content-inner" v-html="content"></div>
        <div class="read_more has-text-centered">
          <nuxt-link :to="`/blog/post/` + slug" class="button">
            <font-awesome-icon :icon="['fas', 'book-open']" />&nbsp;Read More
          </nuxt-link>
        </div>
      </div>
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
