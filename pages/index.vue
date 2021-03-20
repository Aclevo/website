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
    <section class="latest-blogpost container pb-5">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Our Latest Blog Post</p>
        </header>
        <div v-if="latest_post" class="card-content">
          <p v-if="latest_post.title" class="title has-text-centered">{{ latest_post.title }}</p>
          <div v-if="latest_post.post" v-html="latest_post_summary" class="post"></div>
          <div class="centered-button has-text-centered">
            <div class="button">
              <span v-if="latest_post">
                <a :href="`/blog/post/` + latest_post.slug">Read the Latest Blog Post</a>
              </span>
            </div>
          </div>
        </div>
        <footer class="card-footer"></footer>
      </div>
    </section>
    <div class="seperator pt-5"></div>
    <section class="content-creation about-us">
      <div class="container">
        <div class="columns">
          <div class="column is-8">
            <h1>Content Creation</h1>
            <p>
              Aclevo is a community-orientated content-creation group founded in 2015 by Reasonably Selenium. As a group of contributors working to fulfill goals by learning strategies that will be useful later in our lives, we make a variety of content such as videos, music, stories, articles, programs, and other types of content.
              Published on many platforms such as YouTube, Twitter, SoundCloud, Twitch, and many other platforms, we work together as a team to bring you funny, engaging, and innovative content that is enjoyable. We've played many games together, such as Keep Talking and Nobody Explodes, Minecraft, SimCity 2000, Bejeweled 2, Terraria, Portal, and other fun games are coming as we plan to expand our collection. We've also reviewed an alternative to Microsoft Office, shown off our Linux skills, and just recently shown off how data is represented as audio, which isn't the end for our techies out there. More content awaits for you to explore and enjoy!
            </p>
          </div>
          <div class="column is-4">
            <img
              src="https://web.archive.org/web/20191105223446im_/https://aclevo.xyz/storage/app/media/uploaded-files/typing.webp"
              alt="We work together to make content."
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="friendship about-us">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <img
              src="https://web.archive.org/web/20191105223446im_/https://aclevo.xyz/storage/app/media/uploaded-files/holding_hands.webp"
              alt="We form good relationships with each other."
              width="400"
              height="400"
            />
          </div>
          <div class="column is-8">
            <h1>Friendship</h1>
            <p>
              Fun content isn't our only specialty! Our goal is to empower people with mental disabilites by helping them find out what they are good at by giving them tools to express themselves in appropriate and life-changing ways, as well as bringing them new friendship and acceptance through the use of friendly and accepting internet chatrooms, in a way that makes them comfortable.
              Since the year 2015, we have brought many diverse, friendly people together of multiple ages, races, colors, religions, sexual idenities, genders, and disabilities to make a safe, happy, and friendly community. Whether it be from other various communities and similar interests to making new friends and becoming more outgoing, we've came together as a team and even a family to collaborate to make beautiful things, listen to each other when we were down, maintain happiness and successfulness, become stronger together, and grow in various ways to the people that we've come to today.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="has-text-centered">
        <nuxt-link to="/about" class="button">Learn More About Us</nuxt-link>
      </div>
    </section>
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
import Vue2Filters from "vue2-filters";
export default {
  components: {
    Card: () => import("@/components/Card.vue"),
  },
  head() {
    return {
      title: "Home - Aclevo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Aclevo's Home Page",
        },
      ],
    };
  },
  async asyncData() {
    const res = await axios.get("https://api.aclevo.xyz/items/blog?filter[status][_eq]=published&sort=-date_created");
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
