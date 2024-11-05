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
        getQuantity(){
            return this.books.reduce((acc,r)=>{
                return acc + parseFloat(r.quantity);
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
        ,
        getChartData(){
            return {
                labels: this.books.map(d => d.item),
                datasets: [
                    {
                        backgroundColor:'#3468eb',
                        data: this.books.map(d => d.quantity),
                        borderRadius:5,
                    },
                ]
            }
        },
        
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