<template>
  <div class="col-md-1 sidebar-l1 bg-dark vh-100 overflow-auto" style="padding-top: 90px;">
    <div class="sidebar-link-area" style='text-align:center;'>
        <!-- サイドバーメニュー -->
        <p><b-img v-bind="mainProps" rounded alt="Rounded image"></b-img></p>
        <p style="color: #fff;"> チーム </p>
        <p><b-img v-bind="mainProps" rounded alt="Rounded image"></b-img></p>
        <p><b-img v-bind="mainProps" rounded alt="Rounded image"></b-img></p>
        <p><b-img v-bind="mainProps" rounded alt="Rounded image"></b-img></p>
        <p><b-img v-bind="mainProps" rounded alt="Rounded image"></b-img></p>
        <p><b-img v-bind="mainProps" rounded alt="Rounded image"></b-img></p>
        <p><b-img v-bind="mainProps" rounded alt="Rounded image"></b-img></p>
        <p><b-img v-bind="mainProps" rounded alt="Rounded image"> + </b-img></p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mainProps: { blank: true, blankColor: '#777', width: 40, height: 40, class: 'm1' }
      }
    }
  }
</script>

<style>
  .sidebar-l1 {
    height: 100%;
  }
</style>