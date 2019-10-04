<template>
  <div class='events'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <InteriorHero
        title="Events"
        backgroundImage="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3" />
    </section>

    <div class="columns is-mobile">
      <div class="column event-timeline">

        <div class="container-fluid">
            <Timeline v-bind:events="this.events" />
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
  mounted: function () {
    this.events = [
      {
        date: 'March 12, 2013',
        title: 'Lorem Ipsum',
        description: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
        url: '',
        backgroundImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3',
        isTimePeriod: false
      },
      {
        date: 'March 12, 2013',
        title: 'Lorem Ipsum',
        description: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
        url: '',
        backgroundImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3',
        isTimePeriod: false
      },
      {
        date: 'March 12, 2013',
        title: 'Lorem Ipsum',
        description: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
        url: '',
        backgroundImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3',
        isTimePeriod: false
      },
      {
        date: 'March 12, 2013',
        title: 'Lorem Ipsum',
        description: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
        url: '',
        backgroundImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3',
        isTimePeriod: false
      },
      {
        date: '',
        title: 'March 2013',
        description: '',
        url: '',
        backgroundImage: '',
        isTimePeriod: true
      },
      {
        date: 'March 12, 2013',
        title: 'Lorem Ipsum',
        description: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
        url: '',
        backgroundImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3',
        isTimePeriod: false
      },
      {
        date: 'March 12, 2013',
        title: 'Lorem Ipsum',
        description: 'Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis pretium. Pellentesque ut neque.',
        url: '',
        backgroundImage: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3',
        isTimePeriod: false
      }
    ]
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
  }
}

</style>