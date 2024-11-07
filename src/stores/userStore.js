import { defineStore } from "pinia";


export const useUserStore = defineStore('userStore',{
    state: () => ({
        isAuthenticated: false,
        user:{},
    }),
    getters: {},
    actions: {
        login(){
             this.isAuthenticated = true;
        },
        signUp(user){
            this.user = user;
        }
    }
})