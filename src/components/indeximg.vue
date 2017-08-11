<template>
        <div class="home-img">
            <img src="//p0.meituan.net/dpnewvc/22e47a87c331a4d13df8ecc2721931ab199142.png" alt="">
            <p>{{text}}</p>
        </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      text: '最新婚纱照'
    }
  },
  props:['indeximg'],
  computed:{
     objBanner:function (){
         return this._props.indeximg
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
    width:100%;
    min-height:100px;
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
