<template>
  <div id="app">
    <engineer-header></engineer-header>
    <div class="container-fluid">
      <div class="row">
        <engineer-sidebar-layer1></engineer-sidebar-layer1>
        <engineer-sidebar-layer2></engineer-sidebar-layer2>
        <router-view/>
        <engineer-sidebar-layer3></engineer-sidebar-layer3>
      </div>
    </div>
  </div>
</template>

<script>
import EngineerHeader from './components/engineer_header'
import EngineerSidebarLayer1 from './components/engineer_sidebar_layer1'
import EngineerSidebarLayer2 from './components/engineer_sidebar_layer2'
import EngineerSidebarLayer3 from './components/engineer_sidebar_layer3'
import EngineerEditPage from './pages/profile_edit'
import EngineerSkilltagPage from './pages/skill_tag'
export default {
  name: 'App',
  components: {
    EngineerHeader,
    EngineerSidebarLayer1,
    EngineerSidebarLayer2,
    EngineerSidebarLayer3
  },
}
</script>

<style>
</style>
