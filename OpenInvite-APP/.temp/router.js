import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import login from '@/security/login/LoginPage'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
