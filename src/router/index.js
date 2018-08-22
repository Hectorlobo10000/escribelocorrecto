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
// Chapter Three
import ChapterThreeThemeOne from '@/components/ChapterThree/ThemeOne'
import ChapterThreeThemeTwo from '@/components/ChapterThree/ThemeTwo'
import ChapterThreeThemeThree from '@/components/ChapterThree/ThemeThree'
import ChapterThreeThemeFour from '@/components/ChapterThree/ThemeFour'
import ChapterThreeThemeFive from '@/components/ChapterThree/ThemeFive'
// Chapter Four
import ChapterFourThemeOne from '@/components/ChapterFour/ThemeOne'
import ChapterFourThemeTwo from '@/components/ChapterFour/ThemeTwo'
import ChapterFourThemeThree from '@/components/ChapterFour/ThemeThree'
import ChapterFourThemeFour from '@/components/ChapterFour/ThemeFour'
// Chapter Five
import ChapterFiveThemeOne from '@/components/ChapterFive/ThemeOne'
import ChapterFiveThemeTwo from '@/components/ChapterFive/ThemeTwo'
// Chapter Six
import ChapterSixThemeOne from '@/components/ChapterSix/ThemeOne'
import ChapterSixThemeTwo from '@/components/ChapterSix/ThemeTwo'
import ChapterSixThemeThree from '@/components/ChapterSix/ThemeThree'
import ChapterSixThemeFour from '@/components/ChapterSix/ThemeFour'
import ChapterSixThemeFive from '@/components/ChapterSix/ThemeFive'
import ChapterSixThemeSix from '@/components/ChapterSix/ThemeSix'
import ChapterSixThemeSeven from '@/components/ChapterSix/ThemeSeven'
import ChapterSixThemeEight from '@/components/ChapterSix/ThemeEight'
import ChapterSixThemeNine from '@/components/ChapterSix/ThemeNine'
import ChapterSixThemeTen from '@/components/ChapterSix/ThemeTen'
import ChapterSixThemeEleven from '@/components/ChapterSix/ThemeEleven'
import ChapterSixThemeTwelve from '@/components/ChapterSix/ThemeTwelve'
// Chapter Seven
import ChapterSevenThemeOne from '@/components/ChapterSeven/ThemeOne'
import ChapterSevenThemeTwo from '@/components/ChapterSeven/ThemeTwo'

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
    },
    {
      path: '/capitulo/3/tema/1',
      name: 'ChapterThreeThemeOne',
      component: ChapterThreeThemeOne
    },
    {
      path: '/capitulo/3/tema/2',
      name: 'ChapterThreeThemeTwo',
      component: ChapterThreeThemeTwo
    },
    {
      path: '/capitulo/3/tema/3',
      name: 'ChapterThreeThemeThree',
      component: ChapterThreeThemeThree
    },
    {
      path: '/capitulo/3/tema/4',
      name: 'ChapterThreeThemeFour',
      component: ChapterThreeThemeFour
    },
    {
      path: '/capitulo/3/tema/5',
      name: 'ChapterThreeThemeFive',
      component: ChapterThreeThemeFive
    },
    {
      path: '/capitulo/4/tema/1',
      name: 'ChapterFourThemeOne',
      component: ChapterFourThemeOne
    },
    {
      path: '/capitulo/4/tema/2',
      name: 'ChapterFourThemeTwo',
      component: ChapterFourThemeTwo
    },
    {
      path: '/capitulo/4/tema/3',
      name: 'ChapterFourThemeThree',
      component: ChapterFourThemeThree
    },
    {
      path: '/capitulo/4/tema/4',
      name: 'ChapterFourThemeFour',
      component: ChapterFourThemeFour
    },
    {
      path: '/capitulo/5/tema/1',
      name: 'ChapterFiveThemeOne',
      component: ChapterFiveThemeOne
    },
    {
      path: '/capitulo/5/tema/2',
      name: 'ChapterFiveThemeTwo',
      component: ChapterFiveThemeTwo
    },
    {
      path: '/capitulo/6/tema/1',
      name: 'ChapterSixThemeOne',
      component: ChapterSixThemeOne
    },
    {
      path: '/capitulo/6/tema/2',
      name: 'ChapterSixThemeTwo',
      component: ChapterSixThemeTwo
    },
    {
      path: '/capitulo/6/tema/3',
      name: 'ChapterSixThemeThree',
      component: ChapterSixThemeThree
    },
    {
      path: '/capitulo/6/tema/4',
      name: 'ChapterSixThemeFour',
      component: ChapterSixThemeFour
    },
    {
      path: '/capitulo/6/tema/5',
      name: 'ChapterSixThemeFive',
      component: ChapterSixThemeFive
    },
    {
      path: '/capitulo/6/tema/6',
      name: 'ChapterSixThemeSix',
      component: ChapterSixThemeSix
    },
    {
      path: '/capitulo/6/tema/7',
      name: 'ChapterSixThemeSeven',
      component: ChapterSixThemeSeven
    },
    {
      path: '/capitulo/6/tema/8',
      name: 'ChapterSixThemeEight',
      component: ChapterSixThemeEight
    },
    {
      path: '/capitulo/6/tema/9',
      name: 'ChapterSixThemeNine',
      component: ChapterSixThemeNine
    },
    {
      path: '/capitulo/6/tema/10',
      name: 'ChapterSixThemeTen',
      component: ChapterSixThemeTen
    },
    {
      path: '/capitulo/6/tema/11',
      name: 'ChapterSixThemeEleven',
      component: ChapterSixThemeEleven
    },
    {
      path: '/capitulo/6/tema/12',
      name: 'ChapterSixThemeTwelve',
      component: ChapterSixThemeTwelve
    },
    {
      path: '/capitulo/7/tema/1',
      name: 'ChapterSevenThemeOne',
      component: ChapterSevenThemeOne
    },
    {
      path: '/capitulo/7/tema/2',
      name: 'ChapterSevenThemeTwo',
      component: ChapterSevenThemeTwo
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
