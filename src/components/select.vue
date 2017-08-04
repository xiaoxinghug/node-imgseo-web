<template>
    <div class="select-bar">
      <div class="header">
             <div class="left"v-for="(tab,index) in data">
                <span :class="{selectarrowactive:showIndex == index}"@click="showList(index)">{{tab.title}}</span>
            </div>
      </div>
      <transition name="fade">
            <div class="content"v-if="fenglist && fenglist.length>0"v-show="showselect && showIndex == 0">
                    <span v-for="(item,index) in fenglist"@click="fengListclick(item,index)":class="{typeactive:styleIndex ==index}">{{item.tagName}}</span>
            </div>
      </transition>
      <transition name="fade">
            <div class="content"v-if="stylelist && stylelist.length>0"v-show="showselect && showIndex == 1">
                 <span v-for="(item,index) in stylelist"@click="styleListclick(item,index)":class="{typeactive:typeIndex ==index}">{{item.tagName}}</span>
            </div>
      </transition>
    </div>
</template>

<script>
// import { mapState} from 'vuex';
export default {
  name: '',
  data () {
    return {
    //   fenglist: [{'tagName':'海景','tagId':0},{'tagName':'不限风格','tagId':1},{'tagName':'韩式','tagId':2},{'tagName':'欧美','tagId':3},{'tagName':'小清新','tagId':4},{'tagName':'海景','tagId':5}],
    //   stylelist:[{'tagName':'海景','tagId':0},{'tagName':'韩式','tagId':1},{'tagName':'欧美','tagId':3}],
      data : [{'title':'风格'},{'title':'场景'}],
      showselect:false,
      showIndex:null,
      typeIndex:0,
      styleIndex:0,
      parentTempIndex:null
    }
  },
  created(){
    //   console.log(this.$store.state.styleTagId)
  },
  props:['fenglist','stylelist'],
  computed:{
	flist(){
        return this._props.fenglist;
    },
    slist(){
        return this._props.stylelist;
    }
  },
  mounted(){
    // console.log();
    // console.log();
    // console.log(this.$store.state.styleTagId);
    this.activeFn(this.fenglist,this.$store.state.styleTagId);
    this.activeStyle(this.stylelist,this.$store.state.sceneTagId);
    // console.log(this.styleIndex);
        console.log(this.$store.state.sceneTagId);

  },
  methods:{
    activeFn(data,Id){
        for (var i = 0; i < data.length ; i ++){
                if (data[i].tagId === Id){
                    this.styleIndex = i;
                    return;
                }
        }
    },
    activeStyle(data,Id){
        for (var i = 0; i < data.length ; i ++){
                if (data[i].tagId === Id){
                    this.typeIndex = i;
                    return;
                }
        }
    },
    showList(index){
        if (this.showselect){
            if (index != this.showIndex){
                //  this.list = this.data[index].list;
                 this.showIndex = index;
                 return;
            }
        }
        if (this.showIndex == index){
            this.showIndex = null;
        }else {
            this.showIndex = index;
        }
        // this.list = this.data[index].list;
        this.showselect = !this.showselect;
    },
    styleListclick(data,index){
        console.log(data.tagId);
        console.log(this.$store.state.sceneTagId);
        if (!!document){
            location.href = location.host+`/wedphotos/weddingphoto/f${this.$store.state.styleTagId}c${data.tagId}`;
        }else{
            this.$router.push(`f${this.$store.state.styleTagId}c${data.tagId}`);
        }
        // if (this.typeIndex == index){
        //      return;
        // }
        // setTimeout(()=>{
        //     // this.$store.state.wateritem = [];
        //     this.$store.dispatch('getWaterData');
        //     this.showselect = false;
        //     this.showIndex = null;
        //     console.log(this.list);
        // },500)
        // this.typeIndex =  index;
        // this.parentTempIndex = this.showIndex;
        // this.tempIndex = index;
    },
    fengListclick(data,index){
      this.$router.push(`f${data.tagId}c${this.$store.state.sceneTagId}`);
    }
  }
}
</script>

<style lang="less">
  @import "../less/util.less";
.typeactive{
    background: #FFF1ED;
    color:#FF6633;
}
.typeactive::after{
   border:1px solid #FF6633 !important;
} 
.select-bar{
    float:left;
    width:100%;
    position:relative;
    font-size: 0.12rem;
    color: #333333;
    .content{
      position:absolute;
      z-index:1;
      top:0.4rem;
      width:100%;
      text-align:center;
      background-color:#fff;
      padding:0.05rem 0px 0.15rem 0.1rem;
      span{
          display:inline-block;
          width:0.8rem;
          position:relative;
          height:0.37rem;
          line-height:0.38rem;
          font-size:0.12rem;
          margin-left:0.07rem;
          margin-top:0.10rem;
          float:left;
          &::after{
            content:"";
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            position: absolute;
            border: 1px solid #BCBCBC;;
            top: -50%;
            right: -50%;
            bottom: -50%;
            left: -50%;
            border-radius: 10px;
          }
          .radius(5px); 
        }
    }
}
.header{
    float:left;
    width:100%;
    height:0.4rem;
    line-height:0.4rem;
    background-color:#fff;
    font-size:0.12rem;
    color:#333333;
    .lineBottom();
    span{
        display:inline-block;
    }
   .left{
       display:inline-block;
       position:relative;
       float:left;
       text-align:center;
       width:50%;
       span{
         position:relative;
       }
       span::after{
        content:"";
        position:absolute;
        background:url(../assets/selectarrow.png)no-repeat center;
        background-size:contain;
        width:0.1rem;
        top:0.17rem;
        right:-0.13rem;
        height:0.06rem;
       }
   }
   .selectarrowactive{
       color:#FF6633;
   }
   .selectarrowactive::after{
       content:"";
       position:absolute;
       background:url("../assets/selectarrow-active.png")no-repeat center !important;
       background-size:contain  !important;
       width:0.1rem;
       top:0.17rem;
       right:-0.13rem;
       height:0.06rem;
   }
}
.fade-enter-active, .fade-leave-active {
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
