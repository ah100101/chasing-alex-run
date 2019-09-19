<template>
  <div class='home'>
    <section class="hero is-primary is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
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
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Title
          </h1>
          <h2 class="subtitle">
            Subtitle
          </h2>
        </div>
      </div>
    </section>

    <div class="columns is-mobile">
      <div class="column">
        <div class="container content-tiles">

          <div class="tile is-ancestor box dark">
            <div class="tile is-4">
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <p class="title">Left</p>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child notification">
                <p class="title">Right</p>
              </div>
            </div>
          </div>

          <div class="tile is-ancestor box light">
            <div class="tile is-parent">
              <div class="tile is-child notification">
                <p class="title">Left</p>
              </div>
            </div>
            <div class="tile is-4">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child notification">
                    <p class="title">Right</p>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child notification">
                <p class="title">Center</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  layout: 'home',
  name: 'HomePage',
  components: {
    Card
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.home {
  
  .blog-content {
    background-color: $light;
  }

  .columns {
    background-color: $primary;
  }

  .content-tiles {

    .is-ancestor.box {
      margin-bottom: 2rem;
    }

    .box.dark {
      background-color: $dark;

      .notification {
        background-color: $light;
        color: $dark;
      }
    }

    .box.light {
      background-color: $light;

      .notification {
        background-color: $dark;
        color: $light;
      }
    }

    .box.accent {
      background-color: $primary-accent;
    }

    .box.primary {
      background-color: $primary;
    }

  }
}

</style>