<template>
  <div class="latest-posts">
		<article class="card" v-for="post in posts">
      <a v-bind:href="'/blog'+post.path">
        <figure>
          <span>{{ post.frontmatter.category }}</span>
          <img v-bind:src="post.frontmatter.img" v-bind:alt="post.title">
        </figure>
        <div class="sentence">
          <p class=title>{{ post.title }}</p>
          <p class="description">{{ post.frontmatter.description }}</p>
          <time v-bind:datetime="post.frontmatter.date.substr(0, 10)" itemprop=”datepublished”>{{ post.frontmatter.date.substr(0, 10) }}</time>
        </div>
      </a>
		</article>
  </div>
</template>

<style lang="scss" scoped>
article.card {
  margin: 16px 0;
  border: 1px solid #9e9e9e;
  border-radius: 16px;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, .5);
  a {
    display: flex;
    figure {
      flex: 2;
      margin: 1%;
      position: relative;
      img {
        border-radius: 16px;
      }
      span {
        position: absolute;
        top: .5em;
        left: .5em;
        background:rgba(255, 255, 255, 0.6);
        border-radius: 16px;
        padding: .2em;
      }
    }

    div.sentence {
      min-height: 192px;
      flex: 3;
      display: flex;
      flex-direction: column;
      p.title {
        font-size: 1.5em;
        margin: .5em 0;
      }
      p.description {
        font-size: 1em;
        margin: .5em 0;
      }
      time {
        text-align: right;
        margin: .5em;
      }
    }
  }
}
@media (max-width:720px) {
  article.card {
  a {
    flex-direction: column;
    figure {
      margin: 0;
      img {
        border-radius: 16px 16px 0 0;
      }
    }
  }
  }
}

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