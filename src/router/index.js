import Vue from 'vue'
import VueRouter from 'vue-router'
import { isLoggedIn } from "@/core/util";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'admin',
    component: () => import("@/views/layout/a-layout.vue"),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/pages/home.vue'),
        meta: {
          title: 'home',
          lock: true
        }
      },
      {
        path: '/recipes',
        name: 'recipes',
        component: () => import('@/views/pages/recipes'),
        meta: {
          title: 'recipes',
          lock: true
        }
      },
      {
        path: '/recipes/:id',
        name: 'recipes details',
        component: () => import('@/views/pages/recipes/pages/recipe-details.vue'),
        props: true,
        meta: {
          title: 'recipes details',
          lock: true
        }
      },
    ]
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('@/views/auth/signin.vue'),
    meta: {
      title: 'sign in',
    }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/views/auth/signup.vue'),
    meta: {
      title: 'sign up',
    }
  },
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '*',
    name: 'not found',
    component: () => import('@/views/error/page-404.vue'),
    meta: {
      title: 'not found',
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title
  let is = isLoggedIn()
  if(to.meta && to.meta.lock) {
    if(!is) next('/sign-in')
  }
  next()
})

export default router
