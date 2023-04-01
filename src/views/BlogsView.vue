<template>
    <div class="blogs bg-gray-100">
        <Navigator msg="hello"></Navigator>

        <div class="mt-8 grid lg:grid-cols-1 gap-4" >
            <div v-for="blog in blogs" :key="blog.id" v-if="blog.published===true"
                 class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">
<!--                <div class="w-2/5 h-64">-->
<!--                    &lt;!&ndash;        <img :src="require('../assets/fluntemoji.png')" alt="">&ndash;&gt;-->
<!--                    <img :src="blog.coverImg" alt="" class="object-cover w-full h-64">-->
<!--                </div>-->
                <div  class="w-3/5">
                    <p class="mt-3 ml-3 md:font-semibold font-sans text-3xl">
                        {{ blog.title }}
                    </p>
                    <p class="mt-3 mx-3 md:font-sans text-gray-400 text-xl">
                        {{ blog.description }}
                    </p>
                    <div class="ml-3">
                        <p class="mdi mdi-eye"> {{ blog.views }}</p>
                    </div>
                    <div class=" flex ml-3 align-bottom">
                        <router-link :to="{name:'blogDetail',params:{id:blog.id}}">
                            <p class="text-indigo-600 text-2xl font-sans">Learn more <i
                                    class="mdi mdi-24px mdi-arrow-right"></i></p>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import Navigator from '@/components/navigator.vue';
import Footer from "@/components/Footer";

import axios from "axios";

export default {
    name: "BlogsView",
    components: {
        Navigator,
        Footer
    },
    data() {
        return {
            blogs: [],
        };
    },
    created() {
        axios.get('/blogs/').then(response => {
            this.blogs = response.data
            console.log(this.blogs)
        }).catch(error => {
            console.error(error)
        })
    }
}
</script>

<style scoped>

</style>