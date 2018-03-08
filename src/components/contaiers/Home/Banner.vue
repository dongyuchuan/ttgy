<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in list" :key="item.id">
                    <img :src="item.image" >
                </div>
            </div>
            <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        </div>
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
            slidesPerView: 1,
            autoplay:true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets:true

            },
        })  
    }
}
</script>

<style lang="scss">
.banner{
     width: 100%;
    .swiper-wrapper{

        .swiper-slide{
            width: 100%;
           img{
               height: 1.6rem;
           } 
        }
    }
}
</style>
