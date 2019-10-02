<template>
  <div class="main-nav">
    <div class='hero-head'>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item logo">
              <img src="/images/logo.png" alt="Logo">
            </a>
            <span class="navbar-burger burger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">
                Home
              </a>
              <a class="navbar-item">
                Posts
              </a>
              <a class="navbar-item">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.main-nav {
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
}

</style>
