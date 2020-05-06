import Vue from 'vue'
import Router from 'vue-router'
import ProfileEdit from '@/pages/profile_edit'
import SkillTag from '@/pages/skill_tag'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/profile_edit',
      name: 'ProfileEdit',
      component: ProfileEdit
    },
    { path: '/skill_tag',
      name: 'Skilltag',
      component: SkillTag
    }
  ]
})
