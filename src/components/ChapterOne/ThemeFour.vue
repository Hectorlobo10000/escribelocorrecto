<template>
  <v-container>
    <template v-if="loading">
      <v-layout justify-center align-center>
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-layout>
    </template>
    <template v-else>
      <v-layout fluid row wrap>
        <v-flex xs12 sm12 md12 lg12 xl12 offset-xs0>
          <template v-if="statusCode == 200">
            <v-card color="white lighten-5">
              <v-card-text class="display-1 black--text text-xs-center">{{ data.theme }}</v-card-text>
              <v-divider></v-divider>
              <v-container>
                <v-card-text>
                  <h2 class="headline mb-3"> {{ data.subTheme }}</h2>
                  <p v-for="(item, key) in data.paragraphs" :key="key">
                    <vue-markdown :source="item.text"></vue-markdown>
                  </p>
                </v-card-text>
              </v-container>
              <v-container fluid grid-list-sm>
                <v-layout row wrap class="ml-2">
                  <v-flex xs12 sm4 md4 lg4 xl4 v-for="(item, index) in data.items" :key="index">
                    <v-card class="pl-2 pt-2 mr-2 white--text" color="blue-grey darken-2">
                      <vue-markdown :source="`Mayúscula: ${item.upperCase}`"></vue-markdown>
                      <vue-markdown :source="`Minúscula: ${item.lowerCase}`"></vue-markdown>
                      <vue-markdown :source="`Sonido: ${item.sound}`"></vue-markdown>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </template>
          <template v-else-if="statusCode == 500">
            <v-card color="white lighten-5">
            <v-card-text class="display-1 black--text text-xs-center">Error {{ statusCode }}</v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <h2 class="headline mb-3"> {{ data.message }}</h2>
            </v-card-text>
          </v-card>
          </template>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ChapterOneThemeFour',
  data: () => ({
    theme: 'Theme Four'
  }),
  computed: mapState(['loading', 'statusCode', 'data']),
  created () {
    this.$store.dispatch('getTheme', { chapter: 'One', theme: 'Four' })
  }
}
</script>
