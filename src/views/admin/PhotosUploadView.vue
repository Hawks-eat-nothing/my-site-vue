<template>
  <div class="photosupload bg-gray-100">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <navigator_back></navigator_back>
    <div class="grid grid-cols-1 h-screen w-4/5 mx-auto mt-8 border-4 border-blue-300">
      <!--      上传区-->
      <div class="flex h-2/3 p-1 border-rose-200 border-2">
<!--        <div class="ml-3 w-1/2">-->
<!--          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">-->
<!--            <el-form-item label="image_url" class="font-semibold font-sans text-lg">-->
<!--              <el-input v-model="formLabelAlign.url"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="location" class="font-semibold font-sans text-lg">-->
<!--              <el-input v-model="formLabelAlign.location"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="resolution" class="font-semibold font-sans text-lg">-->
<!--              <el-input v-model="formLabelAlign.resolution"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="description" class="font-semibold font-sans text-lg">-->
<!--              <el-input type="textarea" v-model="formLabelAlign.description"></el-input>-->
<!--            </el-form-item>-->

<!--              <button class="bg-indigo-700 text-lg font-semibold font-sans text-gray-50 w-1/3 h-8 rounded-lg" type="submit"-->
<!--                      @click="submitData">提交-->
<!--              </button>-->
<!--          </el-form>-->
<!--        </div>-->

        <div>
          <el-button type="primary" @click="add">添加</el-button>
        </div>


        <el-dialog :model="formLabelAlign" title="上传或编辑" v-model="dialogVisible" width="50%">
          <el-form label-width="120px">
            <el-form-item label="url">
              <el-input v-model="formLabelAlign.url" style="width: 50%"></el-input>
            </el-form-item>
            <el-form-item label="url">
              <el-input v-model="formLabelAlign.resolution" style="width: 50%"></el-input>
            </el-form-item>
            <el-form-item label="url">
              <el-input v-model="formLabelAlign.position" style="width: 50%"></el-input>
            </el-form-item>
            <el-form-item label="url">
              <el-input v-model="formLabelAlign.description" style="width: 50%"></el-input>
            </el-form-item>
          </el-form>
          <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitData">确 定</el-button>
          </span>
          </template>
        </el-dialog>


      </div>
      <!--      列表区-->
      <div>

      </div>
    </div>


    <Footer></Footer>
  </div>

</template>

<script>
import navigator_back from "@/components/navigator_back";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  name: "UploadView",
  components: {
    Footer,
    navigator_back,
  },

  data() {
    return {
      labelPosition: 'right',
      form:{},
      dialogVisible: false,
      formLabelAlign: {
        url: '',
        resolution: '',
        location: '',
        description: '',
      }
    }
  },
  methods: {
    submitData() {
      const formData = new FormData();
      formData.append('url', this.formLabelAlign.url);
      formData.append('resolution', this.formLabelAlign.resolution);
      formData.append('position', this.formLabelAlign.location);
      formData.append('description', this.formLabelAlign.description);
      console.log(formData);
      const formDataObject = Object.fromEntries(formData);
      const formDataJson = JSON.stringify(formDataObject);
      const jsonObject = JSON.parse(formDataJson);
      axios.post("/photos/upload", jsonObject).then(response => {
        console.log(response.data);
        alert("上传成功！")
      }).catch(error => {
        console.log(error);
      });
    },
    add(){
      this.dialogVisible=true
    }

  }

  // data(){
  //   return{
  //     selectedFile: null,
  //     imgUrl:null,
  //   }
  // },
  // methods: {
  //   onFileSelected(event){
  //     this.selectedFile=event.target.files[0];
  //   },
  //   async upload(){
  //     let formData = new FormData();
  //     formData.append('X-API-Key','chv_UW2z_4d90637fd6b0ebc21ad3543da3ed042979f670b77c6cc9323b5cc2d1dc48554bcc150e0c88da3df15751af4fa51e569b1dc9c296c04143a27c0ed398686d39dc');
  //     formData.append('image',this.selectedFile);
  //     const response = await axios.post('https://imgloc.com/api/1/upload',formData,);
  //   }
  // }

}
</script>

<!--<template>-->
<!--  <div>-->
<!--    <el-button type="primary" @click="handleAdd">新增</el-button>-->
<!--    <el-table :data="tableData" style="width: 100%">-->
<!--      <el-table-column prop="name" label="姓名"></el-table-column>-->
<!--      <el-table-column prop="age" label="年龄"></el-table-column>-->
<!--      <el-table-column prop="gender" label="性别"></el-table-column>-->
<!--    </el-table>-->
<!--    <div v-if="loading" style="text-align: center; margin-top: 20px;">-->
<!--      <el-spinner></el-spinner>-->
<!--    </div>-->
<!--    <el-dialog :visible.sync="dialogVisible">-->
<!--      <span slot="title">新增</span>-->
<!--      <el-form :model="form" label-width="80px">-->
<!--        <el-form-item label="姓名">-->
<!--          <el-input v-model="form.name"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="年龄">-->
<!--          <el-input v-model="form.age"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="性别">-->
<!--          <el-radio-group v-model="form.gender">-->
<!--            <el-radio label="男">男</el-radio>-->
<!--            <el-radio label="女">女</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <div slot="footer" class="dialog-footer">-->
<!--        <el-button @click="dialogVisible = false">取消</el-button>-->
<!--        <el-button type="primary" @click="handleSave">保存</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { reactive } from 'vue';-->
<!--import { ElTable, ElTableColumn, ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElRadio, ElRadioGroup, ElSpinner } from 'element-plus';-->

<!--export default {-->
<!--  components: { ElTable, ElTableColumn, ElButton, ElDialog, ElForm, ElFormItem, ElInput, ElRadio, ElRadioGroup, ElSpinner },-->
<!--  setup() {-->
<!--    const tableData = reactive([]);-->
<!--    const loading = reactive(false);-->
<!--    const dialogVisible = reactive(false);-->
<!--    const form = reactive({-->
<!--      name: '',-->
<!--      age: '',-->
<!--      gender: '',-->
<!--    });-->

<!--    const loadData = () => {-->
<!--      loading.value = true;-->
<!--      // 模拟异步加载数据-->
<!--      setTimeout(() => {-->
<!--        const newData = [-->
<!--          { name: '张三', age: 26, gender: '男' },-->
<!--          { name: '李四', age: 30, gender: '女' },-->
<!--          { name: '王五', age: 28, gender: '男' },-->
<!--          { name: '赵六', age: 25, gender: '女' },-->
<!--          { name: '钱七', age: 32, gender: '男' },-->
<!--        ];-->
<!--        tableData.push(...newData);-->
<!--        loading.value = false;-->
<!--      }, 1000);-->
<!--    };-->

<!--    const handleAdd = () => {-->
<!--      dialogVisible.value = true;-->
<!--    };-->

<!--    const handleSave = () => {-->
<!--      // 保存表单数据到数据库等-->
<!--      // 省略具体实现-->
<!--      dialogVisible.value = false;-->
<!--    };-->

<!--    // 初始加载数据-->
<!--    loadData();-->

<!--    return {-->
<!--      tableData,-->
<!--      loading,-->
<!--      dialogVisible,-->
<!--      form,-->
<!--      handleAdd,-->
<!--      handleSave,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
