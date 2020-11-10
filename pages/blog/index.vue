<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Blog</h1>
          <h2 class="subtitle">Check out our blog posts!</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <h1 v-if="this.error">{{ this.error }}</h1>
      <Post
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :content="post.content"
        :slug="post.slug"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "../../components/Post";
export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
      error: null,
    };
  },
  async created() {
    try {
      const res = await axios.get("https://backend.aclevo.xyz/blog");
      this.posts = res.data;
    } catch (err) {
      this.error = "Failed to retrieve blog posts. Please try again later.";
      console.log(err);
    }
  },
};
</script>

<style>
</style>
