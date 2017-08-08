<template>
  <div>
    <header-component></header-component>
    <detailimg-component :detailimg="detailimgData"v-if="!!detailimgData"></detailimg-component>
    <merchant-component :merchant="merchantData"v-if="!!merchantData"></merchant-component>
    <!--<caseComponent :case="caseData"v-if="!!caseData"></caseComponent>-->
    <detailwaterComponent :detailwater="detailWater"v-if="!!detailWater"></detailwaterComponent>
    <footerComponent :title="title"></footerComponent>
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
      waterItems:[]
    }
  },
  computed:mapState({
	  	detailimgData: state => state.detaildata['top'],
  		merchantData: state => state.detaildata['bottom'],
  		caseData: state => state.detaildata['center'],
      detailWater: state => state.detailwater,
      title : state => state.detaildata['top'].picName,
	}),
  mounted(){
    // console.log(this.$store.state.detailstyleTagId);
    // console.log(this.$store.state.detailsceneTagId);
  },
  created(){
      this.$store.state.wateritem = [];
  },
  asyncData ({store}) {
    return store.dispatch('getDetailData').then(store.dispatch('getDetailWater'));
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

<style lang="less">
</style>