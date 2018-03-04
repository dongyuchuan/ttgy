<template>
  <div class="app-header-tabbar">
		  		<div class="header-left">
		  			<div class="logo">
		  				<img src="https://huodongjd1.fruitday.com/sale/appxx/ci_20171025_1.png"/>
		  			</div>
		  			<div class="map">
		  				<a href="#">沙河镇<i class="sanjiao"></i></a>
		  			</div>
		  		</div>
		  		<div class="header-right">
		  			<i class="iconfont">&#xe615;</i>
		  		</div>
		  </div>
</template>

<script>
export default {
  name: 'app-header-tabbar'
}
</script>

<style lang="scss">
.app-header-tabbar{
	width: 100%;
	display: block;
	background: white;
	height: 39px;
	position: fixed;
	top: -1px;
	display: flex;
	flex-direction:row ;
	box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
	z-index: 999;
}
.header-left{
	width: 100%;
	height: 39px;
	line-height: 39px;
	margin-left: 20px;
}
.sanjiao{
	width:0;
    height:0;
    border-width:5px;
    border-style:solid dashed dashed dashed;
    border-color:#65a032 transparent transparent transparent;
    display: inline-block;
    margin:1px 0 -4px 4px;
}
.logo{
	width: 56px;
	height: 14px;
	float: left;
}
.logo img{
	width: 100%;
	height: 100%;
	margin-top: 22%;
}
.map{
	float: left;
	margin-left: 5px;
	line-height: 39px;
}
.map a{
	color: #65a032;
}
.header-right{
	width:100px;
	height: 38px;
	line-height: 38px;
	margin-right: 20px;

}
.header-right i{
		float: right;
}
</style>
