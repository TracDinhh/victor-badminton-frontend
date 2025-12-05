<script setup>
import theHeader from '@/components/layouts/TheHeader.vue';
import theFooter from '@/components/layouts/TheFooter.vue';
</script>

<template>
  <theHeader />
  <slot />
  <theFooter />
</template>
