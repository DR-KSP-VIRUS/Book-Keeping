import { defineStore } from "pinia";

export const useBookStore = defineStore("bookStore",{
    state: () => ({
        book: {},
        books: [],
    }),
    getters:{
        total(){
            return this.books.reduce((acc,record)=>{
                return acc + (record.quantity * record.price);
            },0)
        },

        async loadRecords(){
            let books = JSON.parse(localStorage.getItem('books'));
            if(!books){
                return;
            } else {
                this.books = books;
            }
        }
    },
    actions:{
        addBook(formRecord){
            try {
                this.books.push(formRecord);
                this.saveToLocalStorage();
            } catch (error) {
                console.log(error)
            }
        },

        saveToLocalStorage(){
            localStorage.setItem('books', JSON.stringify(this.books));
        }
    }
})