<template>
  <div>
    <Header />
    <div class="main">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  head: {
    bodyAttrs: {
      class: "has-navbar-fixed-bottom",
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
