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
              <template v-for="(item, key) in data.paragraphs">
                <p :key="key" v-if="key != 27">
                  <vue-markdown :source="item.text.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
                </p>
                <v-container fluid grid-list-{xs through xl} :key="key" v-if="key == 27">
                  <h3>{{ data.exerciseOne.title }}</h3>
                  <p>
                    <vue-markdown :source="data.exerciseOne.statement.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
                  </p>
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md12>
                      <v-data-table
                        :headers="data.exerciseOne.table.headers"
                        :items="data.exerciseOne.table.desserts"
                        hide-headers
                        hide-actions
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            {{ props.item.name }}
                          </td>
                          <td>
                            <v-radio :label="props.item.wordOne"></v-radio>
                          </td>
                          <td>
                            <v-radio :label="props.item.wordTwo"></v-radio>
                          </td>
                        </template>
                      </v-data-table>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-container fluid grid-list-{xs through xl} :key="key" v-if="key == 33">
                  <h3>{{ data.exerciseTwo.title }}</h3>
                  <p>
                    <vue-markdown :source="data.exerciseTwo.statement.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
                  </p>
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md12>
                      <v-data-table
                        :headers="data.exerciseTwo.table.headers"
                        :items="data.exerciseTwo.table.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            {{ props.item.name }}
                          </td>
                          <td>
                            <v-text-field name="input-3" :label="props.item.accent" disabled></v-text-field>
                          </td>
                        </template>
                      </v-data-table>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-container fluid grid-list-{xs through xl} :key="key" v-if="key == 33">
                  <h3>{{ data.exerciseThree.title }}</h3>
                  <p>
                    <vue-markdown :source="data.exerciseThree.statement.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
                  </p>
                  <p v-for="(item, key) in data.exerciseThree.paragraphs" :key="key">
                    <vue-markdown :source="item.text.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
                  </p>
                </v-container>
              </template>
            </v-card-text>
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
  name: 'ChapterTwoThemeFive',
  data: () => ({
    themeFive: 'Theme Five'
  }),
  computed: mapState(['loading', 'statusCode', 'data']),
  created () {
    this.$store.dispatch('getTheme', { chapter: 'Two', theme: 'Five' })
  }
}
</script>
