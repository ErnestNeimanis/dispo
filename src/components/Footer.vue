<script setup lang="ts">
import logo from "@/assets/images/dispotravel_logo1.png"
import { ref } from "vue";

const leftMenu = ref([
  {
    title: "Log in",
    link: ""
  },
  {
    title: "Sign up",
    link: ""
  },
  {
    title: "Partners",
    link: ""
  },
  {
    title: "About",
    link: ""
  },
  {
    title: "FAQ",
    link: ""
  },
])

const rightMenu = ref([
  {
    title: "Terms of service",
    link: ""
  },
  {
    title: "Privacy Policy",
    link: ""
  },
  {
    title: "Cookies",
    link: ""
  },

])
</script>
<template>
  <div class="flex justify-between h-16 my-8 px-36">
    <div class="flex flex-wrap items-center justify-around w-1/3 h-full">
      <div v-for="item in leftMenu">
        <RouterLink to="item.link">
          <span class="text-sm font-bold hover:underline">{{ item.title }}</span>
        </RouterLink>
      </div>
    </div>
    <div class="flex items-center h-full ">
      <RouterLink to="/">
        <img class="min-w-[150px] h-[49px] hover:cursor-pointer" :src="logo" alt="">
      </RouterLink>

    </div>
    <div class="flex flex-wrap items-center justify-around w-1/3 h-full">
      <div v-for="item in rightMenu">
        <RouterLink to="item.link">
          <span class="text-sm font-bold hover:underline">{{ item.title }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>