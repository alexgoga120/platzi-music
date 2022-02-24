<template>

  <pmHeader/>

  <pm-loader v-show="isLoading"/>

  <section class="section" v-show="!isLoading">
    <nav class="nav has-shadow">
      <div class="container">
        <input v-model="searchQuery" type="text" class="input is-large" placeholder="Buscar Canción">
        <a @click="search" class="button is-info is-large">Buscar</a>
        <a class="button is-danger is-large">&times;</a>
        <p>
          <small>{{searchMessage}}</small>
        </p>
      </div>
    </nav>
    <div class="container result">
      <div class="columns is-multiline">
        <div v-for="t in tracks" :key.attr="t" class="column is-one-quarter">
          <pm-track :track="t"/>
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

export default {
  name: 'App',
  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false
    }
  },

  components: {pmFooter, pmHeader, pmTrack, pmLoader},


  computed: {
    searchMessage(){
      return `Encontrado: ${this.tracks.length}`
    }
  },

  methods: {
    search(){
      if (!this.searchQuery){return}
      this.isLoading = true;
      trackService.search(this.searchQuery)
          .then(res => {this.tracks = res.tracks.items; this.isLoading = false})
    }
  }
}
</script>

<style lang="sass">

@import "scss/main.scss"

</style>
