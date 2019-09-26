<template>
  <div class='home'>
    <section class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item logo">
                <img src="/images/logo.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <HomeHero/>
    
    </section>

    <div class="columns is-mobile">
      <div class="column">
        <div class="container content-tiles">

          <h3 class="subtitle is-3">Latest Posts</h3>
          
          <div class="columns">
            <div class="column">
                <PostCard 
                v-for='card in cards'
                v-bind:key='card.title' 
                v-bind:card='card' />
            </div>
          </div>

          <!-- <PostCard 
            title='Speed Work: You can only run faster by running faster' 
            description='Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.' 
            transparent=true
            type='Preview'
            day='12'
            month='Sep'
            year='2019' /> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero'
import PostCard from '~/components/PostCard'

export default {
  layout: 'home',
  name: 'HomePage',
  components: {
    HomeHero,
    PostCard
  },
  data: function () {
    return {
      cards: [
        {
          title:'Speed Work: You can only run faster by running faster',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:true,
          type:'Preview',
          day:'12',
          month:'Sep',
          year:'2019',
          image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3'
        },
        {
          title:'Lorem Ipsum Delor Sedet Verberat Baculo',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:false,
          type:'Preview',
          day:'12',
          month:'Sep',
          year:'2019',
          image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3'
        },
        {
          title:'Lorem Ipsum Delor Sedet Verberat Baculo 2',
          description:'Lorem ipsum dolor sedet verberat baculo. Puella sub arbore sedet slavum getum.',
          transparent:false,
          type:'Preview',
          day:'12',
          month:'Sep',
          year:'2019',
          image: 'https://images.unsplash.com/photo-1485388276992-0ce5ce2d6981'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.home {
  .navbar-item {
    img {
      max-height: 2.5rem;
    }
  }

  .navbar-burger {
    color: $light;
  }

  .subtitle {
    color: $light;
  }

  .columns {
    background-color: $primary;
  }

}

</style>