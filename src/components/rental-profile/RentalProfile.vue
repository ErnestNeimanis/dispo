<script setup lang="ts">
import UserProfile from './UserProfile.vue';
import CompanyProfile from './CompanyProfile.vue';
import OrderStatus from './OrderStatus.vue';
import TripMenu from './TripMenu.vue';
import TripDetails from './trip-details/TripDetails.vue';
import ReturnTripDetails from './return-trip-details/ReturnTripDetails.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
    <div
        class="flex justify-center flex-wrap h-full min-w-[400px   px-[5%] py-8 pt-10 bg-white shadow-md shadow-gray-400 rounded-xl ">
        <div class="flex flex-col flex-wrap  min-w-[300px mr-8">
            <div class="flex   gap-8 ">
                <UserProfile class="border-r-2 pr-8" />
                <CompanyProfile />
            </div>
            <div class="flex  mt-6">
                <OrderStatus />
            </div>
        </div>
        <div class=" min-w-[500px">
            <TripMenu class="- " />
            <TripDetails v-if="route.query.details == 'trip-details'" />
            <ReturnTripDetails v-else-if="route.query.details == 'return-trip-details'" />
        </div>
    </div>
</template>