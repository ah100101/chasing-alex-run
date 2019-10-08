
export default {
  props: {
    imageSource: {
      type: String,
      required: true
    },
    loadingImage: {
      type: String,
      required: true
    },
    errorImage: {
      type: String,
      required: true
    }
  },
  methods: {
    fetchImage () {
      this.asyncImage.onload = this.imageOnLoad
      this.asyncImage.onerror = this.imageOnError
      this.imageState = 'loading'
      this.asyncImage.src = this.imageSource
    },
    imageOnLoad (success) {
      this.imageState = 'loaded'
    },
    imageOnError (error) {
      this.imageState = 'error'
      console.error(error)
    }
  },
  data: function () {
    return {
      imageState: 'loading',
      asyncImage: new Image()
    }
  },
  mounted: function () {
    if (this.loadingImage) {
      this.$nextTick(() => {
        this.fetchImage()
      })
    }
  },
  computed: {
    computedImageSrc: function () {
      if (this.imageState === 'loading') {
        return this.loadingImage
      }
      if (this.imageState === 'error') {
        return this.errorImage
      }
      if (this.imageState === 'loaded') {
        return this.asyncImage.src
      }

      return ''
    }
  }
}
