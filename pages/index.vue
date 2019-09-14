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
        <div class="container">
          <section class="hero blog-content">
            <div class="hero-body">
              <!-- Main container -->
              <div class="level">
                <!-- Left side -->
                <div class="level-left">
                  <div class="level-item">
                    <p class="subtitle is-5">
                      <strong>123</strong> posts
                    </p>
                  </div>
                  <div class="level-item">
                    <div class="field has-addons">
                      <p class="control">
                        <input class="input" type="text" placeholder="Find a post">
                      </p>
                      <p class="control">
                        <button class="button">
                          Search
                        </button>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                  <p class="level-item"><strong>All</strong></p>
                  <p class="level-item"><a>Published</a></p>
                  <p class="level-item"><a>Drafts</a></p>
                  <p class="level-item"><a>Deleted</a></p>
                  <p class="level-item"><a class="button is-success">New</a></p>
                </div>
              </div>
              <div class="container">
                <h1 class="title">
                  Primary title
                </h1>
                <h2 class="subtitle">
                  Primary subtitle
                </h2>
              </div>
            </div>
          </section>
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
}

</style>