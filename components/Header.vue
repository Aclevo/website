<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <h1 class="has-text-weight-bold">Aclevo</h1>
      </nuxt-link>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">Projects</nuxt-link>
        <nuxt-link to="/" class="navbar-item">Series</nuxt-link>
        <nuxt-link to="/" class="navbar-item">Departments</nuxt-link>
        <nuxt-link to="/" class="navbar-item">Services</nuxt-link>
      </div>
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
        <nuxt-link to="/blog" class="navbar-item">Blog</nuxt-link>
        <nuxt-link to="/downloads" class="navbar-item">Downloads</nuxt-link>
        <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
        <nuxt-link to="/more" class="navbar-item">More</nuxt-link>
      </div>
      <!-- hidden on mobile -->
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style>
</style>
