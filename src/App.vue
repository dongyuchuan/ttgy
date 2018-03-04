<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppHeader from './components/contaiers/Header/Header'
import AppFooter from './components/contaiers/footer/Footer'

export default {
  name: 'APP',
  components : {
    AppHeader,AppFooter
  }
}
</script>

<style>
@import './stylesheets/common.scss';
@import './stylesheets/reset.scss';
@import './stylesheets/iconfont/iconfont.css';


</style>
