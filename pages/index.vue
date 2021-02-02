<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome Back to Aclevo</h1>
          <h2 class="subtitle">We're a group of people dedicated to making fun content.</h2>
        </div>
      </div>
    </section>
    <section class="celestial-banner container pb-5">
      <article class="message is-info">
        <div class="message-body has-text-centered">
          <div class="columns">
            <div class="column"></div>
            <div class="column"></div>
            <div class="column is-one-fifth">
              <img src="~assets/images/celestial.png" alt />
            </div>
            <div class="column"></div>
            <div class="column"></div>
          </div>
          <h3 class="title is-3 has-text-info">Check Out The New Celestial!</h3>
          <h4
            class="subtitle is-4 has-text-info"
            style="text-decoration: underline;"
          >A New Way to Experience</h4>
        </div>
      </article>
    </section>
    <section class="latest-blogpost container pb-5">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Our Latest Blog Post</p>
        </header>
        <div v-if="latest_post" class="card-content">
          <p v-if="latest_post.title" class="title">{{ latest_post.title }}</p>
          <div v-if="latest_post.post" v-html="latest_post_summary" class="post"></div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span v-if="latest_post">
              <a :href="`/blog/post/` + latest_post.slug">Read More</a>
            </span>
          </p>
        </footer>
      </div>
    </section>
    <div class="seperator pt-5"></div>
    <section class="projects-list container pt-5 pb-5">
      <div class="columns">
        <div class="column"></div>
      </div>
    </section>
    <section class="series-list"></section>
    <section class="departments-list"></section>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/Card";
import Vue2Filters from "vue2-filters";
export default {
  components: {
    Card,
  },
  async asyncData() {
    const res = await axios.get("https://api.aclevo.xyz/items/blog");
    const latest_post = res.data.data[0];
    const latest_post_summary =
      latest_post.post.split("</p>")[0] +
      "</p>" +
      latest_post.post.split("</p>")[1] +
      "</p>";
    return { latest_post, latest_post_summary };
  },
};
</script>

<style>
</style>
