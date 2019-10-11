<template>
  <div v-show="ready" class='home'>
    <section class="hero is-primary is-medium">
      <Navigation />
        <HomeHero
          v-if="this.latestPost"
          v-bind:post="this.latestPost"
          v-bind:imageSource="this.latestPost.heroImage"
          v-bind:loadingImage="this.latestPost.loadingHero"
          v-bind:errorImage="this.latestPost.loadingHero"
        />
    </section>
    <StaggeredTileListing
      header="Latest Posts" 
      v-bind:cards="posts" />
    <Footer></Footer>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
import HomeHero from '~/components/HomeHero'
import PostCard from '~/components/PostCard'
import Navigation from '~/components/Navigation'
import StaggeredTileListing from '~/components/StaggeredTileListing.vue'
import Footer from '~/components/Footer'

export default {
  layout: 'home',
  name: 'HomePage',
  components: {
    HomeHero,
    Navigation,
    PostCard,
    StaggeredTileListing,
    Footer
  },
  head () {
    return {
      title: 'Chasing Alex Run',
      meta: [
        { hid: 'description', name: 'description', content: 'Chasing Alex Run: Running and Adventure Blog' }
      ]
    }
  },
  created: function () {
    const resolve = require.context('~/content/posts/', true, /\.md$/)
    let contentPosts = resolve.keys().map((key) => {
      const md = key.match(/\/(.+)\.md$/)
      return {
        data: resolve(key),
        md
      }
    })
    .sort((a,b) => new Date(b.data.attributes['post_date']) - new Date(a.data.attributes['post_date']))
    .map(obj => {
      return {
        slug: obj.md[1],
        body: obj.data.html,
        title: obj.data.attributes.title,
        description: obj.data.attributes.description,
        eventDate: dateFormat(new Date(obj.data.attributes['event_date']), 'dddd, mmmm d, yyyy'),
        eventDateTime: new Date(obj.data.attributes['event_date']),
        heroCredit: obj.data.attributes['hero_credit'],
        heroImage: obj.data.attributes['hero_image'],
        loadingHero: obj.data.attributes['loading_hero'],
        loadingThumbnail: obj.data.attributes['loading_thumbnail'],
        postDate: dateFormat(new Date(obj.data.attributes['post_date']), 'dddd, mmmm d, yyyy'),
        postDateTime: new Date(obj.data.attributes['post_date']),
        thumbnail: obj.data.attributes['thumbnail'],
        thumbnailCredit: obj.data.attributes['thumbnail_credit'],
        tags: obj.data.attributes.tags
      }
    })

    this.latestPost = contentPosts.slice(0,1)[0]

    this.posts = contentPosts.map(obj => {
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
    this.posts.splice(0,1)

    this.ready = true
  },
  data: function () {
    return {
      ready: false,
      latestPost: {},
      posts: []
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.home {
  .column {
    background-color: $primary;
    padding-top: 2rem;
  }

}

</style>
