<template>

  <nav class="flex mx-1 h-12 sticky top-1.5 rounded-full shadow-md bg-gray-100 bg-opacity-50 items-center justify-between backdrop-blur-md z-20">
    <!--    logo-->
    <div class="ml-3">
      <router-link to="/">
        <img src="@/assets/icon.png" alt="my site name" class="h-10">
      </router-link>
    </div>
    <!--    navigation-->
    <div class="hidden lg:flex lg:gap-x-12">
      <div><router-link to="/" class="font-sm font-semibold leading-6 text-gray-500 hover:text-indigo-600 flex items-center"> Home </router-link></div>
      <div><router-link to="/photos" class="font-sm font-semibold leading-6 text-gray-500 hover:text-indigo-600 flex items-center"> Photos </router-link></div>
      <div><router-link to="/blogs" class="font-sm font-semibold leading-6 text-gray-500 hover:text-indigo-600 flex items-center"> Blogs </router-link></div>
      <div><router-link to="/tools" class="font-sm font-semibold leading-6 text-gray-500 hover:text-indigo-600 flex items-center"> Tools </router-link></div>
      <div><router-link to="/about" class="font-sm font-semibold leading-6 text-gray-500 hover:text-indigo-600 flex items-center"> About </router-link></div>
    </div>
    <div class="flex mr-3">
      <button v-if="!isLogin" @click="login" class="font-semibold font-sans text-gray-500 hover:text-indigo-600">Login</button>
      <button v-if="isLogin" @click="logout" class="font-semibold font-sans text-gray-500 hover:text-indigo-600">Logout</button>
    </div>
  </nav>
</template>

<script>

import icon from '@/assets/icon.png'
import axios from "axios";

export default {
  name: 'navigator',
  data() {
    return {
      icon: require("@/assets/icon.png"),
      token:''
    }
  },
  created() {
    this.token = localStorage.getItem('Authorization')
  },
  computed:{
    isLogin:function (){
      return this.token!==null&&this.token!==undefined&&this.token!=='';
    }
  },
  methods:{
    logout(){
      axios.get("/logout",{
        headers:{
          'token': this.token
        }
      }).then(response=>{
        console.log(response);
        this.token='';
        localStorage.removeItem("Authorization")
        this.$router.push('/');
      })
    },login() {
      this.$router.push('/login')
    }
  }

}
</script>

<style scoped>

</style>