<template>

</template>

<script>
export default {
  name: "PhotoDetailView",
  data(){
    return{
      photo:[]
    }
  },
  created() {
    //在created钩子函数中发送请求获取数据
    axios.get('/photos/detail').then(response=>{
      this.photo=response.data
    })
  }
}
</script>
