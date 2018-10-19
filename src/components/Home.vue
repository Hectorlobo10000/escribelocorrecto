<template>
  <div>
    <transition name="home" enter-active-class="animated fadeIn" appear :duration="2000">
      <v-parallax :src="parallaxImg" height="600">
          <transition name="logo" enter-active-class="animated bounceInDown" appear :duration="800">
            <v-layout column align-center justify-center class="white--text">
              <img :src="path" alt="Escribelo Correto" height="200" width="200">
              <transition name="text" enter-active-class="animated bounceInDown" appear :duration="10000">
                <h1 class="white--text mb-2 display-2 text-xs-center">Bienvenido a Escríbelo Correcto</h1>
              </transition>
            </v-layout>
          </transition>
      </v-parallax>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    home: 'Home',
    parallaxImg: 'static/doc-images/backgrounds/material.jpg',
    path: 'static/doc-images/books.svg'
  })
}
</script>
