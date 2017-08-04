<template>
    <div class="list-water"@click="goDetail(list)">
        <router-link :to="'/wedphotos/' + list.id">
            <div class="img">
                <img :src="list.picUrl"/>
            </div>
            <div class="bottom":class="[shadow== true ? 'shadow':'']">
                    <div class="content">
                        <h5>{{list.picName}}</h5>
                        <div class="tip"v-if="list.tags && list.tags.length>0">
                            <span v-for="item in list.tags">{{item.tagName}}</span>
                            
                        </div>
                        <div class="view">
                            <span class="eyes"></span>
                            <span>{{list.viewCount}}</span>
                        </div>
                    </div>
            </div>
        </router-link>      
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        // list:""
    }
  },
  props:['List',"isShadow"],
  computed:{
     list(){
         return this._props.List;
     },
     shadow(){
         return this._props.isShadow;
     }
  },
  created(){
    // console.log(this._props);
  },
  methods:{
    goDetail(data){
        if (!!this.shadow){
            location.href = data.url;
            return;
        }
        // this.$router.push('wedphotos/:'+data.id);
    }
  }
}
</script>
<style scoped lang="less">
  @import "../less/util.less";
  .shadow{
       -webkit-box-shadow: 1px 1px 1px 1px#E6E6E6; /* 老的 Firefox */
            -moz-box-shadow: 1px 1px 1px 1px #E6E6E6; /* 老的 Firefox */
            box-shadow: 1px 1px 1px 1px #E6E6E6;
  }
    .list-water{
        height:100%;
        position: relative;
        margin:5px;
        // background-color:#fff;
        .img{
            overflow:hidden;
            // height:65%;
        }
        img{
            max-width:100%;
            display:block;
            border:none;
            margin: 0 auto;
        }
        .content{
            margin:0rem 0.08rem 0.08rem 0.08rem ;
        }
        .bottom{
            position:absolute;
            width:100%;
            bottom:0px;
            height:0.72rem;
            background-color:#fff;
            margin-bottom:0.1rem;
            .tip{
                margin-top:0.08rem;
                span{
                    display:inline-block;
                    color:#999999;
                    position:relative;
                    font-size:0.12rem;
                    padding-right:0.1rem;
                }
                span::after{
                    content:"|";
                    position:absolute;
                    right:0.03rem;
                }
                span:last-child::after{
                    content:"";
                }
            }
            .view{
                margin-top:0.08rem;line-height:0.1rem;
                span{
                    display:inline-block;
                    font-size:0.1rem;
                    color:#999999;
                }
                .eyes{
                    height:0.07rem;
                    width:0.12rem;
                    background:url(../assets/view.png)no-repeat center;
                    background-size:contain;
                    margin-right:0.05rem;
                }
            }
            h5{
                color: #111111;
                font-size:0.14rem;
                font-weight:400;
                letter-spacing:0;
                line-height:0.14rem;
                padding-top:0.08rem;
                .elli();
            }
        }
    }
</style>