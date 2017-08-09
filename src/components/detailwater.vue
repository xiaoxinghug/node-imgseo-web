<template>
  <div class="detaill-list">
    <h1>相关推荐</h1>
    <div class="content">
      <div class="left">
            <List :List="items":isShadow="true"></List>
      </div>
      <div class="right">
            <List :List="ritems":isShadow="true"></List>
      </div>
    </div>
    <div class="more"v-if="!isBusy && !this.$store.state.detailEnd"@click="addItems()">查看更多<span class="loadarrow"></span></div>
    <div class="more"v-if="isBusy">加载中...</div>
  </div>
</template>

<script>
// import { Waterfall, WaterfallSlot } from '../lib/vue-waterfall.min.js';
import List from '../components/list.vue';
export default {
  name: '',
  data () {
    return {
      align:'center',
      lastIndex:0,
      isBusy: false,
      moreData:[]
    }
  },
  props:['detailwater'],
  computed:{
  		items: function (){
        var odditem = [];
         for (var i = 0 ; i < this._props.detailwater.length; i ++){
                if (i % 2 != 0){
                    odditem.push(this._props.detailwater[i]);
                }
         }
         return odditem
      },
      ritems: function(){
        var noOdditem = [];
         for (var i = 0 ; i < this._props.detailwater.length; i ++){
                if (i % 2 == 0){
                    noOdditem.push(this._props.detailwater[i]);
                }
         }
         return noOdditem
      }
	},
  created(){
  //  console.log(this._props.detailwater);
    this.$store.state.detailpage = 2;
  },
  mounted(){
  },
  methods:{
     loadMore (){

     },
     addItems () {
        // if (!this.isBusy && this.items.length < 500) {
        let self = this;
        this.isBusy = true;
        this.$store.dispatch('getMoreDetailWater').then(function(){
           self.isBusy = false
           console.log(1);
        })
        // setTimeout(()=>{
        //     this.$store.state.detailwater =  this.$store.state.detailwater.concat(this.moreData);
        //     this.isBusy = false;
        // },500)
        
     }
  },
  components: {
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
        padding:0.1rem;
        .left,.right{
          width:50%;
          float:left;
        }
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
   float:left;
   width:100%;
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
      right:1.60rem;
      height:0.06rem;
   }
 }
</style>
