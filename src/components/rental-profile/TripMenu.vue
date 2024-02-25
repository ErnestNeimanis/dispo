<script setup lang="ts">

import { useRoute } from 'vue-router';

const route = useRoute();


</script>
<template>
    <div class="w-full px-12">
        <div class="flex justify-center items-center gap-4 border-b-2 pb-6">

            <RouterLink :to="{ path: '/booking', query: { details: 'trip-details' } }">
                <button :class="{ 'bg-blue-950 text-white': route.query.details == 'trip-details' }"
                    class="px-8 py-2 text-xs font-bold rounded-2xl border-2 hover:bg-blue-950 hover:text-white">Trip
                    details</button>
            </RouterLink>

            <RouterLink :to="{ path: '/booking', query: { details: 'return-trip-details' } }">
                <button :class="{ 'bg-blue-950 text-white': route.query.details == 'return-details' }"
                    class="px-8 py-2 text-xs font-bold rounded-2xl border-2 hover:bg-blue-950 hover:text-white">Return trip
                    details</button>
            </RouterLink>

        </div>

    </div>
</template>