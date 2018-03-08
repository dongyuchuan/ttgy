<template>
  <div class="best">
      <div class="best-box" v-for="item in list" :key="item.id">
          <!-- logo -->
          <!-- .data.banner.mainBanners[5].content["0"].image -->
        <div class="best-logo" v-if="item.group_type=='imageTitleBanner'">
            <img :src="item.content[0].image" title="果园热卖" style="height:64px;" alt="">
        </div>

        <!-- recommends -->
        <div class="section recommends " v-if="item.group_type=='normalBanner_v51'">
            <div class="list recommends-list"  v-for="good in  (item.content)" :key="good.id"> 
                <a class="item " href="#"  v-if="good.length != '0'"> 
                    <div class="img-box">
                        <img :src="good.image" alt="">        
                    </div> 
                    <div class="desc"> 
                        <h5>{{good.title}}</h5> 
                        <p>{{good.subtitle}}</p>  
                        <div class="price"> 
                            <span class="money">￥{{good.price}} / 
                                    <em>{{good.volume}}个</em>
                            </span>
                            <i class="iconfont">&#xe670;</i>
                        </div> 
                    </div>
                </a>  
            </div> 
        </div>
        <!-- fenlei -->
        <div class="fenlei" v-if="item.group_type=='bigImageBanner'">
            <img :src="item.content[0].image" alt="">
        </div>
        <!-- swiper -->
        <div class="swiper-container" v-if="item.group_type=='proBannerTagUnderImage'">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  >
                    <div v-for="good in  (item.content)" :key="good.id" class="xiansd">
                        <a  v-if="good.length != '0'">
                                <div class="img-box">
                                    <img :src="good.image" >   
                                </div>
                                <p>{{good.title}}</p>
                                <div class="price">
                                    <span class="money">
                                        ￥{{good.price}}/<em>{{good.volume}}</em>
                                    </span>
                                    <i class="iconfont">&#xe670;</i>
                                </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>
<script>
import Swiper from 'swiper'
import axios from 'axios'
export default {
  name:'best',
  data ()   {
      return{
        type:'group_type',
        list:[],
        ipts:[]
      }
  },
  methods:{
        getData() {
            axios.get('/v3/ad/homepage?connect_id=&type=0&lonlat=116.25153%2C40.11624&ad_code=110114&tab_id=')
            .then(res=>{
              console.log(res   )
              this.list = res.data.data.banner.mainBanners;
              this.ipts = res.data.data.banner.mainBanners.slice(6,);
              console.log(this.ipts)
		    })
                this.$nextTick(function(){
                    var swiper = new Swiper('.swiper-container', {
                    slidesPerView:3.4,
                });
            })
          
        }
      
  },
  mounted(){
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.best{
    margin-bottom: 42px;
}
.best-box{
    margin-top: 10px;
    background: #fff;
}
// logo
.best-logo{
    width: 100%;
    img{
     width: 100%;
    }
}

// recommends
.recommends{
    background:#fff;
    .list{
        a{
            position: relative;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-box;
            display: -o-box;
            display: box;
            -webkit-box-align: center;
            -moz-box-align: center;
            -ms-box-align: center;
            -o-box-align: center;
            padding: 0 .12rem 0 .25rem;
            height: 1.6rem;
            border-top: .005rem solid;
            .img-box{
                position: relative;
                img{
                    width: 1.2rem;
                    height: 1.2rem;
                }
            }
            .desc{
                -webkit-box-flex: 1;
                -moz-box-flex: 1;
                -ms-box-flex: 1;
                -o-box-flex: 1;
                width: 1%;
                text-align: left;
                line-height: normal;
                position: relative;
                margin-left: .25rem;
                h5{
                    font-size: .17rem;
                    margin-bottom: .05rem;
                    color: #3a3a3a;
                    font-weight: 400;
                    line-height: normal;
                    margin: 0;
                }
                p{
                    color: #878787;
                    margin-bottom: .37rem;
                }
                .price{
                    display: -webkit-box;
                    display: -moz-box;
                    display: -ms-box;
                    display: -o-box;
                    display: box;
                    position: relative;
                    span{
                        display: block;
                        color: #ff8000;
                        width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        em{
                            font-size: .12rem;
                         }
                    }
                    i{
                        position: absolute;
                        top: -.09rem;
                        right: 0;
                        width: .74rem;
                        height: .4rem;
                        text-align: right;
                        line-height: .35rem;
                        color: #ff8000;
                    }
                }
            }
        }
    }
}  

// fenlei
.fenlei{
    img{
        height: 160px;
    }
}
// swiper
.swiper-slide{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    -ms-box-lines: multiple;
    -o-box-lines: multiple;
    a{
        display: block;
        text-align: center;
        max-width: 1.12rem;
        min-width: 1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: .1rem .08rem .15rem;
        background: #fff;
        .img-box{
                    margin: auto;
                    position: relative;
                    min-width: .8rem;
                    min-height: .8rem;
                    max-width: 1rem;
                    height: 1rem;
                    img{
                        width:100%;
                        border: 0;
                    }
        }
        p{
            font-size: .13rem;
            color: #3a3a3a;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: .12rem;
        }
        .price{
            display: -webkit-box;
            display: -moz-box;
            display: -ms-box;
            display: -o-box;
            display: box;
            position: relative;
            span{
                display: block;
                color: #ff8000;
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: center;
                font-size: .12rem;
                em{
                    font-size: .1rem;
                }
            }
            i{
                position: absolute;
                top: -.09rem;
                right: 0;
                width: .74rem;
                height: .4rem;
                text-align: right;
                line-height: .35rem;
                        color: #ff8000;
                
            }
        }
    }
}
</style>
