<template>
    <div class="home-img">
        <img src="../assets/homeimg.png" alt="">
        <p>最新欧美大气婚纱照</p>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="less">
.home-img{
    position:relative;
    font-size:0.22rem;
    color:#695E4C;
    float:left;
    text-align:center;
    position:relative;
    p{
        position:absolute;
        width:100%;
        top:40%;
        text-align:center;
    }
    img{
        max-width:100%;
        display:block;
        margin:0 auto;
        border:none;
    }
}
</style>
