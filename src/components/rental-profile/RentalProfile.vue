<script setup lang="ts">
import UserProfile from './UserProfile.vue';
import CompanyProfile from './CompanyProfile.vue';
import OrderStatus from './OrderStatus.vue';
import TripMenu from './TripMenu.vue';
import DateSlider from './DateSlider.vue';
import LocationDetails from './LocationDetails.vue';
import Map from './Map.vue';
</script>
<template>
    <div class="flex justify-center flex-wrap h-full min-w-[400px]  px-12 py-8 pt-10 bg-white shadow-md shadow-black rounded-xl ">
        <div class="flex flex-col flex-wrap w-1/3 min-w-[300px]">
            <div class="flex justify-center  gap-8 ">
                <UserProfile class="border-r-2 pr-8" />
                <CompanyProfile />
            </div>
            <div class="flex justify-center mt-6">
                <OrderStatus />
            </div>
        </div>
        <div class=" min-w-[500px]"> 
         
                <TripMenu class="- " />
           
            
            <DateSlider class="mt-6" />
            <LocationDetails class="mt-6"  />
            <Map  />
        </div>
    </div>
</template>