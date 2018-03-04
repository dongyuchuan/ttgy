<template>
  <div class="app-footer">
      <a href="#"><i class="iconfont">&#xe699;</i><span>首页</span></a>
      <a href="#"><i class="iconfont">&#xe66b;</i><span>分类</span></a>
      <a href="#"><i class="iconfont">&#xe899;</i><span>购物车</span></a>
      <a href="#"><i class="iconfont">&#xe608;</i><span>我的果园</span></a>
  </div>
</template>

<script>
export default {
  name:'app-footer'
}
</script>

<style lang="scss">
.app-footer{
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    position: fixed;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
    background: #fff;
    height: .42rem;
    font-size: .1rem;
    line-height: 1.2;
    a{
      color: #898989;
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      -webkit-flex:1; flex:1;
      i{
        width: 100%;
        font-family: iconfont!important;
        font-size: 18px!important;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        
      }
    }
}

</style>
