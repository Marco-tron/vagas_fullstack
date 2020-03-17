<template>
  <header>
    <div class="logo">
      <img src="~/assets/group-12@2x.png" alt="">
    </div>
    
    <div class=login>
      <div class="user">
        <img src="~/assets/user@2x.png" alt="">
      </div>
      
      <span class="login-text">Entrar | Criar Conta</span>
    </div>
  </header>
</template>

<script>


export default {
 
}
</script>

<style scoped>
@media (min-width: 1300px) {
  header{
    margin: 25px;
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;

  }
  header .login{
      display: flex;
    justify-content: center;
    align-items: center;
    float: right;
  }
  .user{
      width: 20px;
  }
  .logo{
    width: 162px;
  }
  header .login .login-text{
    cursor: pointer;
    user-select: none;
  }
  img{
    width: 100%;
    object-fit: contain;
  }
}

@media (max-width: 1300px) {
  header{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-left: 35%;
    padding-right: 9%;
  }
  header .logo{
    width:55%;
  }
  .login{
    display: flex;
    width: 8%;
    justify-content: center;
    align-items: center;
    float: right;
  }
  .user{
      width: 100%;
  }
  header .login .login-text{
    cursor: pointer;
    user-select: none;
    display: none;
  }
    img{
    width: 100%;
    object-fit: contain;
  }
  
}

</style>
