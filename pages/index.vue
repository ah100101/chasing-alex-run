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
      <div id='hero' class="hero-body centered-background">
        <div class="container has-text-centered">
          <div class="title text-cutout">
            Chasing Alex
          </div>
          <div>
            <a class="button is-primary hero-cta">View All Posts</a>
          </div>
        </div>
      </div>
    </section>

    <div class="columns is-mobile">
      <div class="column">
        <div class="container content-tiles">

          <h3 class="subtitle is-3">Latest Posts</h3>
          
          <!-- 1 -->
          <div class="tile is-ancestor dark">
            <div class="tile is-4">
              <div class="tile is-parent">
                <article class="tile is-child notification centered-background" style="background-image: url('/images/running-placeholder.jpg')">
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child notification">
                <figure class="image mobile-image">
                  <img src="/images/running-placeholder.jpg">
                </figure>
                <div class="content is-small">
                  <h2>Example Blog Title</h2>
                  <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                  <ul>
                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                    <li>Ut non enim metus.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 2 -->
          <div class="tile is-ancestor light">
            <div class="tile is-parent">
              <div class="tile is-child notification">
                <div class="content is-small">
                  <h2>Example Blog Title</h2>
                  <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                  <ul>
                    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                    <li>Ut non enim metus.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tile is-4">
              <div class="tile is-parent">
                <article class="tile is-child notification centered-background" style="background-image: url('/images/running-placeholder.jpg')">
                </article>
              </div>
            </div>
          </div>

          <div class="tile is-ancestor light">
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

  .subtitle {
    color: $light;
  }

  #hero {
    background-image: 
      linear-gradient(rgba(68, 86, 86, 0.6), rgba(68, 86, 86, 0.6)),
      url('/images/hero-placeholder.jpg');
  }

  .centered-background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .hero-layer {
    background-color: rgba(248, 247, 216, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .hero {
    padding-bottom: 3rem;

    .hero-cta {
      background-color: $primary-accent;
    }

    .text-cutout {
      background-color: $light;
      color: #000;
      mix-blend-mode: lighten;
      // margin-left: 6em;
      // margin-right: 6em;
      padding-top: 1em;
      padding-bottom: 1em;
      // min-width: 5em;
    }
  }


  .blog-content {
    background-color: $light;
  }

  .columns {
    background-color: $primary;
  }

  .dark {
    .notification {
      background-color: $dark;

      .content, h1, h2, h3 {
        color: $light;
      }
    }
  }

  .tile.image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .is-child {
    box-shadow: 0 2px 3px rgba(10,10,10,.3), 0 0 0 1px rgba(10,10,10,.3);
  }

  .mobile-image {
    display: none;
  }

  @media only screen and (min-width: 769px) {
    .text-cutout {
      margin-left: 6em;
      margin-right: 6em;
    }
  }

  @media only screen and (max-width: 769px) {
    .content {
      margin-top: .5em;
    }

    .centered-background {
      display: none;
    }

    .mobile-image {
      display: block;
    }
  }
}

</style>