<template>
<div>
  <input type="file" @change="uploadFile" />
</div>
</template>

<script>
export default {
  name: "BlogsUploadView",
  methods:{
    uploadFile(event){
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file',file)

    }
  }
}
</script>

<style scoped>

</style>