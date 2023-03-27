<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-700 to-red-300 flex items-center justify-center">
    <div class="w-full max-w-md">
      <form class="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input v-model="user.username" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="user.password" class="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        </div>
        <div class="flex items-center justify-between">
          <button @click="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
        </div>
      </form>
      <p class="hover:text-gray-50 animate-pulse"><router-link to="/register">还没账号？去注册</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data(){
    return{
      user:{
        username:'',
        password:''
      }
    }
  },

  methods:{
    login(){
      const formData = new FormData();
      formData.append('userName',this.user.username);
      formData.append('password',this.user.password);
      const formDataObject = Object.fromEntries(formData);
      const formDataJson = JSON.stringify(formDataObject);
      const user = JSON.parse(formDataJson);
      console.log(user)
      axios.post('/login',user).then(response=>{
        alert("登录成功")
        console.log(response.data);
        const token = response.data.data.token;
        // console.log(response.data.data.token)
        localStorage.setItem('Authorization',token);
        this.$router.push('/');
      }).catch(error=>{
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>

</style>