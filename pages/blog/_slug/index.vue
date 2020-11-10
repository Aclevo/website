<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 v-if="this.error">Post does not exist.</h1>
          <h1 v-if="post.title" class="title">{{ post.title }}</h1>
          <h2 v-if="post.has_summary == true" class="subtitle">{{ post.summary }}</h2>
          <h2 v-if="post.has_summary == false" class="subtitle">
            <i>This post has no summary.</i>
          </h2>
          <h3>Published {{ post.updated_at }}</h3>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div v-html="post.content_html" class="post"></div>
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
        `https://backend.aclevo.xyz/blog/${this.$route.params.slug}`
      );
      console.log(res.data);
      this.post = res.data;
    } catch (err) {
      this.error = "Blog Post Not Found.";
      console.log(err);
    }
  },
};
</script>

<style>
</style>
