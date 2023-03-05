<template>
  <body>
  <div class="home bg-gray-100">

    <Navigator msg="hello"></Navigator>

    <div class="mt-8 grid lg:grid-cols-1">
      <!--第一部分-->
      <div class="flex w-3/5 mb-4 h-auto mx-auto rounded-3xl shadow-lg border-dashed border-4 border-gray-600 p-4">
        <div class="w-1/3 h-15">
          <div class="flex justify-between m-2">
            <div></div>
            <div><img src="@/assets/icon.png" alt="my site name" class="h-14 order-2"></div>
            <div></div>
          </div>

          <div class="ml-1 font-mono font-semibold text-xl justify-around m-1">
            <p class="leading-7">>_ Freedom promotes creativity.</p>
          </div>

          <div class="ml-1 font-mono text-xl justify-around m-1">
            <p>------------------</p>
            <p>- Self Hosting Website</p>
            <p>- Master's Degree</p>
            <p>- Swimming</p>
            <p>- Swift Learner</p>
            <p>------------------</p>
          </div>

          <div class="flex justify-around m-1">
            <a href="https://github.com/Hawks-eat-nothing"><i class="mdi mdi-24px mdi-github"></i></a>
            <span class="mdi mdi-24px mdi-email" :id="email" v-on:click="copyToClipboard"></span>
            <span class="mdi mdi-24px mdi-qqchat" :id="qq" v-on:click="copyToClipboard"></span>
            <span class="mdi mdi-24px mdi-wechat" :id="wechat" v-on:click="copyToClipboard"></span>
            <span class="mdi mdi-24px mdi-rss" :id="rss" v-on:click="copyToClipboard"></span>
          </div>

        </div>


        <div class="w-2/3">
          <p class="mt-3 ml-3 md:font-semibold font-mono text-5xl">
            Introducing Y.X-Site
          </p>
          <p class="mt-2 mx-3 md:font-sans text-gray-400 text-xl">
            Welcome to my personal website, where you can explore my photography portfolio, read my blog, and find
            useful tools.

            In my photography portfolio, you can discover my passion for capturing the beauty of the world around
            us.<br>

            In my blog, you will find my musings on a variety of topics, from travel and culture to technology and
            creativity.<br>

            Finally, my small but growing collection of tools and resources is designed to help you in your daily
            life.<br>

          </p>
        </div>

      </div>
      <!--第二部分-->
      <div class="flex mt-2 w-3/5 mx-auto">
        <div class="w-3/5">
          <img :src="require('../assets/fluntemoji.png')" alt="">
        </div>
        <div class="w-2/5">
          <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">
            PHOTOS
          </p>
          <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">
            You can discover my passion for capturing the beauty of the world around us.
            From stunning landscapes to intimate portraits, I strive to create images that evoke emotions and tell
            stories.
            Each photo is a reflection of my unique vision and style, and I hope they inspire you as much as they
            inspire me.
          </p>
          <div class="ml-3 mb-3">
            <router-link to="/photos">
              <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex w-3/5 mx-auto mt-2">
        <div class="w-2/5">
          <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">
            BLOGS
          </p>
          <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">
            You will find my musings on a variety of topics,
            from travel and culture to technology and creativity.
            I love to share my thoughts and experiences with others,
            and I hope my writing inspires you to explore new ideas and perspectives.
          </p>
          <div class="ml-3 mb-3">
            <router-link to="/blogs">
              <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>
            </router-link>
          </div>
        </div>
        <div class="w-3/5">
          <img :src="require('../assets/fluntemoji.png')" alt="">
        </div>
      </div>
      <div class="flex mt-2 w-3/5 mx-auto">
        <div class="w-3/5">
          <img :src="require('../assets/fluntemoji.png')" alt="">
        </div>
        <div class="w-2/5">
          <p class="mt-3 ml-3 md:font-semibold font-sans text-5xl">
            TOOLS
          </p>
          <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">
            My small but growing collection of tools and resources
            is designed to help you in your daily life.
            From calculators to converters, I aim to create
            useful and easy-to-use tools that make your life a little bit easier.
          </p>
          <div class="ml-3 mb-3">
            <router-link to="/tools">
              <p class="text-indigo-600 text-2xl font-sans">Learn more <i class="mdi mdi-24px mdi-arrow-right"></i></p>
            </router-link>
          </div>
        </div>
      </div>
    </div>


    <Footer></Footer>

  </div>
  </body>
</template>

<script>
// @ is an alias to /src
import Navigator from '@/components/navigator.vue'
import Footer from '@/components/Footer'

export default {
  name: 'HomeView',
  components: {
    Navigator,
    Footer
  },
  data() {
    return {
      email: 'yaxing_guo@outlook.com',
      qq: '365328807',
      wechat: '15261865721',
      rss: 'to be done',
    };
  },
  methods: {
    copyToClipboard(event) {
      var content = event.target.getAttribute('id');
      this.$copyText(content).then(
          e => {
            alert('已复制到剪切板')
          }, function (e) {
            alert('复制失败')
          })
    },

  }
}
</script>
