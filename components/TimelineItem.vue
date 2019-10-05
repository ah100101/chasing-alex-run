<template>
    <li 
      class="timeline-item"
      v-bind:style="this.backgroundImageStyle"
      v-bind:class="{ 'event-hover event-card': !item.isTimePeriod, 'period': item.isTimePeriod }">
        <div class="timeline-info">
            <span 
              v-if="!item.isTimePeriod">{{ item.date }}</span>
        </div>
        <div 
          class="timeline-marker"></div>
        <div class="timeline-content">
            <h5 
              class="timeline-title subtitle is-5"
              v-if="!item.isTimePeriod">{{ item.title }}</h5>
            <h3
              v-else 
              class="timeline-title subtitle is-3">{{ item.title }}</h3>
            <p 
              v-if="!item.isTimePeriod && item.description">{{ item.description }}</p>
            <div v-if="!item.isTimePeriod && !item.description">
              <h6 class="subtitle is-6">Finish Time: 5:15:00</h6>
              <h6 class="subtitle is-6">Average Pace: 5:15:00</h6>
              <h6 class="subtitle is-6">Overall Placement: 5:15:00</h6>
            </div>
            <a 
              v-if="!item.isTimePeriod && item.url"
              v-bind:href="item.url" 
              title="Read" 
              class="event-read-button">Read</a>
        </div>
    </li>
</template>

<script>
export default {
  components: {

  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    backgroundImageStyle: function () {
      if (this.item.isTimePeriod) {
        return ""
      }

      return `background: linear-gradient(0deg, rgba(37, 41, 46), rgba(37, 41, 46, 0.6),rgba(37, 41, 46)), url('${this.item.backgroundImage}') center center / cover no-repeat;`
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/followtheme.scss';

$primary-color: $primary-accent;
$primary-color-hover: scale-color($primary-color, $lightness: 32%);

.timeline-item {    
  padding-bottom: 3em;
  position: relative;
  padding: 2em !important;

  &:last-child {
      padding-bottom: 0;
  }

  .timeline-info {
      color: $primary-accent;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 3px;
      opacity: 0.8;
      text-transform: uppercase;
      text-align: left;
      margin-bottom: .5em;
  }

  .timeline-marker {
    
    position: absolute;
    top: 0; bottom: 0; left: 0;
    width: 15px;
    margin-left: 5px;
    
    &:before {
        background: $primary-color;
        border: 3px solid transparent;
        border-radius: 100%;
        content: "";
        display: block;
        height: 15px;
        position: absolute;
        top: 36px; left: 0;
        width: 15px;
        transition: background 0.3s ease-in-out,
                border 0.3s ease-in-out;
        z-index: 1;
    }
    
    &:after {
        content: "";
        width: 4px;
        background: $light;
        display: block;
        position: absolute;
        top: 0px; bottom: 0; left: 5px;
    }

    .timeline-item:last-child &:after {
        content: none;
    }

  }

  .timeline-content {
    padding-bottom: 40px;
    
    p:last-child {
        margin-bottom: 0;
    }
  }

  .timeline-content {
    padding: 40px 0 70px;
  }

  .event-read-button {
    background: rgba(0, 173, 181, 0.8);
    color: $light;
    font-size: .8em;
    float: left;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 30px;
    padding: 8px 30px;
    text-decoration: none;
  }
}

.timeline-item.event-hover {
  transition: all 0.5s ease-in-out;
}

.timeline-item.event-hover:hover {
  box-shadow: 0px 0px 40px #000000;
  z-index: 2;
  transform: scale(1.05);
  transition: all 0.5s ease-in-out;
}

.period {

    padding: 0;
    
    .timeline-info {
        display: none;
    }
    
    .timeline-marker {
        &:before {
            background: transparent;
            content: "";
            width: 15px;
            height: auto;
            border: none;
            border-radius: 0;
            top: 0;
            bottom: 0px;
            position: absolute;
            border-top: 3px solid $light;
            border-bottom: 3px solid $light;
        }
        &:after {
            content: "";
            height: 0px;
            top: auto;
        }
    }
    
    .timeline-content {
        padding: 0;
    }

    .timeline-title {
        margin: 0;
        line-height: 1em !important;
    }

    @media (min-width: 992px) {
      .timeline-title {
        padding-bottom: 1em;
        line-height: inherit;
      }
    }
}

</style>
