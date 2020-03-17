<template>
<div>
  <LogoTop/>
  
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
import Brands from '~/components/Brands/Brands.vue'
import TitleInvert from '~/components/TitleInvert.vue'
import BestProducts from '~/components/BestProducts.vue'
import LogoTop from '~/components/LogoTop.vue'

export default {
  components: {Title,Content,Video,Brands,TitleInvert,BestProducts,Background,LogoTop},
  
}
</script>

<style>

</style>
