import { defineStore } from "pinia";

export const useBookStore = defineStore("bookStore",{
    state: () => ({
        records: [],
        books: [],
    }),
    getters:{
        total(){
            return this.records.reduce((acc,r)=>acc + (r.quantity * r.price),0);
        },
        getQuantity(){
            return this.records.reduce((acc,r)=>acc + parseInt(r.quantity),0);
        },
        async loadRecords(){
            let books = JSON.parse(localStorage.getItem('books'));
            if(books){
                this.books = books;
            } 
            return;
        }
        ,
        getChartData(){
            return {
                labels: this.records.map(d => d.item),
                datasets: [
                    {
                        backgroundColor:'#3468eb',
                        data: this.books.map(d => d.quantity),
                        borderRadius:5,
                    },
                ],
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