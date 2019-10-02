<template>
  <div class="two-column-listing">
    <div class="container content-tiles">

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