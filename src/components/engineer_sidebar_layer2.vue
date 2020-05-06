<template>
  <div class="col-md-2 sidebar-l2 vh-100" style="padding-top: 90px; background: #d5d5d5;">
    <el-menu>
      <el-menu-item-group title="ホーム" class="sidebar_chat">
        <el-menu-item index="1-1">トアンとチャット<i class="el-icon-arrow-right"></i></el-menu-item>
        <el-menu-item index="1-2">プロジェクト一覧<i class="el-icon-arrow-right"></i></el-menu-item>
        <el-menu-item index="1-3">販売中のアプリ管理<i class="el-icon-arrow-right"></i></el-menu-item>
        <el-menu-item index="1-4">トアンとチャット<i class="el-icon-arrow-right"></i></el-menu-item>
      </el-menu-item-group>
      
      <el-menu-item-group title="How to work">
        <el-menu-item index="2-1">受注までの流れ<i class="el-icon-arrow-right"></i></el-menu-item>
        <el-menu-item index="2-2">仕事のやり方<i class="el-icon-arrow-right"></i></el-menu-item>
        <el-menu-item index="2-3">仕事ノウハウ<i class="el-icon-arrow-right"></i></el-menu-item>
        <el-menu-item index="2-4">時給基準<i class="el-icon-arrow-right"></i></el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
      }
    }
  }
</script>

<style>
ul.el-menu {
  border: none;
  background-color: #d5d5d5;
}
</style>