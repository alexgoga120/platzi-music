<template>

  <pmHeader/>

  <pm-notification v-if="showNotification" msg="No se encontraron resultados ☹" type="is-danger">
    <template v-slot:body/>
  </pm-notification>
  <pm-notification v-else-if="showNotification == false" msg="Todo bien 👌" type="is-success">
    <template v-slot:body/>
  </pm-notification>

  <pm-loader v-show="isLoading"/>

  <section class="section" v-show="!isLoading">
    <nav class="nav">
      <div class="container">
        <input v-model="searchQuery" type="text" class="input is-large" placeholder="Buscar Canción">
        <a @click="search" class="button is-info is-large">Buscar</a>
        <a class="button is-danger is-large">&times;</a>
        <p>
          <small>{{ searchMessage }}</small>
        </p>
      </div>
    </nav>
    <div class="container result">
      <div class="columns is-multiline">
        <div v-for="t in tracks" :key.attr="t" class="column is-one-quarter">
          <pm-track :track="t" :class="{'is-active': t.id == selectedTrack}" @select="setSelectedTrack"/>
        </div>
      </div>
    </div>

  </section>

  <pmFooter/>
</template>

<script>
import trackService from "@/services/track";
import pmHeader from './components/layout/pmHeader.vue';
import pmFooter from './components/layout/pmFooter.vue';

import pmTrack from './components/pmTrack.vue';
import pmLoader from './components/shared/pmLoader.vue';
import pmNotification from './components/shared/pmNotification.vue';

export default {
  name: 'App',
  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack : '',
      showNotification: null
    }
  },

  components: {pmFooter, pmHeader, pmTrack, pmLoader, pmNotification},


  computed: {
    searchMessage() {
      return `Encontrado: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification(){
        setTimeout(() => {
          this.showNotification = null
        }, 3000)
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return
      }
      this.isLoading = true;
      trackService.search(this.searchQuery)
          .then(res => {
            this.showNotification = res.tracks.total === 0;
            this.tracks = res.tracks.items;
            this.isLoading = false
          })
    },
    setSelectedTrack (id){
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="sass">

@import "scss/main.scss"

</style>
