<template>
<div>
  <header>
    <img src="~/assets/group-12.png" alt="">

    <div class=login>
      <img src="~/assets/user.png" alt="">
      <span class="login-text">Entrar | Criar Conta</span>
    </div>
  </header>
  
  <Title />

  <Content />

  <Video/>

  <Brands/>

  <TitleInvert/>

  <BestProducts/>

  <Background/>
  
</div>
</template>

<script>
import Background from '~/components/Background'
import Title from '~/components/Title.vue'
import Content from '~/components/Content.vue'
import Video from '~/components/Video.vue'
import Brands from '~/components/Brands.vue'
import TitleInvert from '~/components/TitleInvert.vue'
import BestProducts from '~/components/BestProducts.vue'

export default {
  components: {Title,Content,Video,Brands,TitleInvert,BestProducts,Background}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

header{
  margin: 25px;
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
}
header .login{
  margin-left: 78%;
  justify-content: center;
  align-items: center;
  float: right;
}
header .login .login-text{
  cursor: pointer;
  user-select: none;
}
.shape_1{
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
}
.shape_2{
  position: absolute;
  
  top: 670px;
  left: 0;
}
.shape_3{
  position: absolute;
  z-index: -1;
  top: 1750px;
  right: 0;
}
.shape_4{
  position: absolute;
  z-index: -1;
  top: 2950px;
  left: 0;
}
</style>
