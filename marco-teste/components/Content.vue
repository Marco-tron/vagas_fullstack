<template>
<div class="content">
    <div class="card">
        <div class="icon">
            <img src="~/assets/group-33.png" alt="">    
        </div>
        <h3>Título</h3>
        <div>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta</div>
    </div>
    <div class="card">
        <div>
            <img src="~/assets/alarm-clock-2.png" alt="">
            <h3>Título</h3>
            <div>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta</div>
        </div>
    </div>
    <div class="card">
        <div>
            <img src="~/assets/ic-notifications-none.png" alt="">
            <h3>Título</h3>
            <div>Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta</div>
        </div>
    </div>
</div>
</template>

<script>

export default {
}
</script>

<style scoped>
@media (min-width: 1300px){
    .content{
       z-index: -3;
       display: flex;
       justify-content: space-between;
       padding-top: 100px;
       padding-bottom: 100px;
       padding-left: 115px;
       padding-right: 115px;
       background-color: #F7FFDC;
       height: 550px;
       margin-top: 100px;
   }
   .card{
       display: flex;
       align-content: center;
       align-items: center;
       justify-content: center;
       height: 360px;
       width: 385px;
       border-radius: 15px;
       box-shadow: 3px 3px 3px  #6d6d6d;
       padding: 60px;
       text-align: center;
       z-index: 10;
   }
   h3{
       margin-top: 30px;
       margin-bottom: 20px;
   }
}
@media (max-width: 1300px){
    .content{
       z-index: -3;
       justify-content: space-between;
       padding-top: 50px;
       padding-bottom: 50px;
       padding-right: 3%;
       padding-left: 3%;
       background-color: #F7FFDC;
       margin-top: 100px;
   }
   .card{
       display: flex;
       align-content: center;
       align-items: center;
       justify-content: center;
       width: 100%;
       border-radius: 15px;
       box-shadow: 3px 3px 3px  #6d6d6d;
       padding: 20px;
       margin-bottom: 20px;
       text-align: center;
       z-index: 10;

   }
   h3{
       margin-top: 15px;
       margin-bottom: 10px;
   }
}
   
    
</style>
