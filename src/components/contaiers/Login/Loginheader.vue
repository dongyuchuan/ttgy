<template>
  <div class="loginheader">
    <mt-header title="手机号快捷登录" fixed class="title">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <span class="hide">账号密码登录</span>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  name:'loginheader'
}
</script>

<style lang="scss">

.title{
    font-size: 18px;
    color: #75a739;
    background: #ebebeb;

}
</style>
