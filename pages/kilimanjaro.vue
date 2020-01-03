<template>
  <div v-show="ready" >
    <div class='about'>
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
        class="column dark-mode">
          <div id="map"></div>
          <div class="container content" v-html="body">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
import DetailHero from '~/components/DetailHero'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
import mapData from '~/data/kilimanjaro/route.json'

export default {
  components: {
    DetailHero,
    Navigation,
    Footer
  },
  head () {
    return {
      title: 'About Chasing Alex Run',
      meta: [
        { hid: 'description', name: 'description', content: 'About the running and adventure blog, Chasing Alex Run' }
      ]
    }
  },
  mounted: function () {
    console.log(mapData)
    import(`~/content/pages/about.md`)
      .then((result) => {
        this.ready = true
        this.body = result.html
        this.post = result.attributes
      })
      .catch((error) => {
        console.error(error)
        this.ready = true
      })
    this.map = this.createMap()
  },
  data: function () {
    return {
      ready: false,
      post: undefined,
      error: {},
      body: '',
      map: {}
    }
  },
  methods: {
    createMap: function () {
      return new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.61291, lng: -88.0402219 },
        zoom: 9
      })
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.about {

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
    padding-bottom: 3rem;
  }

  .column.dark-mode {
    background-color: $primary;
    color: $light;

    h1, h2, h3, strong {
      color: $light;
    }
  }

  .content {
    max-width: 500px;
    margin-top: 1rem;

      a, a:hover {
        text-decoration: underline;
      }
      
      img {
        max-height: 20rem;
        display: block;
        margin: 0 auto;
        max-width: 20rem;
      }
  }
}

</style>
