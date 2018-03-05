<template>
  <div class="main-box app-home">
      <banner></banner>
      <sections></sections>
      
  </div>
</template>

<script>

import Banner from './Banner'
import Sections from './Sections'


export default {
  name:'app-home',
  components: {
    Banner,Sections
  }
}
</script>

<style lang="scss" >

</style>
