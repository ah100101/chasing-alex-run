<template>
  <div v-show="ready" >
    <div class='about'>
      <section class="hero is-primary is-medium">
        <Navigation />
        <DetailHero 
          date="" 
          v-if="this.post"
          v-bind:title="this.post.title"
          v-bind:imageSource="this.post['hero_image']"
          v-bind:loadingImage="this.post['hero_image']"
          v-bind:errorImage="this.post['hero_image']" />
      </section>

      <div 
        class="column">
        <div class="container content" v-html="body">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import dateFormat from 'dateformat'
import DetailHero from '~/components/DetailHero'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

export default {
  components: {
    DetailHero,
    Navigation,
    Footer
  },
  head () {
    return {
      title: 'About Chasing Alex Run',
      meta: [
        { hid: 'description', name: 'description', content: 'About the running and adventure blog, Chasing Alex Run' }
      ]
    }
  },
  mounted: function () {
    import(`~/content/pages/about.md`)
      .then((result) => {
        this.ready = true
        this.body = result.html
        this.post = result.attributes
      })
      .catch((error) => {
        console.error(error)
        this.ready = true
      })
  },
  data: function () {
    return {
      ready: false,
      post: undefined,
      error: {},
      body: ''
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.about {

  img {
    max-height: 20rem;
    display: block;
    margin: 0 auto;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3), 0 5px 20px rgba(0, 0, 0, 0.2);
    max-width: 20rem;
  }

  a, a:hover {
    text-decoration: underline;
  }

  .navbar-item {
    img {
      max-height: 4.5rem;
    }
  }

  .navbar-burger {
    color: $light;
  }

  .subtitle {
    color: $light;
  }

  .column {
    background-color: $light;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  .column.dark-mode {
    background-color: $primary;
    color: $light;

    h1, h2, h3, strong {
      color: $light;
    }
  }

  .light-mode {
    .switch input[type=checkbox] + .check {
      background-color: $primary;
    }
  }

  .content {
    max-width: 800px;
    margin-top: 1rem;
  }

  .dark-mode {
    .switch input[type=checkbox] + .check {
      background-color: #ffcd94;
    }
  }

  .switch {
    float: right;

    input.checkbox {
      width: 100%;
      height: 100%;
    }
  }

}

</style>
