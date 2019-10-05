<template>
  <div class="container-fluid event-timeline">
    <h3 class="subtitle is-3"></h3>
    <div class="row">
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul class="timeline timeline-centered">
                <TimelineItem
                    v-for="event in this.events"
                    v-bind:key="event.title"
                    v-bind:item="event"
                    v-bind:imageSource="event.backgroundImage"
                    v-bind:loadingImage="event.loadingImage"
                    v-bind:errorImage="event.loadingImage"
                    />
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import InteriorHero from '~/components/InteriorHero'
import Navigation from '~/components/Navigation'
import TimelineItem from '~/components/TimelineItem'

export default {
  components: {
    TimelineItem
  },
  props: {
      events: {
          type: Array,
          required: true
      }
  },
  data: function () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.events {

  .subtitle {
    color: $light;
  }

  .columns {
    background-color: $primary;
    padding-top: 2rem;
  }

  .event-timeline {

    color: $light;
    max-width: 800px;
    margin: auto;
    padding: 0 2em;

    @media (max-width: 992px) {
      padding: 0 1em;
    }

    $primary-color: $primary-accent;
    $primary-color-hover: scale-color($primary-color, $lightness: 32%);

    h1,h2,h3,h4,h5,h6 {
        color: $white;
        margin-top: 0;
    }

    .container-fluid {
      .row {
          padding: 0 0 4em 0;
          &:nth-child(even) {
              background: $primary;
          }
      }
    }

    .timeline {
        background: $dark;
        line-height: 1.4em;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        h1, h2, h3, h4, h5, h6 {
            line-height: inherit;
        }

    }

    .timeline-centered {

        .timeline-item:first-child {
            .timeline-marker::after {
                top: 37px !important;
            }
        }

        .timeline-item:last-child {
            .timeline-marker::after {
                height: 37px;
            }
        }

        box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);

        @media (min-width: 992px) {
            &,
            .timeline-item,
            .timeline-info,
            .timeline-marker,
            .timeline-content {
                display: block;
                margin: 0;
                padding: 0;
            }

            .timeline-item {
                padding-bottom: 40px;
                overflow: hidden;
            }

            .timeline-marker {
                position: absolute;
                left: 50%;
                margin-left: -7.5px;
            }

            .timeline-info,
            .timeline-content {
                width: 50%;
            }

            > .timeline-item:nth-child(odd) .timeline-info {
                float: left;
                text-align: right;
                padding-right: 30px;
            }

            > .timeline-item:nth-child(odd) .timeline-content {
                float: right;
                text-align: left;
                padding-left: 30px;
            }

            > .timeline-item:nth-child(even) .timeline-info {
                float: right;
                text-align: left;
                padding-left: 30px;
            }

            > .timeline-item:nth-child(even) .timeline-content {
                float: left;
                text-align: right;
                padding-right: 30px;
            }

            > .timeline-item:nth-child(even) .event-read-button {
                float: right;
            }

            > .timeline-item.period .timeline-content {
                float: none;
                padding: 0;
                width: 100%;
                text-align: center;
            }

            .timeline-item.period {
                padding: 50px 0 90px;
            }
            
            .period .timeline-marker:after {
                height: 0px;
                bottom: 0;
                top: auto;
            }

            .period .timeline-title {
                left: auto;
                padding-bottom: 0;
            }

        }
    }
        
    .marker-outline {
        
        .timeline-marker {
            &:before {
                background: transparent;
                border-color: $primary-color;
            }
        }

        .timeline-item:hover .timeline-marker:before {
            background: $primary-color;
        }

    }

  }
}

</style>