<template>

  <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper" >
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
      </div> 
  </div>
 
  
</template>

<script>
import Product from '~/components/carroussel/Product.vue'
export default {
  components: {Product,},
  props:['slides'],
  data () {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: this.slides,
        slidesPerGroup:1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        mobile:false
      },
      
      
    }
    
  },  
  

}



</script>

<style lang="scss" scoped>
@import 'swiper/dist/css/swiper.css';

@media (min-width: 1300px) {
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
}
@media (max-width: 1300px) {
  .swiper-container {
    display: flex;
    justify-content:space-between ;
    margin-top: 30px;
    margin-bottom: 115px;
    width: 120%;
    
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }

}



</style>
