import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {patch: '/',
      name: 'HomeView',
      component: Home},

      {
        path: '/RatingView',
        name: 'RatingView',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/RatingView.vue')
      }
    ]
})
router.addRoute({path: '/MyLists', component:() => import("../views/MyLists.vue")})

export default router
