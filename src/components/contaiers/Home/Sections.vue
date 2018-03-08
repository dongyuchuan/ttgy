<template>
  <div class="sections">
      <div class="section-1">
          <a href="#"><img src="https://imgqn9.fruitday.com/images/2017-11-07/caa96ee4453a25ed3e58f4a8f73e736d.jpg" style="height: 85.7143px;" alt=""></a>
          <a href="#"><img src="https://imgjd6.fruitday.com/images/2018-01-06/66b11add93bf19fc63fcaf73d05b8972.jpg" style="height: 85.7143px;" alt=""></a>
      </div>
  </div>
</template>

<script>
export default {
  name:'sections'
}
</script>

<style lang="scss">
.sections{
    background: #fff;
        box-sizing: border-box;
    
}
.section-1{
    display: flex;
    justify-content: space-around;
    -webkit-box-lines: multiple;
    padding-bottom: .2rem;
    a{
        display: block;
        width: 50%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: .1rem .075rem 0;
        img{
            border: 0;
            width: 100%;
            display: block;
        }
    }
}
</style>
