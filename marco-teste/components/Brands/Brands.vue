<template>
<div class="brands">
    
    <h2> <strong>Marcas do app em destaque</strong> </h2>

    <div class="brands-box">
        
        <BrandsLogos/>
        <div class="brands-context">

            <BrandContext/>
            <BrandContext/>
            <BrandContext/>
              
        </div>
    </div>
    
</div>
  
</template>

<script>
import BrandContext from '~/components/Brands/BrandContext.vue'
import BrandsLogos from '~/components/Brands/BrandsLogos/BrandsLogos.vue'

export default {
    components: {BrandContext,BrandsLogos}
}
</script>

<style scoped>
@media (min-width: 1300px) {
    .brands{
        height:850px;
        align-content: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #606060;
        padding-top: 40px;
        margin-left: 115px;
        margin-right: 115px;
    }
    h2{
        margin-bottom: 40px;
    }
    .brands-context{
        position: absolute;
        left: 115px;
        height:600px;
        width: 600px;
    }
    .brands-box{
        display:flex;
        justify-content:space-between;
        
    }
}
@media (max-width: 1300px) {
    .brands{
        align-content: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #606060;
        padding-top: 40px;
        margin-left: 5%;
        margin-right: 5%;
    }
    h1{
        margin-bottom: 40px;
    }
    .brands-context{
        text-align: center;
    
    }
    h2{
        margin-bottom: 30px;
    }
}    
    
</style>
