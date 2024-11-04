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
            path:'/book', 
            component: ()=> import("@/views/BookView.vue"),
        }
    ]
});

export default router;