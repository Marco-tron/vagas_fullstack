<template>
<div>
  <div style="color:#13bc4a;text-align:right;">
      <strong>Ver todos</strong> 
  </div>
  <div class="carroussel">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <div class="button">
        <img src="~/assets/seta.png" alt="">
      </div>
      
  </div>
</div>
</template>

<script>
import Product from '~/components/carroussel/Product.vue'

export default {
  components: {Product}
}
</script>

<style>
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
.button{
  margin-top: 189px;
  margin-bottom: 189px;
}

</style>
