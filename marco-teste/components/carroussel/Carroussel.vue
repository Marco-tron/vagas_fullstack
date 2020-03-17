<template>
<div>
  <div style="color:#13bc4a;text-align:right;">
      <strong>Ver todos</strong> 
  </div>
  
  <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Product/>
        </div>
        <div class="swiper-slide">
          <Product/>
        </div>
        <div class="swiper-slide">
          <Product/>
        </div>
        <div class="swiper-slide">
          <Product/>
        </div>
        <div class="swiper-slide">
          <Product/>
        </div>
        <div class="swiper-slide">
          <Product/>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
      
      
  </div>
 
  
</div>
</template>

<script>
import Product from '~/components/carroussel/Product.vue'




export default {
  components: {Product,},

  data () {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup:4,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
      }
    }
  },  

}


</script>

<style lang="scss" scoped>
@import 'swiper/dist/css/swiper.css';
.carroussel{
  display: flex;
  justify-content:space-between ;
  margin-top: 30px;
  margin-bottom: 115px;
}
.corroussel div{
  display:flex;
  align-content: center;
  justify-content: center;
}



.swiper-container {
    display: flex;
    justify-content:space-between ;
    margin-top: 30px;
    margin-bottom: 115px;
    
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }


</style>
