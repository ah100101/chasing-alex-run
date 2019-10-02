<template>
  <div class='detail'>
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
                <a href='/' class="navbar-item">
                  Home
                </a>
                <a href="/listing" class="navbar-item">
                  Posts
                </a>
                <a href="/about" class="navbar-item">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <DetailHero/>

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

export default {
  layout: 'default',
  name: 'Detail',
  components: {
    DetailHero
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
      max-height: 2.5rem;
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

  .dark-mode {
    .switch input[type=checkbox] + .check {
      background-color: #ffcd94;
    }
  }

  .switch {
    float: right;
    
    .check {
      // background-color: red;
    }

    input.checkbox {
      width: 100%;
      height: 100%;
    }


  }

}

</style>
