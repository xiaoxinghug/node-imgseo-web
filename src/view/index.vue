<template>
  <div>
    <!--头部-->
    <header-component></header-component>

    <!--图详情-->
    <indexImg-component 
     v-if="!!indeximg"
    :indeximg ="indeximg">
    </indexImg-component>

    <!--选择box-->
    <select-component
    v-if="!!fenglist" 
    :fenglist="fenglist"
    :stylelist="stylelist">
    </select-component>

    <!--瀑布流-->
    <water-component 
    v-if="!!wateritem"
    :data="wateritem">
    </water-component>

    <!--底部内容-->
    <footer-component 
    :title="title">
    </footer-component>
    
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/footer.vue';
import IndexImgComponent from '../components/indeximg.vue';
import SelectComponent from '../components/select.vue';
import WaterComponent from '../components/water.vue';
import { mapState } from 'vuex';
export default {
  name: 'index',
  data(){
    return {
      title:"",
      moreData:[]
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

  },
  asyncData ({ store}) {
    return store.dispatch('getIndexData'),store.dispatch('getWaterData');
  },
  mounted (){
    
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