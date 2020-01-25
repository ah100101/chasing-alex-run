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
              <p class="heading">Local Tanzanian Time</p>
              <p class="title">{{ tzDisplayTime.format('h:mm:ss A') }}</p>
            </div>
          </div>
          <div v-if="currentActivity" class="level-item has-text-centered">
            <div>
              <p class="heading">Currently</p>
              <p class="title">{{ currentActivity }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Distance Hiked</p>
              <p class="title">{{ distanceTraveled }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Current Elevation</p>
              <p class="title">{{ currentElevation }}</p>
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

// const mockTime = moment.tz('2020-02-04T07:00:00+03:00', 'Africa/Nairobi')

function getTzMoment (time) {
  return moment.tz(time, 'Africa/Nairobi')
}

function formatNumber (number) {
  return number.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
      title: 'Kilimanjaro Climb Tracker',
      meta: [
        { hid: 'description', name: 'description', content: 'Live track Alex and friends to the top of Mount Kilimanjaro' }
      ]
    }
  },
  mounted: function () {
    import(`~/content/pages/kili-tracker.md`)
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
    this.map.panBy(0, 0);

    if (this.alexMarker && this.alexMarker.position) {
      this.moveToLocation(this.alexMarker.position.lat(), this.alexMarker.position.lng())
    }
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
      tzTime: moment().tz("Africa/Nairobi"),
      alexMarker: undefined,
      currentElevation: '0 ft',
      distanceTraveled: '0 miles',
      currentActivity: 'Preparing for the trip',
    }
  },
  methods: {
    createMap: function () {
      return new google.maps.Map(document.getElementById('map'), {
        center: { lat: -3.0010273, lng: 37.1342611 },
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true,
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
    moveToLocation: function (lat, lng){
      const center = new google.maps.LatLng(lat, lng)
      this.map.panTo(center)
      this.map.setZoom(12)
    },
    setTimers: function () {
      // for the local tz time ticking
      setInterval(() => { this.tzDisplayTime = moment().tz('Africa/Nairobi')}, 1000)
      
      // for the time used to calculate current location
      setInterval(() => { 
        this.tzTime = moment().tz('Africa/Nairobi')
        // this.tzTime.add(10, 'minutes')

        this.plotAlex()
        this.currentElevation = formatNumber(this.getEstimatedElevation() * 3) + ' ft'
        this.distanceTraveled = (this.getCurrentDistance() / 1609.344).toFixed(2) + ' miles'
        this.currentActivity = this.getCurrentActivity()
      }, 60000)
    },
    plotAlex: function () {
      let currentLocation = this.getCurrentLocation()
      
      if (!currentLocation) return

      if (this.alexMarker && 
        currentLocation.lat === this.alexMarker.position.lat() &&
        currentLocation.lng === this.alexMarker.position.lng()) return
        
      // remove existing marker
      if (this.alexMarker) this.alexMarker.setMap(null)
      
      this.alexMarker = this.plotMarker({
        lat: currentLocation.lat,
        lng: currentLocation.lng,
        title: "Alex",
        description: ""
      }, {
        url: '/images/map/alex-marker.svg',
        scaledSize: new google.maps.Size(64, 64)
      })
    },
    plotRoute: function () {
      this.route = new google.maps.Polyline({
        path: mapData.route,
        geodesic: true,
        strokeColor: '#222831',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })

      if (!!this.route) {
        this.polyline = this.route.setMap(this.map)
      }
    },
    plotMarker: function (point, icon) {
      let marker = this.createMarker({
          lat: point.lat,
          lng: point.lng,
          icon
        })

      var infowindow = new google.maps.InfoWindow({
          content: `
          <h2 style="color: black">${point.title}</h2>
          <div style="color: black">${point.description}</div>`
      })

      marker.addListener('click', function() {
        infowindow.open(map, marker)
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
        title: mapData.camps[0].name,
        description: mapData.camps[0].description
      }, homeIcon)

      this.plotMarker({
        lat: mapData.camps[1].lat,
        lng: mapData.camps[1].lng,
        title: mapData.camps[1].name,
        description: mapData.camps[1].description
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[2].lat,
        lng: mapData.camps[2].lng,
        title: mapData.camps[2].name,
        description: mapData.camps[2].description
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[3].lat,
        lng: mapData.camps[3].lng,
        title: mapData.camps[3].name,
        description: mapData.camps[3].description
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[4].lat,
        lng: mapData.camps[4].lng,
        title: mapData.camps[4].name,
        description: mapData.camps[4].description
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[5].lat,
        lng: mapData.camps[5].lng,
        title: mapData.camps[5].name,
        description: mapData.camps[5].description
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[6].lat,
        lng: mapData.camps[6].lng,
        title: mapData.camps[6].name,
        description: mapData.camps[6].description
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[7].lat,
        lng: mapData.camps[7].lng,
        title: mapData.camps[7].name,
        description: mapData.camps[7].description
      }, campIcon)

      this.plotMarker({
        lat: mapData.camps[8].lat,
        lng: mapData.camps[8].lng,
        title: mapData.camps[8].name,
        description: mapData.camps[8].description
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
    },
    getLegs: function () {
      return mapData.movement.map(leg => {
        let finishTime = getTzMoment(leg.start).add(leg.duration, 'minutes')
        return {
          leg,
          minToStart: moment.duration(getTzMoment(leg.start).diff(this.tzTime)).asMinutes(),
          estFinish: finishTime,
          hiking: this.tzTime.isAfter(leg.start) && finishTime.isAfter(this.tzTime),
          debug: {
            finish: finishTime.format()
          }
        }
      })
    },
    getCurrentlyHiking: function () {
      let hikingLegs = this.getLegs().filter(leg => leg.hiking)
      
      if (hikingLegs.length <= 0) return false

      return hikingLegs[0]
    },
    getPreviousLegs: function () {
      return this.getLegs().filter(leg => !leg.hiking && leg.minToStart < 0)
    },
    getFutureLegs: function () {
      return this.getLegs().filter(leg => !leg.hiking && leg.minToStart > 0)
    },
    getEstimatedElevation: function () {
      let previousLegs = this.getPreviousLegs()
      let currentlyHiking = this.getCurrentlyHiking()

      // if we haven't started yet
      if (previousLegs.length === 0 && !currentlyHiking) return 0

      // if we are not currently hiking, get the last camp
      if (!currentlyHiking) {
        return mapData.camps[previousLegs[previousLegs.length - 1].leg.endCamp].elevation
      }

      // if currently hiking, get the start camp and end camp
      let startingCampElevation = mapData.camps[currentlyHiking.leg.startCamp].elevation
      let endCampElevation = mapData.camps[currentlyHiking.leg.endCamp].elevation

      // get the elevation gain for this leg
      let totalGain = endCampElevation - startingCampElevation

      // get the starting time
      let timeHiking = moment.duration(this.tzTime.diff(getTzMoment(currentlyHiking.leg.start))).asMinutes()

      return startingCampElevation + (totalGain * (timeHiking / currentlyHiking.leg.duration))
    },
    getCurrentDistance: function () {
      let previousLegs = this.getPreviousLegs()
      let currentlyHiking = this.getCurrentlyHiking()

      // if we haven't started yet
      if (previousLegs.length === 0 && !currentlyHiking) return 0

      // if we are not currently hiking, get the last camp
      if (!currentlyHiking) {
        return mapData.camps[previousLegs[previousLegs.length - 1].leg.endCamp].distance
      }

      // if currently hiking, get the distance to the starting camp
      let startingCamp = mapData.camps[currentlyHiking.leg.startCamp]

      // get the starting distance
      let startingDistance = startingCamp.distance

      // get the minute difference between now and the starting time      
      let minuteDifference = moment.duration(this.tzTime.diff(getTzMoment(currentlyHiking.leg.start))).asMinutes()

      // calculate the current distance given the amount of time moving and the pace
      return (startingDistance + (minuteDifference * ((currentlyHiking.leg.distance - startingDistance) / currentlyHiking.leg.duration)))
    },
    getCurrentActivity: function () {
      let previousLegs = this.getPreviousLegs()
      let currentlyHiking = this.getCurrentlyHiking()

      // if we haven't started yet
      if (previousLegs.length === 0 && !currentlyHiking) return 'Preparing to climb!'

      // if we are not currently hiking, get the last camp activity
      if (!currentlyHiking) {
        return mapData.camps[previousLegs[previousLegs.length - 1].leg.endCamp].campingActivity
      }

      // if currently hiking, get the hiking activity
      return mapData.camps[currentlyHiking.leg.startCamp].hikingActivity
    },
    getCurrentLocation: function () {
      let currentDistance = this.getCurrentDistance()

      if (currentDistance === 0) return undefined

      // return the first checkpoint that is a greater distance
      let found = false
      let checkPoint = mapData.checkpoints.filter(cp => {
        if (!found && cp.distance >= currentDistance) {
          found = true
          return cp
        }
      })[0]

      return checkPoint ? checkPoint : mapData.checkpoints[mapData.checkpoints.length - 1]
    }
  },
  computed: {
    successfullyClimbedMountKilimanjaro: function () {
      return this.getFutureLegs().length == 0 && !this.getCurrentlyHiking()
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
