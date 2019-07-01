<template>

  <v-toolbar relative dark class="primary">
    <v-btn icon href="https://github.com/Mobles" target="_blank"><v-icon>fab fa-github</v-icon></v-btn>
    <v-btn icon href="https://twitter.com/stubbingssamuel" target="_blank"><v-icon>fab fa-twitter</v-icon></v-btn>

    <v-spacer/>
    
    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/blogs">Blogs</v-btn>
      <v-btn flat to="/resume">Resume</v-btn>
      <v-btn flat v-if="$store.state.isUserLoggedIn"  @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Index'
      })
    }
  }
}
</script>

<style>
</style>
