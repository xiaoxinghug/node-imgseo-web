<template>
    <div class="footer">
        <h5><span @click="look()">结婚</span><span class="arrow"></span>婚纱照大全<span class="arrow"v-if="!!titles"></span><span>{{titles}}</span></h5>
        <div class="center">
          <div class="footer-list">
                <a href="//m.dianping.com/nmy/myinfo">我的</a>
                <a href="">最近浏览</a>
                <a href="//evt.dianping.com/synthesislink/6513.html">添加商户</a>
                <a href="//evt.dianping.com/synthesislink/10120.html">意见反馈</a>
          </div>
          <div style="width:60%;margin:0 auto"class="footer-list">
            <a href="//www.dianping.com">电脑版</a>
            <a href="">标准版</a>
            <a href="javascript:void(0)">客户端</a>
          </div>
        </div>
        <div class="bottom">
            <p>{{time}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      time: `copyright @${new Date().getFullYear()}dianping.com`
    }
  },
  props:['title'],
  computed:{
      titles:function (){
          return this._props.title;
      }
  },
  methods:{
      look(){
       location.href = "https://evt.dianping.com/synthesislink/10131.html?url=dianping%3A%2F%2Fweb%3Furl%3Dhttps%253A%252F%252Fm.dianping.com%252Fapp%252Fapp-m-wedding-product-peon%252Findex.html&local=https%3A%2F%2Fm.dianping.com%2Fapp%2Fapp-m-wedding-product-peon%2Findex.html"; 
    }
  }
}
</script>

<style lang="less">
   @import "../less/util.less";
    .footer{
        margin-top:0.15rem;
        float:left;
        background-color:#fff;
        width:100%;
        padding:0.15rem 0px;
        h5{
            font-size:0.14rem;
            color:#777777;
            line-height:0.14rem;
            font-weight:400;
            padding-bottom:0.1rem;
            text-indent:0.15rem;
            .lineBottom();
        }
        .arrow{
            display:inline-block;
            width:0.06rem;
            height:0.1rem;
            background:url(../assets/arrow.png)no-repeat center;
            background-size:contain;
            margin:0px 6px;
        }
       .center{
           div{
               width:80%;
               margin:0 auto;
               padding-top:0.15rem;
           }
           a{
               display:inline-block;
               color:#999;
               position:relative;
               text-align:center;
               width:0.7rem;
               font-size:0.12rem;
               opacity:0.5;
           }
           a::after{
               content:"|";
               position:absolute;
               right:0px;
           }
           a:last-child::after{
                content:"";
                position:absolute;
                right:0px;
           }
       }
       .bottom{
           color:#999;
           padding:0.15rem 0px;
           text-align:center;
           opacity:0.6;
       }
    }
</style>
