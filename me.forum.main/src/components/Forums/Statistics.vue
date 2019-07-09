<template>

  <v-card>
    <v-toolbar color="blue" dark>
      <v-toolbar-side-icon><v-icon medium class="mr-2">fas fa-chart-bar</v-icon></v-toolbar-side-icon>
      <v-divider vertical light inset></v-divider>
      <v-toolbar-title>Forum Statistics</v-toolbar-title>
    </v-toolbar>
    <v-card-title>
      
        <v-list two-line subheader>
          <v-subheader>Threads</v-subheader>

          <v-list-tile
            v-for="stats in statistics"
            :key="stats.id"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider></v-divider>

          <v-subheader>Users</v-subheader>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
    </v-card-title>

  </v-card>
</template>

<script>
export default {
  mounted() {
    this.$parent.statsModule = true;
  }
}
</script>

<style>

</style>
