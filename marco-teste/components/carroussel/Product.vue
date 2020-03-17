<template>
<div class="product-container ">
    <Badge/>
    <div class="image">
        <img src="~/assets/product-image.png" alt="">
    </div>
    <div class="content">
        <h6>Microsoft Xbox One S 1 tb HDR 4k</h6>

        <div>
            Vendido por <strong>Shoptime</strong>
            <h3><strong>R$ 2.109</strong></h3>
        </div>
    </div>
    
</div>
</template>

<script>
import Badge from '~/components/carroussel/Badge.vue'

export default {
  components: {Badge}
}
</script>

<style scoped >
    .product-container{
        align-items: baseline;
        height: 440px;
        width: 292px;
        border: 2px solid #CBCBCB;
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        
    }
   
    h3, h6{
        margin-bottom: 45px;
    }
    img{
        cursor: pointer;
    }
    .image{
        position: absolute;
        align-items: center;
        justify-content: center;
        height: 250px;
        margin-bottom: 225px;
    } 
    .image img{
        
        position: absolute;
        bottom: 0;
        align-content: center;
        margin-left: auto;
        margin-right: auto;
    }   
    .content{
        margin-top: 260px;
        margin-left: 60px;
        margin-right: 60px;
        
    }
    div strong{
        color: #3aacd1;
    }
    h3 strong{
        color: #5555d9;
    }

@media (max-width: 1300px) {
    .product-container{
        margin-right: 100px;
    }
}
    
</style>
