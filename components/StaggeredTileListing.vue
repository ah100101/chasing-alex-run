<template>
  <div class='staggered-tile-listing'>
    <div class="column">
      <div class="container content-tiles">
      
        <h3 class="subtitle is-3">{{ header }}</h3>

        <div class="tile is-ancestor">
          <div class="tile is-parent is-6">
            <article class="tile is-child">
              <PostCard 
                    v-bind:card='cards[0]' />
            </article>
          </div>
          <div class="tile is-parent is-6">
            <article class="tile is-child">
              <PostCard 
                    v-bind:card='cards[1]' />
            </article>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent is-12">
            <article class="tile is-child">
              <PostCard 
                    v-bind:card='cards[2]' />
            </article>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent is-6">
            <article class="tile is-child">
              <PostCard 
                    v-bind:card='cards[3]' />
            </article>
          </div>
          <div class="tile is-parent is-6">
            <article class="tile is-child">
              <PostCard 
                    v-bind:card='cards[4]' />
            </article>
          </div>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent is-12">
            <article class="tile is-child">
              <PostCard 
                    v-bind:card='cards[5]' />
            </article>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero'
import PostCard from '~/components/PostCard'
import Navigation from '~/components/Navigation'

export default {
  components: {
    PostCard
  },
  props: {
    header: {
      type: String
    },
    cards: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.staggered-tile-listing {

  .column {
    background-color: $primary;
    padding-top: 2rem;
  }

  .subtitle {
    color: $light;
  }

}

</style>
