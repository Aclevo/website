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
        :content="post.post | truncate(1000)"
        :img="post.image"
        :slug="post.slug"
      />
    </div>
    <div class="container">
      <section class="section" id="next" v-if="nextPage">
        <nuxt-link to="/blog/2">Next page</nuxt-link>
      </section>
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
      nextPage: [],
      error: null,
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "https://api.aclevo.xyz/items/blog?limit=11&offset=0"
      );
      this.allposts = res.data.data;
      this.nextPage = this.allposts.length === 11;
      this.posts = this.nextPage ? this.allposts.slice(0, -1) : this.allposts;
    } catch (err) {
      this.error = "Failed to retrieve blog posts. Please try again later.";
      this.$nuxt.error = {
        error: "Failed to retrieve blog posts.",
        statuscode: 500,
      };
      console.log(err);
    }
  },
};
</script>

<style>
</style>
