<script setup lang="ts">
import Flags from './Flags.vue';
</script>
<template>
    <div class="flex flex-col pt-1">
        <Flags />
        <div class="flex flex-col justify-center mt-2 ">
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
            <a href="tel:+371000000">
                <div class="flex items-center justify-center w-10 h-10 mt-2 bg-blue-500 hover:bg-blue-700 rounded-lg">
                    <i class="text-xl text-white bi bi-telephone-fill "></i>
                </div>
            </a>
        </div>

        <div></div>

    </div>
</template>