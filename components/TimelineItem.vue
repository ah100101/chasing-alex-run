<template>
  <li class="timeline-item">
      <div class="timeline-info">
          <span>March 12, 2016</span>
      </div>
      <div class="timeline-marker"></div>
      <div class="timeline-content">
          <h5 class="timeline-title subtitle is-5">Event Title</h5>
          <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
              eu pede mollis pretium. Pellentesque ut neque.</p>
          <a href="#" title="Read" class="event-read-button">Read</a>
      </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      // required: true
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    
  }
}
</script>

<style lang='scss'>
@import '~/assets/followtheme.scss';

$primary-color: $primary-accent;
$primary-color-hover: scale-color($primary-color, $lightness: 32%);

.timeline-item {    
  padding-left: 40px;
  padding-bottom: 3em;
  position: relative;
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
    
    &:before {
        background: $primary-color;
        border: 3px solid transparent;
        border-radius: 100%;
        content: "";
        display: block;
        height: 15px;
        position: absolute;
        top: 4px; left: 0;
        width: 15px;
        transition: background 0.3s ease-in-out,
                border 0.3s ease-in-out;
    }
    
    &:after {
        content: "";
        width: 2px;
        background: $light;
        display: block;
        position: absolute;
        top: 24px; bottom: 0; left: 6px;
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

</style>
