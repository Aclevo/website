<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 v-if="post.title" class="title">{{ post.title }}</h1>
          <h3>Published {{ post.date_created }}</h3>
          <img
            v-if="post.image"
            :src="`https://api.aclevo.xyz/assets/` +  post.image + `?fit=cover&height=400&width=1200&quality=80`"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div v-html="post.post" class="post"></div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  async asyncData({ params, error }) {
    const res = await axios.get(
      `https://api.aclevo.xyz/items/blog?filter[slug][_eq]=${params.slug}`
    );
    if (!res.data.data) {
      return (error = {
        message: "Blog Post does not exist.",
        statuscode: 404,
      });
    }
    const post = res.data.data[0];
    return { post };
  },
};
</script>

<style>
</style>
