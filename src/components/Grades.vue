<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg6 xl6 v-for="item in chapters" :key="item.id">
        <v-card>
          <v-card-media :src="item.image" height="200px"></v-card-media>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="orange" @click="navigateTo(item.link)">Explorar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Grades',
  data: () => ({
    chapters: [
      { id: 1, link: '', image: '/static/doc-images/cards/grades/GradeOne.png' },
      { id: 2, link: '', image: '/static/doc-images/cards/grades/GradeTwo.png' },
      { id: 3, link: '', image: '/static/doc-images/cards/grades/GradeThree.png' },
      { id: 4, link: '', image: '/static/doc-images/cards/grades/GradeFour.png' },
      { id: 5, link: '', image: '/static/doc-images/cards/grades/GradeFive.png' },
      { id: 6, link: '', image: '/static/doc-images/cards/grades/GradeSix.png' }
    ]
  }),
  methods: {
    navigateTo: function (nav) {
      this.$router.push(nav)
    }
  }
}
</script>
