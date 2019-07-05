<template>
  <v-layout row mt-5>
    <v-flex xs4 mx-auto>
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
          <v-alert :value="alert" type="error" v-html="err" transition="scale-transition"/>
          <v-text-field name="email" :error-messages="emailErrors" type="email" class="input-group--focused" v-model="email" label="Email Address" @input="$v.email.$touch()" @blur="$v.email.$touch()" required/>
          <v-text-field name="username" :error-messages="usernameErrors" type="username" class="input-group--focused" v-model="username" label="Username" @input="$v.username.$touch()" @blur="$v.username.$touch()" required/>
          <v-text-field name="password" :error-messages="passwordErrors" type="password" class="input-group" v-model="password" label="Password" @input="$v.password.$touch()" @blur="$v.password.$touch()" required/>
          <v-text-field name="confirmpassword" :error-messages="cPasswordErrors" type="password" class="input-group" v-model="cpassword" label="Confirm Password" @input="$v.cpassword.$touch()" @blur="$v.cpassword.$touch()" required/>
          <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue.']" label="You agree to our TOS by signing up" required></v-checkbox>
          <v-btn @click="register" class="blue mx-auto" dark>Register</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from './Panel'
import AuthService from '@/services/AuthService'

import { validationMixin } from 'vuelidate'
import { required, maxLength, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    username: { required, maxLength: maxLength(12) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    cpassword: { required, sameAsPassword: sameAs('password')}
  },
  data () {
    return {
      email: '',
      username: '',
      password: '',
      cpassword: '',
      checkbox: false,
      err: null,
      alert: false
    }
  },
  methods: {
    async register () {
      this.$v.$touch()

      if(!this.$v.$anyError) {
        try {
          // Register this user parsing the email & password
          const response = await AuthService.register({
            email: this.email,
            username: this.username,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (err) {
          this.err = err.response.data.error
          this.alert = true
        }
      }
    }
  },
  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength && errors.push('Username must be at max 12 characters long')
      !this.$v.username.required && errors.push('Username is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Your password must be at minimum 8 characters long')
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
    cPasswordErrors () {
      const errors = []
      if (!this.$v.cpassword.$dirty) return errors
      !this.$v.cpassword.required && errors.push('Confirmation Password is required')
      !this.$v.cpassword.sameAsPassword && errors.push('Passwords are different')
      return errors
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>
