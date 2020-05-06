<template>
  <div class="col-md-7 skill-tag" style="padding-top: 90px;">
    <!--  言語    -->
    <div class="row ml-5 mr-5 pb-5" style="border-bottom: 2px solid #888;">
      <div class="col-md-12">
        <p class="h3 pb-3" style="border-bottom: 2px solid #888;"><i class="el-icon-arrow-down"></i>スキル一覧</p>
        <p>言語</p>
        <el-tag
          class="tag-style"
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="mini"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
      </div>
    </div>
    
    <!--   フレームワーク   -->
    <div class="row ml-5 mr-5">
      <div class="col-md-12">
        <p>  フレームワーク </p>
        <el-tag
            class="tag-style"
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
      </div>
    </div>
    
    <!--   フロントエンド   -->
    <div class="row ml-5 mr-5">
      <div class="col-md-12">
        <p> フロントエンド </p>
        <el-tag
            class="tag-style"
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
      </div>
    </div>
    
    <div class="row ml-5 mr-5">
      <div class="col-md-12">
        <p> フロントエンド周辺知識 </p>
        <el-tag
            class="tag-style"
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>
      </div>
    </div>

    
  </div> 
</template>
<script>
  export default {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
<style>
  .tag-style {
    border-radius: 50px;
    background: transparent;
    border-width: 1px;
    border-color: #ff3269;
    color: #444;
  }
  
  .tag-style::before {
    content: '●';
    color: #ff3269;
    width: 30px;
    height: 30px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .el-tag .el-tag__close {
    color: #444;
  }
</style>