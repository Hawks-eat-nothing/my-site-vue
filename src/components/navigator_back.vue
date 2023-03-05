<template>

  <nav class="flex mx-1 h-12 sticky top-1.5 rounded-full shadow-md bg-gray-100 bg-opacity-50 items-center justify-between backdrop-blur-md">
    <!--    logo-->
    <div class="ml-3">
      <router-link to="/">
        <img src="@/assets/icon.png" alt="my site name" class="h-10">
      </router-link>
    </div>
    <!--    navigation-->
    <div class="hidden lg:flex lg:gap-x-12">
      <div><router-link to="/" class="font-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 flex items-center"> DashBoard </router-link></div>
      <div><router-link to="/photosupload" class="font-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 flex items-center"> PhotosUpload </router-link></div>
      <div><router-link to="/blogsupload" class="font-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 flex items-center"> BlogsUpload </router-link></div>
    </div>
    <div></div>
  </nav>
</template>

<script>

import icon from '@/assets/icon.png'

export default {
  name: 'navigator_back',
  data() {
    return {
      icon: require("@/assets/icon.png")
    }
  }
}
</script>

<style scoped>

</style>