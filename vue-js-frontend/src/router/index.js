import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SignUpView from '@/views/SignUpView.vue'
import SignInView from '@/views/SignInView.vue'
import OrdersView from '@/views/OrdersView.vue'
import { useUserInfoStore } from '@/stores/userInfoStore' // Import Pinia store

const requireAdmin = (to, from, next) => {
  const userInfoStore = useUserInfoStore()
  if (userInfoStore.userInfo && userInfoStore.userInfo.isAdmin) {
    next()
  } else {
    next('/signin')
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAdmin
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    beforeEnter: requireAdmin
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView,
    beforeEnter: requireAdmin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
