<template>
  <div class="two-column-listing">
    <div v-if='cards' class="container content-tiles">

      <div
        v-for="pair in cards"
        v-bind:key="pair[0].title"
        class="tile is-ancestor">
        <div class="tile is-parent is-6">
          <article class="tile is-child">
            <PostCard 
                  v-if="pair[0]"
                  v-bind:card='pair[0]' />
          </article>
        </div>
        <div class="tile is-parent is-6">
          <article class="tile is-child">
            <PostCard 
                  v-if="pair[1]"
                  v-bind:card='pair[1]' />
          </article>
        </div>
      </div>

      <!-- <div class="tile is-ancestor">
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
      </div> -->

    </div>
  </div>
      
</template>

<script>
import PostCard from '~/components/PostCard'

export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  components: {
    PostCard
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.two-column-listing {

}

</style>