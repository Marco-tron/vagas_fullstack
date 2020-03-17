<template>
<div class="title">
    <div>
      <img src="~/assets/group-9.png" alt="">
    </div>
    <div class="text">
        <div class="title-text">
            <h2><strong> Título da página</strong></h2>
            Informação curta e direta sobre o app divulgado na página com foco nas funcionalidades.
        </div>
        <div class="download">
            <div style="margin-top:2px;">
                <img src="~/assets/google-play_3@2x.png" alt="">
            </div>
            <div>
                <img src="~/assets/download-on-the-app-store-badge-ptbr-rgb-blk-092917@2x.png" alt="">
            </div>
            
        </div>
        
    </div>

    
</div>
  
</template>

<script>

export default {
}
</script>

<style scoped>
    @media (min-width: 1300px) {
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
        .download{
            display: flex; 
            justify-content:space-between; 
            padding-right: 40px;
            width: 480px;
        }
        .download div{
            width: 200px;
        }
    }

    @media (max-width: 1300px) {
        .title{
            
            align-content: center;
            justify-content: center;
            color: #606060 ;
            margin-left: 5%;
            margin-right: 5%;
            
        }
        .title .text{
            justify-content: center;
            align-content: center;
            margin-top:50px;
            
        }
        .title-text{
            font-size: 1.2rem;
            margin-bottom: 40px;
        }
        .download{
            margin-left: 5%;
            margin-right: 5%;
            display: flex; 
            justify-content:space-between; 
        }
        .download div{
            width:45%;
        }
    }
    img{
            width: 100%;
            object-fit: contain;
        }
    
    
</style>
