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
              <p v-for="(item, key) in data.paragraphs" :key="key">
                <vue-markdown :source="item.text.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
              </p>
            </v-card-text>
            <v-container fluid grid-list-{xs through xl}>
              <h3>{{ data.exerciseOne.title }}</h3>
              <p>
                <vue-markdown :source="data.exerciseOne.statement.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
              </p>
              <v-layout row wrap>
                <v-flex xs12 sm12 md12 class="pr-1">
                  <v-data-table
                    :headers="data.exerciseOne.table.headers"
                    :items="data.exerciseOne.table.desserts"
                    hide-headers
                    class="elevation-1">
                    <template slot="items" slot-scope="props">
                        <td>
                          {{ props.item.name }}
                        </td>
                        <td>
                          <v-flex xs12 sm12 md12 class="pl-1">
                              <v-text-field name="input-3" :label="props.item.exercise" disabled></v-text-field>
                            </v-flex>
                        </td>
                    </template>
                  </v-data-table>
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
  name: 'ChapterThreeThemeFive',
  data: () => ({
    theme: 'Theme Five'
  }),
  computed: mapState(['loading', 'statusCode', 'data']),
  created () {
    this.$store.dispatch('getTheme', { chapter: 'Three', theme: 'Five' })
  }
}
</script>
