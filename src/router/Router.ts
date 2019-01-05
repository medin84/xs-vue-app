import Vue from 'vue'
import Router from 'vue-router'

import { store } from '../store'
import { CHECK_AUTH } from '../store/actions.type'
// layouts
import '../layouts/navbar/Navbar.vue'
import '../layouts/sidenav/Sidenav.vue'
// components
import '../components/nav/Nav.vue'
// pages
import Workspace from '../pages/ws/Workspace.vue'
import UserProfile from '../pages/ws/user-profile/UserProfile.vue'
import View from '../pages/ws/view/View.vue'
import Form from '../pages/ws/form/Form.vue'
import Login from '../pages/login/Login.vue'
const PageNotFound = { template: '<div>Page not found</div>' }

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    name: 'workspace',
    component: Workspace,
    children: [{
      path: 'user-profile',
      name: 'UserProfile',
      component: UserProfile
    }, {
      path: 'views',
      name: 'view',
      component: View,
      props: true
    }, {
      path: 'form',
      name: 'form',
      component: Form,
      props: true
    }]
  }, {
    path: '/login',
    name: 'login',
    component: Login,
    props: true
  }, {
    path: '*',
    name: 'ERROR_404',
    component: PageNotFound
  }]
})

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next: any) => {
  return Promise.all([store.dispatch(CHECK_AUTH)]).then(response => {
    switch (to.name) {
      case 'workspace':
      case 'UserProfile':
      case 'view':
      case 'form':
        if (store.state && store.state.auth && !store.state.auth.isAuthenticated) {
          router.push({ name: 'login' })
        }
        break;
      case 'login':
        if (store.state && store.state.auth && store.state.auth.isAuthenticated) {
          router.push({ name: 'workspace' })
        }
        break;
    }

    next()
  })
})

export default router
