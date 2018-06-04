<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg6 xl6 v-for="item in chapters" :key="item.id">
        <v-card>
          <v-card-media src="/static/doc-images/cards/pizarra1.png" height="200px"></v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.id }}</h3>
              <div>{{ item.theme }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <!--<v-btn flat color="orange">Share</v-btn>-->
            <v-btn flat color="orange" @click="navigateTo(item.link)">Explorar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Chapters',
  data: () => ({
    chapters: [
      { id: 'Capítulo 1', theme: 'PRINCIPIOS GENERALES DE GRAMÁTICA Y ORTOGRAFÍA ESPAÑOLA', link: '/capitulo/1' },
      { id: 'Capítulo 2', theme: 'ACENTUACIÓN', link: '' },
      { id: 'Capítulo 3', theme: 'PUNTUACIÓN', link: '' },
      { id: 'Capítulo 4', theme: 'ABREVIATURAS', link: '' },
      { id: 'Capítulo 5', theme: 'USO DE LAS LETRAS MAYÚSCULAS', link: '' },
      { id: 'Capítulo 6', theme: 'REGLAS ORTOGRÁFICAS', link: '' },
      { id: 'Capítulo 7', theme: 'APÉNDICE 1', link: '' },
      { id: 'Capítulo 8', theme: 'APÉNDICE 2', link: '' },
      { id: 'Capítulo 9', theme: 'APÉNDICE 3', link: '' }
    ]
  }),
  methods: {
    navigateTo: function (nav) {
      this.$router.push(nav)
    }
  }
}
</script>
