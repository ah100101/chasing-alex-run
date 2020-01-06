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
          <div id="map" class="map"></div>
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

const distanceFrom = function(oldLatLng, newLatLng) {
  var EarthRadiusMeters = 6378137.0; // meters
  var lat1 = oldLatLng.lat();
  var lon1 = oldLatLng.lng();
  var lat2 = newLatLng.lat();
  var lon2 = newLatLng.lng();
  var dLat = (lat2-lat1) * Math.PI / 180;
  var dLon = (lon2-lon1) * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = EarthRadiusMeters * c;
  return d;
}

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
    this.plotRoute()
    this.plotCheckpoints()
  },
  data: function () {
    return {
      ready: false,
      post: undefined,
      error: {},
      body: '',
      map: {},
      route: {}
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
        // console.log(route)
      }
    },
    plotCheckpoints: function () {  
      // console.log(this.polyline)
      var km_points = this.getPointsAtDistance(2000);
      for (var i = 0; i < km_points.length; i++) {
          let infoWindowContent = "marker "+i/2000+" of "+Math.floor(this.route.Distance()/2000)+"<br>kilometer "+i/1000+" of "+(this.route.Distance()/1000).toFixed(2);
          let checkpoint = this.createMarker(km_points[i], infoWindowContent);
          checkpoint.setMap(this.map)
      }
    },
    createMarker: function (point) {
      return new google.maps.Marker({
        position: point,
        map: this.map,
        title: 'Checkpoint',
        zIndex: Math.round(point.lat()*-100000)<<5
      })
    },
    getPointsAtDistance: function(metres) {
      var next = metres;
      var points = [];
      // some awkward special cases
      if (metres <= 0) return points;
      var dist=0;
      var olddist=0;
      for (var i=1; (i < this.route.getPath().getLength()); i++) {
        olddist = dist;
        dist += distanceFrom(this.route.getPath().getAt(i), this.route.getPath().getAt(i-1))
        // dist += this.route.getPath().getAt(i).distanceFrom(this.route.getPath().getAt(i-1));
        while (dist > next) {
          var p1= this.route.getPath().getAt(i-1);
          var p2= this.route.getPath().getAt(i);
          var m = (next-olddist)/(dist-olddist);
          points.push(new google.maps.LatLng( p1.lat() + (p2.lat()-p1.lat())*m, p1.lng() + (p2.lng()-p1.lng())*m));
          next += metres;    
        }
      }
      return points;
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
