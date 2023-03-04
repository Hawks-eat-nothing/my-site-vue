<template>
  <div class="upload h-screen bg-gray-100">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <navigator_back></navigator_back>



<!--    <Footer></Footer>-->
  </div>

</template>

<script>
import navigator_back from "@/components/navigator_back";
import Footer from "@/components/Footer";

export default {
  name: "UploadView",
  components: {
    Footer,
    navigator_back,
  }
}
</script>

<style scoped>

</style>