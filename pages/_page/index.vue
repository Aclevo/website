<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 v-if="this.error">Page does not exist.</h1>
          <h1 v-if="post.title" class="title">{{ page.title }}</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div v-if="!this.error" class="page"></div>
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
        `https://backend.aclevo.xyz/${this.$route.params.slug}`
      );
      console.log(res.data);
      this.post = res.data;
    } catch (err) {
      this.error = "Page Not Found.";
      console.log(err);
    }
  },
};
</script>

<style>
</style>
