<script setup lang="ts">

import { nextTick, onMounted, ref, watch } from 'vue';
import { useWindowSize } from '@/window';

const { largeWindow, mediumWindow, smallWindow } = useWindowSize();

const dates = ref([
  "6 November",
  "7 November",
  "8 November",
  "9 November",
  "10 November",
  "11 November",
  "12 November",
  "13 November",
  "14 November",
  "15 November",
  "16 November"
]);
const activeIndex = ref<number>(0);
const scrollContainer = ref<HTMLElement | null>(null);
const showLeftShadow = ref(false);
const showRightShadow = ref(false);

const interval = ref<any>(null)

function startInterval(movement: number) {
  interval.value = setInterval(() => {
    scroll(movement)
  }, 1)
}
function stopInterval() {
  clearInterval(interval.value)
  interval.value = null
}

function scroll(amount: number) {
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft += amount;
  }
}


function setActiveIndex(index: number) {
  activeIndex.value = index;
}

function checkScroll() {
  if (scrollContainer.value) {
    const container = scrollContainer.value;
    showLeftShadow.value = container.scrollLeft > 0;
    showRightShadow.value = container.scrollLeft < container.scrollWidth - container.offsetWidth;
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', checkScroll);
    checkScroll();
  }
});


</script>

<template>
  <div :class="{ 'max-w-[95vw]': !largeWindow }" class="flex items-center  space-x-2  max-w-[500px]">
    <div class=" bg-white px-2 py-2" :class="{ 'left-shadow': showLeftShadow }">
      <button class=" px-1 bg-gray-200 rounded-full " @touchstart="startInterval(-5)" @touchend="stopInterval"
        @mousedown="startInterval(-5)" @mouseup="stopInterval">
        <i class="bi bi-arrow-left"></i>
      </button>
    </div>


    <div ref="scrollContainer" class="flex space-x-2 overflow-hidden">

      <button v-for="(date, i) in dates"
        class="flex items-center rounded-2xl py-3 px-6 border-2 text-nowrap h-8 w-52 text-[10px] font-bold hover:border-blue-500 focus:outline-none focus:border-blue-500"
        :class="{ 'bg-blue-500 text-white': i === activeIndex, 'bg-white text-gray-700': i !== activeIndex }"
        @click="setActiveIndex(i)">
        <div>
          <span> {{ date }}</span>
        </div>
      </button>

    </div>

    <div class=" bg-white px-2 py-2" :class="{ 'right-shadow': showRightShadow }">
      <button class="  px-1 bg-gray-200 rounded-full" @touchstart="startInterval(+5)" @touchend="stopInterval"
        @mousedown="startInterval(+5)" @mouseup="stopInterval">
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>

  </div>
</template>



<style scoped>
.right-shadow {
  box-shadow: -8px 0px 8px -6px rgba(0, 0, 0, 0.253);

}

.left-shadow {
  box-shadow: 8px 0px 8px -6px rgba(0, 0, 0, 0.253);

}
</style>
