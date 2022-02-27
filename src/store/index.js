import {createStore} from 'vuex'
import trackService from "@/services/track";

export default createStore({
    state: {
        track: {}
    },

    getters: {
        trackTitle(state) {
            if (!state.track.name) {
                return ''
            }
            return `${state.track.name} - ${ state.track.artists[0].name }`
        }
    },

    mutations: {
        setTrack(state, track) {
            state.track = track
        }
    },

    actions: {
        getTrackById(context, payload) {
            return trackService.getById(payload.id)
                .then(res => {
                    context.commit('setTrack', res)
                    return res
                })
        }
    }
})
