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
import Header from "~/components/nav/Header";
import Footer from "~/components/nav/Footer";
export default {
  head: {
    bodyAttrs: {},
  },
  components: {
    Header,
    Footer,
  },
};
</script>
