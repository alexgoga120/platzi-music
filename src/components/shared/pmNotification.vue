<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div class="notification" :class="[type]">
          <slot name="body">{{ msg }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg : String,
    type : String
  }
}
</script>

<style lang="scss" scoped>
.notification {
  margin: 10px;
}
</style>