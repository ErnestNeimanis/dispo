<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Header from './components/header/Header.vue';
import Footer from './components/Footer.vue';
import MobileFooter from './components/MobileFooter.vue';
import { useWindowSize } from './window';
const {largeWindow,mediumWindow,smallWindow} = useWindowSize();
</script>

<template>
  <div class="   ">
    <Header></Header>
    <HomeView></HomeView>
     <Footer class="" v-if="largeWindow" />
     <MobileFooter class="" v-else />
     
  </div>
</template>

<style scoped></style>
