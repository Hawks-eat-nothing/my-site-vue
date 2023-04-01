<template>
    <div class="bg-gray-100 h-screen">
        <navigator_back></navigator_back>
        <div class="grid-cols-1 w-4/5 mx-auto mt-8">
            <form class="bg-white shadow-md rounded-lg px-8 py-6">
                <div class="mb-4">
                    <label class="block text-gray-400 text-2xl font-bold mb-2" >Title</label>
                    <input class="appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.title" type="text" placeholder="请输入博客标题">
                </div>
                <div class="flex items-center ">
                    <div class="flex items-center mr-2 mb-2">
                        <label class="mr-2" >原创</label>
                        <input class=" border rounded-lg" v-model="form.flag" type="checkbox">
                    </div>
                    <div class="flex items-center mr-2 mb-2">
                        <label class="mr-2">评论</label>
                        <input class="border rounded-lg"  v-model="form.commentAbled" type="checkbox">
                    </div>
                </div>
                <v-md-editor v-model="form.content" height="600px"></v-md-editor>
                <button class="bg-green-300 hover:bg-green-500 text-black font-bold mt-3 py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline" type="button" @click="submitBlog('publish')">发布</button>
                <button class="bg-amber-300 hover:bg-amber-500 text-black font-bold mt-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="submitBlog('draft')">存草稿</button>
            </form>
        </div>
    </div>
</template>

<script>
import navigator_back from "@/components/navigator_back.vue";
import MdEditor from "@/components/v-md-editor/mdEditor.vue";
import {els, flat} from "vue-markdown-it";
import axios from "axios";

export default {
    name: "submitBlogView",
    components:{
        navigator_back,
        MdEditor
    },
    data() {
        return {
            selectedItems:[],
            form:{
                title:'',
                content:'',
                coverImg:'',
                flag:false,
                commentAbled:false,//0表示允许评论，1表示不允许
                published:''
            }
        };
    },
    methods:{
        submitBlog(opt) {
            const formData=new FormData();
            formData.append('title',this.form.title);
            formData.append('content',this.form.content);
            formData.append('coverImg',this.form.coverImg);
            if (this.form.flag===true){
                formData.append('flag','原创');
            }else{
                formData.append('flag','转载');
            }
            if (this.form.commentAbled===true){
                formData.append('commentAbled',true);
            }else{
                formData.append('commentAbled',false);
            }
            if (opt==='publish'){
                this.form.published=true;
            }else if (opt==='draft'){
                this.form.published=false;
            }
            formData.append("published",this.form.published);
            const formDataObject = Object.fromEntries(formData);
            const formDataJson = JSON.stringify(formDataObject);
            const jsonObject = JSON.parse(formDataJson);
            console.log(jsonObject);
            axios.post("/blogs/add",jsonObject,{
                // headers:{
                //     'token': localStorage.getItem('Authorization')
                // }
            }).then(response=>{

                alert("提交成功")
            }).catch(error=>{
                console.log(error);
            })
        },
    }
}
</script>

<style scoped>

</style>