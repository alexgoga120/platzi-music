const trackMixin ={
    methods:{
        selectTrack() {
            this.$emit('select', this.track.id)
            this.emitter.emit('set-track', this.track)
            this.state = 1
        }
    }
}

export default trackMixin