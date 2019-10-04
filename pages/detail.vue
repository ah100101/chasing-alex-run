<template>
  <div class='detail'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <DetailHero
        title="2019 Chicago Marathon Preview"
        date="October 9th 2019" 
        backgroundImage="./images/hero-placeholder.jpg" />
    </section>

    <div 
      class="column"
      v-bind:class="{ 'dark-mode': darkModeOn, 'light-mode': !darkModeOn }">
      <div class="field">
        <b-switch v-model="darkModeOn">{{ darkModeText }}</b-switch>
      </div>
      <div class="container content">
        <h1>Title Here</h1>
        <ol>
          <li>
            Item one
          </li>
          <li>
            Item two
          </li>
          <li>
            Item three
          </li>
        </ol>
        <p>Example demo <strong>content</strong> here for review</p>
      </div>
    </div>
  </div>
</template>

<script>
import DetailHero from '~/components/DetailHero'
import Navigation from '~/components/Navigation'

export default {
  components: {
    DetailHero,
    Navigation
  },
  data: function () {
    return {
      darkModeOn: false,
    }
  },
  computed: {
    darkModeText: function () {
      if (this.darkModeOn) {
        return "Light Mode"
      }
      return "Dark Mode"
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
