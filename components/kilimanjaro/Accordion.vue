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
            description: 'Moshi - Lemosho Glades - Big Tree Camp',
            text: `The day begins with a two-hour drive from Moshi to Londrossi Park Gate for registration. Once formalities are completed, you will get back into the car, pass through village communities and arrive at the trailhead at Lemosho Glades to start hiking. You will spend this day in some of the most beautiful forest found on the mountain, with wildlife sightings possible. After a short 2-3 hours you will arrive at Mti Mkubwa (Big Tree) campsite. Here, like all days, you’ll have an afternoon snack and delicious hot dinner.`
        },
        {
            title: 'Day 2',
            description: 'Big Tree Camp - Shira Hut 1',
            text: `Leaving the forest early in the day, the trail gets steeper as it enters the grasses and wildflowers of the heath and moorland zone towards the valley. A gentle grade walk takes you across the high-altitude Shira Caldera past Shira Cave (views of Arrow glacier) and then gently downwards to Shira Hut 1 located near a stream on the Shira Plateau.`
        },
        {
            title: 'Day 3',
            description: 'Shira Hut 1 - Shira Hut 2',
            text: `A gentle hike across the plateau within the moorland meadow takes you to Shira Hut 2 for the afternoon and overnight. Many short hikes are available on the Plateau, making this a great day for acclimatization.`
        },
        {
            title: 'Day 4',
            description: 'Shira Hut 2 - Lava Tower - Barranco Camp',
            text: `Walking now on high moorland, the landscape changes the entire character of the trek. Traverse the southwest side of Kilimanjaro, passing underneath the Lava Tower and the final section of the Western Breach to reach Barranco camp. The day has been spent at altitude, but you will have followed the mountaineering code of ‘walk high, sleep low’ to avoid altitude sickness by aiding your bodies in acclimatization.`
        },
        {
            title: 'Day 5',
            description: 'Barranco Camp - Karanga Valley',
            text: `Start the day by descending into the start of the Great Barranco, a huge ravine. Then exit steeply, up what has been termed the Breakfast Wall, which divides you from the southeastern slopes of Kibo. It is a climb over rocks, although not technical. Passing underneath the Heim and Kersten glaciers, head towards the Karanga Valley for overnight.`
        },
        {
            title: 'Day 6',
            description: 'Karanga Valley - Barafu Camp',
            text: `The day is characterized by a short hike on terrain formed by scree. Walk through arid, lunar land towards Barafu Camp where you have the entire afternoon to rest before your assault on the summit begins at midnight.`
        },
        {
            title: 'Day 7',
            description: 'Barafu Camp - Uhuru Peak - Mweka Hut',
            text: `We avoid walking too long in the heat of the sun today by starting around midnight, walking steeply upwards to the summit glaciers. You will be climbing scree for 5 to 6 hours but you gain incredible height over a short distance. The views are spectacular. You should be on the crater rim at Stella Point as the first rays of the sun emerge. Spectacular ice cliffs within the crater surround you and the views to Mawenzi peak and beyond are breathtaking. Another hour’s walk takes you to your goal, the summit of Uhuru, the highest point in Africa. You made it!`
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
    padding: 0 2em;
  }
  .leg-description {
    padding: 0 1em;
  }
  .content {
    margin: auto;
    max-width: 700px;
  }
}

</style>
