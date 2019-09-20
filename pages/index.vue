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

          <!-- 1 -->
          <div class="tile is-ancestor box light">
            <div class="tile is-4">
              <div class="tile is-parent">
                <article class="tile is-child notification image" style="background-image: url('/images/running-placeholder.jpg')">
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child notification">
                <div class="content is-small">
                  <h1>Hello World</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                  <h2>Second level</h2>
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
          <div class="tile is-ancestor box light">
            <div class="tile is-parent">
              <div class="tile is-child notification">
                <div class="content is-small">
                  <h1>Hello World</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
                  <h2>Second level</h2>
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
                <article class="tile is-child notification image" style="background-image: url('/images/running-placeholder.jpg')">
                </article>
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
      }

      .content, h1, h2, h3 {
        color: $dark;
      }
    }

    .box.light {
      background-color: $light;

      .notification {
        background-color: $dark;
      }

      .content, h1, h2, h3 {
        color: $light;
      }
    }

    .box.accent {
      background-color: $primary-accent;
    }

    .box.primary {
      background-color: $primary;
    }

    .tile.image {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .is-child {
      box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    }

  }
}

</style>