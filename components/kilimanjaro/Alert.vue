<template>
  <section class='kili-alert'>
    
  </section>
</template>

<script>
import mapData from '~/data/kilimanjaro/route.json'
import moment from 'moment-timezone'

export default {
  components: {

  },
  mounted: function () {
    if (process.client) this.tellEveryoneAboutKiliTracker()
    // this.setTimer()
  },
  data: function () {
    return {
      tzTime: moment().tz("Africa/Nairobi")
    }
  },
  methods: {
    tellEveryoneAboutKiliTracker() {
      this.$buefy.snackbar.open({
        message: 'The Kilimanjaro climb begins in ' + this.countDown,
        position: 'is-bottom-left',
        actionText: 'Follow Along',
        indefinite: true,
        onAction: () => {
            
        }
      })
    },
    // setTimer () {
    //   setInterval(() => { 
    //     this.tzTime = moment().tz('Africa/Nairobi')
    //   }, 1000)
    // },
  },
  computed: {
    countDown() {
      let duration = moment.duration(moment.tz(mapData.movement[0].start, 'Africa/Nairobi').diff(this.tzTime)) 
      let days = duration.days()
      let hours = duration.hours()
      let minutes = duration.minutes()
      let seconds = duration.seconds()

      if (days > 1 && hours > 1) {
        return `${days} days and ${hours} hours`
      } else if (days > 1 && hours === 1) {
        return `${days} days and 1 hours`
      } else if (days === 1 && hours > 1) {
        return `${days} day and ${hours} hours`
      } else if (days === 1 && hours === 1) {
        return `${days} day and ${hours} hour`
      } else if (days < 1 && hours > 1) {
        return `${hours} hours`
      } else if (days < 1 && hours === 1) {
        return `1 hour`
      } else if (days < 1 && hours < 1 && minutes > 0) {
        return `soon`
      }

      return false
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/followtheme.scss';

.notices {
  .button {
      color: $primary-accent !important;
  }
}

</style>
