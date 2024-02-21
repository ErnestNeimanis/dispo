<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from "./NavBar.vue"
import Logo from "@/assets/images/dispotravel_logo1.png"







</script>
<template>
    <div class="flex justify-between items-center  px-16 h-32  min-w-[700px]">
        <div class="flex items-center justify-center h-full gap-6">

            <div class="flex items-center justify-center ">
                <RouterLink to="/">
                    <img class=" min-w-[150px] h-[49px] hover:cursor-pointer" :src="Logo" alt="">
                </RouterLink>
            </div>

            <div class="flex items-center justify-center gap-4 px-4 ">
                <div class="flex gap-1 text-sm font-bold text-gray-500 ">
                    <span>EUR</span>
                    <span>
                        <i class="bi bi-currency-dollar"></i>
                    </span>
                </div>
                <div class="flex gap-2 text-sm font-bold text-gray-500 ">
                    <span>Enlgish</span>
                    <span>
                        <i class="bi bi-globe2"></i>
                    </span>
                </div>
            </div>

        </div>
        <NavBar />
    </div>
</template>

<style scoped></style>@/window