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
import ChapterSevenThemeThree from '@/components/ChapterSeven/ThemeThree'
import ChapterSevenThemeFour from '@/components/ChapterSeven/ThemeFour'
import ChapterSevenThemeFive from '@/components/ChapterSeven/ThemeFive'
import ChapterSevenThemeSix from '@/components/ChapterSeven/ThemeSix'
import ChapterSevenThemeSeven from '@/components/ChapterSeven/ThemeSeven'
import ChapterSevenThemeEight from '@/components/ChapterSeven/ThemeEight'
import ChapterSevenThemeNine from '@/components/ChapterSeven/ThemeNine'
import ChapterSevenThemeTen from '@/components/ChapterSeven/ThemeTen'
// Chapter Eight
import ChapterEightThemeOne from '@/components/ChapterEight/ThemeOne'
import ChapterEightThemeTwo from '@/components/ChapterEight/ThemeTwo'
import ChapterEightThemeThree from '@/components/ChapterEight/ThemeThree'
// Chapter Nine
import ChapterNineThemeOne from '@/components/ChapterNine/ThemeOne'
import ChapterNineThemeTwo from '@/components/ChapterNine/ThemeTwo'
import ChapterNineThemeThree from '@/components/ChapterNine/ThemeThree'
// Grades
import Grades from '@/components/Grades'
// Grade One
import GradeOneThemeOne from '@/components/Grades/GradeOne/ThemeOne'
import GradeOneThemeTwo from '@/components/Grades/GradeOne/ThemeTwo'
import GradeOneThemeThree from '@/components/Grades/GradeOne/ThemeThree'
import GradeOneThemeFour from '@/components/Grades/GradeOne/ThemeFour'
import GradeOneThemeFive from '@/components/Grades/GradeOne/ThemeFive'
import GradeOneThemeSix from '@/components/Grades/GradeOne/ThemeSix'
import GradeOneThemeSeven from '@/components/Grades/GradeOne/ThemeSeven'
import GradeOneThemeEight from '@/components/Grades/GradeOne/ThemeEight'
import GradeOneThemeNine from '@/components/Grades/GradeOne/ThemeNine'
import GradeOneThemeTen from '@/components/Grades/GradeOne/ThemeTen'
import GradeOneThemeEleven from '@/components/Grades/GradeOne/ThemeEleven'
import GradeOneThemeTwelve from '@/components/Grades/GradeOne/ThemeTwelve'
import GradeOneThemeThirteen from '@/components/Grades/GradeOne/ThemeThirteen'
// Grade Two
import GradeTwoThemeOne from '@/components/Grades/GradeTwo/ThemeOne'
import GradeTwoThemeTwo from '@/components/Grades/GradeTwo/ThemeTwo'
import GradeTwoThemeThree from '@/components/Grades/GradeTwo/ThemeThree'
import GradeTwoThemeFour from '@/components/Grades/GradeTwo/ThemeFour'
import GradeTwoThemeFive from '@/components/Grades/GradeTwo/ThemeFive'
import GradeTwoThemeSix from '@/components/Grades/GradeTwo/ThemeSix'
import GradeTwoThemeSeven from '@/components/Grades/GradeTwo/ThemeSeven'
import GradeTwoThemeEight from '@/components/Grades/GradeTwo/ThemeEight'
import GradeTwoThemeNine from '@/components/Grades/GradeTwo/ThemeNine'
import GradeTwoThemeTen from '@/components/Grades/GradeTwo/ThemeTen'
import GradeTwoThemeEleven from '@/components/Grades/GradeTwo/ThemeEleven'
import GradeTwoThemeTwelve from '@/components/Grades/GradeTwo/ThemeTwelve'
import GradeTwoThemeThirteen from '@/components/Grades/GradeTwo/ThemeThirteen'
import GradeTwoThemeFourteen from '@/components/Grades/GradeTwo/ThemeFourteen'
import GradeTwoThemeFifteen from '@/components/Grades/GradeTwo/ThemeFifteen'
import GradeTwoThemeSixteen from '@/components/Grades/GradeTwo/ThemeSixteen'
import GradeTwoThemeSeventeen from '@/components/Grades/GradeTwo/ThemeSeventeen'
import GradeTwoThemeEighteen from '@/components/Grades/GradeTwo/ThemeEighteen'
// Grade Three
import GradeThreeThemeOne from '@/components/Grades/GradeThree/ThemeOne'
import GradeThreeThemeTwo from '@/components/Grades/GradeThree/ThemeTwo'
import GradeThreeThemeThree from '@/components/Grades/GradeThree/ThemeThree'
import GradeThreeThemeFour from '@/components/Grades/GradeThree/ThemeFour'
import GradeThreeThemeFive from '@/components/Grades/GradeThree/ThemeFive'
import GradeThreeThemeSix from '@/components/Grades/GradeThree/ThemeSix'
import GradeThreeThemeSeven from '@/components/Grades/GradeThree/ThemeSeven'
import GradeThreeThemeEight from '@/components/Grades/GradeThree/ThemeEight'
import GradeThreeThemeNine from '@/components/Grades/GradeThree/ThemeNine'
import GradeThreeThemeTen from '@/components/Grades/GradeThree/ThemeTen'
// Grade Four
import GradeFourThemeOne from '@/components/Grades/GradeFour/ThemeOne'

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
    },
    {
      path: '/capitulo/7/tema/3',
      name: 'ChapterSevenThemeThree',
      component: ChapterSevenThemeThree
    },
    {
      path: '/capitulo/7/tema/4',
      name: 'ChapterSevenThemeFour',
      component: ChapterSevenThemeFour
    },
    {
      path: '/capitulo/7/tema/5',
      name: 'ChapterSevenThemeFive',
      component: ChapterSevenThemeFive
    },
    {
      path: '/capitulo/7/tema/6',
      name: 'ChapterSevenThemeSix',
      component: ChapterSevenThemeSix
    },
    {
      path: '/capitulo/7/tema/7',
      name: 'ChapterSevenThemeSeven',
      component: ChapterSevenThemeSeven
    },
    {
      path: '/capitulo/7/tema/8',
      name: 'ChapterSevenThemeEight',
      component: ChapterSevenThemeEight
    },
    {
      path: '/capitulo/7/tema/9',
      name: 'ChapterSevenThemeNine',
      component: ChapterSevenThemeNine
    },
    {
      path: '/capitulo/7/tema/10',
      name: 'ChapterSevenThemeTen',
      component: ChapterSevenThemeTen
    },
    {
      path: '/capitulo/8/tema/1',
      name: 'ChapterEightThemeOne',
      component: ChapterEightThemeOne
    },
    {
      path: '/capitulo/8/tema/2',
      name: 'ChapterEightThemeTwo',
      component: ChapterEightThemeTwo
    },
    {
      path: '/capitulo/8/tema/3',
      name: 'ChapterEightThemeThree',
      component: ChapterEightThemeThree
    },
    {
      path: '/capitulo/9/tema/1',
      name: 'ChapterNineThemeOne',
      component: ChapterNineThemeOne
    },
    {
      path: '/capitulo/9/tema/2',
      name: 'ChapterNineThemeTwo',
      component: ChapterNineThemeTwo
    },
    {
      path: '/capitulo/9/tema/3',
      name: 'ChapterNineThemeThree',
      component: ChapterNineThemeThree
    },
    {
      path: '/grados',
      name: 'Grades',
      component: Grades
    },
    {
      path: '/grado/1/tema/1',
      name: 'GradeOneThemeOne',
      component: GradeOneThemeOne
    },
    {
      path: '/grado/1/tema/2',
      name: 'GradeOneThemeTwo',
      component: GradeOneThemeTwo
    },
    {
      path: '/grado/1/tema/3',
      name: 'GradeOneThemeThree',
      component: GradeOneThemeThree
    },
    {
      path: '/grado/1/tema/4',
      name: 'GradeOneThemeFour',
      component: GradeOneThemeFour
    },
    {
      path: '/grado/1/tema/5',
      name: 'GradeOneThemeFive',
      component: GradeOneThemeFive
    },
    {
      path: '/grado/1/tema/6',
      name: 'GradeOneThemeSix',
      component: GradeOneThemeSix
    },
    {
      path: '/grado/1/tema/7',
      name: 'GradeOneThemeSeven',
      component: GradeOneThemeSeven
    },
    {
      path: '/grado/1/tema/8',
      name: 'GradeOneThemeEight',
      component: GradeOneThemeEight
    },
    {
      path: '/grado/1/tema/9',
      name: 'GradeOneThemeNine',
      component: GradeOneThemeNine
    },
    {
      path: '/grado/1/tema/10',
      name: 'GradeOneThemeTen',
      component: GradeOneThemeTen
    },
    {
      path: '/grado/1/tema/11',
      name: 'GradeOneThemeEleven',
      component: GradeOneThemeEleven
    },
    {
      path: '/grado/1/tema/12',
      name: 'GradeOneThemeTwelve',
      component: GradeOneThemeTwelve
    },
    {
      path: '/grado/1/tema/13',
      name: 'GradeOneThemeThirteen',
      component: GradeOneThemeThirteen
    },
    {
      path: '/grado/2/tema/1',
      name: 'GradeTwoThemeOne',
      component: GradeTwoThemeOne
    },
    {
      path: '/grado/2/tema/2',
      name: 'GradeTwoThemeTwo',
      component: GradeTwoThemeTwo
    },
    {
      path: '/grado/2/tema/3',
      name: 'GradeTwoThemeThree',
      component: GradeTwoThemeThree
    },
    {
      path: '/grado/2/tema/4',
      name: 'GradeTwoThemeFour',
      component: GradeTwoThemeFour
    },
    {
      path: '/grado/2/tema/5',
      name: 'GradeTwoThemeFive',
      component: GradeTwoThemeFive
    },
    {
      path: '/grado/2/tema/6',
      name: 'GradeTwoThemeSix',
      component: GradeTwoThemeSix
    },
    {
      path: '/grado/2/tema/7',
      name: 'GradeTwoThemeSeven',
      component: GradeTwoThemeSeven
    },
    {
      path: '/grado/2/tema/8',
      name: 'GradeTwoThemeEight',
      component: GradeTwoThemeEight
    },
    {
      path: '/grado/2/tema/9',
      name: 'GradeTwoThemeNine',
      component: GradeTwoThemeNine
    },
    {
      path: '/grado/2/tema/10',
      name: 'GradeTwoThemeTen',
      component: GradeTwoThemeTen
    },
    {
      path: '/grado/2/tema/11',
      name: 'GradeTwoThemeEleven',
      component: GradeTwoThemeEleven
    },
    {
      path: '/grado/2/tema/12',
      name: 'GradeTwoThemeTwelve',
      component: GradeTwoThemeTwelve
    },
    {
      path: '/grado/2/tema/13',
      name: 'GradeTwoThemeThirteen',
      component: GradeTwoThemeThirteen
    },
    {
      path: '/grado/2/tema/14',
      name: 'GradeTwoThemeFourteen',
      component: GradeTwoThemeFourteen
    },
    {
      path: '/grado/2/tema/15',
      name: 'GradeTwoThemeFifteen',
      component: GradeTwoThemeFifteen
    },
    {
      path: '/grado/2/tema/16',
      name: 'GradeTwoThemeSixteen',
      component: GradeTwoThemeSixteen
    },
    {
      path: '/grado/2/tema/17',
      name: 'GradeTwoThemeSeventeen',
      component: GradeTwoThemeSeventeen
    },
    {
      path: '/grado/2/tema/18',
      name: 'GradeTwoThemeEighteen',
      component: GradeTwoThemeEighteen
    },
    {
      path: '/grado/3/tema/1',
      name: 'GradeThreeThemeOne',
      component: GradeThreeThemeOne
    },
    {
      path: '/grado/3/tema/2',
      name: 'GradeThreeThemeTwo',
      component: GradeThreeThemeTwo
    },
    {
      path: '/grado/3/tema/3',
      name: 'GradeThreeThemeThree',
      component: GradeThreeThemeThree
    },
    {
      path: '/grado/3/tema/4',
      name: 'GradeThreeThemeFour',
      component: GradeThreeThemeFour
    },
    {
      path: '/grado/3/tema/5',
      name: 'GradeThreeThemeFive',
      component: GradeThreeThemeFive
    },
    {
      path: '/grado/3/tema/6',
      name: 'GradeThreeThemeSix',
      component: GradeThreeThemeSix
    },
    {
      path: '/grado/3/tema/7',
      name: 'GradeThreeThemeSeven',
      component: GradeThreeThemeSeven
    },
    {
      path: '/grado/3/tema/8',
      name: 'GradeThreeThemeEight',
      component: GradeThreeThemeEight
    },
    {
      path: '/grado/3/tema/9',
      name: 'GradeThreeThemeNine',
      component: GradeThreeThemeNine
    },
    {
      path: '/grado/3/tema/10',
      name: 'GradeThreeThemeTen',
      component: GradeThreeThemeTen
    },
    {
      path: '/grado/4/tema/1',
      name: 'GradeFourThemeOne',
      component: GradeFourThemeOne
    }
  ],
  mode: 'history'/* ,
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      if (to.hash) {
        return {
          selector: to.hash,
          offset: { x: 0, y: 0 }
        }
      } else {
        return {
          offset: { x: 0, y: 0 }
        }
      }
    }
  } */
})
