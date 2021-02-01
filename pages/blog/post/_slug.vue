<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 v-if="this.error">Post does not exist.</h1>
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
  data() {
    return {
      post: {},
      error: null,
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `https://api.aclevo.xyz/items/blog?filter[slug][_eq]=${this.$route.params.slug}`
      );
      console.log(res.data.data);
      this.post = res.data.data[0];
    } catch (err) {
      this.error = "Blog Post Not Found.";
      console.log(err);
    }
  },
};
</script>

<style>
</style>
