<template lang="pug">
  #app
    router-view
</template>

<script>
import TitleBar from "./components/TitleBar";
export default {
  name: "app",
  components: {
    "title-bar": TitleBar
  }
};
</script>

<style lang="stylus">
  body, html
    overflow: hidden !important
</style>
