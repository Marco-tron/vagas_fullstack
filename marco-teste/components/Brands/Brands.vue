<template>
<div class="brands">
    
    <h1> <strong>Marcas do app em destaque</strong> </h1>

    <div style="display:flex;justify-content:space-between;margin">
        <div class="brands-context">

            <BrandContext/>
            <BrandContext/>
            <BrandContext/>
              
        </div>

        <BrandsLogos/>

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
    h1{
        margin-bottom: 40px;
    }
    .brands-context{
        
        
        height:600px;
        width: 600px;
    }
    
</style>
