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
        :content="post.post | truncate(1200)"
        :img="post.image"
        :slug="post.slug"
      />
    </div>
    <div class="container">
      <section class="section has-text-centered" id="prev-next">
        <nuxt-link class="button" :to="prevLink">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />&nbsp;Previous Page
        </nuxt-link>
        <nuxt-link v-if="nextPage" class="button" :to="`/blog/${pageNo + 1}`">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />&nbsp;Next Page
        </nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
    Post: () => import("@/components/Post.vue"),
  },
  computed: {
    prevLink() {
      return this.pageNo === 2 ? "/blog" : `/blog/${this.pageNo - 1}`;
    },
  },
  head() {
    return {
      title: "Blog Page " + this.pageNo + " - Aclevo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Aclevo's Blog Page " + this.pageNo,
        },
      ],
    };
  },
  async asyncData({ params, error }) {
    const pageNo = parseInt(params.number);
    const res = await axios.get(
      "https://api.aclevo.xyz/items/blog?filter[status][_eq]=published&sort=-date_created&limit=11&offset=" +
        10 * (pageNo - 1)
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
