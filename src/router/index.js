import Vue from 'vue'
import Router from 'vue-router'
import ProfileEdit from '@/pages/profile_edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProfileEdit',
      component: ProfileEdit
    }
  ]
})
