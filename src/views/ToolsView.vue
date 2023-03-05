<template>
  <div class="tools bg-gray-100">
    <Navigator msg="hello"></Navigator>

    <div class="mt-8">
      <div class="flex mx-auto w-4/5 justify-center grid lg:grid-cols-4 gap-4">
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl shadow-lg">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div >
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div >
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div >
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
        <div>
          <img :src="require('../assets/Photos/01.jpg')" class="rounded-2xl">
        </div>
      </div>

    </div>




    <Footer></Footer>
  </div>
</template>

<script>
import Navigator from '@/components/navigator.vue';
import Footer from "@/components/Footer";

export default {
  name: "ToolsView",
  components: {
    Navigator,
    Footer
  }
}
</script>

<style scoped>

</style>