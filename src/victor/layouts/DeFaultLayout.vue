<script setup>
import theHeader from '@/victor/layouts/TheHeader.vue';
import theFooter from '@/victor/layouts/TheFooter.vue';
</script>

<template>
  <theHeader />
  <slot />
  <theFooter />
</template>
