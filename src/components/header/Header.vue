<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from "./NavBar.vue"
import Logo from "@/assets/images/dispotravel_logo1.png"
import { useWindowSize } from "@/window"
const route = useRoute();
const { smallWindow, mediumWindow, largeWindow } = useWindowSize();

interface NavItem {
    name?: string,
    title: string,
    link: string,
}


const logo = ref("");




</script>
<template>
    <div class="flex justify-between items-center  px-16 h-32  min-w-[700px]">
        <div class="flex justify-center items-center gap-6  h-full">

            <div class="flex justify-center items-center    ">
                <RouterLink to="/">
                    <img class=" min-w-[150px] h-[49px] hover:cursor-pointer" :src="Logo" alt="">
                </RouterLink>
            </div>

            <div class="flex justify-center items-center gap-4 px-4 ">
                <div class="flex gap-1 text-gray-500 font-bold text-sm ">
                    <span>EUR</span>
                    <span>
                        <i class="bi bi-currency-dollar"></i>
                    </span>
                </div>
                <div class="flex gap-2 text-gray-500 font-bold text-sm ">
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