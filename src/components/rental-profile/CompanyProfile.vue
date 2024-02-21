<script setup lang="ts">
import Flags from './Flags.vue';
</script>
<template>
    <div class="flex flex-col pt-1">
        <Flags />
        <div  class="flex flex-col justify-center mt-2 ">
            <div>
                <span class="text-xs font-bold text-gray-500">Name of carrier</span>
            </div>
            <div>
                <span class="font-bold">BamBam SIA</span>
            </div>
        </div>
         <div class="flex flex-col justify-center mt-2 ">
              <div>
                <span class="text-xs font-bold text-gray-500">National reg.nb.</span>
            </div>
            <div>
                <span class="font-bold">"Miranda"</span>
            </div>
          
        </div>
        <div>
            <div class="flex justify-center items-center mt-2 rounded-lg bg-blue-500 h-10 w-10">
                 <i class="bi bi-telephone-fill text-white text-xl "></i>
            </div>
           
        </div>

        <div></div>

    </div>
</template>