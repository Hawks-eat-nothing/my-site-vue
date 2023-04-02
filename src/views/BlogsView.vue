<template>
    <div class="blogs bg-gray-100">
        <Navigator msg="hello"></Navigator>

        <div class="mt-8 grid lg:grid-cols-1 gap-4">
            <div v-for="blog in blogs" :key="blog.id" v-if="blog.published===true"
                 class="flex mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300">
                <!--                <div class="w-2/5 h-64">-->
                <!--                    &lt;!&ndash;        <img :src="require('../assets/fluntemoji.png')" alt="">&ndash;&gt;-->
                <!--                    <img :src="blog.coverImg" alt="" class="object-cover w-full h-64">-->
                <!--                </div>-->
                <div class="w-3/5">
                    <div>
                        <router-link :to="{name:'blogDetail',params:{id:blog.id}}">
                            <p class="mt-3 ml-3 md:font-bold hover:text-blue-800 font-sans text-3xl">
                                {{ blog.title }}
                            </p>
                        </router-link>
                    </div>
                    <div>
                        <p class="mt-3 mx-3 md:font-sans text-gray-600 text-xl">
                            {{ blog.description }}
                        </p>
                    </div>
                    <div class=" flex ml-3 align-bottom text-center">

                        <router-link :to="{name:'blogDetail',params:{id:blog.id}}">
                            <p class="text-gray-400 hover:text-blue-800 text-lg font-sans">Learn more <i
                                    class="mdi mdi-18px mdi-arrow-right"></i></p>
                        </router-link>
                    </div>
                    <div class="flex ml-3">
                        <p class=" mr-4 mdi mdi-eye-check-outline text-gray-500"> {{ blog.views }}</p>
                        <p class=" mr-4 mdi mdi-thumb-up-outline text-gray-500"> {{ blog.views }}</p>
                        <p class=" mr-4 mdi mdi-star-check-outline text-gray-500"> {{ blog.views }}</p>
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