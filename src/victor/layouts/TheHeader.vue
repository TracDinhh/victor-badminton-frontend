<script setup>
// Logic (để trống hoặc thêm sau)
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
    <div class="container mx-auto px-6 h-20 flex justify-between items-center">

      <div class="w-32 cursor-pointer">
        <img src="/images/logo2.jpg" alt="Victor Logo" class="h-auto w-full" />
      </div>

      <nav class="hidden md:flex gap-8">
        <RouterLink to="/"
          class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition">
          Home page
        </RouterLink>

        <RouterLink to="/product"
          class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition">
          Rackets
        </RouterLink>

        <RouterLink to="/product"
          class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition">
          Shoses
        </RouterLink>

        <a href="#" class="text-sm font-bold text-gray-700 hover:text-blue-600 uppercase tracking-wider transition">
          Connect
        </a>
      </nav>

      <div class="flex items-center gap-5 text-gray-600">
        <button class="hover:text-blue-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>

        <RouterLink to="/cart" class="hover:text-blue-600 transition relative p-2 rounded-full hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span
            class="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">3</span>
        </RouterLink>

        <RouterLink to="/signin">
          <button
            class="text-sm font-bold text-gray-800 hover:text-blue-600 transition border-l border-gray-300 pl-5 uppercase">
            Sign in
          </button>
        </RouterLink>
      </div>

    </div>
  </header>
</template>
