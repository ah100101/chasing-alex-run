<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Chasing Alex Run</strong> designed and built by <a class="email" href="mailto:alex@hawley.tech">Alex Hawley</a>
      </p>
      <p class="text-with-image">
        MIT licensed | Copyright (c) 2022 Alex Hawley
      </p>
      <p>
        <a href="https://github.com/ah100101/chasing-alex-run">
          <img class="github" src="/images/site/GitHub-Mark-Light-64px.png"/>
        </a> 
        <a href="https://www.netlify.com">
          <img class="vercel" src="/images/site/vercel-logotype-light.png"/>
        </a>
      </p>
    </div>
  </footer>
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

.footer {
  background-color: $primary !important;

  p, strong, a {
    color: $light;
  }

  .text-with-image {
    display: flex;
    justify-content: center;
  }

  .github, .vercel {
    height: 50px;
    margin: 0 10px;
  }

  .nuxt {
    height: 20px;
  }

  .email {
    text-decoration: underline;
  }

  .email:hover {
    color: $white;
  }
}

</style>
