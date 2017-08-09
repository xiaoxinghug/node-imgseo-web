<template>
    <div class="case">
        <h5>所属案列</h5>
        <div class="container">
          <div class="content":style="{width:computWidth,paddingRight:0.15+'rem'}">
                <div class="img"v-for="item in casedata">
                   <a :href="`/wedphotos/${item.id}`">
                      <img :src="item.picUrl">
                   </a>   
                </div>
          </div>
        </div>
        <div class="bottom">
           <span class="title">{{casedata[0].picName}}</span>
           <span class="border"v-for="tip in casedata[0].tags">{{tip.tagName}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
  props:['case'],
  computed:{
  		casedata: function (){
         return this._props.case
        },
        computWidth: function (){
                return this._props.case.length * 1.75 +'rem';
        }
	},
  created(){
        // console.log(this._props.case);
  },
  mounted(){
    // var imgcontent = document.getElementById()
    // console.log(this.computWidth);
  },
  methods:{
    
  }
}
</script>

<style scoped lang="less">
    img{
        display:block;
        border:none;
        margin:0 auto;
        max-width:100%;
    }
    .case{
        background-color:#fff;
        margin-top:0.15rem;
        padding:0.15rem;
        float:left;
        width:100%;
        h5{
            font-weight:400;   
        }
        .container{
            padding:0.15rem 0px;
            width:100%;
            float:left;
            overflow-x:auto;
        -webkit-overflow-scrolling:touch;
            .content{
                float:left;
                // width:1000px;
            }
            .img{
                width:1.63rem;
                height:1.21rem;
                float:left;
                margin-right:0.09rem;
                overflow:hidden;
            }
        }
       .container::-webkit-scrollbar {
        display: none;
        }  
    }
    .bottom{
        float:left;
        .title{
            display: inline-block;
            float: left;
            height: 0.16rem;
            line-height: 0.17rem;
            margin-right:0.05rem;
        }
        .border{
            border: 1px solid #FF6633;
            color: #FF6633;
            font-size:0.11rem;
            display:inline-block;
            border-radius: 2px;
            padding:2px 8px;
            margin-left:0.03rem;
        }
    }
</style>
