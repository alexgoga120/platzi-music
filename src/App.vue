<template>

  <pmHeader/>

  <router-view>

  </router-view>

  <pmFooter/>
</template>

<script>
import pmHeader from './components/layout/pmHeader.vue';
import pmFooter from './components/layout/pmFooter.vue';
export default {
  name: 'App',
  components: {pmFooter, pmHeader}
}
</script>

<style lang="sass">
@import "scss/main.scss"
</style>