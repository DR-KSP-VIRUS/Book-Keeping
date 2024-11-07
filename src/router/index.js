import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path:'/login',
            component: ()=>import("@/views/SignInView.vue"),
        },
        {
            path: '/signup',
            component: () => import("@/views/SignUpView.vue"),
        },
        {
            component: () => import("@/views/AuthView.vue"),
            children: [
                {
                    path:'/dashboard',
                    component: () => import("@/views/Dashboard.vue"),
                },
                {
                    path:'/book',
                    component: () => import("@/views/BookView.vue"),
                }
            ]
        },
        
    ]
    
});

export default router;