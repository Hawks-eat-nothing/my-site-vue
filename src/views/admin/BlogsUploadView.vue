<template>
    <div>
        <navigator_back></navigator_back>
        <div class="grid-cols-1 w-4/5 mx-auto mt-8">
            <button class="bg-green-200 h-10 text-black rounded-xl px-5 font-semibold font-sans my-2 hover:bg-green-400" @click="submitBlog">NEW
            </button>
            <table class="table-fixed w-full">
                <thead >
                <tr class="text-gray-400 border-b-4 border-black my-4">
                    <th class="w-1/2 text-xl">Title</th>
                    <th class="w-1/6 text-xl">UpdateTime</th>
                    <th class="w-1/12 text-xl">Views</th>
                    <th class="w-1/6 text-xl">Options</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="blog in blogs" :key="blog.id" class="border-dashed border-b-2 border-gray-400 h-20 justify-center">
                    <td>{{blog.title}}</td>
                    <td class="text-center">{{blog.updateTime}}</td>
                    <td class="text-center">{{blog.views}}</td>
                    <td class="text-center align-middle">
                        <button class="bg-amber-200 h-7 px-5 m-2 rounded-xl hover:bg-amber-400" @click="updateBlog(blog.id)">修改</button>
                        <button class="bg-red-200 h-7 px-5 m-2 rounded-xl hover:bg-red-400" @click="deleteBlog(blog.id)">删除</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<script>
import navigator_back from "@/components/navigator_back.vue";
import axios from "axios";

export default {
    name: "BlogsUploadView",
    components: {navigator_back},
    data(){
        return{
            blogs:[],
        }
    },
    created() {
        axios.get('/blogs/').then(response => {
            this.blogs = response.data
            console.log(this.blogs);
        }).catch(error => {
            console.error(error)
        })
    },
    methods: {
        submitBlog(){
            this.$router.push('/submitblog')
        },
        deleteBlog(){

        },
        updateBlog(){

        }

    }
}
</script>

<style scoped>

</style>