<script setup>
import theHeader from '@/components/layouts/TheHeader.vue';
import theFooter from '@/components/layouts/TheFooter.vue';
</script>

<template>
  <div class="default-layout">
    <theHeader />

    <main class="main-content">
       <router-view />
    </main>

    <theFooter />
  </div>
</template>
