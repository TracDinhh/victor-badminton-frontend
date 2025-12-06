<script setup>
import AdminHeader from '@/features/admin/components/AdminHeader.vue'
import AdminSidebar from '@/features/admin/components/AdminSidebar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">

    <AdminSidebar />

    <div class="pl-64 flex flex-col min-h-screen transition-all duration-300">

      <AdminHeader />

      <main class="flex-1 p-8 overflow-x-hidden">
        <router-view />
      </main>

    </div>
  </div>
</template>
