<template>
  <div v-cloak>
    <section class="main-content">
        <nuxt />
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Chasing Alex Run</strong> designed and built by <a class="email" href="mailto:alex@hawley.tech">Alex Hawley</a>
        </p>
        <p class="text-with-image">
          MIT licensed | Copyright (c) 2019 Alex Hawley
        </p>
        <p>
          <a href="https://github.com/ah100101/chasing-alex-run">
            <img class="github" src="/images/site/GitHub-Mark-Light-64px.png"/>
          </a> 
          <a href="https://www.netlify.com">
            <img src="https://www.netlify.com/img/global/badges/netlify-light.svg"/>
          </a>
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

    p, strong, a {
      color: $light;
    }

    .text-with-image {
      display: flex;
      justify-content: center;
    }

    .github {
      height: 50px;
      margin: 0 6px;
    }

    .nuxt {
      height: 20px;
    }

    .email {
      text-decoration: underline;
    }
  }
}


</style>