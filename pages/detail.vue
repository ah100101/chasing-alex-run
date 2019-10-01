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

      <DetailHero/>

    </section>

    <div 
      class="column"
      v-bind:class="{ 'dark-mode': darkModeOn }">
      <div class="field">
        <b-switch v-model="darkModeOn">Dark Mode</b-switch>
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
      darkModeOn: false
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
