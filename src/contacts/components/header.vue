<template>
  <div class="header">
    <div class="header_top">
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
      <div v-for="(item,index) of list" :key="index" class="outLine" :class="{whiteLine:changWhite==index}" @click="change(index,item.child)">
        <div class="options">
          <text class="number" v-text="item.num"></text>
          <text class="title" v-text="item.title"></text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactlistpageFriendlist from './friendList'
import  ContactlistpagePending from './pending'
import ContactlistpageGroup from './createcontactingGroup'

export default {
  name: "ContactlistpageHeader",
  components:{
    ContactlistpageFriendlist,
    ContactlistpagePending,
    ContactlistpageGroup

  },
  methods: {
    change: function (index) {
    this.changWhite=index;
    console.log(index)
    this.tabChange(tabItem);
    },
    tabChange(tabItem){
      this.currentView=tabItem
    }
  },
  data () {
    return {
      child1:'ContactlistpageFriendlist',
      child2:'ContactlistpagecurrentViewGroup',
      child3:'ContactlistpagePending',
      currentView:'ContactlistpageFriendlist',//默認選中的第一項
      changWhite:0,
      list: [{
        num: '54',
        title: 'Friends',
        child:this.Friends   },
      {
        num: '6',
        title: 'Group',
        child:this.Groups
      }, {
        num: '3',
        title: 'Pending',
        child:this.Pending
      }]
    }
  },
};
</script>
<style scoped>
.header {
  position: relative;
  padding-top: 30px;
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
.whiteLine {
  border-bottom: 15px solid #fff;
}
.list {
  position: absolute;
  top:500px;
}
</style>