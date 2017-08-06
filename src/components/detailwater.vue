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
    <div class="more"v-if="!isBusy"@click="addItems()">查看更多<span class="loadarrow"></span></div>
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
      moreData:[
        {
          tags: [
          {
          tagType: 1,
          tagName: "欧美",
          tagId: "2"
          },
          {
          tagType: 2,
          tagName: "水下",
          tagId: "2"
          }
          ],
          id: "295332_99665836",
          picWight: 640,
          picUrl: "//p0.meituan.net/dpmerchantimage/5233883e-6907-4d89-b953-123b334de33d.jpg%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店【预约制】",
          shopId: 47959941,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "22婚纱照图片@案例哪里",
          viewCount: 18920,
          relationId: 295332
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "欧美",
          tagId: "2"
          },
          {
          tagType: 2,
          tagName: "水下",
          tagId: "2"
          }
          ],
          id: "295331_99665831",
          picWight: 640,
          picUrl: "//p1.meituan.net/dpmerchantimage/a8c05916-ac8a-43bd-b70c-970ce136ee93.jpg%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店",
          shopId: 1798321,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "22婚纱照图片@案例哪里",
          viewCount: 18820,
          relationId: 295331
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "欧美",
          tagId: "2"
          },
          {
          tagType: 2,
          tagName: "水下",
          tagId: "2"
          }
          ],
          id: "295332_99665834",
          picWight: 640,
          picUrl: "//p1.meituan.net/dpmerchantimage/eb549f6e-27d3-44cd-a17f-671aa67a01ce.bmp%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店【预约制】",
          shopId: 47959941,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "22婚纱照图片@案例哪里",
          viewCount: 18686,
          relationId: 295332
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "性感",
          tagId: "4"
          },
          {
          tagType: 2,
          tagName: "海景",
          tagId: "1"
          }
          ],
          id: "9887_97585848",
          picWight: 640,
          picUrl: "//p0.meituan.net/wedding/327ff6a97739e5643765e2cf5d8d3628779250.jpg%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "韩国首尔SUM STUDIO",
          shopId: 4275105,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "41婚纱照图片@蒙马特手扎",
          viewCount: 18386,
          relationId: 9887
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "韩式",
          tagId: "1"
          },
          {
          tagType: 2,
          tagName: "海景",
          tagId: "1"
          }
          ],
          id: "98347_99063337",
          picWight: 640,
          picUrl: "//p0.meituan.net/wedding/0639b2baa7025a351697a8da48c0fc5b66442.png%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "古摄影·全球华人摄影连锁",
          shopId: 3278236,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "11婚纱照图片@哈哈哈",
          viewCount: 18250,
          relationId: 98347
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "欧美",
          tagId: "2"
          },
          {
          tagType: 2,
          tagName: "水下",
          tagId: "2"
          }
          ],
          id: "295332_99665833",
          picWight: 640,
          picUrl: "//p1.meituan.net/dpmerchantimage/a8c05916-ac8a-43bd-b70c-970ce136ee93.jpg%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店【预约制】",
          shopId: 47959941,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "22婚纱照图片@案例哪里",
          viewCount: 18162,
          relationId: 295332
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "日系",
          tagId: "8"
          },
          {
          tagType: 2,
          tagName: "夜景",
          tagId: "8"
          }
          ],
          id: "295229_678445399",
          picWight: 640,
          picUrl: "//p0.meituan.net/wedding/4a577945ca688836f98080c0931e8d041497744.jpg%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店",
          shopId: 1798321,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "88婚纱照图片@测试案例179",
          viewCount: 18132,
          relationId: 295229
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "韩式",
          tagId: "1"
          },
          {
          tagType: 2,
          tagName: "水下",
          tagId: "2"
          }
          ],
          id: "295230_678424947",
          picWight: 640,
          picUrl: "//p1.meituan.net/wedding/922317f3b02411ac87680203097ff4e0525518.jpg%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店",
          shopId: 1798321,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "12婚纱照图片@测试案例181",
          viewCount: 18057,
          relationId: 295230
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "欧美",
          tagId: "2"
          },
          {
          tagType: 2,
          tagName: "水下",
          tagId: "2"
          }
          ],
          id: "295331_99665829",
          picWight: 640,
          picUrl: "//p1.meituan.net/dpmerchantimage/eb549f6e-27d3-44cd-a17f-671aa67a01ce.bmp%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店",
          shopId: 1798321,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "22婚纱照图片@案例哪里",
          viewCount: 17535,
          relationId: 295331
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "欧美",
          tagId: "2"
          },
          {
          tagType: 2,
          tagName: "水下",
          tagId: "2"
          }
          ],
          id: "295331_99665834",
          picWight: 640,
          picUrl: "//p1.meituan.net/dpmerchantimage/eb549f6e-27d3-44cd-a17f-671aa67a01ce.bmp%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店",
          shopId: 1798321,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "22婚纱照图片@案例哪里",
          viewCount: 17504,
          relationId: 295331
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "韩式",
          tagId: "1"
          },
          {
          tagType: 2,
          tagName: "水下",
          tagId: "2"
          }
          ],
          id: "295230_678424919",
          picWight: 640,
          picUrl: "//p1.meituan.net/wedding/e74555f71a78efd6414289eb9159143f1876021.jpg%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "巴黎婚纱国际旗舰店",
          shopId: 1798321,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "12婚纱照图片@测试案例181",
          viewCount: 17386,
          relationId: 295230
          },
          {
          tags: [
          {
          tagType: 1,
          tagName: "韩式",
          tagId: "1"
          },
          {
          tagType: 2,
          tagName: "海景",
          tagId: "1"
          }
          ],
          id: "98659_99063337",
          picWight: 640,
          picUrl: "//p0.meituan.net/wedding/0639b2baa7025a351697a8da48c0fc5b66442.png%40640w_480h_0e_1l%7Cwatermark%3D0",
          cityId: 1,
          shopName: "麦田婚纱摄影sdsd",
          shopId: 2557600,
          categoryId: [
          "1631"
          ],
          pichight: 480,
          picName: "11婚纱照图片@哈哈哈",
          viewCount: 17336,
          relationId: 98659
          }
        ]
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
//    console.log(this._props);
  },
  mounted(){
  },
  methods:{
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
            this.$store.state.detailwater =  this.$store.state.detailwater.concat(this.moreData);
            this.isBusy = false;
        },500)
        
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
