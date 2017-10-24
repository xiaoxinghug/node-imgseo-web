<template>
    <transition name="slider">
    <div style="height:0.6rem;"v-show="isShow">
        <div id="header">
            <div class="left">
                <span class="close"@click="showTip()"></span>
                <div class="center">
                    <img src="../assets/weddinglogo.png" alt="大众点评结婚logo">
                    <div class="font">
                        <h5>大众点评结婚频道</h5>
                        <p>国内最大的结婚一站式服务平台</p>
                    </div>
                </div>
            </div>
            <div class="right">
                <span class="btn"@click="look()">去看看</span>
            </div>
        </div>
    </div>
  </transition>  
</template>
<script>
// import UR from '@dp/url-rewrite';
export default {
  name: '',
  data () {
    return {
      isShow:true
    }
  },
  mounted(){
  },
  methods:{
    showTip(){
        this.isShow = !this.isShow;
    },
    look(){
     var urllink = "https://evt.dianping.com/synthesislink/10131.html?url=dianping%3A%2F%2Fweb%3Furl%3Dhttps%253A%252F%252Fm.dianping.com%252Fapp%252Fapp-m-wedding-product-peon%252Findex.html&local=https%3A%2F%2Fm.dianping.com%2Fapp%2Fapp-m-wedding-product-peon%2Findex.html";
         location.href = urllink; 
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/util.less";
#header{
  background: #333333;
  color:#fff;
  width:100%;
  padding:0.1rem 0px;
  position:fixed;
  z-index:1;
  h5{
      font-size:0.18rem;
      font-weight:normal;
  }
  p{
      font-size:0.12rem;
      opacity:0.5;
      letter-spacing:0;
      padding-top:0.08rem;
  }
  .btn{
    background: #FF66A1;
    border-radius: 2px;
    width:0.64rem;
    height:0.3rem;
    font-size:0.14rem;
    display:inline-block;
    text-align:center;
    line-height:0.31rem;
  }
  .left{
    //   margin-left:0.39rem;    
      float:left;
      .close{
          float:left;
      }
      .center{
          float:left;
          .font{
              float:left;
          }
      }
  }
  .right{
      position:absolute;
      right:0.15rem;
      top:0.15rem;
      span{
          display:inline-block;
          color:#fff;
      }
  }  
}
img{
    display:block;
    border:none;
    width:0.4rem;
    height:0.4rem;
    float:left;
    margin:0px 0.1rem;
}
.close{
    display:inline-block;
    // text-indent:100rem;
    background:url(../assets/close.png)no-repeat center;
    height:0.2rem;
    width:0.2rem;
    margin-left:0.06rem;
}
.slider-enter-active, .slider-leave-active {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}
.slider-enter, .slider-leave-to {
  opacity:0;
}
</style>
