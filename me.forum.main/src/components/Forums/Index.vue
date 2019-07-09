<template>

  <v-container>
    <v-layout row>
      <v-flex sm9>
        <loading v-if="!forumsModule" message="Loading Forums Module..." progressColor="blue"/>
        <forum-list></forum-list>
      </v-flex>
      <v-flex sm3 ml-4>
        <loading v-if="!statsModule" message="Loading Stats Module..." progressColor="blue"/>
        <statistics></statistics>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ForumList from './ForumList'
import Statistics from './Statistics'
import Loading from '@/components/Loading'

export default {
  data () {
    return {
      forumsModule: false,
      statsModule: false
    }
  },
  components: {
    ForumList,
    Statistics,
    Loading
  }
}
</script>

<style scoped>
.container {
  max-width: 1300px;
}
</style>
