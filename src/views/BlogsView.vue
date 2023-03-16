<template>
  <div class="blogs bg-gray-100">
    <Navigator msg="hello"></Navigator>

  <div class="mt-8 grid lg:grid-cols-1 gap-4" >
    <div v-for="blog in blogs" :key="blog.id" class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">
      <div class="w-2/5 h-64">
<!--        <img :src="require('../assets/fluntemoji.png')" alt="">-->
        <img :src="blog.coverImg" alt="" class="object-cover w-full h-64">
      </div>
      <div class="w-3/5">
        <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">
          {{blog.title}}
        </p>
        <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">
<!--          You can discover my passion for capturing the beauty of the world around us.-->
<!--          From stunning landscapes to intimate portraits, I strive to create images that evoke emotions and tell-->
<!--          stories.-->
<!--          Each photo is a reflection of my unique vision and style, and I hope they inspire you as much as they-->
<!--          inspire me.-->
          {{blog.description}}
        </p>
        <div class="ml-3">
          <p class="mdi mdi-eye"> {{blog.views}}</p>
        </div>
        <div class=" flex ml-3 align-bottom">
          <router-link :to="{name:'blogDetail',params:{id:blog.id}}">
            <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>
          </router-link>

        </div>
      </div>
    </div>
<!--    <div class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">-->
<!--      <div class="w-2/5">-->
<!--        <img :src="require('../assets/fluntemoji.png')" alt="">-->
<!--      </div>-->
<!--      <div class="w-3/5">-->
<!--        <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">-->
<!--          PHOTOS-->
<!--        </p>-->
<!--        <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">-->
<!--          You can discover my passion for capturing the beauty of the world around us.-->
<!--          From stunning landscapes to intimate portraits, I strive to create images that evoke emotions and tell-->
<!--          stories.-->
<!--          Each photo is a reflection of my unique vision and style, and I hope they inspire you as much as they-->
<!--          inspire me.-->
<!--        </p>-->
<!--        <div class="ml-3 mb-3">-->
<!--          <router-link to="/photos">-->
<!--            <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">-->
<!--      <div class="w-2/5">-->
<!--        <img :src="require('../assets/fluntemoji.png')" alt="">-->
<!--      </div>-->
<!--      <div class="w-3/5">-->
<!--        <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">-->
<!--          PHOTOS-->
<!--        </p>-->
<!--        <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">-->
<!--          You can discover my passion for capturing the beauty of the world around us.-->
<!--          From stunning landscapes to intimate portraits, I strive to create images that evoke emotions and tell-->
<!--          stories.-->
<!--          Each photo is a reflection of my unique vision and style, and I hope they inspire you as much as they-->
<!--          inspire me.-->
<!--        </p>-->
<!--        <div class="ml-3 mb-3">-->
<!--          <router-link to="/photos">-->
<!--            <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">-->
<!--      <div class="w-2/5">-->
<!--        <img :src="require('../assets/fluntemoji.png')" alt="">-->
<!--      </div>-->
<!--      <div class="w-3/5">-->
<!--        <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">-->
<!--          PHOTOS-->
<!--        </p>-->
<!--        <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">-->
<!--          You can discover my passion for capturing the beauty of the world around us.-->
<!--          From stunning landscapes to intimate portraits, I strive to create images that evoke emotions and tell-->
<!--          stories.-->
<!--          Each photo is a reflection of my unique vision and style, and I hope they inspire you as much as they-->
<!--          inspire me.-->
<!--        </p>-->
<!--        <div class="ml-3 mb-3">-->
<!--          <router-link to="/photos">-->
<!--            <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">-->
<!--      <div class="w-2/5">-->
<!--        <img :src="require('../assets/fluntemoji.png')" alt="">-->
<!--      </div>-->
<!--      <div class="w-3/5">-->
<!--        <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">-->
<!--          PHOTOS-->
<!--        </p>-->
<!--        <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">-->
<!--          You can discover my passion for capturing the beauty of the world around us.-->
<!--          From stunning landscapes to intimate portraits, I strive to create images that evoke emotions and tell-->
<!--          stories.-->
<!--          Each photo is a reflection of my unique vision and style, and I hope they inspire you as much as they-->
<!--          inspire me.-->
<!--        </p>-->
<!--        <div class="ml-3 mb-3">-->
<!--          <router-link to="/photos">-->
<!--            <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">-->
<!--      <div class="w-2/5">-->
<!--        <img :src="require('../assets/fluntemoji.png')" alt="">-->
<!--      </div>-->
<!--      <div class="w-3/5">-->
<!--        <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">-->
<!--          PHOTOS-->
<!--        </p>-->
<!--        <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">-->
<!--          You can discover my passion for capturing the beauty of the world around us.-->
<!--          From stunning landscapes to intimate portraits, I strive to create images that evoke emotions and tell-->
<!--          stories.-->
<!--          Each photo is a reflection of my unique vision and style, and I hope they inspire you as much as they-->
<!--          inspire me.-->
<!--        </p>-->
<!--        <div class="ml-3 mb-3">-->
<!--          <router-link to="/photos">-->
<!--            <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">-->
<!--      <div class="w-2/5">-->
<!--        <img :src="require('../assets/fluntemoji.png')" alt="">-->
<!--      </div>-->
<!--      <div class="w-3/5">-->
<!--        <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">-->
<!--          PHOTOS-->
<!--        </p>-->
<!--        <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">-->
<!--          You can discover my passion for capturing the beauty of the world around us.-->
<!--          From stunning landscapes to intimate portraits, I strive to create images that evoke emotions and tell-->
<!--          stories.-->
<!--          Each photo is a reflection of my unique vision and style, and I hope they inspire you as much as they-->
<!--          inspire me.-->
<!--        </p>-->
<!--        <div class="ml-3 mb-3">-->
<!--          <router-link to="/photos">-->
<!--            <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>-->
<!--          </router-link>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </div>


    <Footer></Footer>
  </div>
</template>

<script>
import Navigator from '@/components/navigator.vue';
import Footer from "@/components/Footer";
import axios from "axios";
export default {
  name: "BlogsView",
  components: {
    Navigator,
    Footer
  },
  data(){
    return{
      blogs:[],
    };
  },
  created() {
    axios.get('/blogs/').then(response=>{
      this.blogs=response.data
    }).catch(error=>{
      console.error(error)
    })
  }
}
</script>

<style scoped>

</style>