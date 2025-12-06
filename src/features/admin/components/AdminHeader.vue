<template>
  <header
    class="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">

    <div class="w-31 cursor-pointer">
      <div>
        <img src="/images/logo2.jpg" alt="Victor Logo" class="h-auto w-full" />
      </div>
    </div>


    <div class="flex items-center gap-4">

      <div class="h-8 w-px bg-gray-300 mx-2"></div>
      <div class="flex items-center gap-3 cursor-pointer">
        <div class="text-right hidden sm:block">
          <p class="text-sm font-bold text-gray-800">Admin Trác</p>
          <p class="text-xs text-gray-500">Super Admin</p>
        </div>
        <div
          class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border border-blue-200">
          AT
        </div>
      </div>
    </div>

  </header>
</template>
