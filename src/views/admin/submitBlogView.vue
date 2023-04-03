<template>
    <div class="bg-gray-100 pb-8">
        <navigator_back></navigator_back>
        <div class="grid-cols-1 w-4/5 mx-auto mt-8">
            <form class="bg-white shadow-md rounded-lg px-8 py-6">
                <div class="mb-4">
                    <label class="block text-gray-400 text-2xl font-bold mb-2">Title</label>
                    <input class="appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           v-model="form.title" type="text" placeholder="请输入博客标题">
                </div>
                <div class="flex items-center ">
                    <div class="flex items-center mr-2 mb-2">
                        <label class="mr-2">原创</label>
                        <input class=" border rounded-lg" v-model="form.flag" type="checkbox">
                    </div>
                    <div class="flex items-center mr-2 mb-2">
                        <label class="mr-2">评论</label>
                        <input class="border rounded-lg" v-model="form.commentAbled" type="checkbox">
                    </div>
                </div>
                <v-md-editor v-model="form.content" height="600px"></v-md-editor>

                <div class="mt-4">
                    <label class="block text-gray-400 text-2xl font-bold mb-2">Description</label>
                    <input class="appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           v-model="form.description" type="text" placeholder="请输入博客概述">
                </div>

                <div>
                    <label class="block text-gray-400 text-2xl font-bold mb-2  mt-4">Tags</label>
                    <div class="flex tag-input border-dashed border-2 border-gray-500 h-10 rounded-lg items-center" @click="showDialog = true">
                        <div class="tag ml-3 bg-blue-100 rounded-lg px-2" v-for="(tagl, index) in tagList" :key="index">
                            {{ tagl.name }}<button class="close-btn ml-1" @click="removeTag(index)">×</button>
                        </div>
                    </div>
                    <div v-if="showDialog" class="relative tag-dialog flex flex-wrap bg-gray-100 mt-2 h-auto p-2 rounded-lg items-baseline">
                        <div v-for="(tag, index) in tags" :key="index" v-if="tag.deleted===false" @click="selectTag(tag)" class="ml-4 mt-2 bg-amber-100 py-1 px-2 rounded-lg">
                            {{ tag.name }}
                        </div>
                        <button @click="showDialog=false" class="absolute top-0 right-2 text-xl">×</button>
                    </div>
                </div>

                <button class="bg-green-300 hover:bg-green-500 text-black font-bold mt-3 py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline"
                        type="button" @click="submitBlog('publish')">发布
                </button>
                <button class="bg-amber-300 hover:bg-amber-500 text-black font-bold mt-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" @click="submitBlog('draft')">存草稿
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import navigator_back from "@/components/navigator_back.vue";
import MdEditor from "@/components/v-md-editor/mdEditor.vue";

import axios from "axios";


export default {
    name: "submitBlogView",
    components: {
        navigator_back,
        MdEditor
    },
    data() {
        return {
            selectedItems: [],
            tags: [],
            showDialog: false,
            newTag:[],
            tagList:[],
            form: {
                title: '',
                content: '',
                coverImg: '',
                flag: false,
                commentAbled: false,//0表示允许评论，1表示不允许
                published: '',
                description: '',
                tagIds:[]
            }
        };
    },
    methods: {
        submitBlog(opt) {
            const formData = new FormData();
            formData.append('title', this.form.title);
            formData.append('content', this.form.content);
            formData.append('coverImg', this.form.coverImg);
            if (this.form.flag === true) {
                formData.append('flag', '原创');
            } else {
                formData.append('flag', '转载');
            }
            if (this.form.commentAbled === true) {
                formData.append('commentAbled', true);
            } else {
                formData.append('commentAbled', false);
            }
            if (opt === 'publish') {
                this.form.published = true;
            } else if (opt === 'draft') {
                this.form.published = false;
            }
            formData.append("published", this.form.published);
            formData.append("description", this.form.description);
            formData.append("tagIds",this.form.tagIds);
            console.log(this.form.tagIds);
            const formDataObject = Object.fromEntries(formData);
            const formDataJson = JSON.stringify(formDataObject);
            const jsonObject = JSON.parse(formDataJson);
            console.log(jsonObject);
            axios.post("/blogs/add", jsonObject, {
                // headers:{
                //     'token': localStorage.getItem('Authorization')
                // }
            }).then(response => {
                alert("提交成功");
            }).catch(error => {
                console.log(error);
            })
        },
        selectTag(tag) {
            this.tagList.push(tag);
            this.form.tagIds.push(tag.id);
            this.form.tagIds.toString();
            this.newTag = '';
            // this.showDialog = false;
        },
        removeTag(index) {
            this.tagList.splice(index, 1);
        }
    },
    created() {
        axios.get('/tags').then(response => {
            this.tags = response.data.data;
            console.log(this.tags)

        }).catch(error => {
            console.log(error);
        })
    }
}
</script>

<style scoped>

</style>