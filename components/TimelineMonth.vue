<template>
  <li class="timeline-item period">
      <div class="timeline-info"></div>
      <div class="timeline-marker"></div>
      <div class="timeline-content">
          <h3 class="timeline-title subtitle is-3">{{ text }}</h3>
      </div>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
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
