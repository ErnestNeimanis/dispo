<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Header from './components/header/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="   ">
    <Header></Header>
    <HomeView></HomeView>
     <Footer class="" />
  </div>
</template>

<style scoped></style>
