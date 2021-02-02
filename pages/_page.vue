<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div v-if="page" class="container">
          <h1 v-if="page.title" class="title">{{ page.title }}</h1>
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
  async asyncData({ params, error }) {
    const res = await axios.get(
      `https://api.aclevo.xyz/items/page?filter[slug][_eq]=${params.page}`
    );
    const page = res.data.data[0];
    if (!page) {
      return error({ statuscode: 404, message: "Page Not Found" });
    }
    return { page };
  },
};
</script>

<style>
</style>
