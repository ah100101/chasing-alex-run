<template>
  <div class='home'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <HomeHero/>
    </section>
    <StaggeredTileListing
      header="Latest Posts" 
      v-bind:cards="cards" />
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero'
import PostCard from '~/components/PostCard'
import Navigation from '~/components/Navigation'
import StaggeredTileListing from '~/components/StaggeredTileListing.vue'

export default {
  layout: 'home',
  name: 'HomePage',
  components: {
    HomeHero,
    Navigation,
    PostCard,
    StaggeredTileListing
  },
  data: function () {
    return {
      cards: [
        {
          title:'Speed Work: You can only run faster by running faster',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:true,
          type:'Race Preview',
          day:'0',
          month:'Sep',
          year:'2019',
          image: './images/running-placeholder.jpg',
          slug: '/detail/speed-work'
        },
        {
          title:'Lorem Ipsum Delor Sedet Verberat Baculo',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:false,
          type:'Race Preview',
          day:'1',
          month:'Sep',
          year:'2019',
          image: './images/running-placeholder.jpg',
          slug: '/detail/speed-work'
        },
        {
          title:'Lorem Ipsum Delor Sedet Verberat Baculo 2',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:false,
          type:'Race Preview',
          day:'2',
          month:'Sep',
          year:'2019',
          image: './images/running-placeholder.jpg',
          slug: '/detail/speed-work'
        },
        {
          title:'Lorem Ipsum Delor Sedet Verberat Baculo 3',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:false,
          type:'Race Preview',
          day:'3',
          month:'Sep',
          year:'2019',
          image: './images/running-placeholder.jpg',
          slug: '/detail/speed-work'
        },
        {
          title:'Lorem Ipsum Delor Sedet Verberat Baculo 4',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:false,
          type:'Race Preview',
          day:'4',
          month:'Sep',
          year:'2019',
          image: './images/running-placeholder.jpg',
          slug: '/detail/speed-work'
        },
        {
          title:'Lorem Ipsum Delor Sedet Verberat Baculo 4',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:false,
          type:'Race Preview',
          day:'6',
          month:'Sep',
          year:'2019',
          image: './images/running-placeholder.jpg',
          slug: '/detail/speed-work'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.home {
  .column {
    background-color: $primary;
    padding-top: 2rem;
  }

}

</style>
