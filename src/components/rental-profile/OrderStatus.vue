<script setup lang="ts">
import { ref } from 'vue';


const statusData = ref([
    {
        action:"Waiting chauffeur",
        date:"14.06.2022",
        time:"12:32",
        completed:true
    },
     {
        action:"Chaufeur assigned",
        date:"14.06.2022",
        time:"12:32",
        completed:true
    },
     {
        action:"Started",
        date:"14.06.2022",
        time:"12:32",
        completed:true
    },
     {
        action:"Trip in progress",
        date:"",
        time:"",
        completed:false
    },
     {
        action:"Waiting chauffeur",
        date:"",
        time:"",
        completed:false
    },
    
])

</script>
<template>
    <div class="">
         <div class="flex flex-col">
        <div v-for="item in statusData">
            <div class="flex gap-2">
                <div>
                    <i class="bi bi-check-circle-fill " :class="item.completed ? 'text-blue-600' : 'text-gray-400'"></i>
                </div>
                <div>
                    <span class="text-xs font-bold">{{ item.action }}</span> 
                    <span  v-if="item.date" class="font-bold"> - </span>
                    <span v-if="item.date" class="text-xs font-bold text-gray-500">{{ item.date }}</span>
                    <span v-if="item.time" class="text-xs font-bold text-gray-500"> at {{ item.time }}</span>
                </div>

            </div>
        </div>
    </div>
    </div>
   
</template>