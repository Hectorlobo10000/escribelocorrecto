import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Comments from '@/components/Comments'
import Chapters from '@/components/Chapters'
import ChapterOneThemeOne from '@/components/ChapterOne/ThemeOne'
import ChapterOneThemeTwo from '@/components/ChapterOne/ThemeTwo'
import ChapterOneThemeThree from '@/components/ChapterOne/ThemeThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contactenos',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/comentarios',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/capitulos',
      name: 'Chapters',
      component: Chapters
    },
    {
      path: '/capitulo/1/tema/1',
      name: 'ChapterOneThemeOne',
      component: ChapterOneThemeOne
    },
    {
      path: '/capitulo/1/tema/2',
      name: 'ChapterOneThemeTwo',
      component: ChapterOneThemeTwo
    },
    {
      path: '/capitulo/1/tema/3',
      name: 'ChapterOneThemeThree',
      component: ChapterOneThemeThree
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      if (to.hash) {
        return {
          selector: to.hash,
          offset: { x: 0, y: 70 }
        }
      } else {
        return {
          offset: { x: 0, y: 0 }
        }
      }
    }
  }
})
