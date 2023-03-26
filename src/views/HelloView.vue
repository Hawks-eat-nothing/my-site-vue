<template>
  <div>
    this is hello page
    <button @click="logout">logout</button>
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
  created() {
    this.token=localStorage.getItem('Authorization')
    axios.get("/hello",{
      headers:{
        'token': this.token
      }
    }).then(response=>{
      console.log(response);
    }).catch(error=>{
      console.log(error)
    })
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
    }
  }
}
</script>

<style scoped>

</style>