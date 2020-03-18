<template>
<div class="best-products">

  <div class="title">
    <h3>Produtos mais acessados</h3>
  <div>
      <strong>Ver todos</strong> 
  </div>
  </div>
  <div class="desktop">
    <Carroussel slides="4"/>
  </div>
  <div class="mobile">
    <Carroussel slides="1"/>
  </div>
  
</div>
</template>

<script>
import Carroussel from '~/components/carroussel/Carroussel.vue'

export default {
  components: {Carroussel}
}

</script>


<style scoped>
@media (min-width: 1300px) {
  .best-products{
        margin-top: 150px;
        margin-left: 115px;
        margin-right: 115px;
        height: 615px;
    }
    .title div{
    color:#13bc4a;
    text-align:right;
    margin-top: 10px;
  } 
  .title div{
    color:#13bc4a;
    text-align:right;
    margin-top: 10px;
    user-select: none;
    cursor: pointer;
  } 
  .mobile{
    display: none;
  } 
}

@media (max-width: 1300px) {
  .best-products{
    
        margin-top: 50px;
        margin-left: 5%;
        margin-right: 5%;
        height: 615px;
    }
  .best-products .title{
    display: flex;
    justify-content: space-between;
  }
  .title div{
    color:#13bc4a;
    text-align:right;
    margin-top: 10px;
    user-select: none;
    cursor: pointer;
  }
  .desktop{
    display: none;
  }  
}
    
</style>
