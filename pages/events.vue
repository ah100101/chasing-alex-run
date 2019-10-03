<template>
  <div class='events'>
    <section class="hero is-primary is-medium">
      <Navigation />
      <InteriorHero
        title="Events"
        backgroundImage="./images/hero-placeholder.jpg" />
    </section>

    <div class="columns is-mobile">
      <div class="column event-timeline">

        <div class="container-fluid">

            <div class="row example-centered">
                <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                    <ul class="timeline timeline-centered">
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>March 12, 2016</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title subtitle is-5">Event Title</h5>
                                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                    eu pede mollis pretium. Pellentesque ut neque.</p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>March 23, 2016</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title subtitle is-5">Event Title</h5>
                                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                    eu pede mollis pretium. Pellentesque ut neque. </p>
                            </div>
                        </li>
                        <li class="timeline-item period">
                            <div class="timeline-info"></div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h3 class="timeline-title subtitle is-3">April 2016</h3>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>April 02, 2016</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title subtitle is-5">Event Title</h5>
                                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                    eu pede mollis pretium. Pellentesque ut neque. </p>
                            </div>
                        </li>
                        <li class="timeline-item">
                            <div class="timeline-info">
                                <span>April 28, 2016</span>
                            </div>
                            <div class="timeline-marker"></div>
                            <div class="timeline-content">
                                <h5 class="timeline-title subtitle is-5">Event Title</h5>
                                <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                                    eu pede mollis pretium. Pellentesque ut neque. </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InteriorHero from '~/components/InteriorHero'
import Navigation from '~/components/Navigation'

export default {
  name: 'Events',
  components: {
    InteriorHero,
    Navigation
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

    $primary-color: $primary-accent;
    $primary-color-hover: scale-color($primary-color, $lightness: 32%);

    h1,h2,h3,h4,h5,h6 {
        color: $white;
        margin-top: 0;
    }

    a {
        color: $primary-color;

        &:hover {
            color: $primary-color-hover;
            text-decoration: none;
        }
    }

    .container-fluid {

        .row {
            padding: 0 0 4em 0;
            &:nth-child(even) {
                background: $primary;
            }
        }

    }

    /*==================================
        TIMELINE
    ==================================*/

    /*-- GENERAL STYLES
    ------------------------------*/
    .timeline {

        line-height: 1.4em;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        h1, h2, h3, h4, h5, h6 {
            line-height: inherit;
        }

    }

    /*----- TIMELINE ITEM -----*/

    .timeline-item {
        
        padding-left: 40px;
        position: relative;

        &:last-child {
            padding-bottom: 0;
        }

    }

    /*----- TIMELINE INFO -----*/

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
    
    /*----- TIMELINE MARKER -----*/

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

    .timeline-item:not(.period):hover .timeline-marker:before {
        background: transparent;
        border: 3px solid $primary-color;
    }

    /*----- TIMELINE CONTENT -----*/

    .timeline-content {
        padding-bottom: 40px;
        
        p:last-child {
            margin-bottom: 0;
        }
    }

    /*----- TIMELINE PERIOD -----*/
    
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

    /*----------------------------------------------
        MOD: TIMELINE CENTERED
    ----------------------------------------------*/

    .timeline-centered {
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
                height: 30px;
                bottom: 0;
                top: auto;
            }

            .period .timeline-title {
                left: auto;
            }

        }
    }

    /*----------------------------------------------
        MOD: MARKER OUTLINE
    ----------------------------------------------*/
        
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