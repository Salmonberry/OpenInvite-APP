<template>
  <div class='liz'>
    <contactlistpage-source></contactlistpage-source>
    <div class="list">
      <div
        v-for="(item,i) in rows"
        append="tree"
        :index="i"
        :key="i"
        class="row"
        @appear="onappear(i, $event)"
        @disappear="ondisappear(i, $event)"
      >
      <div class='group'>
        <div class="group_left">
          <image :src="item.imgurl" style='width:120px;height:120px'/>
          <text class='text'>{{item.group}}</text>
        </div>
        <div class="group_right">
          <div class=button>
            <div class='green'></div>
            <image :src='trueimge' style="width:48px;height:44px" class="icon"/>
          </div>
          <div class="button">
            <div class='green red'></div>
            <image :src='falseimge' style="width:26px;height:26px" class="icon amend"/>
        </div>
        </div>
        </div>
      </div>
</div>
    <!--<text class="count" :value="'Appear items: ' + appearMin + ' ~ ' + appearMax"></text>-->
  </div>
</template>
<script>
import ContactlistpageSource from './source'
module.exports = {
  name: 'ContactlistpagePending',
  components: {
    ContactlistpageSource
  },
  data: function () {
    return {
      trueimge:'local:///right.png',
      falseimge:'local:///close.png',
      rows: [
        {
          group: 'Vivian Adams',
          imgurl: 'local:///user_picture24.png'
        },{
          group: 'Ben Burke',
          imgurl:'local:///user_picture7.png'
        }
          ]
    }
  }
}
</script>
<style scoped>
.createGroud {
  flex-direction: row;
}

.list {
  height: 850px;
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
.group {
  border-bottom-width: 2px;
  border-bottom-color: #c0c0c0;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
}
.group_left {
  flex-direction: row;
}
.group_right{
  flex-direction: row;
  justify-content: space-around;
  width: 230px;
}

.text {
  padding-left: 50px;
  line-height: 120px;
  font-size: 38px;
  color: #707070;
}
.button {
  padding-top: 32px;
  position: relative;
}
.green{
  line-height: 120px;
  width: 58px;
  height: 56px;
  background-color: #00CB8C;
  border-radius: 50%;
}
.red{
  background-color: #DD4040;
}
.icon {
  position: absolute;
  top:40px;
  left:6px;
}
.amend{
  top:47px;
  left:17px;
}
</style>
