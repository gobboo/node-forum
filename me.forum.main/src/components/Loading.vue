<template>
  <v-container fill-height>
    <v-layout column justify-center align-center>
      <v-progress-circular indeterminate :size="70" :width="7" :color="progressColor"></v-progress-circular>
      <h2 v-if="message != null" class="mt-3 grey--text text--darken-2">{{message}}</h2>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        name: "Loading",
        data: function () {
            return {}
        },
        props: {
            message: {type: String, default: 'Loading Module...'},
            progressColor: {type: String, default: 'purple'}
        },
    }
</script>

<style>
  .dialog.centered-dialog,
  .v-dialog.centered-dialog
 {
    background: #282c2dad;
    box-shadow: none;
    border-radius: 6px;
    width: auto;
    color: whitesmoke;
  }
</style>