<template>
  <div class="login">
      <loginheader></loginheader>
      <loginbox></loginbox>
  </div>
</template>

<script>
import Loginheader from './Loginheader'
import Loginbox from './Loginbox'

export default {
  name:'login',
  components:{
      Loginheader,Loginbox
  }
}
</script>
<style lang="scss">

</style>
