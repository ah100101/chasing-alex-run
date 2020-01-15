<template>
  <section class='kili-accordion'>
    <b-collapse
      class="card"
      v-for="(collapse, index) of collapses"
      v-bind:key="index"
      v-bind:open="isOpen == index"
      @open="isOpen = index">
      <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button">
          <p class="card-header-title">
              <span class='leg-title'>
                {{ collapse.title }}
              </span>
              <span class='leg-description'>
                {{ collapse.description }}
              </span>
          </p>
          <a class="card-header-icon">
              <b-icon
                  :icon="props.open ? 'menu-down' : 'menu-up'">
              </b-icon>
          </a>
      </div>
      <div class="card-content">
          <div class="content">
              {{ collapse.text }}
          </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import dateFormat from 'dateformat'

export default {
  components: {

  },
  mounted: function () {

  },
  data: function () {
    return {
      isOpen: -1,
      collapses: [
        {
            title: 'Day 1',
            description: 'Destination: Big Tree Camp',
            text: 'Text 1'
        },
        {
            title: 'Day 2',
            description: 'Destination: Shira Camp One',
            text: 'Text 2'
        },
        {
            title: 'Day 3',
            description: 'Destination: Shira Camp Two',
            text: 'Text 3'
        },
        {
            title: 'Day 4',
            description: 'Destination: Lava Tower',
            text: 'Text 3'
        },
        {
            title: 'Day 5',
            description: 'Destination: Barranco Camp',
            text: 'Text 3'
        },
        {
            title: 'Day 6',
            description: 'Destination: Karanga Camp',
            text: 'Text 3'
        },
        {
            title: 'Day 7',
            description: 'Destination: Barafu Camp',
            text: 'Text 3'
        },
        {
            title: 'Day 8',
            description: 'Destination: Uhuru Peak',
            text: 'Text 3'
        }
      ]
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.kili-accordion {
  .card-header-title {
    padding: 0;
    background-color: $light;
  }
  .leg-title {
    padding: 0 2em;
  }
  .leg-description {
    padding: 0 1em;
  }
}

</style>
