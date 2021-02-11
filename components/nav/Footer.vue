<template>
  <div>
    <footer class="footer">
      <p class="has-text-centered">(These icons are not functional yet.)</p>
      <div class="content has-text-centered social_medias" style="font-size: 1.5rem;">
        <font-awesome-icon :icon="['fab', 'twitter']" />&nbsp;
        <font-awesome-icon :icon="['fab', 'youtube']" />&nbsp;
        <font-awesome-icon :icon="['fab', 'mastodon']" />&nbsp;
        <font-awesome-icon :icon="['fab', 'reddit-alien']" />&nbsp;
      </div>
      <div class="content has-text-centered">
        <p>
          <strong>Aclevo</strong> ⓒ 2015-2020 All Rights Reserved
        </p>
        <p>
          Made using NuxtJS
          <font-awesome-icon :icon="['fab', 'vuejs']" />&nbsp;and Bulma. Website content is licensed under CC-BY-SA 4.0
          <font-awesome-icon :icon="['fab', 'creative-commons-by']" />
          <font-awesome-icon :icon="['fab', 'creative-commons-sa']" />.
        </p>
      </div>
    </footer>
  </div>
</template>
