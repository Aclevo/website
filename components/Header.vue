<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <h1 class="has-text-weight-bold">Aclevo</h1>
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <a href class="navbar-item">Projects</a>
        <a href class="navbar-item">Series</a>
        <a href class="navbar-item">Departments</a>
        <a href class="navbar-item">Services</a>
      </div>
      <div class="navbar-end">
        <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
        <nuxt-link to="/blog" class="navbar-item">Blog</nuxt-link>
        <nuxt-link to class="navbar-item">Downloads</nuxt-link>
        <nuxt-link to class="navbar-item">About</nuxt-link>
        <nuxt-link to class="navbar-item">Contact</nuxt-link>
        <nuxt-link to class="navbar-item">More</nuxt-link>
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
