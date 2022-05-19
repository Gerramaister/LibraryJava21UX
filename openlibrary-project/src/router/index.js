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
            path: '/BookstoresView',
            name: 'BookstoresView',
            component: () =>
                import ('../views/BookstoresView.vue')
        },
        {
            path: '/BookInfoView',
            name: 'BookInfoView',
            component: () =>
                import ('../views/BookInfoView.vue')
        },
        {
            path: '/QuizCategoryView',
            name: 'QuizCategoryView',
            component: () =>
                import ('../views/QuizCategoryView.vue')
        },
        {
            path: '/MapView',
            name: 'MapView',
            component: () =>
                import ('../views/MapView.vue')
        },
        {
            path: '/QuizView',
            name: 'Quiz',
            component: () =>
                import ('../views/QuizView.vue')
        },
        {
            path: '/CategoriesView',
            name: 'Categories',
            component: () => 
                import ('../views/CategoriesView.vue')
        }
        
    ]
})
export default router