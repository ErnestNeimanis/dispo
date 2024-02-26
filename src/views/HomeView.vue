<script setup lang="ts">
import RentalDetails from "@/components/rental-details/RentalDetails.vue"
import RentalProfile from "@/components/rental-profile/RentalProfile.vue"
import Footer from "@/components/Footer.vue";
import { useWindowSize } from "@/window";
const {largeWindow,mediumWindow,smallWindow} = useWindowSize()
</script>

<template>
  <div 
  :class="{'mx-32':largeWindow,'mx-8':mediumWindow,'mx-2':smallWindow}"
  class="relative flex flex-col items-center  mt-8 min-w-[400px] bg-white h-3/4 rounded-2xl">

    <RentalDetails class="z-0 -translate-y-8" />
    <RentalProfile 
    :class="{'-translate-y-[10vw]':smallWindow}"
    class="z-30 -translate-y-24 transition-transform duration-500 " />

  </div>
</template>
