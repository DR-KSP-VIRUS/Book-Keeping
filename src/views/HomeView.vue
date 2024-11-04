<template>
    <div class="bg-white min-w-full rounded">
        <div class="flex flex-row place-content-between place-items-center px-1 py-3 border-b">
            <h2 class="text-2xl font-semibold text-gray-700">Sales Records</h2>
            <Icon icon="mdi:filter-list" class="text-4xl cursor-pointer bg-slate-100 rounded-full p-1" @click="()=>showMenu = true"/> 
            <div :class="['flex-col bg-gray-100 shadow-md absolute z-50 right-2 top-16' ,showMenu?'flex':'hidden']">
                <span class="py-2 px-4 cursor-pointer hover:bg-gray-50" @click="()=>showMenu = false">Today</span>
                <span class="py-2 px-4 cursor-pointer hover:bg-gray-50" @click="()=>showMenu = false">Previous Day</span>
                <span class="py-2 px-4 cursor-pointer hover:bg-gray-50" @click="()=>showMenu = false">Weekly</span>
                <span class="py-2 px-4 cursor-pointer hover:bg-gray-50" @click="()=>showMenu = false">Monthly</span>
            </div>
        </div>
        <div class="py-4 min-w-full rounded overflow-x-scroll overflow-hidden">
            <table class="table-fixed border min-w-full text-sm text-left text-gray-500">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-2">No.</th>
                        <th scope="col" class="px-6 py-2">Item</th>
                        <th scope="col" class="px-6 py-2">Category</th>
                        <th scope="col" class="px-6 py-2">Quantity</th>
                        <th scope="col" class="px-6 py-2">Price</th>
                        <th scope="col" class="px-6 py-2">Subtotal</th>
                        <th scope="col" class="px-6 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(record,i) in books" :key="record.id" class="bg-white border-t hover:bg-gray-100">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900">{{ i+1 }}</th>
                        <td class="px-6 py-4">{{ record.item }}</td>
                        <td class="px-6 py-4">{{ record.category }}</td>
                        <td class="text-center px-6 py-4">{{ record.quantity }}</td>
                        <td class="text-center px-6 py-4 whitespace-nowrap">Gh&cent; {{ record.price }}</td>
                        <td class="text-center px-6 py-4 whitespace-nowrap">Gh&cent; {{ (record.quantity * record.price).toFixed(2) }}</td>
                        <td class="text-center px-6 py-4 whitespace-nowrap">{{ formater.currentDate(record.createAt) }}</td>
                    </tr>
                    <tr class="bg-black text-white">
                        <td scope="row" colspan="5" class="px-6 text-cent py-2 font-bold">Total</td>
                        <td scope="col" colspan="1" class="px-6 font-bold whitespace-nowrap">Gh&cent; {{ total.toFixed(2) }}</td>
                        <td scope="col" colspan="1" class="px-6 font-bold"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { useBookStore } from '@/stores/bookStore';
import { DateFormator } from '@/utils/formater';
import { ref } from 'vue';

const bookStore = useBookStore();
const { books, total } = storeToRefs(bookStore);
const formater = new DateFormator();

const showMenu = ref(false);

</script>