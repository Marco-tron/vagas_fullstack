<template>
    <div class="brands-logos" >

        <LogoRow/>
        <LogoRow/>
        <LogoRow/>
        <LogoRow/>             

    </div>
</template>

<script>
import LogoRow from '~/components/Brands/BrandsLogos/LogoRow.vue'

export default {
    components: {LogoRow}
}
</script>

<style scoped>
@media (min-width: 1300px) {
    .brands-logos{
        position: absolute;
        right: 115px;
        height:600px;
        width: 600px;
    }
}
@media (max-width: 1300px) {
    .brands-logos{
        
    }
}
    
</style>
