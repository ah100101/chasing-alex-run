<template>
  <div class='detail'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <DetailHero 
        date="" 
        v-if="this.post"
        v-bind:title="this.post.title"
        v-bind:imageSource="this.post['hero_image']"
        v-bind:loadingImage="this.post['hero_image']"
        v-bind:errorImage="this.post['hero_image']" />
    </section>

    <div 
      class="column">
      <div class="container content" v-html="body">
      </div>
    </div>

  </div>
</template>

<script>
import dateFormat from 'dateformat'
import DetailHero from '~/components/DetailHero'
import Navigation from '~/components/Navigation'

export default {
  components: {
    DetailHero,
    Navigation
  },
  mounted: function () {
    import(`~/content/pages/about.md`)
      .then((result) => {
        this.body = result.html
        this.post = result.attributes
      })
      .catch((error) => {
        console.error(error)
      })
  },
  data: function () {
    return {
      post: undefined,
      error: {},
      body: ''
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.detail {
  .navbar-item {
    img {
      max-height: 4.5rem;
    }
  }

  .navbar-burger {
    color: $light;
  }

  .subtitle {
    color: $light;
  }

  .column {
    background-color: $light;
    padding-top: 2rem;
  }

  .content {
    max-width: 800px;
  }

}

</style>
