<template>
  <div>
    <navigator></navigator>

    <div class="grid grid-cols-1 w-4/5 mx-auto mt-8">
      <div class=" h-full rounded-3xl mx-auto overflow-hidden border-gray-700 border-dashed border-2 shadow-lg">
        <img :src="photo.url" class="justify-center">
      </div>
      <div class="mt-4 ml-3">
        <p class="font-sans text-lg text-gray-700 font-semibold">Description_</p>
        <p class="font-sans text-lg text-gray-500 font-semibold">{{ photo.description }}</p>
        <p class="font-sans text-lg text-gray-700 font-semibold">Resolution_</p>
        <p class="font-sans text-lg text-gray-500 font-semibold">{{ photo.resolution }}</p>
        <p class="font-sans text-lg text-gray-700 font-semibold">Position_</p>
        <p class="font-sans text-lg text-gray-500 font-semibold">{{ photo.position}}</p>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navigator from "@/components/navigator";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "PhotoDetailView",
  components: {Footer, Navigator},
  data() {
    return {
      photo: null
    }
  },
  mounted() {
    const id = this.$route.params.id
    axios.get('/photos/detail/' + id)
        .then(response => {
          this.photo = response.data;
          console.log(id);
          console.log(this.photo.url)
        })
        .catch(error => {
          console.error(error)
        })
  }
}
</script>
