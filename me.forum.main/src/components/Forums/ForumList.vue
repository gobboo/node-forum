<template>
  <div>
    <div v-if="forums != null">
    <template v-for="category in categories">
      <v-card :key="category.id" class="mb-4">
        <v-toolbar color="blue" dark>
          <v-toolbar-side-icon class="mr-3"><v-icon medium>{{category.icon}}</v-icon></v-toolbar-side-icon>
          <v-divider vertical light inset></v-divider>
          <v-toolbar-title>{{category.category}} <span class="subheading"> - {{category.description}}</span></v-toolbar-title>

          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list two-line subheader>
          <v-list-tile
            v-for="forum in getForums(category.id)"
            :key="forum.id"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon medium>{{ forum.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ forum.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ forum.description }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn :to="{name: 'Forum', params: { forumId: forum.id }}">
                <v-icon class="grey--text mr-2">fas fa-eye</v-icon>
                VIEW
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </template>
    </div>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService.js'
import ForumService from '@/services/ForumService.js'

export default {
  data () {
    return {
      categories: null,
      forums: null
    }
  },
  async mounted () {
    this.categories = (await CategoryService.index()).data
    this.forums = (await ForumService.index()).data
    this.$parent.forumsModule = true;
  },
  methods: {
     getForums(categoryId) {
       return this.forums.filter(function(u) {
         return u.categoryId === categoryId
      })
    }
  }
}
</script>

<style>

</style>
