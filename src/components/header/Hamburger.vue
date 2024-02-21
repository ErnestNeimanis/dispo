<script setup lang="ts">
import { ref, watch, defineProps } from "vue";

const props = defineProps(["color"]);
defineEmits(["open", "close"]);

const active = ref(false);
const step1 = ref(false);
const step2 = ref(false);

const bg = props.color ? `bg-${props.color}` : `bg-black`;

const animationSpeed = 500;
const size = 50;

function animate() {
  if (active.value) {
    step1.value = true;
    setTimeout(() => {
      if (active.value) {
        step2.value = true;
        return;
      }
    }, animationSpeed / 2);
  }

  if (!active.value) {
    step2.value = false;
    setTimeout(() => {
      if (!active.value) {
        step1.value = false;
        return;
      }
    }, animationSpeed / 2);
  }
}

watch(active, animate);
</script>
<template>
  <div class="p-3 rounded-md bg-indigo-950">
    <div @click="(active = !active), active ? $emit('open') : $emit('close')"
      class=" flex flex-col justify-evenly h-[30px] w-[30px] ">
      <div :class="{ 'translate-y-2.5': step1, 'rotate-45': step2 }"
        class="w-full transition duration-500 bg-white h-1/6"></div>
      <div :class="{ invisible: (active && step2) || (!active && step1) }" class="w-full bg-white h-1/6"></div>
      <div :class="{ '-translate-y-2': step1, '-rotate-45': step2 }"
        class="w-full transition duration-500 bg-white h-1/6"></div>
    </div>
  </div>
</template>
