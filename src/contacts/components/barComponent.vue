<template>
  <div class="root">
    <div class="main"></div>
    <div class="circle"></div>
     <div  class="list">
      <div  v-for="(item, index) in imgList" :key="index">
        <image :src="item.imgurl" style="width:40px;height:40px"/>
      </div>
    </div>
    <div class='icon_add'>
       <image src='/src/images/icon_bar_add.png' style="width:50px;height:50px"/>
     </div>
  </div>
</template>
<script>
export default {
  name: "ContactlistpagebarComponent",
  data () {
    return {
      imgList: [
        { imgurl: '/src/images/icon_bar_home.png' },
        { imgurl: '/src/images/icon_bar_friends.png' },
        {imgurl:''},
        { imgurl: '/src/images/icon_bar_calendar.png' },
        { imgurl: '/src/images/icon_bar_me.png' },
      ]
    }
  },

}
</script>
<style scoped>
.root {
  /* background-color: pink; */
}
.main {
  width: 100%;
  height: 154px;
  background-color: #4d9cc7;
}
.list {
  flex-direction: row;
  justify-content: space-around;
  transform: translateY(-250px);
}
.circle {
  width: 128px;
  height: 128px;
  margin-left: 50%;
  transform: translate(-64px, -200px);
  border-radius: 50%;
  background-color: #ec2079;
}
.icon_add {
  margin-left: 50%;
  transform: translate(-25px,-330px)
}
</style>

