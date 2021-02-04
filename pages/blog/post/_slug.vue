<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 v-if="post.title" class="title">{{ post.title }}</h1>
          <h3>Published {{ post.date_created }}</h3>
          <img
            v-if="post.image"
            :src="`https://api.aclevo.xyz/assets/` +  post.image + `?fit=cover&height=400&width=1200&quality=80`"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div v-html="post.post" class="post"></div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  components: {},
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.post,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: `Aclevo - ${this.post.post}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `Aclevo - ${this.post.title}`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.post,
        },
        {
          hid: "twitter:image",
          name: "twitter: image",
          content:
            "https://api.aclevo.xyz/assets/" +
            this.post.image +
            "?fit=cover&height=400&width=1200&quality=80`",
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.post.title,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `Aclevo - ${this.post.title}`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.post,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://api.aclevo.xyz/assets/" +
            this.post.image +
            "?fit=cover&height=400&width=1200&quality=80`",
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.post.title,
        },
      ],
    };
  },
  async asyncData({ params, error }) {
    const res = await axios.get(
      `https://api.aclevo.xyz/items/blog?filter[slug][_eq]=${params.slug}`
    );
    if (!res.data.data) {
      return (error = {
        message: "Blog Post does not exist.",
        statuscode: 404,
      });
    }
    const post = res.data.data[0];
    return { post };
  },
};
</script>

<style>
</style>
