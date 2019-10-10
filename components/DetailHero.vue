<template>
  <div class='detail-hero'>
    <section class="hero image-as-background" v-bind:style="backgroundImageStyle">
      <div class="hero-container">
        <div class="title-container">
          <h1 class="hero-title animate fadeInLeft delay-600">{{ title }}</h1>
          <p class="animate fadeInLeft delay-400">{{ date }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import lazyBackgroundImageMixin from '~/mixins/lazyBackgroundImageMixin.js'

export default {
  mixins: [lazyBackgroundImageMixin],
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    backgroundImageStyle: function () {
      return `background-image: url('${this.computedImageSrc}');`
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/followtheme.scss';

$font-sans-serif : 'Roboto Condensed', sans-serif;
$font-serif      : 'Open Sans', sans-serif;

.detail-hero {
  
  .hero {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    backface-visibility: hidden;
    overflow: hidden;
    position: relative;
    width: 100%;
    box-shadow: 0 19px 38px rgba($black, 0.1), 0 15px 12px rgba($black, 0.1);

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
    padding: 50px 50px;
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
      color: $white;
      font-family: $font-sans-serif;
      font-size: 1em;
      font-weight: bold;
      letter-spacing: 6px;
      opacity: 0.8;
      text-transform: uppercase;
      text-align: left;
      width: fit-content;
      padding: 1em 1em;
      position: absolute;
      margin-left: 3em;
      margin-top: .5em;
      background-color: rgba(0, 173, 181, .8);

      @media screen and (max-width:640px) {
        font-size: .75em;
      }  
    }
  }

  .hero-title {
    color: white;
    font-family: $font-serif;
    font-size: 4em; 
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.1;
    margin: 5px 0;
    text-align: left;

    @media screen and (max-width:640px) {
      font-size: 2em;
    }
  }

  .title-container {
    background-color: rgba(34, 40, 49, .9);
    padding: 2em;
    width: fit-content;
    margin: 2em 0;

    @media screen and (max-width:640px) {
      padding: 1em;
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