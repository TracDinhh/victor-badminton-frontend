<script setup>
import { ref } from 'vue';
import DefaultLayout from '@/layouts/DeFaultLayout.vue';

const fullname = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const phone = ref('');


const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert("Mật khẩu nhập lại không khớp!");
    return;
  }
  alert(`Đăng ký thành công!\nTên: ${fullname.value}\nEmail: ${email.value}`);
}

const loginWithGoogle = () => {
  alert("Tính năng đang phát triển...");
}
</script>

<template>
  <DefaultLayout>
    <div class="bg-gray-100 py-12 flex justify-center items-center min-h-[700px]">
      <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">

        <h1 class="text-3xl font-bold text-center text-blue-900 mb-2">Create Account</h1>
        <p class="text-center text-gray-500 text-sm mb-8">Join us to start shopping today!</p>

        <form @submit.prevent="handleRegister" class="space-y-4">

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Fullname</label>
            <input
              v-model="fullname" type="text" placeholder="John Doe"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              v-model="email" type="email" placeholder="email@gmail.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
          </div>

            <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              v-model="phone" type="tel" placeholder="Telephone"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              v-model="password" type="password" placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              v-model="confirmPassword" type="password" placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
          </div>

          <button class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-md active:scale-[0.98] transform duration-150">
            Sign Up
          </button>
        </form>

        <div class="relative my-6">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div>
            <div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500">Or sign up with</span></div>
        </div>

        <button
          @click="loginWithGoogle"
          type="button"
          class="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition shadow-sm active:scale-[0.98]"
        >
          <svg class="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
          </svg>
          Google
        </button>

        <div class="mt-8 text-center text-sm text-gray-600">
          Already have an account?
          <RouterLink to="/signin" class="text-blue-600 font-bold hover:underline ml-1">
            Sign in
          </RouterLink>
        </div>

      </div>
    </div>
  </DefaultLayout>
</template>
