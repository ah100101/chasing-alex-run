<template>
  <div v-show="ready" class='activity'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <InteriorHero
        title="Posts"
        imageSource="../images/lake.jpg"
        loadingImage="../images/lake-loading.jpg"
        errorImage="../images/lake-loading.jpg" 
        />
    </section>

    <div class="columns is-mobile">
      <div class="column">
        <h2>{{ text }}</h2>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import InteriorHero from '~/components/InteriorHero'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

export default {
  name: 'Posts',
  components: {
    InteriorHero,
    Navigation,
    Footer
  },
  created: function () {
    if (!process.server) {
      this.text = this.text + "if this updated at " + new Date()
    }
  },
  mounted: function () {
    this.ready = true
  },
  data: function () {
    return {
      ready: false,
      text: 'testing generate...'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.activity {
  .columns {
    background-color: $primary;
    padding-top: 2rem;
  }
}

</style>