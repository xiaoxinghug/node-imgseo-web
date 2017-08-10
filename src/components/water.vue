<template>
    <div class="water"v-if="items && items.length>0">
         <div class="left">
              <List :List="items"></List>
         </div>
         <div class="right">
              <List :List="ritems"></List>
         </div>
      <div class="more"v-if="!isBusy && !this.$store.state.indexEnd"@click="addItems()">
            <div style="margin:0px 0.05rem;background-color:#fff;">查看更多<span class="loadarrow"></span></div>
      </div>
      <div class="more"v-if="isBusy">加载中...</div>
    </div>
</template>

<script>
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
  props:['data'],
  computed:{
  		items: function (){
        var odditem = [];
         for (var i = 0 ; i < this._props.data.length; i ++){
                if (i % 2 != 0){
                    odditem.push(this._props.data[i]);
                }
         }
         return odditem
      },
      ritems: function(){
        var noOdditem = [];
         for (var i = 0 ; i < this._props.data.length; i ++){
                if (i % 2 == 0){
                    noOdditem.push(this._props.data[i]);
                }
         }
         return noOdditem
      }
	},
  created(){
  //  console.log(this._props);
      this.$store.state.detailpage = 2;
  },
  mounted(){
  },
  methods:{
     loadMore (){

     },
     addItems () {
        let self = this;
        this.isBusy = true;
        this.$store.dispatch('getMoreIndexWater').then(function(){
           self.isBusy = false
          //  console.log(1);
        })
     }
  },
  components: {
    // Waterfall,
    // WaterfallSlot,
    List
  }
}
</script>

<style lang="less">
 .water{
     float:left;
     margin-top:0.07rem;
     padding:0px 0.07rem;
     .left,.right{
       width:50%;
       float:left;
     }
 }
 .more{
   height:0.45rem;
   line-height:0.45rem;
  //  background-color:#fff;
   position:relative;
   text-indent:37%;
   float:left;
   width:100%;
   margin-top:0.05rem;
   .loadarrow{
     display:inline-block;
     position:absolute;
      background:url(../assets/selectarrow.png)no-repeat center;
      background-size:contain;
      width:0.12rem;
      top:42%;
      right:1.43rem;
      height:0.06rem;
   }
 }
//  .item {
//   position: absolute;
//   top: 5px;
//   left: 5px;
//   right: 5px;
//   bottom: 5px;
//   font-size: 1.2em;
//   color: rgb(0,158,107);
// }
</style>
