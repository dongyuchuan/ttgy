<template>
  <div class="cart2">
        <mt-header fixed title="购物车" class="gw"></mt-header>  
        <div class="cart1" style="display:block">
            <img src="../../../assets/img/cart1.png" alt="">
            <p>还没找到心仪的商品吗？</p>
            <a href="/home">去逛逛吧</a>
        </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  name:'cart2'
}
</script>

<style lang="scss">

.gw{
    height: 45px;
    background: #fff;
    color: #76a741;
    font-size: 18px;
    
}
.cart1{
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
    background: #fff;
    text-align: center;
    img{
        margin: 1.5rem auto 0;
        width: 2.25rem; 
    }
    p{
        padding: .15rem 0;
        font-size: .15rem;
        color: #3a3a3a;
    }
    a{
        font-size: .16rem;
        color: #f93;
    }
}
</style>
