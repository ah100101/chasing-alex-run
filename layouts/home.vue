<template>
  <div>
    <section class="main-content">
        <nuxt />
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by Jeremy Thomas. The source code is licensed
          MIT. The website content
          is licensed CC BY NC SA 4.0.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style lang='scss'>
@import "~/assets/followtheme.scss";

html {
  background-color: $primary;
  
  .footer {
    background-color: $primary;

    p, strong {
      color: $light;
    }
  }
}


</style>