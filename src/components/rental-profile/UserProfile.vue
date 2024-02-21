<script setup lang="ts">
import { ref } from 'vue';
import profilePic from "@/assets/images/profile.jpg"
const status =  ref("Active")

</script>
<template>
    <div class="flex flex-col  ">
       
            <span class="text-blue-500 text-xs font-bold">{{ status }}</span>
       
        
        <h2 class="font-bold text-xl">Chauffeur</h2>
        <div class="border-4 rounded-xl ">
            <img class="w-[100px] h-[100px]" :src="profilePic" alt="">
        </div>
        <div>
            <span class="font-bold text-sm">Adam Lopoto</span>
        </div>
        <div class="flex items-center gap-3 ">
            <i class="bi bi-star-fill text-yellow-400 "></i>
            <span class="font-bold text-sm">4.8</span>
        </div>
    </div>
</template>