<template>
  <div>
    <navigator></navigator>
    <div class="mt-8 grid lg:grid-cols-1 gap-4">
      <div class=" mt-2 w-4/5 mx-auto rounded-2xl overflow-hidden pl-3 pt-5">
        <div class="font-sans text-4xl font-semibold text-center">{{blog.title}}</div>
        <img :src="blog.coverImg" class="mx-auto mt-3">
        <div v-html="renderedHtml" class="markdown"></div>
      </div>



      <!--      评论区-->
      <div class="flex mt-2 w-3/5 mx-auto font-semibold font-sans text-xl">>评论_</div>


      <!--      评论提交-->
      <div class="flex mt-2 w-4/5 mx-auto">
        <textarea placeholder="请输入您的评论..." type="text" ref="inputBox"  v-model="replyComment.content"
                  maxlength="140"
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
          <button class="bg-indigo-700 h-10 text-gray-50 rounded-lg px-5 h-10 font-semibold font-sans my-2" @click="submitComment">Submit
          </button>
        </div>
      </div>
      <!--      评论展示-->
      <div id="comment-list"
           class="mt-2 w-3/5 mx-auto rounded-2xl overflow-hidden border-dashed border-2 border-gray-300 pl-3">
        <!--        父评论-->
        <div v-for="comment in comments" :key="comment.id">
          <div  class="flex m-2 w-full ">
            <div class="font-semibold font-sans">{{ comment.nickname }}</div>
            <div class="mt-1 ml-1 text-sm font-sans font-light text-gray-300">{{ comment.createTime }}</div>
          </div>
          <div class="ml-5">{{ comment.content }}</div>
          <button class="ml-5 text-gray-400 font-sans text-sm" @click="focusInputBox(comment.nickname,comment.rootId,comment.id)">回复</button>
          <!--        子集评论-->
          <div class="ml-10" v-if="comment.children!=null" v-for="c in comment.children">
            <div  class="flex m-2 w-full ">
              <div class="font-semibold font-sans">{{ c.nickname }}<span class="text-gray-500 font-sans font-medium"> 回复 </span>{{c.toCommentNickname}}</div>
              <div class="mt-1 ml-1 text-sm font-sans font-light text-gray-300">{{ c.createTime }}</div>
            </div>
            <div class="ml-5">{{ c.content }}</div>
            <button class="ml-5 text-gray-400 font-sans text-sm" @click="focusInputBox(c.nickname,c.rootId,c.id)">回复</button>
          </div>
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
      replyUser: '', // 评论的用户名
      origincontent:'',
      replyComment:{
        content:'',
        nickname:'',
        createTime:'',
        rootId:-1,
        toCommentNickname:null,
        toCommentId:-1,
        email:'',
      },
      isSubReply:false,

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

    //评论区
    //获取评论
    axios.get('/comment/commentList/' + id).then(response => {
      this.comments = response.data;
      // console.log(this.comments)
    }).catch(error=>{
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
    },
    focusInputBox(user,rootId,commentId){
      //回复按钮
      this.replyUser = '回复'+user+":";
      this.$refs.inputBox.focus();
      this.$refs.inputBox.scrollIntoView({behavior: "smooth", block: "center"})
      this.replyComment.toCommentNickname=user;
      // console.log(rootId);
      // console.log(commentId);
      if (rootId===-1){
        this.replyComment.rootId=commentId;
      }else {
        this.replyComment.rootId=rootId;
      }
      this.replyComment.toCommentId=commentId;
    },
    submitComment: function (){
      const id = this.$route.params.id;
      const formData = new FormData();
      formData.append('content',this.replyComment.content);
      formData.append('nickname',this.name);
      formData.append('email',this.email);
      formData.append('blogId',id);
      formData.append('rootId',this.replyComment.rootId);
      formData.append('toCommentNickname',this.replyComment.toCommentNickname);
      formData.append('toCommentId',this.replyComment.toCommentId);
      const fromEntries = Object.fromEntries(formData);
      const formDataJson = JSON.stringify(fromEntries);
      const jsonObject = JSON.parse(formDataJson);
      console.log(jsonObject);
      axios.post("/comment/add",jsonObject).then(response=>{
        // alert("评论成功")
        axios.get('/comment/commentList/' + id).then(response => {
          this.comments = response.data;
          // console.log(this.comments)
        }).catch(error=>{
          console.error(error)
        })
      }).catch(error=>{
        console.log(error);
      })
    }
  }
}
</script>
