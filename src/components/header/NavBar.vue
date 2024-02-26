<script setup lang="ts">
import Hamburger from "./Hamburger.vue"
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useWindowSize } from "@/window"
const { largeWindow } = useWindowSize();


interface NavItem {
    name?: string,
    title: string,
    link: string,
}

const route = useRoute();

const menuClass = ref("-translate-x-[100%] hidden")
const menuOpen = ref(false)
const hamburger = ref<any>(null)
const closeHamburger = ref()

function openMenu() {
    menuOpen.value = true;
    menuClass.value = "translate-x-[100%]"
    setTimeout(() => {
        if (menuOpen.value)
            menuClass.value = ""
    }, 1)
}

function closeMenu() {
    menuOpen.value = false;
    menuClass.value = "translate-x-[100%]"
    setTimeout(() => {
        if (!menuOpen.value)
            menuClass.value = "hidden"
    }, 300)
    if(hamburger.value){
      hamburger.value.close();
    }
}

onMounted(() => {
  if(hamburger.value){
    closeHamburger.value = hamburger.value.close()
  }
})

const navMenu = ref<NavItem[]>([
    {
        name: 'transport',
        title: 'Transport',
        link: "/transport"
    },


    {
        name: 'tours',
        title: 'tours',
        link: "/tours"
    },
    {
        name: 'partners',
        title: 'Partners',
        link: "/partners"
    },
    {
        name: 'about',
        title: 'About B2B',
        link: "/about"
    },

    {
        name: 'contact',
        title: 'Contact',
        link: "/contact"
    },
    {
        name: 'booking',
        title: 'Book today',
        link: "/booking"
    },
    {
        name: 'auth',
        title: 'Log in/Sign ip',
        link: "/auth"
    },
])

</script>
<template>
    <div v-if="largeWindow" class="">
        <nav class="flex flex-wrap ">
            <RouterLink v-for="(item, i) in navMenu" :to="item.link">
                <div :class="{ 'border rounded-2xl bg-indigo-950 text-white  px-5 py-1 ': route.path == item.link}"
                    class="w-full min-w-full px-4 py-1 font-bold hover:text-blue-500">
                    <span class="text-sm text-nowrap">{{ item.title }}</span>
                </div>
            </RouterLink>
        </nav>
    </div>
    <div v-else class="z-[999] w-full  fixed  top-8 ">

        <Hamburger ref="hamburger"  @open="openMenu" @close="closeMenu" class="fixed right-6" />
        <div :class="menuClass"
            class="flex flex-col w-full h-screen pt-48 transition-transform duration-500 bg-indigo-950 rounded-tr-md">
            <nav class=" flex flex-col items-end pr-[20%] gap-4  xs:text-2xl  ">
                <RouterLink v-for="(item, i) in navMenu" :to="item.link" @click="closeMenu">
                    <div 
                    :class="{'border rounded-2xl  text-white px-5 py-1 ': route.path == item.link }"
                     class="w-full min-w-full   font-bold text-white px-4 py-1 " >
                        <span class=" text-nowrap text-sm">{{ item.title }}</span>
                    </div>
                </RouterLink>
            </nav>
        </div>

    </div>
</template>