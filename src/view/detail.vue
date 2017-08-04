<template>
  <div>
    <header-component></header-component>
    <detailimg-component :detailimg="detailimgData"v-if="!!detailimgData"></detailimg-component>
    <merchant-component :merchant="merchantData"v-if="!!merchantData"></merchant-component>
    <!--<caseComponent :case="caseData"v-if="!!caseData"></caseComponent>-->
    <detailwaterComponent :detailwater="detailWater"v-if="!!detailWater"></detailwaterComponent>
    <footer-component></footer-component>
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
      detailWater: state => state.detailwater
	}),
  mounted(){
    // if (window.scrollY) {
    //       window.scroll(0, 0);
    // }
  },
  created(){
      this.$store.state.wateritem = [];
      // let id = this.$route.params.id;
      // if (id && id!=null){
      //    this.$store.dispatch('getDetailWater');
      //    this.$store.dispatch('getDetailData');
      //   //  console.log(this.$store);
      // }
  },
  asyncData ({ store, route: { params: { id }}}) {
    return store.dispatch('getDetailData')
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