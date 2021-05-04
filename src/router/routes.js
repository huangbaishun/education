const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue')
  }
]
export default routes;