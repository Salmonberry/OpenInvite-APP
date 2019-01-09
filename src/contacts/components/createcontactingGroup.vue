<template>
  <div class='liz'>
    <contactlistpage-source></contactlistpage-source>
    <div class='createGroud' @click="onCreateGroupClick">
      <div class="group-icon">
        <image :src='imgurl' style="width:30px;height:30px;"/>
      </div>
      <text class='title'>{{text}}</text>
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
      >
      <div class='group'>
        <image :src="item.imgurl" style='width:120px;height:120px'/>
        <text class='text'>{{item.group}}</text>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactlistpageSource from './source'

const swifter = weex.requireModule('swifter');

module.exports = {
  name: 'ContactlistpageGroup',
  components: {
    ContactlistpageSource
  },
  data: function () {
    return {
      imgurl:'local:///createEventLastPage-labeladd.png',
      text:'Create Group',
      rows: [
        {
          group: 'Happy Friday',
          imgurl: 'local:///user_picture22.png'
        },{
          group: 'Music LOver',
          imgurl:'local:///user_picture23.png'
        }
          ]
    }
  },
  methods: {
    onCreateGroupClick () {
      swifter.openBluePage('contacts/ContactAddFriendsPage.js');
    }
  }
}
</script>
<style scoped>
.liz{
  background-color: #fff;
}
.createGroud {
  flex-direction: row;
  align-items: center;
}
.title{
  color: #45b5f0;
  font-size: 34px;
  line-height: 100px;

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

.group-icon {
  padding-left: 40px;
  margin-right: 24px;
}

.group {
   border-bottom-width: 2px;
  border-bottom-color: #c0c0c0;
  padding: 20px;
  flex-direction: row;
}

.text {
  padding-left: 50px;
  line-height: 120px;
  font-size: 38px;
  color: #707070;
}
</style>
