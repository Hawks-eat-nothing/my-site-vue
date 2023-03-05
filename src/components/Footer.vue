<template>
  <footer class="mt-10 bottom-0 w-full h-auto bg-gray-100 backdrop-blur-md">
    <div class="flex mx-auto w-4/5 justify-center grid lg:grid-cols-4 gap-4">
      <div class="ml-3">
        <p class="mt-5 font-semibold font-mono text-2xl text-indigo-400">> Powered By_</p>
        <div class="mt-10">
          <div class="mt-3">
            <a href="https://vuejs.org/" target="_blank"><img :src="require('../assets/vue.png')" class="h-20"></a>
          </div>
          <div class="mt-8 mb-8">
            <a href="https://tailwindcss.com/" target="_blank"><img :src="require('../assets/tailwind.png')" class="h-6"></a>
          </div>
        </div>
      </div>

      <div class="ml-3">
        <p class="mt-5 font-semibold font-mono text-2xl text-indigo-400">> Special Thank To_</p>
        <div class="mt-10 align-middle h-18 gap-4">
          <div class="mt-3 ml-3 flex ">
            <img :src="require('../assets/openAI.png')" class="h-6">
            <a href="https://chat.openai.com" target="_blank"
               class="ml-3 font-semibold text-gray-500 text-lg">OpenAI</a>
          </div>
          <div class="mt-3 ml-3 flex ">
            <img :src="require('../assets/bing.png')" class="h-6">
            <a href="https://www.bing.com" target="_blank" class="ml-3 font-semibold text-gray-500 text-lg">New Bing</a>
          </div>
          <div class="mt-3 ml-3 mb-3 flex">
            <img :src="require('../assets/google.png')" class="h-6">
            <a href="https://www.google.com" target="_blank" class="ml-3 font-semibold text-gray-500 text-lg">Google</a>
          </div>
        </div>
      </div>


      <div></div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>
