<template>
<div v-show="ready">
  <div class='detail'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <DetailHero 
        v-if="this.post"
        v-bind:title="this.post.title"
        v-bind:date="this.computedDate" 
        v-bind:imageSource="this.post['hero_image']"
        v-bind:loadingImage="this.post['hero_image']"
        v-bind:errorImage="this.post['hero_image']" />
    </section>

    <div 
      v-bind:class="{ 'dark-mode': darkModeOn, 'light-mode': !darkModeOn }"
      class="column">
      <!-- <div class="field">
        <b-switch v-model="darkModeOn"></b-switch>
      </div> -->
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
      title: this.metaTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.metaDescription }
      ]
    }
  },
  mounted: function () {
    import(`~/content/posts/${this.$route.params.slug}.md`)
      .then((result) => {
        this.body = result.html
        this.post = result.attributes
        this.metaTitle = this.post.title
        this.metaDescription = this.post.description
        this.ready = true
      })
      .catch((error) => {
        console.error(error)
        this.ready = true
      })
  },
  data: function () {
    return {
      ready: false,
      darkModeOn: false,
      post: undefined,
      error: {},
      body: '',
      metaTitle: '',
      metaDescription: ''
    }
  },
  computed: {
    darkModeText: function () {
      if (this.darkModeOn) {
        return "Light Mode"
      }
      return "Dark Mode"
    },
    computedDate: function () {
      if (this.post && this.post['post_date']) {
        return dateFormat(new Date(this.post['post_date']), 'dddd, mmm d, yyyy')
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.detail {

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

    img {
      max-height: 30rem;
      display: block;
      margin: 0 auto;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3), 0 5px 20px rgba(0, 0, 0, 0.2);
    }
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
