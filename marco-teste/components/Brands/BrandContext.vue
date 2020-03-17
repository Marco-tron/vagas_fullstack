<template>

    <div class="brand-context">
        <h2><strong>Título</strong></h2>
        <div>
            Marcação de texto para ser preenchido depois da página ficar pronta, enquanto isso segue com o texto marcando página
        </div>
    </div>
    
</template>

<script>

export default {
}
</script>

<style scoped>
  @media (min-width: 1300px){
      .brand-context{
        text-align: left;
    }
    .brand-context div{
        font-size: 1.4rem;
        margin-bottom: 80px;
    }
  }
  @media (max-width: 1300px){
      .brand-context{
        text-align: center;
    }
    .brand-context div{
        font-size: 1.4rem;
        margin-bottom: 60px;
    }
  }
    
</style>
