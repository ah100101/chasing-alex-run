<template>
  <div class='events'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <InteriorHero
        title="Events"
        backgroundImage="./images/hero-placeholder.jpg" />
    </section>

    <div class="columns is-mobile">
      <div class="column event-timeline">

        <div class="container-fluid">
            <Timeline />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InteriorHero from '~/components/InteriorHero'
import Navigation from '~/components/Navigation'
import Timeline from '~/components/Timeline'

export default {
  name: 'Events',
  components: {
    InteriorHero,
    Navigation,
    Timeline
  },
  data: function () {
    return {

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
  }
}

</style>