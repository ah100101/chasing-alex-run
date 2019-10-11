<template>
  <div class='events'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <InteriorHero
        title="Events"
        imageSource="./images/hero-placeholder.jpg"
        loadingImage="./images/hero-placeholder.jpg"
        errorImage="./images/hero-placeholder.jpg"
         />
    </section>

    <div class="columns is-mobile">
      <div class="column event-timeline">

        <div class="container-fluid">
            <Timeline v-bind:events="this.events" />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
import InteriorHero from '~/components/InteriorHero'
import Navigation from '~/components/Navigation'
import Timeline from '~/components/Timeline'
import Footer from '~/components/Footer'

export default {
  name: 'Events',
  components: {
    InteriorHero,
    Navigation,
    Timeline,
    Footer
  },
  head () {
    return {
      title: 'Chasing Alex Run Event Roadmap',
      meta: [
        { hid: 'description', name: 'description', content: 'Past and Future Events' }
      ]
    }
  },
  mounted: function () {
    const resolve = require.context('~/content/events/', true, /\.md$/)
    const contentEvents = resolve.keys().map((key) => {
      const [, name] = key.match(/\/(.+)\.md$/)
      return resolve(key)
    })

    this.events = contentEvents
      .sort((a,b) => new Date(b.attributes.date) - new Date(a.attributes.date))
      .map(obj => {
        return {
          title: obj.attributes['title'],
          backgroundImage: obj.attributes['background_image'],
          date: dateFormat(new Date(obj.attributes['date']), 'dddd, mmmm d, yyyy'),
          description: obj.attributes['description'],
          isTimePeriod: obj.attributes['is_time_period'],
          url: obj.attributes['url'],
          placement: obj.attributes['placement'],
          finishTime: obj.attributes['finish_time'],
          avgPace: obj.attributes['average_pace'],
          loadingImage: !!obj.attributes['loading_image'] ? obj.attributes['loading_image'] : '',
          location: !!obj.attributes['location'] ? obj.attributes['location'] : ''
        }
      })
  },
  data: function () {
    return {
      events: []
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.events {

  .subtitle {
    color: $light;
  }

  .columns {
    background-color: $primary;
    padding-top: 2rem;
    width: 100%;
    margin: 0;
  }
}

</style>
