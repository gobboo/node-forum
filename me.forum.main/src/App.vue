<template>
  <v-app>
    <head><link href="https://use.fontawesome.com/releases/v5.6.0/css/all.css" rel="stylesheet"></head>
    <Header/>
    <main>
      <v-content fluid>
        <router-view/>
        
        <Footer/>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
</style>

