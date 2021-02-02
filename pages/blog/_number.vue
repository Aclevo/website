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
        <nuxt-link v-if="nextPage" :to="`/blog/${pageNo + 1}`">Next page</nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Post from "@/components/Post";
export default {
  components: {
    Post,
  },
  computed: {
    prevLink() {
      return this.pageNo === 2 ? "/blog" : `/blog/${this.pageNo - 1}`;
    },
  },
  async asyncData({ params, error }) {
    const pageNo = parseInt(params.number);
    const res = await axios.get(
      "https://api.aclevo.xyz/items/blog?limit=11&offset=" + 10 * (pageNo - 1)
    );
    const allposts = res.data.data;
    if (!allposts.length) {
      return error({ statusCode: 404, message: "No posts found!" });
    }
    const nextPage = allposts.length === 11;
    const posts = nextPage ? allposts.slice(0, -1) : allposts;
    if (!allposts) {
      return (error = {
        message: "Failed to retrieve blog posts. Please try again later.",
        statuscode: 500,
      });
    }
    return { nextPage, posts, pageNo };
  },
};
</script>

<style>
</style>
