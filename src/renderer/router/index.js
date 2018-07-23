import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/layouts/LayoutDefault').default,
      children: [
        {
          path: 'dashboard',
          alias: '',
          component: require('@/components/DashboardView').default,
          name: 'Dashboard',
          meta: {description: 'Overview of environment'}
        },
        {
          path: 'settings',
          alias: '',
          component: require('@/components/SettingsView').default,
          name: 'Settings',
          meta: {description: 'Settings'}
        },
        
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})