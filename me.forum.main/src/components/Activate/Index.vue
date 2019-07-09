<template>
  <v-container ma-auto>
    <v-card v-if="activation != null" class="card ma-auto">
      <v-card-title primary-title class="text-xs-center">
        <div class="mx-auto">
          <h3 class="display-1 text-xs-center">Activate Account</h3>
          <v-icon size=96 color="green" v-if="!err" class="mt-3 mb-3">far fa-check-circle</v-icon>
          <v-icon size=96 color="red" v-if="err" class="mt-3 mb-3">far fa-times-circle</v-icon>

          <div>
            <p class="subheading">{{activation.message}}</p>
          </div>
          <v-btn color="primary" to="/" large>Back to home</v-btn>
        </div>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {

  data () {
    return {
      activation: null,
      err: false
    }
  },
  
  async mounted() {    
    this.activation = (await AuthService.activate({
      secretToken: this.$route.params.secret
    })).data

    if(this.activation.status != 201)
      this.err = true
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  height: 90vh;
}

.card {
  max-width: 450px;
}

</style>
