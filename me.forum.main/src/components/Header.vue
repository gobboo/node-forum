<template>

  <v-toolbar relative dark class="blue">
    <h2 class="heading">Node Forums</h2>

    <v-spacer/>
    
    <v-toolbar-items>
      <v-btn flat to="/">Forums</v-btn>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" to="/login">Login</v-btn>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" to="/register">Sign Up</v-btn>
      <profile v-if="$store.state.isUserLoggedIn"></profile>
      <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Profile from './Profile'

export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Forum'
      })
    }
  },
  components: {
    Profile
  }
}
</script>

<style>
</style>
