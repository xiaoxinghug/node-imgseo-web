<template>
  <div>
    <!--头部-->
    <header-component></header-component>
    <!--图片详情-->
    <detailimg-component
        v-if="!!detailimgData" 
        :detailimg="detailimgData">
    </detailimg-component>
    <!--商户详情-->
    <merchant-component 
       v-if="!!merchantData"
       :merchant="merchantData">
    </merchant-component>
    <!--案例详情-->
    <caseComponent 
        v-if="!!caseData"
        :case="caseData">
    </caseComponent>
    <!--瀑布流列表-->
    <detailwaterComponent 
      v-if="!!detailWater"
      :detailwater="detailWater">
    </detailwaterComponent>
    <!--底部内容-->
    <footerComponent 
    :title="title">
    </footerComponent>
    
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/footer.vue';
import DetailwaterComponent from '../components/detailwater.vue';
import DetailimgComponent from '../components/detailimg.vue';
import MerchantComponent from '../components/merchant.vue';
import CaseComponent from '../components/case.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'detail',
  data(){
    return {
      // waterItems:[]
    }
  },
  computed:mapState({
	  	detailimgData: state => state.detaildata['top'],
  		merchantData: state => state.detaildata['bottom'],
  		caseData: state => state.detaildata['center'],
      detailWater: state => state.detailwater,
      title : state => state.detaildata['top'].picName || "",
	}),
  mounted(){
   
  },
  created(){
      this.$store.state.wateritem = [];
  },
  asyncData ({store,route: { params: { id }}}) {
    return store.dispatch('getDetailData').then(()=>store.dispatch('getDetailWater'));
  },
  methods:{

  },
  components: {
    HeaderComponent,
    FooterComponent,
    DetailwaterComponent,
    MerchantComponent,
    DetailimgComponent,
    CaseComponent
  }
}
</script>
