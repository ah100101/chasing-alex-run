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
              <a href="/" class="navbar-item is-active">
                Home
              </a>
              <a href="/posts" class="navbar-item">
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
      max-height: 4.5rem;
    }
  }
  
  .navbar-item.logo {
    padding: 0;
  }

  .navbar-burger {
    color: $light;
    height: 4.5rem;
  }

  .subtitle {
    color: $light;
  }
}

</style>
