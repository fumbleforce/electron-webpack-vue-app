<template lang="pug">
  v-app#inspire(dark)
    v-navigation-drawer(v-model="drawer" clipped fixed app)
      v-list(dense)
        v-list-tile(@click="$router.push('/dashboard')")
          v-list-tile-action
            v-icon dashboard
          v-list-tile-content
            v-list-tile-title Dashboard
        v-list-tile(@click="$router.push('/settings')")
          v-list-tile-action
            v-icon settings
          v-list-tile-content
            v-list-tile-title Settings
    v-toolbar#title-bar(app clipped-left dense)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Application
      v-spacer

      v-btn(icon @click="minimize")
        v-icon expand_more
      v-btn(icon v-if="!maximized" @click="fullscreen")
        v-icon fullscreen
      v-btn(icon v-if="maximized" @click="fullscreenExit")
        v-icon fullscreen_exit
      v-btn(icon @click="close")
        v-icon close
    v-content
      v-container(fluid fill-height)
        v-layout(justify-center align-center)
          router-view
</template>

<script>
  export default {
    name: "LayoutDefault",
    data: () => ({
      drawer: true,
      maximized: false
    }),
    props: {
      source: String
    },
    methods: {
      minimize () {
        this.$electron.remote.BrowserWindow.getFocusedWindow().minimize();
      },
      fullscreen () {
        this.$electron.remote.BrowserWindow.getFocusedWindow().maximize();
        this.maximized = true;
      },
      fullscreenExit () {
        this.$electron.remote.BrowserWindow.getFocusedWindow().unmaximize();
        this.maximized = false;
      },
      close () {
        this.$electron.remote.BrowserWindow.getFocusedWindow().close();

      }
    }
  }
</script>

<style scoped lang="stylus">
  #title-bar
    -webkit-app-region: drag

  button
    -webkit-app-region: no-drag

</style>