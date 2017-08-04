<template>
  <div class="detaill-list">
    <h1>相关推荐</h1>
    <div class="content">
        <waterfall
        :align="align"
        :line-gap="200"
        :min-line-gap="100"
        :max-line-gap="220"
        :single-max-width="300"
        :watch="items"
        ref="waterfall"
      >
        <!-- each component is wrapped by a waterfall slot -->
        <waterfall-slot
          v-for="(item, index) in items"
          :width="item.width"
          :height="item.height"
          :order="index"
          :key="item.index"
          move-class="item-move"
        >
         <List :List="item":isShadow="true"></List>
        </waterfall-slot>
      </waterfall>
    </div>
    <div class="more"v-if="!isBusy"@click="loadMore()">查看更多<span class="loadarrow"></span></div>
    <div class="more"v-if="isBusy">加载中...</div>
  </div>
</template>

<script>
import { Waterfall, WaterfallSlot } from '../lib/vue-waterfall.min.js';
import List from '../components/list.vue';
export default {
  name: '',
  data () {
    return {
      align:'center',
      lastIndex:0,
      isBusy: false,
      moreData:[{
          "picUrl":"//p0.meituan.net/wedding/4f7d783ec5a65ac7c4bd6ec04bf18a7c489718.jpg@183w_244h_1e_1c_1l_85q|watermark=0.webp",
          "shopName":"放学路上别走",
          "tip":['韩式','复古','海景'],
          'viewnumber':5967,
          'width':170,
          'height':290,
          'id':7
        },{
          "picUrl":"//p0.meituan.net/wedding/732fc2cecf2d8b3ce00a840f01f5f9651047643.jpg@200w_150h_1e_1c_1l_85q|watermark=0.webp",
          "shopName":"回家路上别走",
          "tip":['韩式','海景'],
          'viewnumber':5968,
          'width':170,
          'height':200,
          'id':8		
        },{
          "picUrl":"//p0.meituan.net/wedding/732fc2cecf2d8b3ce00a840f01f5f9651047643.jpg@200w_150h_1e_1c_1l_85q|watermark=0.webp",
          "shopName":"放学路上别走dsdsdsdsdsss",
          "tip":['韩式','复古','海景'],
          'viewnumber':5965,
          'width':170,
          'height':200,
          'id':9
        
        }, {
          "picUrl":"//p1.meituan.net/wedding/9e86ccef664f6523db2a7d0c07305462354739.jpg@183w_244h_1e_1c_1l_85q|watermark=0.webp",
          "shopName":"回家路上别走",
          "tip":['韩式','海景'],
          'viewnumber':5966,
          'width':170,
          'height':290,
          'id':10

        },{
          "picUrl":"//p0.meituan.net/wedding/4f7d783ec5a65ac7c4bd6ec04bf18a7c489718.jpg@183w_244h_1e_1c_1l_85q|watermark=0.webp",
          "shopName":"放学路上别走",
          "tip":['韩式','复古','海景'],
          'viewnumber':5967,
          'width':170,
          'height':290,
          'id':11

        },{
          "picUrl":"//p0.meituan.net/wedding/732fc2cecf2d8b3ce00a840f01f5f9651047643.jpg@200w_150h_1e_1c_1l_85q|watermark=0.webp",
          "shopName":"回家路上别走",
          "tip":['韩式','海景'],
          'viewnumber':5968,
          'width':170,
          'height':200,
          'id':12
        }]
    }
  },
  props:['detailwater'],
  computed:{
  		items: function (){
         return this._props.detailwater
      }
	},
  created(){
//    console.log(this._props);
  },
  mounted(){
  },
  methods:{
    //   generateRandomItems(data){
    //       var item ={}, i
    //         for (i = 0; i < data.length; i++) {
    //             item ={
    //             index: this.lastIndex++,
    //             width: 200,
    //             height: 160
    //             }
    //             data[i] = Object.assign(data[i],item);
    //         }
    //        return data
    //   },
     loadMore (){

     },
     addItems () {
        // if (!this.isBusy && this.items.length < 500) {
        this.isBusy = true
        //   this.items.push.apply(this.items, )
        // }else{
        //   alert('加载内容太多了，为了不影响你的浏览刷新页面')
        // }
        setTimeout(()=>{
            // this.$store.state.wateritem =  this.$store.state.wateritem.concat(this.moreData);
            this.isBusy = false;
        },500)
        
     }
  },
  components: {
    Waterfall,
    WaterfallSlot,
    List
  }
}
</script>

<style scoped lang="less">
  @import "../less/util.less";
  .detaill-list{
    background-color:#fff;
    float:left;
    margin-top:0.15rem;
    width:100%;
    .content{
        width:95%;
        margin:0 2.5%;
        margin-top:0.15rem;
            min-height:10rem;
        // padding: 0.1rem;
    }
  }
  h1{
         font-weight:400;
         font-size:0.14rem;
         padding:0.15rem 0px 0px 0.15rem;
     }
 .more{
     .lineTop();
   height:0.45rem;
   line-height:0.45rem;
   background-color:#fff;
   position:relative;
   font-size:0.13rem;
   text-indent:39%;
   margin-top:0.15rem;
//    float:left;
//    width:92%;
//    margin:0 4%;
   .loadarrow{
     display:inline-block;
     position:absolute;
      background:url(../assets/selectarrow.png)no-repeat center;
      background-size:contain;
      width:0.12rem;
      top:42%;
      right:1.50rem;
      height:0.06rem;
   }
 }
// .detail-list-water{
//         // height:100%;
//         display:inline-block;
//         min-height:150px;
//         position: relative;
//         width:100%;
//         // margin:5px;
//         .img{
//             // overflow:hidden;
//             min-height:80px;
//         }
//         img{
//             max-width:100%;
//             display:block;
//             border:none;
//         }
//         .content{
//             padding:0px 0.08rem 0.08rem 0.08rem;
//         }
//         .bottom{
//             // position:absolute;
//             width:100%;
//             bottom:0px;
//             height:0.72rem;
//             background-color:#fff;
//             margin-bottom:0.1rem;
//             -webkit-box-shadow: 1px 1px 1px 1px#E6E6E6; /* 老的 Firefox */
//             -moz-box-shadow: 1px 1px 1px 1px #E6E6E6; /* 老的 Firefox */
//             box-shadow: 1px 1px 1px 1px #E6E6E6;
//             .tip{
//                 margin-top:0.05rem;
//                 span{
//                     display:inline-block;
//                     color:#999999;
//                     position:relative;
//                     font-size:0.12rem;
//                     padding-right:0.1rem;
//                 }
//                 span::after{
//                     content:"|";
//                     position:absolute;
//                     right:0.035rem;
//                 }
//                 span:last-child::after{
//                     content:"";
//                 }
//             }
//             .view{
//                 margin-top:0.08rem;
//                 span{
//                     display:inline-block;
//                     font-size:0.1rem;
//                     color:#999999;
//                 }
//                 .eyes{
//                     height:0.08rem;
//                     width:0.12rem;
//                     background:url(../assets/view.png)no-repeat center;
//                     background-size:contain;
//                 }
//             }
//             h5{
//                 color: #111111;
//                 font-size:0.14rem;
//                 font-weight:400;
//                 letter-spacing:0;
//                 line-height:0.14rem;
//                 padding-top:0.08rem;
//                 .elli();
//             }
//         }
//     }
//     .fade-enter-active, .fade-leave-active {
//         -webkit-transition: all .5s ease;
//         transition: all .5s ease;
//     }
//     .fade-enter, .fade-leave-to {
//         opacity: 0;
//     }
</style>
