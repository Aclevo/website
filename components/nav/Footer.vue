<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered social_medias" style="font-size: 1.5rem;">
        <a href="https://twitter.com/AclevoReal" aria-label="Aclevo's Twitter Account">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>&nbsp;
        <a
          href="https://www.youtube.com/channel/UCrp7T1GD_j1Z9L-yNsfrdiA"
          aria-label="Aclevo's YouTube Channel"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>&nbsp;
        <a href="https://mastodon.social/@aclevo" aria-label="Aclevo's Mastodon Account">
          <font-awesome-icon :icon="['fab', 'mastodon']" />
        </a>&nbsp;
        <a href="https://www.reddit.com/r/AclevoReal/" aria-label="Aclevo's Public Reddit">
          <font-awesome-icon :icon="['fab', 'reddit-alien']" />
        </a>&nbsp;
      </div>
      <div class="content has-text-centered">
        <p>
          <strong>Aclevo</strong> ⓒ 2015-2021 All Rights Reserved
        </p>
        <p>
          Made using NuxtJS
          <font-awesome-icon :icon="['fab', 'vuejs']" />&nbsp;and Bulma CSS.
        </p>
        <p>
          Website content is licensed under CC-BY-SA 4.0
          <font-awesome-icon :icon="['fab', 'creative-commons-by']" />
          <font-awesome-icon :icon="['fab', 'creative-commons-sa']" />, unless stated otherwise.
        </p>
      </div>
    </footer>
  </div>
</template>
