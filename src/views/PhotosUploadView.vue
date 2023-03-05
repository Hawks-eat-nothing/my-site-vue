<template>
  <div class="photosupload bg-gray-100">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <navigator_back></navigator_back>
<!--    文件选择框-->
    <div class="mt-8 h-screen">
      <div class="flex w-3/5 h-1/5 mx-auto">
        <div class="ml-5 mt-5 w-1/2 h-full rounded-2xl border-dashed border-gray-500 border-2">
          <el-upload
              class="upload-demo ml-5 mt-5"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>

      </div>


    </div>



    <Footer></Footer>
  </div>

</template>

<script>
import navigator_back from "@/components/navigator_back";
import Footer from "@/components/Footer";

export default {
  name: "UploadView",
  components: {
    Footer,
    navigator_back,
  },
  data(){
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }

}
</script>
