<template>
<div>
  <div class="shape_1">
    <img src="~/assets/shape_1.png" alt="">
  </div>
  <div class="shape_2">
    <img src="~/assets/shape_2.png" alt="">
  </div>
  <div class="shape_3">
    <img src="~/assets/shape_3.png" alt="">
  </div>
  <div class="shape_4">
    <img src="~/assets/shape_4.png" alt="">
  </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style>
@media(min-width:1300px){

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
}
@media(max-width:1300px){

  .shape_1, .shape_2, .shape_3,.shape_4{
    display:none;
  }
}

</style>
