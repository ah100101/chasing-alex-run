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
            description: 'Moshi to Lemosho Glades to Big Tree Camp',
            text: `The day begins with a two-hour drive from Moshi to Londrossi Park Gate for registration. Once completed, we load back into the car, pass through village communities and arrive at the trailhead at Lemosho Glades to start hiking. We will pass some of the most beautiful forests found on the mountain, with wildlife sightings possible. After a short 2-3 hours we will arrive at Mti Mkubwa (Big Tree) campsite.`
        },
        {
            title: 'Day 2',
            description: 'Big Tree Camp to Shira Hut 1',
            text: `Leaving the forest early in the day, the trail gets steeper as it enters the grasses and wildflowers of the heath and moorland zone towards the valley. A gentle grade walk takes us across the high-altitude Shira Caldera past Shira Cave (views of Arrow glacier) and then gently downwards to Shira Hut 1 located near a stream on the Shira Plateau.`
        },
        {
            title: 'Day 3',
            description: 'Shira Hut 1 to Shira Hut 2',
            text: `A gentle hike across the plateau within the moorland meadow takes us to Shira Hut 2 for the afternoon and overnight. Many short hikes are available on the Plateau, making this a great day for acclimatization.`
        },
        {
            title: 'Day 4',
            description: 'Shira Hut 2 to Lava Tower to Barranco Camp',
            text: `Walking now on high moorland, the landscape changes the entire character of the trek. We traverse the southwest side of Kilimanjaro, passing underneath the Lava Tower and the final section of the Western Breach to reach Barranco camp. This day follows the mountaineering code of ‘walk high, sleep low’ to avoid altitude sickness by aiding in acclimatization.`
        },
        {
            title: 'Day 5',
            description: 'Barranco Camp to Karanga Valley',
            text: `The day starts by descending into the start of the Great Barranco, a huge ravine. Then exits steeply, up what has been termed the Breakfast Wall, which divides us from the southeastern slopes of Kibo. It is a climb over rocks, although not technical. Passing underneath the Heim and Kersten glaciers, we head toward the Karanga Valley for overnight.`
        },
        {
            title: 'Day 6',
            description: 'Karanga Valley to Barafu Camp',
            text: `This day will be characterized by a short hike on terrain formed by scree. Walk through arid, lunar land towards Barafu Camp where we have the entire afternoon to rest before the assault on the summit at midnight.`
        },
        {
            title: 'Day 7',
            description: 'Barafu Camp to Uhuru Peak to Mweka Hut',
            text: `We avoid walking too long in the heat of the sun today by starting around midnight, walking steeply upwards to the summit glaciers. We will be climbing scree for 5 to 6 hours but gain incredible height over a short distance. The views are spectacular. We should be on the crater rim at Stella Point as the first rays of the sun emerge. Another hour’s walk takes us to the goal, the summit of Uhuru, the highest point in Africa.`
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
  margin: auto;
  max-width: 750px;

  .collapse.card, .card-header-title, .card-header-icon, .card-content {
    background-color: $light;
  }
  .card-header-title {
    padding: 0;
  }
  .leg-title {
    padding-left: 1em;
    min-width: 4em;
  }
  .leg-description {
    padding: 1em;
  }
  .content {
    margin: auto;
    max-width: 700px;
  }
}

</style>
