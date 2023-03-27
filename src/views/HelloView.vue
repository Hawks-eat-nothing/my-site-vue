<template>
  <div>
    this is hello page
    <button @click="logout">logout</button>
    <div @click="upload" class="h-100,w-100,border-2,border-blue-300">upload</div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "HelloView",
  data(){
    return{
      token:'',
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
        this.$router.push('/');
      })
    },
    upload(){
      axios.post("http://mysite.com/api/1/upload/",{
        headers:{
          'X-API-Key':chv_tjwy_9c793d52c5f69cfe13f518425a419ca372fcff6885b18dfe45adade241846ff820ff9a52462b46c335e226e5b1de9c9e536736fbaf8b9f0b00f2291fdff057dc
        }
      })
    }

  }
}
</script>

<style scoped>

</style>