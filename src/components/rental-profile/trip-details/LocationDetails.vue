<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';



const locationData = ref([
    {
        location: "Riga international airport",
        address: "p133,Marupe,LV-10",
        arrive: "",
        depart: "16:45"
    },
    {
        location: "Lithuania airport",
        address: "Road name,LT233,Lithuania",
        arrive: "17:20",
        depart: "19:45"
    },
    {
        location: "Lithuania airport",
        address: "Road name,LT233,Lithuania",
        arrive: "20:20",
        depart: "21:45"
    },
    
])
</script>
<template>
    <div>
    <div   v-for="location,i in locationData" class="relative  ">
    <div   class="flex justify-between flex-wrap  mb-4">
        <div class=" min-w-[200px] flex items-center ">
            <i class="bi bi-geo-alt  mr-2"></i>
            <div class="flex-1 min-w-0">
                <div class="truncate">
                    <span class="text-[12px] font-bold">{{ location.location }} - </span>
                    <span class="text-[12px] font-bold text-gray-500">{{ location.address }}</span>
                </div>
            </div>
        </div>
        <div class="flex justify-center ml-4  min-w-[200px] ">
            <div class="flex  w-1/2">
                <div v-if="location.arrive" class="flex">
                    <div>
                        <i class="bi bi-clock text-xs"></i>
                    </div>
                    <div>
                        <span class="text-[12px] whitespace-nowrap font-bold mx-2">Arrive: {{ location.arrive }}</span>
                    </div>
                    
                </div>
            </div>
            <div class="flex  w-1/2">
                <div v-if="location.depart" class="flex">
                    <div>
                        <i class="bi bi-clock text-xs "></i>
                    </div>
                    <div>
                         <span class="text-[12px] whitespace-nowrap font-bold mx-2">Depart: {{ location.depart }}</span>
                    </div>
                   
                </div>
            </div>
        </div>
        
    </div>
    <div v-if="i < locationData.length-1" class="h-[100%]  w-[1px] bg-black absolute top-5 left-2"></div>
    </div>
    </div>
</template>

