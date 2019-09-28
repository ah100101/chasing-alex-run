<template>
  <div class='detail-hero'>
    <section class="hero image-as-background" style="background-image: url('https://images.unsplash.com/photo-1473873446975-123c5143248b');">
      <div class="hero-container">
        <div class="title-container">
          <h1 class="hero-title animate fadeInLeft delay-600">2019 Chicago <br/> Marathon Preview</h1>
          <p class="animate fadeInLeft delay-400">October 9th 2019</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {

  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/followtheme.scss';

// vars
$font-sans-serif : 'Roboto Condensed', sans-serif;
$font-serif      : 'Open Sans', sans-serif;
.detail-hero {
  
  .hero {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    // needed to prevent janky scrolling in Safari
    backface-visibility: hidden;
    //100% height of the viewport minus the header
    // height: calc(50vh - 3em);
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
      font-size: .75em;
      font-weight: bold;
      letter-spacing: 6px;
      opacity: 0.8;
      text-transform: uppercase;
      text-align: left;
      width: fit-content;
      padding: 1em 1em;
      position: absolute;
      margin-left: 2em;
      margin-top: -.3em;
      background-color: rgba(0, 173, 181, .8);
    }
  }

  .hero-title {
    color: white;
    font-family: $font-serif;
    font-size: 6vw; 
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 1.1;
    margin: 5px 0;
    text-align: left;
  }

  .title-container {
    background-color: rgba(34, 40, 49, .9);
    padding: .5em .5em;
    width: 85%;
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