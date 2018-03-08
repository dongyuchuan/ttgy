<template>
  <div class="main-box app-home">
      <tab-bar></tab-bar>
      <banner></banner>
      <sections></sections>
      <list></list>

  </div>
</template>

<script>
import TabBar from './TabBar'
import Banner from './Banner'
import Sections from './Sections'
import List from './list'


export default {
  name:'app-home',
  components: {
    TabBar,Banner,Sections,List
  }
}
</script>

<style lang="scss">

</style>
