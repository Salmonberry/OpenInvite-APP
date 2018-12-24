/*global Vue*/
import Router from 'vue-router'
import login from '@/security/login/LoginPage'
import calendar from '@/calendar/CalendarPage'
import userAbout from '@/user/UserAboutPage'

Vue.use(Router)

module.exports = new Router({
  routes: [

    {
      path: '/',
      name: 'userAbout',
      component: userAbout
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/calendar-home',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/user-about',
      name: 'userAbout',
      component: userAbout
    }
  ]
})
