<template>
  <div class="photos bg-gray-100">

    <Navigator msg="hello"></Navigator>


<!--        中间正文-->
        <div class="mt-8">
          <div class="flex mx-auto w-4/5 justify-center grid lg:grid-cols-4 gap-4">
            <div v-for="photo in photos" :key="photo.id" class="shadow-md hover:scale-105 duration-300 ease-in-out z-10">
              <router-link :to="{name:'photoDetail',params:{id:photo.id}}">
                <img :src="photo.url" class="rounded object-cover w-full h-64 ">
              </router-link>
            </div>
          </div>
        </div>



<!--    <div class="container h-screen mx-auto mt-8">-->
<!--      <div class="grid grid-cols-4 gap-4">-->
<!--        <div class="grid-sizer" v-for="(photo, index) in photos" :key="index">-->
<!--          <router-link :to="{name:'photoDetail',params:{id:photo.id}}">-->
<!--            <img :src="photo.url" class="w-full h-auto object-cover object-center">-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <Footer></Footer>
  </div>
</template>

<script>
import Navigator from "@/components/navigator";
import Footer from "@/components/Footer";
import axios from "axios";
import Masonry from 'masonry-layout';

export default {
  name: "PhotosView",
  components: {
    Navigator,
    Footer
  },
  data() {
    return {
      photos: [],
    };
  },
  created() {
    axios.get('/photos/')
        .then(response => {
          this.photos = response.data
        }).catch(error => {
      console.error(error)
    })
  },

}
</script>
