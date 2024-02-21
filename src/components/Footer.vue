<script setup lang="ts">
import logo from "@/assets/images/dispotravel_logo1.png"
import { ref } from "vue";

const leftMenu = ref([
  {
    title:"Log in",
    link:""
  },
  {
    title:"Sign up",
    link:""
  },
  {
    title:"Partners",
    link:""
  },
  {
    title:"About",
    link:""
  },
  {
    title:"FAQ",
    link:""
  },
])

const rightMenu = ref([
  {
    title:"Terms of service",
    link:""
  },
  {
    title:"Privacy Policy",
    link:""
  },
  {
    title:"Cookies",
    link:""
  },
 
])
</script>
<template>
  <div class="flex justify-between h-16  my-8 px-36">
    <div class="h-full flex flex-wrap justify-around items-center w-1/3">
     <div v-for="item in leftMenu">
      <RouterLink to="item.link">
        <span class="text-sm font-bold hover:underline">{{ item.title }}</span>
      </RouterLink>
     </div>
    </div>
   <div class="h-full flex items-center ">
    <RouterLink to="/">
       <img class="min-w-[150px] h-[49px] hover:cursor-pointer" :src="logo" alt="">
    </RouterLink>
   
   </div>
   <div class="h-full  flex items-center  flex-wrap justify-around  w-1/3">
    <div v-for="item in rightMenu">
      <RouterLink to="item.link">
        <span  class="text-sm font-bold hover:underline" >{{ item.title }}</span>
      </RouterLink>
     </div>
  </div>
  </div>
</template>