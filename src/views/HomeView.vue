<script setup lang="ts">
  import RentalDetails from "@/components/rental-details/RentalDetails.vue"
    import RentalProfile from "@/components/rental-profile/RentalProfile.vue"
import Footer from "@/components/Footer.vue";
</script>

<template>

  <div class="relative flex flex-col items-center mx-32 mt-8 bg-white h-3/4 rounded-2xl">
  
    <RentalDetails class="z-0 -translate-y-8" />
    <RentalProfile class="z-30 -translate-y-24 "/>
    
  </div>


  
</template>
