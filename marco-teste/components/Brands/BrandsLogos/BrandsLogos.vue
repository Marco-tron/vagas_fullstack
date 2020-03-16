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
    .brands-logos{
        
        height:600px;
        width: 600px;
    }
</style>
