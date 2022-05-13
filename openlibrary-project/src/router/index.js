import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'HomeView',
            component: Home
        },

        {
            path: '/RatingView',
            name: 'RatingView',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/RatingView.vue')
        },
        {
            path: '/MyLists',
            name: 'MyLists',
            component: () =>
                import ('../views/MyLists.vue')
        },
        {
            path: '/SearchView',
            name: 'SearchView',
            component: () =>
                import ('../views/SearchView.vue')
        },
        {
            path: '/MapView',
            name: 'MapView',
            component: () =>
                import ('../views/MapView.vue')
        },
        {
            path: '/BookInfoView',
            name: 'BookInfoView',
            component: () =>
                import ('../views/BookInfoView.vue')
        },
        {
            path: '/QuizView',
            name: 'QuizView',
            component: () =>
                import ('../views/QuizView.vue')
        },
    ]
})
router.addRoute({
    path: '/MyLists',
    component: () =>
        import ("../views/MyLists.vue")
})
router.addRoute({
    path: '/SearchView',
    component: () =>
        import ("../views/SearchView.vue")
})

export default router