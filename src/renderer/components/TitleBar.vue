<template lang="pug">
  v-toolbar#TitleBar
    v-toolbar-title(class="body-2 grey--text") Title

    v-spacer

    v-btn icon
      v-icon(search)

</template>

<script>
  export default {
    name: "TitleBar",
  }
</script>

<style scoped lang="stylus">

</style>