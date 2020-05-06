<template>
  <div class="col-md-7" style="padding-top: 90px;">
    <div class="row pb-5" style="margin-left: 40px; margin-right: 40px;border-bottom: 2px solid #888;">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6" style="text-align: center;">
            <div class="demo-image__preview">
              <el-image 
                style="width: 100px; height: 100px; border-radius: 50%;"
                :src="url" 
                :preview-src-list="srcList">
              </el-image>
            </div>
          </div>
          <div class="col-md-6">
            <el-upload
              style="display: inline;"
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange">
              <el-button size="small">画像をアップロード</el-button>
              <div slot="tip" class="el-upload__tip">推奨画像サイズ<br>512 × 512</div>
            </el-upload>
          </div>
          
        </div>
      </div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">表示名</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Yamman">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">メールアドレス</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@example.com">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">パスワード確認</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="password again">
          </div>
        </form>
      </div>
    </div>
    <div class="row pt-5 pb-5" style="margin-left: 40px; margin-right: 40px;border-bottom: 2px solid #888;">
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">大学名</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="〇〇大学">
        </div>
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">学部</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="△△学部">
        </div>
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">学科</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="△△学科">
        </div>
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">入学年度</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="20☓☓">
        </div>
    </div>
    <div class="row pt-5 pb-5" style="margin-left: 40px; margin-right: 40px;">
      <div class="form-group col-md-12">
        <label for="exampleInputEmail1">キャッチコピー<span class="text-muted" style="padding-left:10px; font-size: 8px;">50文字</span></label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
      </div>
      <div class="form-group col-md-12">
        <label for="exampleInputEmail1">自己PR<span class="text-muted" style="padding-left:10px; font-size: 8px;">100文字</span></label>
        <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></textarea>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          dialogImageUrl: '',
          dialogVisible: false
        },
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>

<style>


</style>