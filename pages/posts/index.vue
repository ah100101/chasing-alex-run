<template>
  <div v-show="ready" class='posts'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <InteriorHero
        title="Posts"
        imageSource="../images/lake.webp"
        loadingImage="../images/lake.webp"
        errorImage="../images/lake.webp" 
        />
    </section>

    <div class="columns is-mobile">
      <div class="column">
        <TwoColumnListing v-bind:cards="posts" />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
import InteriorHero from '~/components/InteriorHero'
import PostCard from '~/components/PostCard'
import Navigation from '~/components/Navigation'
import TwoColumnListing from '~/components/TwoColumnListing'
import Footer from '~/components/Footer'

export default {
  name: 'Posts',
  components: {
    InteriorHero,
    PostCard,
    Navigation,
    TwoColumnListing,
    Footer
  },
  mounted: function () {
    const resolve = require.context('~/content/posts/', true, /\.md$/)
    let contentPosts = resolve.keys()
    .map((key) => {
      const md = key.match(/\/(.+)\.md$/)
      return {
        data: resolve(key),
        md
      }
    })
    .sort((a,b) => new Date(b.data.attributes['post_date']) - new Date(a.data.attributes['post_date']))
    .map(obj => {
      return {
        title: obj.data.attributes.title,
        description: obj.data.attributes.description,
        loadingThumbnail: obj.data.attributes['loading_thumbnail'],
        postDateTime: new Date(obj.data.attributes['post_date']),
        thumbnail: obj.data.attributes['thumbnail'],
        tags: obj.data.attributes.tags,
        slug: obj.md[1]
      }
    })
    .map(obj => {
      return {
        transparent: true,
        type: obj.tags[0],
        day: obj.postDateTime.getDate() - 1,
        month: dateFormat(obj.postDateTime, 'mmmm'),
        year: obj.postDateTime.getFullYear(),
        title: obj.title,
        description: obj.description,
        url: `/posts/${obj.slug}`,
        image: obj.thumbnail
      }
    })

    for (let i = 0; i < contentPosts.length; i = i + 2) {
      this.posts.push([contentPosts[i], i + 1 < contentPosts.length ? contentPosts[i + 1] : undefined])
    }

    this.ready = true
  },
  data: function () {
    return {
      ready: false,
      posts: []
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.posts {
  .columns {
    background-color: $primary;
    padding-top: 2rem;
  }
}

</style>