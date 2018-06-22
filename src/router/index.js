import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Comments from '@/components/Comments'
import Chapters from '@/components/Chapters'
// Chapter One
import ChapterOneThemeOne from '@/components/ChapterOne/ThemeOne'
import ChapterOneThemeTwo from '@/components/ChapterOne/ThemeTwo'
import ChapterOneThemeThree from '@/components/ChapterOne/ThemeThree'
import ChapterOneThemeFour from '@/components/ChapterOne/ThemeFour'
// Chapter Two
import ChapterTwoThemeOne from '@/components/ChapterTwo/ThemeOne'
import ChapterTwoThemeTwo from '@/components/ChapterTwo/ThemeTwo'
import ChapterTwoThemeThree from '@/components/ChapterTwo/ThemeThree'
import ChapterTwoThemeFour from '@/components/ChapterTwo/ThemeFour'
import ChapterTwoThemeFive from '@/components/ChapterTwo/ThemeFive'

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
    },
    {
      path: '/capitulo/1/tema/4',
      name: 'ChapterOneThemeFour',
      component: ChapterOneThemeFour
    },
    {
      path: '/capitulo/2/tema/1',
      name: 'ChapterTwoThemeOne',
      component: ChapterTwoThemeOne
    },
    {
      path: '/capitulo/2/tema/2',
      name: 'ChapterTwoThemeTwo',
      component: ChapterTwoThemeTwo
    },
    {
      path: '/capitulo/2/tema/3',
      name: 'ChapterTwoThemeThree',
      component: ChapterTwoThemeThree
    },
    {
      path: '/capitulo/2/tema/4',
      name: 'ChapterTwoThemeFour',
      component: ChapterTwoThemeFour
    },
    {
      path: '/capitulo/2/tema/5',
      name: 'ChapterTwoThemeFive',
      component: ChapterTwoThemeFive
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
