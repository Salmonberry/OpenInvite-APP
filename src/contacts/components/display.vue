<template>
<div class="liz">
  <div class='title'>
    <text :style="title">{{text}}</text>
    <!--<div class="icon"></div>-->
    <image src="local:///contactCreateGroupPage-searadd.png" class="arrow"></image>
  </div>
  <!--<list class="panel" style="position: absolute; top: 40px; left: 0; z-index: 999;" ref="panel" v-if='isDisplay'>-->
    <!--<cell v-for="(num,index) in lists" :key="index">-->
      <!--<div class="panel">-->
        <!--<text class="text">{{num.text}}</text>-->
      <!--</div>-->
    <!--</cell>-->
    <!---->
  <!--</list>-->
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
      lists:[
        {text:"2nd Degree Contact"},
        {text:"1st & 2nd Degree Contact"},
        {text:"Star Friends Only"},
      ],
      imgurl:'local:///select.png'
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
.liz{
  position: relative;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.panel {
  width: 600px;
}

.text {
  /*width: 600px;*/
  /*padding: 10px 0;*/
  /*padding-left: 50px;*/
  color: #707070;
}

.arrow {
  width: 16px;
  height: 14px;
  margin-left: 30px;
}
</style>
