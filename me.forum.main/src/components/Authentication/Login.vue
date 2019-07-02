<template>
  <v-layout row mt-5>
    <v-flex xs4 mx-auto>
      <panel title="Login">
        <form name="tab-tracker-form" autocomplete="off">
          <v-alert :value="alert" type="error" v-html="err" transition="scale-transition"/>
          <v-text-field name="username" type="username" class="input-group--focused" v-model="username" label="Username"/>
          <v-text-field name="password" type="password" class="input-group" v-model="password" label="Password"/>
          <v-btn @click="login" class="blue mx-auto" dark>Login</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from './Panel'
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      username: null,
      password: null,
      err: null,
      alert: false
    }
  },
  methods: {
    async login () {
      try {
        // Login this user parsing the email & password
        const response = await AuthService.login({
          username: this.username,
          password: this.password
        })
        //Store returned token and user data in token
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({name: "Index"})
      } catch (err) {
        this.err = err.response.data.error
        this.alert = true
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>
