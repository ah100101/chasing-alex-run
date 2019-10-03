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
            bottom: 30px;
            position: absolute;
            border-top: 3px solid #CCD5DB;
            border-bottom: 3px solid #CCD5DB;
        }
        &:after {
            content: "";
            height: 32px;
            top: auto;
        }
    }
    
    .timeline-content {
        padding: 40px 0 70px;
    }

    .timeline-title {
        margin: 0;
    }
}
</style>
