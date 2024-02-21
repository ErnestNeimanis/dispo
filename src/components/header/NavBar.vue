<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

interface NavItem {
    name?: string,
    title: string,
    link: string,
}

const route =  useRoute();



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
<div class="">
            <nav class=" flex flex-wrap  ">
                <RouterLink v-for="(item, i) in navMenu" :to="item.link">
                    <div 
                    :class="{'border rounded-2xl bg-blue-900 text-white  px-5 py-1 ': route.path == item.link && route.path != navMenu[0].link}"
                     class="w-full min-w-full   font-bold  px-4 py-1 hover:text-blue-500" >
                        <span class=" text-nowrap text-sm">{{ item.title }}</span>
                    </div>
                </RouterLink>
            </nav>
        </div>
</template>