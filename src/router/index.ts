import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/home/HomeView.vue')
  },
  {
    path: '/accounting-services',
    name: 'AccountingServicesView',
    component: () => import('@/views/accounting/AccountingServicesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
