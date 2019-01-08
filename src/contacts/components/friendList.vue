<template>
  <scroller>
  <div class="liz">
    <contactlistpage-source></contactlistpage-source>
    <!--<display-component class="displayComponents" @click="ondisplay"></display-component>-->

    <div class='display-title' @click="ondisplay">
      <text :style="title">{{text}}</text>
      <!--<div class="icon"></div>-->
      <image src="local:///contactCreateGroupPage-searadd.png" class="arrow"></image>
    </div>

    <div class="list">
      <div
        v-for="(item,i) in rows"
        append="tree"
        :index="i"
        :key="i"
        class="row"
        @appear="onappear(i, $event)"
        @disappear="ondisappear(i, $event)"
        @click="onFriendClick"
      >
        <div class="title">
          <text class="title_num">{{item.id}}</text>
        </div>
        <div class="item" v-for="(item, index) in item.list" :key="index">
          <image
            :src="item.imgurl"
            style="width:120px;height:120px"
            class="item-image"
          />
          <text class="item-title">{{item.name}}</text>
        </div>
      </div>
    </div>

    <list class="panel" style="position: absolute; top: 220px; left: 46px; padding-bottom: 30px; box-shadow: 0px 5px 5px 0px #ccc;" ref="panel" v-if='isDisplay'>
      <cell v-for="(num,index) in lists" :key="index">
        <div class="panel" style="flex-direction: row; padding-left: 28px;">
          <image src="local:///star_icon.png" class="star-icon" v-if="num.isStar"></image>
          <text class="text">{{num.text}}</text>
        </div>
      </cell>

    </list>

  </div>
  </scroller>
</template>
<script>
  import DisplayComponent from './display'
  import ContactlistpageSource from './source'

  const modal = weex.requireModule('modal')
  const animation=weex.requireModule('animation');
  const swifter = weex.requireModule('swifter');
module.exports = {
  name: 'ContactlistpageFriendlist',
  components: {
    DisplayComponent,ContactlistpageSource
  },
  data: function () {
    return {
      appearMin: 1,
      appearMax: 1,
      appearIds: [],
      rows: [
        {
          id: 'A',
          list: [
            {              imgurl: 'local:///user_picture1.png',
              name: 'Alice Gill'            },
            {              imgurl: 'local:///user_picture13.png',
              name: 'Adam Smith '            },
            {              imgurl: 'local:///user_picture14.png',
              name: 'Albert Gatewood'            }
          ]
        },
        {
          id: 'B',
          list: [
            {
              imgurl: 'local:///user_picture15.png',
              name: 'Brian Costilla'
            },
            {
              imgurl: 'local:///user_picture16.png',
              name: 'Billy Marrone'
            },
            {
              imgurl: 'local:///user_picture17.png',
              name: 'Bruce Wayne'
            },
          ]
        },
        {
          id: 'C',
          list: [
            {
              imgurl: 'local:///user_picture18.png',
              name: 'Carolyn Zamora'
            }
          ]
        },
        {
          id: 'D',
          list: [
            {
              imgurl: 'local:///user_picture19.png',
              name: 'Daniel White'
            }
          ]
        }
      ],
      lists:[
        {text:"2nd Degree Contact", isStar: false},
        {text:"1st & 2nd Degree Contact", isStar: false},
        {text:"Star Friends Only", isStar: true},
      ],
      title:{
        color:'#57B1E3',
        fontSize:'40px',
        weight:'bolder'
      },
      text:"Display:1st Degree Contact",
      imgurl:'local:///select.png',
      isDisplay:false,
    }
  },
  methods: {
    onappear (index,e) {

    },

    ondisappear (index,e) {

    },

    ondisplay:function(){

      this.isDisplay=!this.isDisplay

      // if(this.isDisplay){
      //   this.enabledisplay()
      // }
      // else{
      //   this.unenableDisplay();
      // }
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
    },

    onFriendClick () {
      swifter.openPinkPage('user/UserDetailsAbouttPage.js','Maggie');
    }
  }
}
</script>
<style scoped>

.display-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 40px;
    font-weight: 800;
}

.list {
  /* position: absolute; */
  /* top:100px; */
  /* left: 0; */
  width: auto;
  height: auto;
  margin-top: 50px;
  padding-bottom: 200px;
}
.count {
  font-size: 48px;
  margin: 10px;
}
.indicator {
  height: 40px;
  width: 40px;
  color: #45b5f0;
}
.row {
  background-color: #fff;
  width: 750px;
}
.title {
  background-color: #ebebeb;
  height: 80px;
}
.title_num {
  line-height: 80px;
  padding-left: 70px;
  color: #454545;
}
.item {
  flex-direction: row;
  justify-content: start;
  border-bottom-width: 2px;
  border-bottom-color: #c0c0c0;
  padding: 20px;
  padding-top: 24px;
}
.item:active {
  background-color: #00bdff;
}
.item-title {
  padding-left: 50px;
  line-height: 120px;
  font-size: 38px;
  color: #707070;
}

.displayComponents {
  /*position: fixed;*/
  /*top: 174px;*/
  padding-left: 44px;
}

.panel{
  width: 70%;
  padding-top: 30px;
  background-color: #FFF;
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

.star-icon {
  align-self: center;
  width: 26px;
  height: 24px;
  margin-right: 16px;
}

</style>
