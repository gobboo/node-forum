<template>
  <v-app>
    <Header/>
    <main>
      <v-content fluid>
        <router-view/>
        
      </v-content>
    </main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
</style>

