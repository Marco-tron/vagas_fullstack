<template>
<div class="video-box">
   <h2>
       <strong>Vídeo promocional do app</strong> 
   </h2>
   <div>
       O vídeo mostra tpdas as fncionalidades e você vai conferir como funciona e ver como é fácil e simples de usar o app, falando do uso e seus benefícios.
   </div>
   <div class="video">
       <img src="~/assets/video.png" alt="">
   </div>
   
</div>
  
</template>

<script>

export default {
}
</script>

<style scoped>
@media (min-width:1300px) {
    .video-box{
        height: 950px;
        padding-top: 140px;
        padding-left: 220px;
        padding-right: 220px;
        align-content: center;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #606060;
    }
    .video-box div{
        font-size: 1.35rem;
        margin-bottom:40px;
        margin-top:20px; 
    }
}
@media (max-width:1300px) {
    .video-box{
        
        padding-top: 100px;
        padding-left: 5%;
        padding-right: 5%;
        align-content: center;
        align-items: center;
        text-align: center;
        justify-content: center;
        text-align: center;
        color: #606060;
    }
    .video-box div{
        font-size: 1.35rem;
        margin-bottom:40px;
        margin-top:20px; 
    }
    .video{
        width: 100%;
    }
    img{
        width: 100%;
        object-fit: contain;
    }
}    
    
</style>
