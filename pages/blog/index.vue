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
  head() {
    return {
      title: "Blog - Aclevo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Aclevo's Blog Home",
        },
      ],
    };
  },
  async asyncData($nuxt) {
    const res = await axios.get(
      "https://api.aclevo.xyz/items/blog?limit=11&offset=0"
    );
    const allposts = res.data.data;
    const nextPage = allposts.length === 11;
    const posts = nextPage ? allposts.slice(0, -1) : allposts;
    if (!allposts) {
      return error({
        error: "Failed to retrieve blog posts.",
        statuscode: 500,
      });
    }
    return { posts, nextPage };
  },
};
</script>
