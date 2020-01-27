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
  },
  data: function () {
    return {
      
    }
  },
  methods: {
    tellEveryoneAboutKiliTracker() {
      this.$buefy.snackbar.open({
        // type: 'is-accent',
        message: 'The Kilimanjaro climb begins in ',
        position: 'is-bottom-left',
        actionText: 'Follow Along',
        indefinite: true,
        onAction: () => {
            
        }
      })
    }
  },
  computed: {

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
