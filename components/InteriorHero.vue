<template>
  <div class='home-hero'>
    <section class="hero image-as-background" v-bind:style="backgroundImageStyle">
      <div class="hero-container">
        <h1 class="hero-title animate fadeInLeft delay-600">{{ title }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      required: true
    },
    title: {
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
      return `background-image: url('${this.backgroundImage}');`
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/followtheme.scss';

$font-sans-serif : 'Roboto Condensed', sans-serif;
$font-serif      : 'Open Sans', sans-serif;
.home-hero {
  
  box-shadow: 0 19px 38px rgba($black, 0.1), 0 15px 12px rgba($black, 0.1);

  .hero {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    // needed to prevent janky scrolling in Safari
    backface-visibility: hidden;
    //100% height of the viewport minus the header
    height: 15vw;
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
    padding: 15px 50px;
    position: relative;
    z-index: 2;
    left: 0;
    
    @media screen and (min-width:640px) {
      height: 100%;
    }

    @media screen and (min-width:1344px) {
      padding: 30px 0;
      left: 0;
    }
  }

  .hero-title {
    color: $white;
    font-family: $font-serif;
    font-size: 12vw; 
    font-weight: 600;
    letter-spacing: 1px;
    line-height: .8;
    text-align: center;
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