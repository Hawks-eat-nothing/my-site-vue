<template>
    <div class="bg-gray-50">
        <navigator></navigator>
        <div class="mt-8 grid lg:grid-cols-1 gap-4 ">
            <div class=" mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden p-4 bg-white">
<!--                <img :src="blog.coverImg" class="mx-auto">-->
                <div class=" text-4xl font-sans font-bold mb-4" style="color:#95B677 ">{{ blog.title }}</div>
                <div class="flex mb-4">
                    <div class="mb-2 text-sm text-amber-500 border-2 px-1 rounded-lg border-amber-500">{{blog.flag}}</div>
                    <div class="mb-2 ml-4 text-gray-400 ">{{blog.createTime}}</div>
                    <div class="mdi mdi-eye mb-2 ml-4 text-gray-400 ">{{blog.views}}</div>
                </div>
                <div v-html="renderedHtml" class="markdown-body"></div>
                <div  class="flex mt-6 w-full  border-t-2">
                    <div v-for="tag in tags" :key="tag.id" class="mt-2 mr-2 text-sm font-semibold bg-blue-100 rounded-lg p-1">#{{tag.name}}</div>
                </div>

<!--                <div class="my-toc">-->
<!--                    <div class="my-toc-title">Table of Contents</div>-->
<!--                    <div class="my-toc-content" v-html="tocHtml"></div>-->
<!--                </div>-->

            </div>

            <CommentView/>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
import Navigator from "@/components/navigator";
import Footer from "@/components/Footer";
import MarkdownIt from 'markdown-it';
import axios, {head} from "axios";
import CommentView from "@/components/CommentView.vue";
import markdownItToc from 'markdown-it-toc'

// import markdownToc from 'markdown-toc';
// import fs from 'fs';


import "/node_modules/github-markdown-css/github-markdown.css"
import 'highlight.js';
import "highlight.js/styles/atom-one-light.css";

const highlightCode = () => {
    const preEl = document.querySelectorAll('pre')
    preEl.forEach((el) => {
        hljs.highlightBlock(el)
    })
}

export default {
    name: "BlogDetailView",
    components: {CommentView, Footer, Navigator},
    data() {
        return {
            blog: null,
            markdownText: '',
            renderedHtml: '',
            origincontent: '',
            tocHtml:'',
            tags:[],
        };
    },
    mounted() {
        highlightCode()
        const id = this.$route.params.id
        axios.get('/blogs/detail/' + id, {
            headers: {
                'token': localStorage.getItem('Authorization')
            }
        }).then(response => {
            const md = new MarkdownIt();
            md.use(markdownItToc);

            this.blog = response.data;
            // console.log(this.blog)
            this.markdownText = this.blog.content;

            this.renderedHtml = md.render(this.markdownText);
            // const tocRegExp = /<nav class="table-of-contents">([\s\S]*?)<\/nav>/;
            // const tocMatch = this.renderedHtml.match(tocRegExp);
            // this.tocHtml = tocMatch ? tocMatch[1] : '';
            // console.log(this.tocHtml)

        }).catch(error => {
            console.error(error)
        })
        //更新浏览量
        axios.put('/blogs/updateViewCount/' + id).catch(error => {
            console.error(error);
        });
        //获取标签
        axios.get('/blogs/tags/'+id).then(response=>{
            this.tags=response.data.data;
            console.log(this.tags)
        }).catch(error=>{
            console.error(error);
        })
    },
    updated (){
        highlightCode()
    },
}
</script>

<style>
.markdown-body blockquote{
    border-left: .25em solid #003FA7;
    background: ghostwhite;
    padding-top: 15px;
    padding-bottom: 15px;
}
.markdown-body pre code{
    font-size: 16px !important;
}
.markdown-body h1{
    color: #BF616A;
}
.markdown-body h2{
    color: #D08770;
}
.markdown-body h3{
    color: #E2B65E;
}
.markdown-body h4{
    color: #95B677;
}
.markdown-body p{
    font-size: 18px !important;
    font-family: "Times New Roman","宋体";
}
.markdown-body li{
    font-size: 18px !important;
    font-family: "Times New Roman","宋体";
}
</style>

