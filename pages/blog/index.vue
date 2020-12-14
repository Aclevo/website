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
        :key="post._id"
        :id="post._id"
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
      const res = await axios.get(
        "https://api.aclevo.xyz/api/collections/get/Posts?token=7f5e79f057de7c4a22d07eb6d7dddb"
      );
      this.posts = res.data.entries;
      console.log(res.data.entries);
    } catch (err) {
      this.error = "Failed to retrieve blog posts. Please try again later.";
      console.log(err);
    }
  },
};
</script>

<style>
</style>
