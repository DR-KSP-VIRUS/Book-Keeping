<template>
    <div class="flex flex-col place-content-start place-items-center w-full">
        <div class="w-full md:max-w-[860px]">
        <h1 class="font-bold text-2xl border-b py-2">Add New Sale</h1>
            <AddBook @addrecord="handleSubmit"/>
        </div>
    </div>
</template>

<script setup>
import AddBook from "@/components/AddBook.vue";
import { useBookStore } from "@/stores/bookStore";


const bookStore = useBookStore();


const handleSubmit = (formData) => {
    bookStore.addBook({
        id: Math.floor(Math.random()*431+3),
        createAt: Date.now(),
        ...formData
    });
}


</script>