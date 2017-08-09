<template>
  <div>
    <header-component></header-component>
    <indexImg-component :indeximg ="indeximg"v-if="!!indeximg"></indexImg-component>
    <select-component :fenglist="fenglist":stylelist="stylelist"></select-component>
    <water-component :data="wateritem"v-if="!!wateritem"></water-component>
    <footer-component :title="title"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/footer.vue';
import IndexImgComponent from '../components/indeximg.vue';
import SelectComponent from '../components/select.vue';
import WaterComponent from '../components/water.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'index',
  data(){
    return {
      title:"",
      moreData:[
        {
          "picUrl":"//p0.meituan.net/wedding/4f7d783ec5a65ac7c4bd6ec04bf18a7c489718.jpg@183w_244h_1e_1c_1l_85q|watermark=0.webp",
          "shopName":"放学路上别走",
          "tip":['韩式','复古','海景'],
          'viewnumber':5967,
          'width':170,
          'height':290,
          'id':7
        }
      ]
    }
  },
  props:[],
  computed:mapState({
        wateritem: state => state.wateritem,
        fenglist : state => state.indexdata.styleTagList,
        stylelist : state => state.indexdata.scaneTagList,
        indeximg : state => state.indexdata.banner
  }),
  created (){
     console.log(this.indeximg);
  },
  asyncData ({ store}) {
    return store.dispatch('getIndexData'),store.dispatch('getWaterData');
  },
  mounted (){
    // this.$store.dispatch('getWaterData');
    // this.$store.state.wateritem = this.$store.state.wateritem.concat(this.moreData);
  },
  methods:{
    
  },
  components: {
    HeaderComponent,
    FooterComponent,
    IndexImgComponent,
    SelectComponent,
    WaterComponent
  }
}
</script>

<style lang="less">
</style>