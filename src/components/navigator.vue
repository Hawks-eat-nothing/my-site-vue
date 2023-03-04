<template>
  <nav class="flex m-3 h-14 top rounded-lg shadow-md bg-gray-100 opacity-80 items-center justify-between">
    <!--    logo-->
    <div>
      <router-link to="/">
        <img src="@/assets/icon.png" alt="my site name" class="h-10">
      </router-link>
    </div>
    <!--    navigation-->
    <div class="hidden lg:flex lg:gap-x-12">
      <div><router-link to="/" class="font-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 flex items-center"> Home </router-link></div>
      <div><router-link to="/photos" class="font-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 flex items-center"> Photos </router-link></div>
      <div><router-link to="/blogs" class="font-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 flex items-center"> Blogs </router-link></div>
      <div><router-link to="/tools" class="font-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 flex items-center"> Tools </router-link></div>
      <div><router-link to="/about" class="font-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 flex items-center"> About </router-link></div>
    </div>
    <div></div>
  </nav>
</template>

<script>
export default {
  name: "navgation"
}
</script>

<style scoped>

</style>