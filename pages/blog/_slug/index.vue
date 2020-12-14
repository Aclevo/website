<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 v-if="this.error">Post does not exist.</h1>
          <h1 v-if="post.title" class="title">{{ post.title }}</h1>
          <h3>Published {{ post.date_published }}</h3>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div v-html="post.content" class="post"></div>
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
        `https://test.aclevo.xyz/api/collections/get/Posts?token=7f5e79f057de7c4a22d07eb6d7dddb&filter[slug]=${this.$route.params.slug}`
      );
      console.log(res.data.entries);
      this.post = res.data.entries[0];
    } catch (err) {
      this.error = "Blog Post Not Found.";
      console.log(err);
    }
  },
};
</script>

<style>
</style>
