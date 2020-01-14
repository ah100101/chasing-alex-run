<template>
  <section>
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
              {{ collapse.title }}
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
            title: 'Day 1 - Destination: Big Tree Camp',
            text: 'Text 1'
        },
        {
            title: 'Day 2 - Destination: Shira Camp One',
            text: 'Text 2'
        },
        {
            title: 'Day 3 - Destination: Shira Camp Two',
            text: 'Text 3'
        },
        {
            title: 'Day 4 - Destination: Lava Tower',
            text: 'Text 3'
        },
        {
            title: 'Day 5 - Destination: Barranco Camp',
            text: 'Text 3'
        },
        {
            title: 'Day 6 - Destination: Karanga Camp',
            text: 'Text 3'
        },
        {
            title: 'Day 7 - Destination: Barafu Camp',
            text: 'Text 3'
        },
        {
            title: 'Day 8 - Destination: Uhuru Peak',
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

.kilimanjaro {

}

</style>
