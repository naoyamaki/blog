<template>
  <div class="latest-posts">
		<article class="card" v-for="post in posts">
      <a v-bind:href="post.path">
        <span>{{ post.frontmatter.category }}</span>
      <figure>
        <img v-bind:src="post.frontmatter.img" v-bind:alt="post.title">
      </figure>
      <p class=title>{{ post.title }}</p>
      <p>{{ post.frontmatter.description }}</p>
      <time v-bind:datetime="post.frontmatter.date.substr(0, 10)" itemprop=”datepublished”>{{ post.frontmatter.date.substr(0, 10) }}</time>
      </a>
		</article>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter((page) => page.id==='post')
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
};
</script>