<script setup>
// Lấy năm hiện tại một cách tự động để hiển thị dưới Copyright
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
    <div class="container mx-auto px-4">

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

        <div class="space-y-4">
          <h3 class="text-white text-xl font-extrabold uppercase tracking-wider flex items-center gap-2">
            Victor Shop 🏸
          </h3>
          <p class="text-sm leading-relaxed pr-4">
            Hệ thống cửa hàng cầu lông chính hãng hàng đầu Việt Nam. Chúng tôi cam kết mang đến những sản phẩm chất
            lượng nhất để thỏa mãn đam mê của bạn.
          </p>
        </div>

        <div>
          <h3 class="text-white text-lg font-bold mb-4">Danh Mục</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Vợt Cầu Lông</a>
            </li>
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Giày Cầu Lông Victor</a>
            </li>
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Balo & Túi Vợt</a></li>
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Phụ Kiện (Quấn cán,
                Cước)</a></li>
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Hàng Mới Về</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white text-lg font-bold mb-4">Hỗ Trợ Khách Hàng</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Hướng dẫn chọn vợt</a></li>
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Chính sách bảo hành</a>
            </li>
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Chính sách đổi trả</a></li>
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Phương thức thanh toán</a>
            </li>
            <li><a href="#" class="hover:text-blue-400 transition duration-200 inline-block">Vận chuyển & Giao nhận</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white text-lg font-bold mb-4">Liên Hệ</h3>
          <ul class="space-y-3 text-sm mb-6">
            <li class="flex items-start gap-3">
              <span class="text-blue-400 mt-1">📍</span>
              <span>Số 123 Đường Cầu Lông, Quận Cầu Giấy, Hà Nội</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-blue-400">📞</span>
              <a href="tel:0909123456" class="hover:text-blue-400 transition">0909.123.456</a>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-blue-400">📧</span>
              <a href="mailto:cskh@victorshop.vn" class="hover:text-blue-400 transition">cskh@victorshop.vn</a>
            </li>
          </ul>

          <h4 class="text-white font-bold text-sm mb-3">Kết nối với chúng tôi</h4>
          <div class="flex gap-3">
            <a href="#"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold hover:bg-blue-600 hover:text-white transition duration-300">F</a>
            <a href="#"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold hover:bg-pink-500 hover:text-white transition duration-300">I</a>
            <a href="#"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold hover:bg-red-600 hover:text-white transition duration-300">Y</a>
            <a href="#"
              class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center font-bold hover:bg-black hover:text-white transition duration-300">T</a>
          </div>
        </div>

      </div>
      <div
        class="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:items-center text-sm text-gray-500">
        <p class="mb-4 md:mb-0">© {{ currentYear }} <strong>Victor Shop</strong>. Bản quyền thuộc về lông thủ.</p>

        <ul class="flex justify-center gap-6">
          <li><a href="#" class="hover:text-gray-300 transition">Điều khoản sử dụng</a></li>
          <li><a href="#" class="hover:text-gray-300 transition">Chính sách bảo mật</a></li>
        </ul>
      </div>

    </div>
  </footer>
</template>
