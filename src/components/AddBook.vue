<template>
    <form class="flex flex-col py-4 " @submit.prevent="addBookRecord">
        <div class="flex flex-col">
            <label for="item" class="font-bold">Item:</label>
            <input type="text" name="item" id="item" 
                placeholder="Enter Item Name...." 
                class="border rounded px-2 py-1 outline-orange-400 my-1"
                v-model="formData.item"
                @blur="!formData.item ? errorFields.item = 'Field can\'t be empty': errorFields.item = '' "
            />
            <span class="text-red-600">{{ errorFields.item }}</span>
        </div>
        <div class="flex flex-col my-2 ">
            <label for="price" class="font-bold">Price:</label>
            <input type="text" name="price" id="price" 
                placeholder="e.g 100.00" 
                class="border rounded px-2 py-1 outline-orange-400 my-1"
                v-model="formData.price"
                @blur="!formData.price ? errorFields.price = 'Field can\'t be empty': errorFields.price = '' "

            />
            <span class="text-red-500">{{ errorFields.price }}</span>
        </div>
        <div class="flex flex-col my-2">
            <label for="quantity" class="font-bold">Quantity:</label>
            <input type="text" name="quantity" id="quantity" 
                placeholder="e.g 100" 
                class="border rounded px-2 py-1 outline-orange-400 my-1"
                v-model="formData.quantity"
                @blur="!formData.quantity ? errorFields.quantity = 'Field can\'t be empty': errorFields.quantity = '' "

            />
            <span class="text-red-500">{{ errorFields.quantity }}</span>
        </div>
        <div class="flex flex-col my-2">
            <label for="category" class="font-bold">Category:</label>
            <select v-model="formData.category" name="category" id="category" class="border rounded px-2 py-1 outline-orange-400 my-1"
            @blur="!formData.category ? errorFields.category = 'Field can\'t be empty': errorFields.category = '' "
            >
                <option disabled value="">Please select one</option>
                <option value="groceries">Groceries</option>
                <option value="toiletories">Toiletories</option>
                <option value="fruits">Fruits</option>
            </select>
            <span class="text-red-500">{{ errorFields.category }}</span>
        </div>
        <div class="flex flex-col my-2">
            <label for="status" class="font-bold">Status:</label>
            <select v-model="formData.status" name="status" id="status" class="border rounded px-2 py-1 outline-orange-400 my-1"
            @blur="!formData.status ? errorFields.status = 'Field can\'t be empty': errorFields.status = '' "
            >
                <option disabled value="">Please select one</option>
                <option value="sold">Sold</option>
                <option value="pending">Pending</option>
                <option value="rejected">Reject</option>
            </select>
            <span class="text-red-500">{{ errorFields.status }}</span>
        </div>
        <div class="flex my-4">
            <button type="submit" class="bg-black text-white w-full rounded py-2 font-semibold transition-all active:scale-95">Save</button>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";


const formData = ref({
    item: '',
    price: '',
    quantity: '',
    category: '',
    status: ''
});

const errorFields = ref({
    item: '',
    price: '',
    quantity: '',
    category: '',
    status: ''
});

const emits = defineEmits(['addrecord',])


const addBookRecord = () => {
    if(formIsValid(validateForm)){
        emits('addrecord', formData.value);
        clearForm();
        
    }
}


const validateForm = () => {
    for (const key in formData.value) {
        if (Object.prototype.hasOwnProperty.call(formData.value, key)) {
            if (formData.value[key] === ''){
                errorFields.value[key] = 'Field can\'t be empty';
            } else {
                errorFields.value[key] = '';
            }
            
        }
    }
}

const formIsValid = (cb) => {
    cb();
    return Object.entries(errorFields.value).every(field => field[1] === '');
}


const clearForm = () => {
    for (const key in formData.value) {
        if(Object.hasOwnProperty.call(formData.value, key)){
            if (formData.value[key] != ''){
                formData.value[key] = ''
            }
        }
    }
}

const resetForm = (cb) => {
    for( const key in errorFields.value){
        if( Object.hasOwnProperty.call(errorFields.value, key)){
            if( errorFields.value[key] !== ''){
                errorFields.value[key] = '';
                cb()
            }
        }
    }
}


</script>

