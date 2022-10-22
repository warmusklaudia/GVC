import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('../screens/Home.vue'),
      },
      {
        path: 'services',
        component: () => import('../screens/Services.vue'),
      },
      {
        path: 'about',
        component: () => import('../screens/About.vue')
      },
      {
        path: 'contact',
        component: () => import('../screens/Contact.vue'),
      },
    ],
  },
  {
    path: '/:pathMach(.*)*',
    name: 'ClientError',
    component: () => import('../screens/generic/ClientError.vue'),
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
