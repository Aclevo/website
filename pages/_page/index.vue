<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div v-if="page" class="container">
          <h1 v-if="page.title" class="title">{{ page.title }}</h1>
        </div>
        <div v-if="this.error" class="container">
          <h1 v-if="this.error">Page does not exist.</h1>
        </div>
      </div>
    </section>
    <section>
      <div v-if="page" class="container">
        <div v-html="page.content" class="page"></div>
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
      page: {},
      error: null,
    };
  },
  async created() {
    try {
      const res = await axios.get(
        `https://api.aclevo.xyz/api/collections/get/Pages?token=7f5e79f057de7c4a22d07eb6d7dddb&filter[slug]=${this.$route.params.page}`
      );
      this.page = res.data.entries[0];
      this.page.exists = 1;
    } catch (err) {
      this.error = "Page Not Found.";
      console.log(err);
    }
  },
};
</script>

<style>
</style>
