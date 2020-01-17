<template>
  <div v-show="ready" >
    <div class='kilimanjaro'>
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
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Next Stop</p>
              <p class="title">Barranco Camp</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Distance Traveled</p>
              <p class="title">13 miles</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Current Elevation</p>
              <p class="title">10,000 Ft</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Local Tanzanian Time</p>
              <p class="title">{{ tzTime.format('h:mm:ss A') }}</p>
            </div>
          </div>
        </nav>
        <div id="map" class="map"></div>
          <div class="container content">
        </div>
        <KiliAccordion />
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
import KiliAccordion from '~/components/kilimanjaro/Accordion'
import mapData from '~/data/kilimanjaro/route.json'
import mapFunctions from '~/functions/maps.js'
import moment from 'moment-timezone'

export default {
  components: {
    DetailHero,
    Navigation,
    KiliAccordion,
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
    this.plotRoute()
    this.plotCamps()
  },
  data: function () {
    return {
      ready: false,
      post: undefined,
      error: {},
      body: '',
      map: {},
      route: {},
      checkpoints: [],
      tzTime: moment().tz("Africa/Nairobi")
    }
  },
  methods: {
    createMap: function () {
      return new google.maps.Map(document.getElementById('map'), {
        center: { lat: -3.06888, lng: 37.34895 },
        zoom: 11,
      })
    },
    plotRoute: function () {
      this.route = new google.maps.Polyline({
        path: mapData.route,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })

      if (!!this.route) {
        this.polyline = this.route.setMap(this.map)
      }
    },
    plotMarkers: function (coordArray, icon) {
      for (var i = 0; i < coordArray.length; i++) {
        let marker = this.createMarker({
          lat: coordArray[i].lat,
          lng: coordArray[i].lng,
          title: coordArray[i].distance.toString(),
          icon
        })

        marker.setMap(this.map)
      }
    },
    plotCamps: function () {
      this.plotMarkers(mapData.camps, 'http://maps.google.com/mapfiles/ms/micons/blue-dot.png')
    },
    plotCheckpoints: function () {
      this.plotMarkers(mapData.checkpoints, 'http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png')
    },
    createMarker: function (checkpoint) {
      return new google.maps.Marker({
        position: { lat: checkpoint.lat, lng: checkpoint.lng },
        map: this.map,
        title: checkpoint.title,
        icon: checkpoint && checkpoint.icon ? checkpoint.icon : 'http://maps.google.com/mapfiles/ms/icons/ltblue-dot.png',
        zIndex: Math.round(checkpoint.lat * -100000) << 5
      })
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.kilimanjaro {

  .map {
    width: 100%;
    height: 90vh;
  }

  .level {
    .title, .heading {
      color: $light;
    }
  }

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
