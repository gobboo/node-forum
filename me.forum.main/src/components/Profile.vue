<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
  >
    <template v-slot:activator="{ on }">
      <v-btn
        flat
        v-on="on"
      >
        Profile
      </v-btn>
    </template>

    <v-card mt-5>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="$store.state.user.profilePicture" alt="ProfilePicture">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{$store.state.user.username}}</v-list-tile-title>
            <v-list-tile-sub-title>{{$store.state.user.bio}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="idk" color="purple"></v-switch>
          </v-list-tile-action>
          <v-list-tile-title>PlaceHolder</v-list-tile-title>
        </v-list-tile>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn flat to="/profile/settings" @click="menu = false">Settings</v-btn>
        <v-btn color="primary" flat to="/profile" @click="menu = false">Profile</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data () {
    return {
      menu: false,
      idk: false
    }
  }
}
</script>

<style>

</style>
