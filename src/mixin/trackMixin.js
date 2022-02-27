const trackMixin = {
    methods: {
        selectTrack () {
            this.$emit('select', this.track.id)
            this.$store.commit('setTrack', this.track)
        }
    }
}

export default trackMixin