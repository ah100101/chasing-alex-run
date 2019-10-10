<template>
  <div class='home-hero'>
    <section class="hero image-as-background" v-bind:style="this.computedBackgroundStyle">
      <div class="hero-container">
        <p class="animate fadeInLeft delay-400">{{ this.post.postDate }}</p>
        <h1 class="hero-title animate fadeInLeft delay-600">{{ this.post.title }}</h1>
        <a v-bind:href="this.computedLink" class="hero-button animate fadeInLeft delay-800" title="Click to see more">Read</a>
      </div>
    </section>
  </div>
</template>

<script>
import lazyBackgroundImageMixin from '~/mixins/lazyBackgroundImageMixin.js'

export default {
  mixins: [lazyBackgroundImageMixin],
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    computedBackgroundStyle: function () {
      return `background-image: url('${this.computedImageSrc}');`
    },
    computedLink: function () {
      return `/posts/${this.post.slug}`
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/followtheme.scss';

// vars
// $font-sans-serif : 'Roboto Condensed', sans-serif;
// $font-serif      : 'Open Sans', sans-serif;
.home-hero {
  
  .hero {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    // needed to prevent janky scrolling in Safari
    backface-visibility: hidden;
    //100% height of the viewport minus the header
    height: calc(75vh - 3em);
    overflow: hidden;
    position: relative;
    width: 100%;
    
    @media screen and (min-width:640px) {
      background-position: 50% 0;
    }

    // overlay
    &:after {
      background-color: rgba(57,62,70,.7);
      bottom: 0;
      content: '';
      left: -2000%;
      position: absolute;
      right: -2000%;
      top: 0;
      z-index: 1;
    }
  }

  .hero-container {
    box-sizing: border-box;
    height: auto;
    padding: 30px 50px;
    position: relative;
    z-index: 2;
    
    @media screen and (min-width:640px) {
      height: 100%;
    }

    @media screen and (min-width:1344px) {
      max-width: 1344px;
      margin: 0 auto;
      padding: 30px 0;
    }

    p {
      color: $primary-accent;
      // font-family: $font-sans-serif;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 6px;
      opacity: 0.8;
      text-transform: uppercase;
      text-align: left;
    }
  }

  .hero-button {
    background: rgba(0,173,181,0.8);
    color: $light;
    font-size: 1em;
    float: left;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 30px;
    padding: 15px 80px;
    text-decoration: none;

    @media screen and (max-width:640px) {
      padding: 10px 60px;
      font-size: .8em;
    }
  }

  .hero-title {
    color: white;
    // font-family: $font-serif;
    font-size: 8vw; 
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.1;
    margin: 5px 0;
    text-align: left;
    width: 85%;
    
    @media screen and (max-width:640px) {
      font-size: 12vw;
    }
  }

  .main-content {
    height: auto;
    padding: 30px 50px;
    position: relative;
    width: 60%;
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-12px, 0, 0);
      transform: translate3d(-12px, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }

  .animate {
      animation-duration: 0.75s;
      animation-fill-mode: both;
      animation-timing-function: cubic-bezier(0.2, 0.3, 0.25, 0.9);
  }

  .delay {
    animation-delay: 1s;
  }

  .delay-400 {
    animation-delay: 0.4s;
  }

  .delay-500 {
    animation-delay: 0.5s;
  }

  .delay-600 {
    animation-delay: 0.6s;
  }

  .delay-700 {
    animation-delay: 0.7s;
  }

  .delay-800 {
    animation-delay: 0.8s;
  }
}
</style>
