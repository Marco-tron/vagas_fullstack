<template>
  <div>
    <nuxt />

    <footer>
      <div class="download">
        <div class="block">
          <img src="~/assets/chrome.png" alt="" style="float: left;">
          <div class="text-extension"><strong>Instale a extensão no seu Google Chrome.</strong> Texto de suporte do título</div>
        </div>

        <div class="block">
          <div class="text-download"><strong>Baixe nosso app</strong> e não fique de fora do que acontece no produto</div>
          <img src="~/assets/google-play.png" alt="">
          <img src="~/assets/download-on-the-app-store-badge-ptbr-rgb-blk-092917.png" alt="" style="padding-left: 30px;" >
        </div>
      </div>

      <div class="info">
        <div class="items">
          <h4>Sobre</h4>
        
          <li>Quem somos</li>
          <li>Imprensa</li>
          <li>Trabalhe conosco</li>
          <li>Política de privacidade</li>
          
        </div>

        <div class="items">
          <h4>Destaques</h4>
          
          <li>Black Friday</li>
          <li>Black Night</li>
          <li>Dia dos Pais</li>
          <li>Dia dos Namorados</li>
          
        </div>

        <div class="items">
          <h4>Contato</h4>
          
          <li>Fale Conosco</li>
          <li>Midia Kit/Parceria</li>
          <li>Dúvidas Frequentes</li>
                 
        </div>

        <div class="items">
          <h4>Redes Sociais</h4>
          <div class="logos">
            <img src="~/assets/path.png" alt="">
            <img src="~/assets/path_2.png" alt="">
            <img src="~/assets/combined-shape.png" alt="">
            <img src="~/assets/shape.png" alt="">
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
  footer .download{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    padding-top:20px ;
    padding-bottom:20px ;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #a5d207;
    height: 400 px;
  }
  footer .download .block{
    display: flex;
    align-items: center;
  }
  .text-extension{
    padding-left: 20px;
    width: 350px;

  }
  .text-download{
    width: 250px;


  }

  footer .info{
    background-color: #415400;
    display: flex;
    justify-content: space-between;
    padding-top: 35px;
    padding-left: 8%;
    padding-right: 8%;
    width:100%;
    height: 300px;
  }
  footer .info .items{
    color: white;
  }
  h4{
    width: 280px;
  }
  .logos{
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  }
  .items li{
    list-style:none;
    cursor: pointer;
    user-select: none;
  }
</style>
