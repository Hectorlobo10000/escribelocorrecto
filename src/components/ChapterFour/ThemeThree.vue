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
                <v-layout row wrap>
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterA.headers"
                        :items="data.letterA.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterB.headers"
                        :items="data.letterB.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterC.headers"
                        :items="data.letterC.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterD.headers"
                        :items="data.letterD.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterE.headers"
                        :items="data.letterE.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterF.headers"
                        :items="data.letterF.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterG.headers"
                        :items="data.letterG.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterH.headers"
                        :items="data.letterH.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterI.headers"
                        :items="data.letterI.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterJ.headers"
                        :items="data.letterJ.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterK.headers"
                        :items="data.letterK.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterL.headers"
                        :items="data.letterL.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterM.headers"
                        :items="data.letterM.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterN.headers"
                        :items="data.letterN.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterO.headers"
                        :items="data.letterO.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterP.headers"
                        :items="data.letterP.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterQ.headers"
                        :items="data.letterQ.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterR.headers"
                        :items="data.letterR.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterS.headers"
                        :items="data.letterS.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterT.headers"
                        :items="data.letterT.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterU.headers"
                        :items="data.letterU.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterV.headers"
                        :items="data.letterV.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterW.headers"
                        :items="data.letterW.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterX.headers"
                        :items="data.letterX.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterY.headers"
                        :items="data.letterY.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-2">
                  <v-flex xs12 sm12 md12>
                    <v-data-table
                        :headers="data.letterZ.headers"
                        :items="data.letterZ.desserts"
                        hide-headers
                        class="elevation-1">
                        <template slot="items" slot-scope="props">
                          <td>
                            <p class="text-xs-center">{{ props.item.word }}</p>
                          </td>
                          <td>
                            <p class="text-xs-center">{{ props.item.meaning }}</p>
                          </td>
                        </template>
                    </v-data-table>
                  </v-flex>
                </v-layout>
                <h3>{{ data.exerciseOne.title }}</h3>
                <p>
                  <vue-markdown :source="data.exerciseOne.statement.split('\\n').join('\n').split('\\t').join('\t')"></vue-markdown>
                </p>
                <v-layout row wrap class="ml-2">
                  <v-flex xs12 sm4 md4 lg4 xl4 v-for="(item, index) in data.exerciseOne.words" :key="index">
                    <v-card class="pl-4 pt-2 mr-2 mb-2 white--text" color="blue-grey darken-2">
                      <vue-markdown :source="item.name"></vue-markdown>
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
  name: 'ChapterFourThemeThree',
  data: () => ({
    themeThree: 'Theme Three',
    headers: [
      {
        text: 'word',
        align: 'center',
        sortable: false,
        value: 'word'
      },
      {
        text: 'meaning',
        align: 'center',
        sortable: false,
        value: 'meaning'
      }
    ]
  }),
  computed: mapState(['loading', 'statusCode', 'data']),
  created () {
    this.$store.dispatch('getTheme', { chapter: 'Four', theme: 'Three' })
  }
}
</script>
