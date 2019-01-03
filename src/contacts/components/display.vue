<template>
<div class="liz">
  <div class='title' @click="ondisplay()">
    <text v-text="text" :style="title"></text>
    <div class="icon"></div>
  </div>
  <div class="panel">
    <text class="text">2nd Degree Contact</text>
    <text class="text">1st & 2nd Degree Contact</text>
    <text class="text">Star Friends Only</text>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      text:"Display:1st Degree Contact",
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
      alert("ddddd")
    }
  },
}
</script>
<style scoped>
.liz .title {
  flex-direction: row;
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
  padding-top: 30px;
}
.text {
  padding: 10px 0;
  padding-left: 50px;
  color: #707070;
}


</style>
