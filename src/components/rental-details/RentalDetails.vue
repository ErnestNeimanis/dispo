<script setup lang="ts">
import { ref } from 'vue';
import RentalDetailsList from "./RentalDetailList.vue"
import UniqueLinkCopy from "./UniqueLinkCopy.vue"


</script>
<template>
    <div class="relative min-h-52 w-[100%] z-[10]  max-w-[1100px] min-w-[400px] bg-indigo-950 h-52 rounded-3xl pt-7 overflow-hidden">

        <div class="absolute  z-[15] bottom-0 right-0 w-52 h-52 translate-x-32 translate-y-24 rounded-full scale-150 border border-white">
            <div class="absolute top-0 left-0 w-6 h-6 translate-x-5 translate-y-4 border border-white rounded-full">
                
            </div>
        </div>

        
        <div class="relative z-[25]"> 
          
            <div class="flex flex-col items-center justify-center gap-2 ">
                <div class="flex items-center justify-center bg-indigo-950">
                    <h1 class="text-xl font-bold text-white">Your daily rental details</h1>
                </div>
                <div class="bg-indigo-950">
                    <RentalDetailsList />
                </div>
                <div class="bg-indigo-950">
                    <UniqueLinkCopy/>
                </div>
            </div>
        </div>
      
    </div>
</template>