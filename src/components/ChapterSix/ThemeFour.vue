<template>
  <v-container>
    <template v-if="loading">
      <v-layout justify-center align-center>
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-layout>
    </template>
    <template v-else>
      <v-layout row>
        <v-flex xs12 sm12 md12 lg12 xl12 offset-xs0>
          <template v-if="statusCode == 200">
            <v-card color="white lighten-5">
            <v-card-text class="display-1 black--text text-xs-center">{{ data.theme }}</v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <h2 class="headline mb-3"> {{ data.subTheme }}</h2>
              <!-- <p v-for="(item, key) in data.paragraphs" :key="key">
                <vue-markdown :source="item.text.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
              </p> -->
            </v-card-text>
            <v-container fluid grid-list-{xs through xl}>
                <v-layout row wrap v-for="(item, key) in data.tables" :key="key">
                  <v-flex xs12 sm12 md12>
                    <p>
                      <vue-markdown :source="item.statement.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
                    </p>
                    <v-data-table
                        :headers="item.letter.headers"
                        :items="item.letter.desserts"
                        hide-actions
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-left">{{ props.item.letter }}</p>
                          </td>
                          <td>
                            <p class="text-xs-left">{{ props.item.example }}</p>
                          </td>
                          <td>
                            <p class="text-xs-left">{{ props.item.exception }}</p>
                          </td>
                        </template>
                    </v-data-table>
                    <br>
                    <br>
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
  name: 'ChapterSixThemeFour',
  data: () => ({
    theme: 'Theme Four'
  }),
  computed: mapState(['loading', 'statusCode', 'data']),
  created () {
    this.$store.dispatch('getTheme', { chapter: 'Six', theme: 'Four' })
  }
}
</script>
