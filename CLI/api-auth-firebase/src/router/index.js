import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {rutaProtegida: true}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    meta: {rutaProtegida: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
  },
  {
    path: '/register',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.rutaProtegida) {
    if(store.getters.usuarioAutenticado){
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router
