<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list" :key="item.id">
                <img :src="item.image" >
            </div>
        </div>
         <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    </div>
  
</template>

<script>

import Swiper from 'swiper'
import axios from 'axios'

export default {
  name:'banner',
  data () {
		return {
			list: [],
		}
	},
	methods:{
        getDate(){
            axios.get('/v3/ad/homepage?connect_id=&type=0&lonlat=116.25153%2C40.11624&ad_code=110114&tab_id=')
              .then((response)=>{
                console.log(response);
                this.list = response.data.data.banner.mainBanners[0].content
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    },
    mounted(){
        this.getDate()
         
    },
    updated(){
        new Swiper ('.swiper-container', {
            loop: true,
            autoplay:true,
             // 如果需要分页器
            pagination: {
                 el: '.swiper-pagination',
            },
        })  
    }
}
</script>

<style lang="scss" scoped>
.banner{

    .swiper-wrapper{

        .swiper-slide{

           img{
               height: 1.6rem;
           } 
        }
    }
}
</style>
