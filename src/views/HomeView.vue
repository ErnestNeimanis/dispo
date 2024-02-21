<script setup lang="ts">
  import RentalDetails from "@/components/rental-details/RentalDetails.vue"
    import RentalProfile from "@/components/rental-profile/RentalProfile.vue"
import Footer from "@/components/Footer.vue";
</script>

<template>

  <div class="mx-32 h-3/4 mt-8 relative flex flex-col items-center bg-white rounded-2xl">
  
    <RentalDetails class="-translate-y-8 z-0" />
    <RentalProfile class="-translate-y-24 z-30 "/>
    
  </div>


  
</template>
