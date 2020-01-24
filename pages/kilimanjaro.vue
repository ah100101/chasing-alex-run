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
              <p class="title">{{ tzDisplayTime.format('h:mm:ss A') }}</p>
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

const mockTime = moment.tz('2020-02-04T10:00:00+03:00', 'Africa/Nairobi')

function getTzMoment (time) {
  return moment.tz(time, 'Africa/Nairobi')
}

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
    // debugging
    console.log(this.tzTime.format())
    console.log(moment.tz(mapData.movement[0].start, "Africa/Nairobi").format())
    // console.log(this.legs)
    // console.log(this.currentlyHiking)
    // console.log(this.previousLegs)
    // console.log(this.futureLegs)
    console.log(this.currentLocation)
    // console.log(this.successfullyClimbedMountKilimanjaro)
    // console.log(this.currentDistance)
    // debugging

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
    this.plotAlex()
    this.setTimers()
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
      tzDisplayTime: moment().tz('Africa/Nairobi'),
      tzTime: mockTime ? mockTime : moment().tz("Africa/Nairobi"),
      alexMarker: undefined
    }
  },
  methods: {
    createMap: function () {
      return new google.maps.Map(document.getElementById('map'), {
        center: { lat: -3.06888, lng: 37.34895 },
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#523735"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#c9b2a6"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#dcd2be"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ae9e90"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              },
              {
                "weight": 1
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#93817c"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a5b076"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#447530"
              }
            ]
          },
          {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#fdfcf8"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f8c967"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#e9bc62"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e98d58"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#db8555"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#806b63"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8f7d77"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#b9d3c2"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#92998d"
              }
            ]
          }
        ]
      })
    },
    setTimers: function () {
      // for the local tz time ticking
      setInterval(() => { this.tzDisplayTime = moment().tz('Africa/Nairobi')}, 1000)
      // for the time used to calculate current location
      setInterval(() => { 
        // this.tzTime = moment().tz('Africa/Nairobi')

        this.tzTime.add(10, 'minutes')

        this.plotAlex()
      }, 2000)
    },
    plotAlex: function () {
      // remove existing marker
      if (this.alexMarker) this.alexMarker.setMap(null)

      if (this.currentLocation) {
        this.alexMarker = this.plotMarker({
          lat: this.currentLocation.lat,
          lng: this.currentLocation.lng,
          title: "Alex"
        }, {
          url: '/images/map/alex-marker.svg',
          scaledSize: new google.maps.Size(64, 64)
        })
      }
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
        this.plotMarker({
          lat: coordArray[i].lat,
          lng: coordArray[i].lng,
          title: 0
        }, icon)
      }
    },
    plotMarker: function (point, icon) {
      let marker = this.createMarker({
          lat: point.lat,
          lng: point.lng,
          title: point.title,
          icon
        })

      marker.setMap(this.map)

      return marker
    },
    plotCamps: function () {
      let homeIcon = {
        url: '/images/map/start-marker.svg',
        scaledSize: new google.maps.Size(32, 32)
      }

      let campIcon = {
        url: '/images/map/camp-marker.svg',
        scaledSize: new google.maps.Size(32, 32)
      }

      let summitIcon = {
        url: '/images/map/summit-marker.svg',
        scaledSize: new google.maps.Size(48, 48)
      }

      this.plotMarker({
        lat: mapData.camps[0].lat,
        lng: mapData.camps[0].lng,
        title: mapData.camps[0].name
      }, homeIcon)

      this.plotMarker({
        lat: mapData.camps[1].lat,
        lng: mapData.camps[1].lng,
        title: mapData.camps[1].name
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[2].lat,
        lng: mapData.camps[2].lng,
        title: mapData.camps[2].name
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[3].lat,
        lng: mapData.camps[3].lng,
        title: mapData.camps[3].name
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[4].lat,
        lng: mapData.camps[4].lng,
        title: mapData.camps[4].name
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[5].lat,
        lng: mapData.camps[5].lng,
        title: mapData.camps[5].name
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[6].lat,
        lng: mapData.camps[6].lng,
        title: mapData.camps[6].name
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[7].lat,
        lng: mapData.camps[7].lng,
        title: mapData.camps[7].name
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[8].lat,
        lng: mapData.camps[8].lng,
        title: mapData.camps[8].name
      }, summitIcon)
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
    legs: function () {
      return mapData.movement.map(leg => {
        let finishTime = getTzMoment(leg.start).add(leg.duration, 'minutes')
        return {
          leg,
          minToStart: moment.duration(getTzMoment(leg.start).diff(this.tzTime)).asMinutes(),
          estFinish: finishTime,
          hiking: this.tzTime.isAfter(leg.start) && finishTime.isAfter(this.tzTime)
        }
      })
    },
    currentlyHiking: function () {
      let hikingLegs = this.legs.filter(leg => leg.hiking)

      if (hikingLegs.length <= 0) return false

      return hikingLegs[0]
    },
    previousLegs: function () {
      return this.legs.filter(leg => !leg.hiking && leg.minToStart <= 0)
    },
    futureLegs: function () {
      return this.legs.filter(leg => !leg.hiking && leg.minToStart > 0)
    },
    currentLocation: function () {
      // if we haven't started yet
      if (this.previousLegs.length === 0) return 0

      // if we are not currently hiking, get the last camp
      if (!this.currentlyHiking) {
        return mapData.camps[this.previousLegs[this.previousLegs.length - 1].leg.endCamp]
      }

      // if currently hiking, get the distance to the starting camp
      let startingCamp = mapData.camps[this.currentlyHiking.leg.startCamp]

      // get the starting distance
      let startingDistance = startingCamp.distance

      // get the minute difference between now and the starting time      
      let minuteDifference = moment.duration(this.tzTime.diff(getTzMoment(this.currentlyHiking.leg.start))).asMinutes()

      // calculate the current distance given the amount of time moving and the pace
      let currentDistance = startingDistance + (minuteDifference * (this.currentlyHiking.leg.distance / this.currentlyHiking.leg.duration))

      // return the first checkpoint that is a greater distance
      let found = false
      return mapData.checkpoints.filter(cp => {
        if (!found && cp.distance >= currentDistance) {
          found = true
          return cp
        }
      })[0]

      return undefined
    },
    // todo: update to look at route
    currentDistance: function () {
      if (this.previousLegs.length <= 0) return 0

      return this.previousLegs[this.previousLegs.length - 1].leg.distance
    },
    successfullyClimbedMountKilimanjaro: function () {
      return this.futureLegs.length == 0 && !this.currentlyHiking
    }
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
