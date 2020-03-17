<template>
<div class="best-products">
  <h2>Produtos mais acessados</h2>
  
  <Carroussel/>
</div>
</template>

<script>
import Carroussel from '~/components/carroussel/Carroussel.vue'

export default {
  components: {Carroussel}
}

</script>


<style scoped>
    .best-products{
        margin-top: 150px;
        margin-left: 115px;
        margin-right: 115px;
        height: 615px;
    }
</style>
