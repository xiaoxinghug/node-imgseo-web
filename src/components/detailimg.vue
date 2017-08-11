<template>
    <div class="detail-img">
       <div class="img">
            <img :src="data.picUrl" :alt="data.picName">
       </div>
       <div class="bottom">
            <h1>{{data.picName}}</h1>
            <div class="tip">
                <span v-for="item in data.tags">{{item.tagName}}</span>
                
            </div>
            <div class="view">
                    <span class="eyes"></span>
                    <span>{{data.viewCount}}</span>
            </div>
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
  props:['detailimg'],
  computed:{
    data:function (){
        return this._props.detailimg;
    }
  },
  created(){
    //   console.log(this._props.detailimg);
    // this.data = this._props.detailimg;
  }
}
</script>

<style scoped lang="less">
.detail-img{
    position:relative;
    float:left;
    width:100%;
    .img{
        min-height:1rem;
    }
    img{
        display:block;
        max-width:100%;
        border:none;
        margin:0 auto;
    }
    .bottom{
        position:relative;
        padding:0.15rem;
        background-color:#fff;
        h1{
            font-size:0.16rem;
        }
    }
    .tip{
        margin-top:0.08rem;
        span{
            display:inline-block;
            color:#999999;
            position:relative;
            font-size:0.12rem;
            padding-right:0.1rem;
        }
        span::after{
            content:"|";
            position:absolute;
            right:3px;
        }
        span:last-child::after{
            content:"";
        }
    }
    .view{
        position:absolute;
        right:0.15rem;
        bottom:0.15rem;
        span{
            display:inline-block;
            font-size:0.12rem;
            color:#999999;
        }
        .eyes{
            height:0.08rem;
            width:0.12rem;
            margin-right:0.05rem;
            background:url(../assets/view.png)no-repeat center;
            background-size:contain;
        }
    }
}
</style>
