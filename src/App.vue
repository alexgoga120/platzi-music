<template>

  <section class="section">
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
      <div class="container">
        <div v-for="t in tracks" :key.attr="t" class="column">
          {{t.name}} - {{t.artists[0].name}}
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import trackService from "@/services/track";

export default {
  name: 'App',
  data() {
    return {
      searchQuery: '',
      tracks: []
    }
  },

  computed: {
    searchMessage(){
      return `Encontrado: ${this.tracks.length}`
    }
  },

  methods: {
    search(){
      if (!this.searchQuery){return}
      trackService.search(this.searchQuery)
          .then(res => {this.tracks = res.tracks.items})
    }
  }
}
</script>

<style lang="sass">

@import "scss/main.scss"

</style>
