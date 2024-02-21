<script setup lang="ts">
import { ref } from 'vue';

const detailsContent = ref([
    {
        text: "Request #779",
        bsIcon: "bi bi-check-square",
        itemStyle: "",
        textStyle: "",
    },
    {
        text: "Trip starts: 18 feb - 11:00",
        bsIcon: "bi bi-calendar2",
        itemStyle: "",
        textStyle: "",
    },
    {
        text: "45 people",
        bsIcon: "bi bi-person-fill",
        itemStyle: "",
        textStyle: "",
    },
    {
        text: "Paid 12€ ✓",
        bsIcon: "",
        itemStyle: "",
        textStyle: "",
    },
    {
        text: "view invoice",
        bsIcon: "",
        itemStyle: "",
        textStyle: "underline",
    },
])
</script>
<template>
 <div class="flex items-center  justify-center flex-wrap">
                        <div v-for="details in detailsContent" class="">
                            <a href=""
                                class="flex gap-2 rounded-3xl px-3 py-2 text-white text-xs font-bold border border-transparent hover:border-white">
                                <div>
                                    <i v-if="details.bsIcon" :class="details.bsIcon, details.itemStyle" class=""></i>
                                </div>
                                <div>
                                    <span class="text-nowrap" :class="details.textStyle">{{ details.text }}</span>
                                </div>


                            </a>
                        </div>
                    </div>
</template>