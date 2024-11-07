<template>
    <Bar :data="chartdata" :options="options"/>
</template>

<script setup>
import { ref } from 'vue';
import { Bar } from 'vue-chartjs';
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);


const props = defineProps({
    chartdata: {
        type: Object,
        required:true
    }
});

const options = ref({
    plugins:{
        legend:{
            display:false,
        }
    },
    scales: {
        y: {
            display: true,
            grid: {
                display: false
            }
        },
        x:{
            display: true,
            grid:{
                display:false
            }
        } 
    }
})
</script>