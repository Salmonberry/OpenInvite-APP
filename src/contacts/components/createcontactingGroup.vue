<template>
  <div class='liz'>
    <div class='createGroud'>
      <div class="group">
        <image :src='imgurl' style="width:60px;height:60px;"/>
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
    <text class="count" :value="'Appear items: ' + appearMin + ' ~ ' + appearMax"></text>
  </div>
</template>
<script>
module.exports = {
  name: 'ContactlistpageGroup',
  data: function () {
    return {
      imgurl:'local:///icon_bar_add.png',
      text:'Create Group',
      rows: [
        {
          group: 'Happy Friday',
          imgurl: 'local:///user_picture1.png'
        },{
          group: 'Music LOver',
          imgurl:'local:///user_picture1.png'
        }
          ]
    }
  }
}
</script>
<style scoped>
.liz{
  background-color: #ccc;
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
