<script setup>
import { ref } from 'vue';
import DeFaultLayout from '../layouts/DeFaultLayout.vue';

const email = ref('');
const password = ref('')
const rememberMe = ref(false);

const handleLogin = () => {
  alert("Dang dang nhap...");
}

const handleWGoogle = () =>{
  alert("Tinh năng đang được phát triển bởi Trác Đình xin vui lòng đợi");
}
</script>
<template>
  <DeFaultLayout>
    <div class="bg-gray-100 py-16 flex justify-center items-center min-h-[600px]">
      <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 class="text-3xl font-bold text-center text-blue-900 mb-6">Sign in</h1>
        <form @submit.prevent="handleLogin" class="space-y-5">

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email address</label>

            <input v-model="email" type="email" placeholder="email@gmail.com"
              class="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 outline-none">
          </div>

          <div>
            <div class="flex justify-between mb-1">
              <label class="block text-sm font-medium text-gray-700 outline-none">password</label>
              <a href="#" class="text-xs text-blue-600 hover:underline">Forgot password</a>
            </div>

            <input v-model="password" type="password" class="w-full px-4 py-3 border rounded-lg focus:ring-blue-500" placeholder="Password">

          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" id="remember-me" v-model="rememberMe" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer">
              <label class="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
          </div>

          <button
            class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">Sign in</button>
        </form>

        <div class="mt-6 text-center text-sm text-gray-600 cursor-pointer select-none">
          Don't have an account
          <RouterLink to="/signup" class="text-blue-600 font-bold hover:underline">
            Sign up
          </RouterLink>
        </div>

        <div class="relative my-6">
            <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
        </div>

        <button
          @click="handleWGoogle"
          type="button"
          class="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-200 transition shadow-sm active:scale-[0.98] transform duration-150"
        >
          <svg class="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  </DeFaultLayout>
</template>
