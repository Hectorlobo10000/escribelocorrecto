<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="navigateTo(child.link)"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="navigateTo(item.link)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="sm-and-down">{{ title }}</span>
      </v-toolbar-title>
      <v-text-field
        v-if="false"
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon v-if="false">
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon v-if="false">
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large v-if="false">
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <template>
      <v-footer height="auto" color="blue darken-3">
        <v-container fluid grid-list-sm>
          <v-layout row wrap class="ml-2 mt-4">
            <v-flex xs12 sm4 md4 lg4 xl4>
              <v-card class="pl-2">
                <v-layout wrap grid-list-xs>
                  <p>Otros Proyectos</p>
                  <v-flex v-for="item in projects" :key="item.link" xs12>
                    <v-btn flat round> {{ item.text }} </v-btn>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 md4 lg4 xl4>
              <v-card>
                <p>hola</p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 md4 lg4 xl4>
              <v-card>
                <p>hola</p>
              </v-card>
            </v-flex>
            <v-divider></v-divider>
            <v-flex blue darken-3 py-3 text-xs-center white--text xs12 >
            &copy;2018 — <strong>Honduras en sus Manos</strong>
          </v-flex>
          </v-layout>
        </v-container>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    title: 'Escribelo Correcto',
    items: [
      { icon: 'home', text: 'Home', link: '/' },
      { icon: 'contact_mail', text: 'Contactenos', link: '/contactenos' },
      { icon: 'comment', text: 'Déjanos tu comentario', link: '/comentarios' },
      { icon: 'book', text: 'Capítulos', link: '/capitulos' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 1',
        model: true,
        children: [
          { icon: 'school', text: 'Conceptos de gramática', link: '/capitulo/1/tema/1' },
          { icon: 'school', text: 'Ortografía', link: '/capitulo/1/tema/2' },
          { icon: 'school', text: 'El abecedario español', link: '/capitulo/1/tema/3' },
          { icon: 'school', text: 'Formas y nombres del alfabeto', link: '/capitulo/1/tema/4' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 2',
        model: false,
        children: [
          { icon: 'school', text: 'Acentuación', link: '/capitulo/2/tema/1' },
          { icon: 'school', text: 'Reglas generales de acentuación', link: '/capitulo/2/tema/2' },
          { icon: 'school', text: 'Diptongos', link: '/capitulo/2/tema/3' },
          { icon: 'school', text: 'Triptongos', link: '/capitulo/2/tema/4' },
          { icon: 'school', text: 'Tilde diacrítica', link: '/capitulo/2/tema/5' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 3',
        model: false,
        children: [
          { icon: 'school', text: 'Signos que indican pausa', link: '/capitulo/3/tema/1' },
          { icon: 'school', text: 'Uso de los signos auxiliares', link: '/capitulo/3/tema/2' },
          { icon: 'school', text: 'Signos que indican entonación', link: '/capitulo/3/tema/3' },
          { icon: 'school', text: 'El subrayado', link: '/capitulo/3/tema/4' },
          { icon: 'school', text: 'División de palabras', link: '/capitulo/3/tema/5' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 4',
        model: false,
        children: [
          { icon: 'school', text: 'Las Abreviaturas', link: '/capitulo/4/tema/1' },
          { icon: 'school', text: 'Siglas y acrónimos', link: '/capitulo/4/tema/2' },
          { icon: 'school', text: 'Glosario de abreviaturas, siglas y acrónimos más usados', link: '/capitulo/4/tema/3' },
          { icon: 'school', text: 'Glosario de símbolos', link: '/capitulo/4/tema/4' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 5',
        model: false,
        children: [
          { icon: 'school', text: 'Uso de las letras mayúsculas', link: '/capitulo/5/tema/1' },
          { icon: 'school', text: 'Uso de las letras minúsculas', link: '/capitulo/5/tema/2' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 6',
        model: false,
        children: [
          { icon: 'school', text: 'Uso de la letra B,V', link: '/capitulo/6/tema/1' },
          { icon: 'school', text: 'Uso de la letra C, S, Z', link: '/capitulo/6/tema/2' },
          { icon: 'school', text: 'Uso de la letra K, Q', link: '/capitulo/6/tema/3' },
          { icon: 'school', text: 'Uso de la letra G, J', link: '/capitulo/6/tema/4' },
          { icon: 'school', text: 'Uso de la letra H', link: '/capitulo/6/tema/5' },
          { icon: 'school', text: 'Diferencias y uso de ha y a', link: '/capitulo/6/tema/6' },
          { icon: 'school', text: 'Uso del dígrafo Ll', link: '/capitulo/6/tema/7' },
          { icon: 'school', text: 'Uso de la letra Y', link: '/capitulo/6/tema/8' },
          { icon: 'school', text: 'Uso de la letra M, N', link: '/capitulo/6/tema/9' },
          { icon: 'school', text: 'Uso de la letra R', link: '/capitulo/6/tema/10' },
          { icon: 'school', text: 'Uso deL dígrafo RR', link: '/capitulo/6/tema/11' },
          { icon: 'school', text: 'Uso de la letra X', link: '/capitulo/6/tema/12' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 7',
        model: false,
        children: [
          { icon: 'school', text: 'El sustantivo', link: '/capitulo/7/tema/1' },
          { icon: 'school', text: 'El adjetivo', link: '/capitulo/7/tema/2' },
          { icon: 'school', text: 'El género', link: '/capitulo/7/tema/3' },
          { icon: 'school', text: 'El número', link: '/capitulo/7/tema/4' },
          { icon: 'school', text: 'El artículo', link: '/capitulo/7/tema/5' },
          { icon: 'school', text: 'El pronombre', link: '/capitulo/7/tema/6' },
          { icon: 'school', text: 'El verbo', link: '/capitulo/7/tema/7' },
          { icon: 'school', text: 'Formas verbales', link: '/capitulo/7/tema/8' },
          { icon: 'school', text: 'El gerundio', link: '/capitulo/7/tema/9' },
          { icon: 'school', text: 'El adverbio', link: '/capitulo/7/tema/10' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 8',
        model: false,
        children: [
          { icon: 'school', text: 'Palabras que se escriben separadas', link: '/capitulo/8/tema/1' },
          { icon: 'school', text: 'Palabras que se escriben juntas', link: '/capitulo/8/tema/2' },
          { icon: 'school', text: 'Forman una o dos palabras según los casos', link: '/capitulo/8/tema/3' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Capítulo 9',
        model: false,
        children: [
          { icon: 'school', text: 'Vocablos de doble grafía', link: '/capitulo/9/tema/1' },
          { icon: 'school', text: 'Vocablos de doble acentuación', link: '/capitulo/9/tema/2' },
          { icon: 'school', text: 'Etimologías: listado de prefijos y sufijos', link: '/capitulo/9/tema/3' },
          { icon: 'school', text: 'Diccionario de voces con dificultad ortográfica' },
          { icon: 'school', text: 'HONDUREÑISMOS, REGIONALISMOS, EXTRANGERIMOS' }
        ]
      }
    ],
    projects: [
      { text: 'Escribelo Correcto', link: 'http://escribelocorrecto.com/' },
      { text: 'Radio Mickyandonie', link: 'http://www.mickyandonie.com/radio' },
      { text: 'Lea Honduras', link: 'http://leahonduras.com/' },
      { text: 'Hondurasensusmanos fotos', link: 'http://www.hondurasensusmanos.com/fotos' },
      { text: 'Hondurasensusmanos Noticias', link: 'http://www.hondurasensusmanos.info/' },
      { text: 'Hondurasensusmanos Turismo', link: 'http://www.rinconesdehonduras.info/' },
      { text: 'Ferias de Honduras', link: 'http://www.hondurasensusmanos.com/feriasdehonduras' }
    ]
  }),
  methods: {
    navigateTo: function (nav) {
      this.$router.push(nav)
    }
  },
  props: {
    source: String
  }
}
</script>
