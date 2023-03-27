<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-700 to-red-300 flex items-center justify-center">
    <div class="w-full max-w-md">
      <form :nonce="formLabelAlign" class="bg-white bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label  class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input v-model="formLabelAlign.username" class="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Nickname
          </label>
          <input v-model="formLabelAlign.nickname" class="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="nickname" placeholder="NickName">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input v-model="formLabelAlign.password" class="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input v-model="formLabelAlign.email" class="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email">
        </div>
        <div class="flex items-center justify-between">
          <button @click="register" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign up
          </button>
        </div>
      </form>
      <p class="hover:text-gray-50 animate-pulse"><router-link to="/login">注册成功，去登录</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterView",
  data(){
    return{
      formLabelAlign:{
        username:'',
        password:'',
        nickname:'',
        email:''
      }
    }
  },
  methods:{
    register(){
      const formData = new FormData()
      formData.append('userName',this.formLabelAlign.username)
      formData.append('password',this.formLabelAlign.password)
      formData.append('nickName',this.formLabelAlign.nickname)
      formData.append('email',this.formLabelAlign.email)
      const formDataObject = Object.fromEntries(formData);
      const formDateJson = JSON.stringify(formDataObject);
      const user = JSON.parse(formDateJson);
      axios.post('/register',user).then(response=>{
        alert("注册成功")
        this.$router.push('/login')
      }).catch(error=>{
        console.error(error)
      })

    }
  }
}
</script>

<style scoped>

</style>