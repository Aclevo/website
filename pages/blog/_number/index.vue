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
      <section class="section" id="prev-next">
        <nuxt-link :to="prevLink">Prev page</nuxt-link>
        <nuxt-link v-if="this.nextPage" :to="`/blog/${this.pageNo + 1}`">Next page</nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "../../../components/Post";
export default {
  components: {
    Post,
  },
  computed: {
    prevLink() {
      return this.pageNo === 2 ? "/blog" : `/blog/${this.pageNo - 1}`;
    },
  },
  data() {
    return {
      posts: [],
      nextPage: [],
      pageNo: [],
      error: null,
    };
  },
  async created() {
    try {
      this.pageNo = parseInt(this.$route.params.number);
      const res = await axios.get(
        "https://api.aclevo.xyz/items/blog?limit=11&offset=" +
          10 * (this.pageNo - 1)
      );
      this.allposts = res.data.data;
      console.log(this.allposts.length);
      if (!this.allposts.length) {
        this.error = "There are no more blog posts.";
        this.$nuxt.error({ statusCode: 404, message: "No posts found!" });
      }
      this.nextPage = this.allposts.length === 11;
      console.log(this.nextPage);
      this.posts = this.nextPage ? this.allposts.slice(0, -1) : this.allposts;
    } catch (err) {
      this.error = "Failed to retrieve blog posts. Please try again later.";
      console.log(err);
    }
  },
};
</script>

<style>
</style>
