<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hola Vue.js App"/>
  <input v-model="name">

  <button @click="format">Formato</button>

  <p> {{ formatName }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      name: '',
      formatName:''
    }
  },

  methods:{
    format(){
      this.formatName = this.name.split(' ').join('-').toUpperCase()
    }
  }
}
</script>

<style lang="sass">

@import "scss/main.scss"

</style>
