<template>
<div class="title">
    <div class="text">
        <h1><strong> Título da página</strong></h1>
        <div class="title-text">
           Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.
        </div>
        <div style="display: flex; justify-content:space-between; padding-right: 40px;">
            <img src="~/assets/google-play.png" alt="">
            <img src="~/assets/download-on-the-app-store-badge-ptbr-rgb-blk-092917.png" alt="" style="padding-left: 30px;" >
        </div>
        
    </div>

    <div>
      <img src="~/assets/group-9.png" alt="">
    </div>
</div>
  
</template>

<script>

export default {
}
</script>

<style scoped>
    .title{
        display: flex;
        align-content: center;
        justify-content: space-between;
        color: #606060 ;
        margin-left: 115px;
        margin-right: 115px;
        height: 591px;
    }
    .title .text{
        width: 520px;
        justify-content: center;
        align-content: center;
        margin-top:150px;
    }
    .title-text{
        font-size: 1.2rem;
        margin-bottom: 40px;
    }
    
</style>
