<template>
<div class="liz">
  <div class='title' @click="ondisplay">
    <text v-text="text" :style="title"></text>
    <div class="icon"></div>
  </div>
  <div class="panel" ref="panel" v-show='isDisplay'>
    <text class="text">2nd Degree Contact</text>
    <text class="text">1st & 2nd Degree Contact</text>
    <text class="text">Star Friends Only</text>
  </div>
</div>
</template>
<script>
const animation=weex.requireModule('animation');
export default {
  name:"DisplayComponent",
  data() {
    return {
      text:"Display:1st Degree Contact",
      isDisplay:false,
      title:{
        color:'#57B1E3',
        fontSize:'40px',
        weight:'bolder'
      },
      imgurl:'/src/images/select.png'
    }
  },
  methods: {
    ondisplay:function(){
      this.isDisplay=!this.isDisplay

      if(this.isDisplay){
        this.enabledisplay()
      }
      else{
        this.unenableDisplay();
      }
    },
    enabledisplay() {
      var display=this.$refs.panel;//綁定對象
      // 調用
      animation.transition(display,{
        styles:{
          display:'block'
        },
        duration:5000,//持續時間
        timingFunction:'ease',//緩動模式
        delay:0//延遲屬性
      })
    },
    unenableDisplay(){
      var display=this.$refs.panel;//綁定對象
      // 調用
      animation.transition(display,{
        styles:{
          // backgroundColor:'yellow'
          display:'none'
        },
        duration:10000,//持續時間
        timingFunction:'ease',//緩動模式
        delay:0//延遲屬性
      })
    }
  },
}
</script>
<style scoped>
.liz .title {
  flex-direction: row;
  /* background: #fff; */
}
.title {
  font-weight: 800;
}
.icon {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 30px solid #57B1E3;
  margin-left:20px;
  margin-top:10px;
}
.panel{
  width: 70%;
  padding-top: 30px;
  background-color: #FFF;
  box-shadow: 0px 5px 5px 0px #ccc;
}
.text {
  padding: 10px 0;
  padding-left: 50px;
  color: #707070;
}
</style>
