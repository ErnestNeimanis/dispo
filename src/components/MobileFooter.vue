<script setup lang="ts">
import logo from "@/assets/images/dispotravel_logo1.png"
import { ref } from "vue";
import { useWindowSize } from "@/window";

const { largeWindow, mediumWindow, smallWindow } = useWindowSize();



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
  <div 
  class="flex justify-between w-full h-16 mt-8   ">

  <div class="flex justify-center  items-center  h-full  w-full">
      <RouterLink to="/">
        <img class="min-w-[100px] h-[33px] hover:cursor-pointer" :src="logo" alt="">
      </RouterLink>

    </div>

    <div 
 
    class="flex flex-col items-center justify-around w-full h-full  ">
      <div v-for="item in leftMenu">
        <RouterLink to="item.link">
          <span class="text-sm font-bold hover:underline">{{ item.title }}</span>
        </RouterLink>
      </div>
    </div>


    <div 
    :class="largeWindow ? 'flex' : 'flex-col'"
    class="flex  items-center justify-around  w-full   h-full">
      <div v-for="item in rightMenu">
        <div class="flex justify-">
          <RouterLink to="item.link">
            <span class="text-sm font-bold hover:underline whitespace-nowrap">{{ item.title }}</span>
          </RouterLink>
        </div>

      </div>
    </div>
    
  </div>

</template>