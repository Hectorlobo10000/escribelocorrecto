<template>
  <v-app id="inspire">
    <!-- drawer -->
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app temporary>
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click="navigateTo(child.link)">
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
    <!-- toolbar -->
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
      <v-toolbar-title style="width: 400px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn icon large @click="navigateTo(logo.link)">
          <v-avatar size="42px" tile>
            <img :src="logo.path" alt="Escribelo Correcto">
          </v-avatar>
        </v-btn>
        <span class="sm-and-down">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom v-for="item in btnToolbar" :key="item.text">
        <v-btn icon large slot="activator">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <span>{{ item.text }}</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="pl-0 pr-0 pt-0 pb-0">
        <v-layout justify-center align-center>
          <v-flex xs12 sm12 md12 lg12 xl12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- footer -->
    <v-footer height="auto" color="grey lighten-4">
      <v-container fluid grid-list-sm>
        <v-layout row wrap class="mt-2">
          <v-flex xs12 sm4 md4 lg4 xl4>
            <v-card class="pl-2" flat color="grey lighten-4">
              <v-layout wrap grid-list-xs>
                <span class="headline">Visitas</span>
                <v-flex xs12>
                  <img src="http://s01.flagcounter.com/count/PAhb/bg_333333/txt_FFFFFF/border_CCCCCC/columns_3/maxflags_250/viewers_Visitantes/labels_1/pageviews_1/flags_1/"  border="0" style="opacity:1;width: 300px;"/>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 md4 lg4 xl4>
            <v-card class="pl-2" flat color="grey lighten-4">
              <v-layout wrap grid-list-xs>
                <span class="headline">Visitenos</span>
                <v-flex xs12>
                  <iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F%23%21%2Fpages%2FEscribelocorrectocom%2F153123494754696&amp;width=350&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=true&amp;header=true&amp;height=400" scrolling="no" frameborder="0" style="border:none; overflow:hidden;height: 325px;" allowtransparency="true"/>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 md4 lg4 xl4>
            <v-card class="pl-2" flat color="grey lighten-4">
              <v-layout wrap grid-list-xs>
                <span class="headline">Otros Proyectos</span>
                <v-flex v-for="item in projects" :key="item.link" xs12>
                  <v-btn flat round @click="newTab(item.link)"> {{ item.text }} </v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
          <v-divider></v-divider>
          <v-divider></v-divider>
          <v-flex grey darken-3 py-3 text-xs-center white--text xs12 >
          &copy;2018 — <strong>Otro proyecto más Honduras en sus Manos</strong>
        </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
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
      /* { icon: 'contact_mail', text: 'Contactenos', link: '/contactenos' }, */
      /* { icon: 'comment', text: 'Déjanos tu comentario', link: '/comentarios' }, */
      { icon: 'book', text: 'Capítulos', link: '/capitulos' },
      { icon: 'book', text: 'Contenido por grados', link: '/grados' },
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
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Primer Grado',
        model: false,
        children: [
          { icon: 'library_books', text: 'Las vocales', link: '/grado/1/thema/1' },
          { icon: 'library_books', text: 'El abecedario', link: '/grado/1/thema/2' },
          { icon: 'library_books', text: 'Las mayúsculas', link: '' },
          { icon: 'library_books', text: 'Las minúsculas', link: '' },
          { icon: 'library_books', text: 'Sustantivos propios', link: '' },
          { icon: 'library_books', text: 'Sustantivos comunes', link: '' },
          { icon: 'library_books', text: 'Palabras largas y cortas', link: '' },
          { icon: 'library_books', text: 'Diccionario', link: '' },
          { icon: 'library_books', text: 'Separación silábica', link: '' },
          { icon: 'library_books', text: 'Sujeto y predicado', link: '' },
          { icon: 'library_books', text: 'Las sílabas', link: '' },
          { icon: 'library_books', text: 'El acento gráfico', link: '' },
          { icon: 'library_books', text: 'Dictado', link: '' }
        ]
      }
    ],
    projects: [
      { text: 'Radio Mickyandonie', link: 'http://www.mickyandonie.com/radio' },
      { text: 'Lea Honduras', link: 'http://leahonduras.com/' },
      { text: 'Hondurasensusmanos fotos', link: 'http://www.hondurasensusmanos.com/fotos' },
      { text: 'Hondurasensusmanos Noticias', link: 'http://www.hondurasensusmanos.info/' },
      { text: 'Hondurasensusmanos Turismo', link: 'http://www.rinconesdehonduras.info/' },
      { text: 'Ferias de Honduras', link: 'http://www.hondurasensusmanos.com/feriasdehonduras' }
    ],
    logo: {
      path: '/static/doc-images/books.svg',
      link: '/'
    },
    btnToolbar: [
      { text: 'Comentanos', icon: 'comment' },
      { text: 'Contactanos', icon: 'contact_mail' }
    ]
  }),
  methods: {
    navigateTo: function (nav) {
      this.$router.push(nav)
    },
    newTab: function (link) {
      window.open(link)
    }
  },
  props: {
    source: String
  }
}
</script>
