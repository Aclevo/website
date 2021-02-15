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
        :content="post.post  | truncate(1200)"
        :img="post.image"
        :slug="post.slug"
      />
    </div>
    <div class="container">
      <section class="section has-text-centered" id="next" v-if="nextPage">
        <nuxt-link class="button" to="/blog/2">
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
      "https://api.aclevo.xyz/items/blog?filter[status][_in]=published&limit=11&offset=0"
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
