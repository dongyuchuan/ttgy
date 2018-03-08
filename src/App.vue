<template>
  <div id="app">
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppFooter from './components/contaiers/footer/Footer'

export default {
  name: 'APP',
  components : {
    AppFooter
  }
}
</script>

<style>
@import './stylesheets/common.scss';
@import './stylesheets/reset.scss';
@import './stylesheets/iconfont/iconfont.css';


</style>
