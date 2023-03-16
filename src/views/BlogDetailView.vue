<template>
  <div>
    <navigator></navigator>
    <div class="mt-8 grid lg:grid-cols-1 gap-4">
      <div class="flex mt-2 w-4/5 mx-auto rounded-2xl overflow-hidden pl-3 pt-5">
        <div v-html="renderedHtml" class="markdown"></div>
        <!--              {{renderedHtml}}-->
        <h2>你好</h2>
        <h1 class="text-red-500">这个段落不会受到Tailwind CSS的影响</h1>
      </div>
      <!--      评论区-->
      <div class="flex mt-2 w-3/5 mx-auto font-semibold font-sans text-xl">>评论_</div>


      <!--      评论提交-->
      <div class="flex mt-2 w-4/5 mx-auto">
        <textarea placeholder="请输入您的评论..." maxlength="140"
                  class="w-3/4 h-30 mx-auto rounded-lg border-2 border-dashed"></textarea>
      </div>
      <div class="flex mt-2 w-3/5 mx-auto justify-items-start">
        <div class="ml-3">
          <i class="mdi mdi-account-check-outline mdi-24px"></i>
          <input placeholder="用户名长度1~10个字符" v-model="name" @blur="checkName"
                 class="h-10 rounded-lg border-2 border-b my-2 ml-1 pl-1">
          <div v-show="!isValidName" class="text-red-600">请输入合规的用户名</div>
        </div>
        <div class="ml-3">
          <i class="mdi mdi-email-outline mdi-24px"></i>
          <input placeholder="留下邮箱" v-model="email" @blur="checkEmail"
                 class="h-10 rounded-lg border-2 border-b my-2 ml-1 pl-1">
          <div v-show="!isValidEmail" class="text-red-600">请输入正确的邮箱</div>
        </div>
        <div class="ml-3">
          <button class="bg-indigo-700 h-10 text-gray-50 rounded-lg px-5 h-10 font-semibold font-sans my-2">Submit
          </button>
        </div>
      </div>
      <!--      评论展示-->
      <div id="comment-list"
           class="mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300 pl-3">
        <!--        父评论-->
        <div>
          <div id="comment" class="flex m-2 w-full ">
            <div class="font-semibold font-sans">Alex</div>
            <div class="mt-1 ml-1 text-sm font-sans font-light text-gray-300">2023-03-16 20:22</div>
          </div>
          <div class="ml-5">this is a comment</div>
          <div class="ml-5 text-gray-400 font-sans text-sm">回复</div>
        </div>
        <!--        子集评论-->
        <div  class="ml-10">
          <div id="comment" class="flex m-2 w-full ">
            <div class="font-semibold font-sans">Alex</div>
            <div class="mt-1 ml-1 text-sm font-sans font-light text-gray-300">2023-03-16 20:22</div>
          </div>
          <div class="ml-5">this is a comment</div>
          <div class="ml-5 text-gray-400 font-sans text-sm">回复</div>
        </div>
        <div  class="ml-10">
          <div id="comment" class="flex m-2 w-full ">
            <div class="font-semibold font-sans">Alex</div>
            <div class="mt-1 ml-1 text-sm font-sans font-light text-gray-300">2023-03-16 20:22</div>
          </div>
          <div class="ml-5">this is a comment</div>
          <div class="ml-5 text-gray-400 font-sans text-sm">回复</div>
        </div>
        <div  class="ml-10">
          <div id="comment" class="flex m-2 w-full ">
            <div class="font-semibold font-sans">Alex</div>
            <div class="mt-1 ml-1 text-sm font-sans font-light text-gray-300">2023-03-16 20:22</div>
          </div>
          <div class="ml-5">this is a comment</div>
          <div class="ml-5 text-gray-400 font-sans text-sm">回复</div>
        </div>


        <div >
          <div id="comment" class="flex m-2 w-full ">
            <div class="font-semibold font-sans">Bob</div>
            <div class="mt-1 ml-1 text-sm font-sans font-light text-gray-300">2023-03-16 20:22</div>
          </div>
          <div class="ml-5">this is a comment</div>
          <div class="ml-5  text-gray-400 font-sans text-sm">回复</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
import Navigator from "@/components/navigator";
import Footer from "@/components/Footer";
import MarkdownIt from 'markdown-it';
import mdHighlight from 'markdown-it-highlightjs';
import axios from "axios";

export default {
  name: "BlogDetailView",
  components: {Footer, Navigator},
  data() {
    return {
      blog: null,
      markdownText: '',
      md: new MarkdownIt().use(mdHighlight),
      renderedHtml: '',
      email: '',
      isValidEmail: true,
      name: '',
      isValidName: true,
      comments: [],
    };
  },
  mounted() {
    const id = this.$route.params.id
    axios.get('/blogs/detail/' + id).then(response => {
      this.blog = response.data;
      this.markdownText = this.blog.content;
      this.renderedHtml = this.md.render(this.markdownText);
    }).catch(error => {
      console.error(error)
    })
  },
  methods: {
    checkEmail: function () {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!re.test(this.email)) {
        this.isValidEmail = false
      } else {
        this.isValidEmail = true
      }
      return re.test(this.email)
    },
    checkName: function () {
      if (this.name.length <= 0 || this.name.length > 10) {
        this.isValidName = false;
      } else {
        this.isValidName = true;
      }
    }
  }
}
</script>

<style scoped>
/*#comment-list {*/
/*  position: relative;*/
/*}*/
/*#comment::before{*/
/*  content: "";*/
/*  position: absolute;*/
/*  top: -16px;*/
/*  left: 10px;*/
/*  width: 2px;*/
/*  height: 100%;*/
/*  background-color: #ccc;*/
/*}*/

.output_wrapper /*此属性为全局*/
{
  font-size: 16px;
  color: #3e3e3e;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 1px;
  font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
}

.output_wrapper * {
  font-size: inherit;
  color: inherit;
  line-height: inherit;
  margin: 0px;
  padding: 0px;
}

p { /*段落*/
  margin: 1.5em 0px;
  padding-left: 1em;
  padding-right: 1em;
}

h1, h2, h3, h4, h5, h6 {
  margin: 1.5em 0px;
  font-weight: bold;
  color: #159957; /*改变了其默认的标题颜色*/
  text-align: center; /*改变了其默认值，使其标题居中*/
}

h1 {
  font-size: 1.6em;

}

h2 {
  font-size: 1.4em;
}

h3 {
  font-size: 1.3em;
}

h4 {
  font-size: 1.2em;
}

h5 {
  font-size: 1em;
}

h6 {
  font-size: 1em;
}

ul, ol {
  padding-left: 32px;
}

ul { /*无序列表*/
  list-style-type: disc;
}

ol { /*有序列表*/
  list-style-type: decimal;
}

li * {
  /* color: #3e3e3e;*/
}

li { /*在公众号下，改变不了li符号的属性（如颜色），并会影响其子元素的属性;而在其它博客平台中，则能正常使用*/
  margin-bottom: 0.5em;
  /*  color:#159957; */
}

.code_size_default /*代码块默认size*/
{
  line-height: 18px;
  font-size: 14px;
  font-weight: normal;
  word-spacing: 0px;
  letter-spacing: 0px;
}

.code_size_tight /*代码块紧凑size*/
{
  line-height: 15px;
  font-size: 14px;
  font-weight: normal;
  word-spacing: -3px;
  letter-spacing: 0px;
}

pre code /*代码块*/
{
  font-family: Consolas, Inconsolata, Courier, monospace;
  border-radius: 0px;
}

blockquote { /*引用块*/
  display: block;
  padding: 15px 1rem;
  font-size: 0.9em;
  padding-right: 15px;
  margin: 1em 0;
  color: #819198;
  border-left: 6px solid #dce6f0;
  background: #f2f7fb;
  overflow: auto;
  overflow-scrolling: touch;
  word-wrap: normal;
  word-break: normal;
}

blockquote p {
  margin: 0px;
}

a { /*超链接*/
  text-decoration: none;
  color: #1e6bb8;
  word-wrap: break-word;
}

strong /*强调*/
{
  font-weight: bold;
}

em /*斜体*/
{
  font-style: italic;
}

del /*删除线*/
{
  font-style: italic;
}

strong em /*强调的斜体*/
{
  font-weight: bold;
}

hr { /*分隔线*/
  height: 1px;
  margin: 1.5rem 0px;
  border: none;
  border-top: 1px dashed #A5A5A5;
}

code /*行内代码*/
{
  word-break: break-all;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  background: #f8f8f8;
  font-size: 14px;
  font-weight: normal;
}

img {
  display: block;
  margin: 0 auto; /*图片水平居中*/
  /* margin:0 0;  */ /*图片水平居左，如需要请打开*/
  max-width: 100%;
}

figcaption /*图片描述文字*/
{
  margin-top: 10px;
  text-align: center;
  /* text-align:left;  */ /*当图片水平居左时，请打开*/
  color: #999;
  font-size: 0.7em;
}

/*================表格开始================*/
table {
  display: table;
  width: 100%;
  text-align: left;
}

tbody {
  border: 0;
}

table tr {
  border: 0;
  border-top: 1px solid #CCC;
  background-color: white;

}

/*隔行改变行的背景色，如需要请打开*/
/*
table tr:nth-child(2n) {
  background-color: #F8F8F8;
}
*/

table tr th, table tr td {
  font-size: 1em;
  border: 1px solid #CCC;
  padding: 0.5em 1em;
  text-align: left;
}

/*表头的属性*/
table tr th {
  font-weight: bold;
  background-color: #F0F0F0;
}

/*================表格结束================*/

/*================数学公式开始================*/
.katex-display { /*块公式*/
  font-size: 1.22em;
}

.katex { /*行内公式*/
  padding: 8px 3px;
}

.katex-display > .katex { /*块公式*/
  display: inline-block;
  text-align: center;
  padding: 3px;
}

.katex img { /*行内公式对应的图片*/
  display: inline-block;
  vertical-align: middle;
}

/*================数学公式结束================*/

a[href^="#"] sup { /*注脚*/
  vertical-align: super;
  margin: 0 2px;
  padding: 1px 3px;
  color: #ffffff;
  background: #666666;
  font-size: 0.7em;
}

/*================任务列表开始================*/
.task-list-list {
  list-style-type: none;
}

.task-list-list.checked { /*已完成*/
  color: #3e3e3e;
}

.task-list-list.uncheck { /*未完成*/
  color: #bfc1bf;
}

.task-list-list .icon_uncheck, .task-list-list .icon_check {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}

.task-list-list .icon_check:before { /*已完成*/
  content: "√";
  border: 2px solid #3e3e3e;
  color: red;
}

.task-list-list .icon_uncheck:before { /*未完成*/
  content: "x";
  border: 2px solid #bfc1bf;
  color: #bfc1bf;
}

.task-list-list .icon_check:before, .task-list-list .icon_uncheck:before { /*标志框*/
  padding: 2px;
  padding-left: 5px;
  padding-right: 8px;
  border-radius: 5px;
}

/*================任务列表结束================*/


.toc { /*总目录*/
  margin-left: 25px;
}

.toc_item { /*每条目录*/
  display: block;

}

.toc_left { /*每级目录的缩进*/
  margin-left: 25px;
}
</style>
