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
export default {
  head: {
    bodyAttrs: {},
  },
  components: {
    Header: () => import("@/components/nav/Header.vue"),
    Footer: () => import("@/components/nav/Footer.vue"),
  },
};
</script>
