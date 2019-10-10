<template>
  <div class='post-card'>
    <div v-bind:class="{ transparent: card.transparent, opaque: !card.transparent }" class="card-item">
      <div class="wrapper" v-bind:style="styleWithBackgroundImage">
        <div class="type">
          <span class="name">{{ card.type }}</span>
        </div>
        <div class="date">
          <span class="day">{{ card.day }}</span>
          <span class="month">{{ card.month }}</span>
          <span class="year">{{ card.year }}</span>
        </div>
        <div class="preview-text">
          <div class="card-content">
            <h1 class="title"><a href="#">{{ card.title }}</a></h1>
            <p class="text">{{ card.description }}</p>
            <a 
              v-bind:href='card.url' 
              class="card-button">Read Article</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    styleWithBackgroundImage: function () {
      return "background: linear-gradient(0deg,rgba(37, 41, 46, 1),rgba(37, 41, 46, 0.2)), url("+ this.card.image +") center / cover no-repeat;"
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/followtheme.scss';

.post-card {

  display: flex;

  @mixin cf {
    &::before,
    &::after {
      content: '';
      display: table;
    }
    &::after {
      clear: both;
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(to right, $primary, $dark);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    // font-family: $open-sans;
  }

  a {
    text-decoration: none;
  }

  h1 {
    // font-family: $open-sans;
    font-weight: 300;
  }

  .card-item {

    float: left;
    width: 100%;
    
    .wrapper {
      background-color: $white;
      min-height: 540px;
      position: relative;
      box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);
    }

    .preview-text {
      position: absolute;
      bottom: 0;
      width: 100%;

      .card-content {
        padding: 1em;
        position: relative;
        z-index: 1;
      }
    }

    .title {
      margin-top: 10px;
    }
    
    .text {
      height: 70px;
      margin: 0;
      color: $white;
    }
    
    .date, .type {
      position: absolute;
      top: 0;
      color: $white;
      padding: 0.8em;
      span {
        display: block;
        text-align: center;
      }
      .day {
        font-weight: 700;
        font-size: 24px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
      }
      .month {
        text-transform: uppercase;
      }
    }

    .date {
      right: 0;
      background-color: $dark;
      
      .month,
      .year {
        font-size: 12px;
      }
    }

    .type {
      left: 0;
      font-size: 12px;
      background-color: $primary-accent;
    }

    .card-button {
      display: block;
      width: 100px;
      margin: 2em auto 1em;
      text-align: center;
      font-size: 1rem;
      line-height: 1;
      position: relative;
      font-weight: 700;
      &::after {
        content: '\2192';
        opacity: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 0.3s;
      }
      &:hover {
        &::after {
          transform: translate(5px, -50%);
          opacity: 1;
        }
      }
    }
  }

  .opaque {
    .wrapper {
      background: linear-gradient(0deg,rgba(37, 41, 46, 0.3),rgba(37, 41, 46, 0.3)),url(https://images.unsplash.com/photo-1452626038306-9aae5e071dd3) 20% 1% / cover no-repeat;
    }

    .card-content {
      background-color: $white;
      box-shadow: 0 5px 30px 10px rgba($black, 0.3);
    }
    .title {
      a {
        color: lighten($black, 50%);
      }
    }
    .text {
      color: $black;
    }
    .card-button {
      color: $black;
    }
  }

  .transparent {
    .wrapper {
      background: linear-gradient(0deg,rgba(37, 41, 46, 1),rgba(37, 41, 46, 0.2)), url(https://images.unsplash.com/photo-1485388276992-0ce5ce2d6981) center / cover no-repeat;
    }
    .title {
      a {
        color: $white;
      }
    }
    .card-button {
      color: $white;
    }
  }

  @media screen and (min-width:1023px) {
    .card-item.card-item {
      .wrapper {
        overflow: hidden;
        &:hover {
          .preview-text {
            transform: translateY(0);
          }
        }
      }
    }

    .preview-text {
      transform: translateY(calc(70px + 1em));
      transition: transform 0.3s;
    }
  }
}
</style>
