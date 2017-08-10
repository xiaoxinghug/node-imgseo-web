<template>
    <div class="merchant">
        <h4>所属商户</h4>
        <div class="container">
            <a :href="data.url">
                <div class="img">
                    <img :src="data.shopPic" alt="商户">
                </div>
                <div class="text">
                    <h5>{{data.shopName}}</h5>
                    <div class="shop-star"><span class="star"><div class="real-star":style="{width:data.shopPower*72/100 +'px'}"><span class="orange-star"></span></div></span><span>{{data.price}}</span>元/人</div>
                    <div class="addresss">
                        <span>{{data.regionName}}</span>
                        <span style="margin-left:0.05rem;">{{data.categoryName}}</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  props:['merchant'],
  computed:{
    data:function (){
        return this._props.merchant;
    }
  },
  created(){
    //   console.log('++++');
    //   console.log(this._props.merchant);
    //  this.data = this._props.merchant;
  }
}
</script>

<style scoped lang="less">
   @import "../less/util.less";
.merchant{
    background-color:#fff;
    padding:0.15rem;
    margin-top:0.15rem;
    float:left;
    width:100%;
    h4{
        font-weight:400;
    }
    h5{
        font-size:0.16rem;
        color:#111111;
        line-height:0.18rem;
    }
    .addresss{
        font-size:0.12rem;
        color:#999999;
        margin-top:0.12rem;
    }
    .container{
        margin-top:0.1rem;
        // .flexbox()
    }
    .text{
        // .boxflex(1);
        padding-left:0.1rem;
        float:left;
    }
    img{
        margin:0 auto;
        display:block;
        border:none;
        max-width:100%;
        height:100%;
    }
    .shop-star{
        font-size:0.13rem;
        line-height:0.13rem;
        margin-top:0.12rem;
        color:#000;
        span{
            display:inline-block;
            height:0.13rem;
            line-height:0.13rem;
        }
    }
    .star{
        width:72px;
        background:url(../assets/gray-star.png)no-repeat left;
        background-size:contain;
        float:left;
        position:relative;
        overflow:hidden;
        margin-right:0.1rem;
        .orange-star{
            width:72px;
            height:0.13rem;
            background:url(../assets/orange-star.png)no-repeat left;
            background-size:contain;
        }
        .real-star{
            display:inline-block;
            width:0px;
            height:0.13rem;
            overflow:hidden;
        }
    }
    .img{
        height:0.7rem;
        width:0.7rem;
        background-color:red;
        float:left;
    }
}
</style>
