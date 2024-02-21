<script setup lang="ts">
import { ref } from 'vue';
import RentalDetailsList from "./RentalDetailList.vue"
import UniqueLinkCopy from "./UniqueLinkCopy.vue"


</script>
<template>
    <div class="relative min-h-52 w-[90%] z-[10] max-w-[1050px] min-w-[800px] bg-indigo-950 h-52 rounded-3xl pt-7 overflow-hidden">

        <div class="absolute  z-[15] bottom-0 right-0 w-52 h-52 translate-x-32 translate-y-24 rounded-full scale-150 border border-white">
            <div class="absolute top-0 left-0 border rounded-full translate-x-5 translate-y-4 border-white w-6 h-6">
                
            </div>
        </div>

        <div class="relative z-[25]"> 
          
            <div class="flex flex-col justify-center items-center gap-2 ">
                <div class="flex justify-center items-center bg-indigo-950">
                    <h1 class="text-xl text-white font-bold">Your daily rental details</h1>
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