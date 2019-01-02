<template>
<div class="header">
  <div class='header_top'>
    <div class="icon_chart">
      <image src="/src/images/icon_chart.png" style="width:60px;height:60px"/>
    </div>
    <div>
      <text class="text_contact">contact</text>
    </div>
    <div class="icon_plus">
      <image src="/src/images/icon_bar_add.png" style="width:60px;height:60px"/>
    </div>
  </div>
  <div class="header_bottom">
        <div v-for="(item,index) of list" :key="index" class="outLine" :style="borderBottom">
      <a href="">
        <text class="number" v-text="item.num"></text>
        <text class="title" v-text="item.title"></text>
      </a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "ContactlistpageHeader",
  methods:{
    enableClick:function(){

    }
  },
  data() {
    return {
      borderBottom:{
        color:'red',
        border:'0 0 15px 0 solid #fff'
      },
      list:[{
        num:'54',
        title:'Friends'},
      {
        num:'6',
        title:'Group'
      },{
        num:'3',
        title:'Pending'
      }]
    }
  },
};
</script>
<style scoped>
.header {
  padding-top:30px;
  background-color: #ec2079;
  flex-direction: column;
  justify-content: flex-start;
  height: 330px;
}
.header_top {
  top: 24px;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 60px;
}
.text_contact {
  color: aliceblue;
  font-size: 50px;
}
.header_bottom {
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-around;
}

.header_bottom .number {
  text-align: center;
  color: white;
  font-size: 60px;
}
.header_bottom .title {
  font-size: 40px;
  color: aliceblue;
  padding: 20px 0;
}
.outLine:first-child {
  border-bottom:15px solid #fff;
}
.outLine {
  border: #ec2079
}
</style>