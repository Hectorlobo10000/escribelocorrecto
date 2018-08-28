<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm12 md12 lg12 xl12 offset-xs0>
        <template>
          <v-card color="white lighten-5">
          <v-card-text class="display-1 black--text text-xs-center">{{ theme }}</v-card-text>
          <v-divider></v-divider>
          <v-container>
            <v-layout justify-center align-content-center class="mt-5 mb-5">
              <v-flex xs12 sm12 md12 lg6 xl11>
                <v-form v-model="valid">
                  <v-text-field v-model="name" :rules="nameRules" :counter="20" label="Name" required ></v-text-field>
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required ></v-text-field>
                  <v-text-field v-model="subject" :rules="subjectRules" :counter="30" label="Subject" required ></v-text-field>
                </v-form>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        </template>
      </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    theme: 'Contactenos',
    contact: 'Contact',
    valid: false,
    name: '',
    subject: '',
    subjectRules: [
      v => !!v || 'Subject is required',
      v => v.length <= 30 || 'Subject must be less than 10 characters'
    ],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 20 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  })
}
</script>
