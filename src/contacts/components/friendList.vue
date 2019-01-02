<template>
  <div>
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
        <div class="title">
          <text v-text="item.id" class="title_num"></text>
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
    <text class="count" :value="'Appear items: ' + appearMin + ' ~ ' + appearMax"></text>
  </div>
</template>
<script>
module.exports = {
  name: 'ContactlistpageFriendlist',
  data: function () {
    return {
      appearMin: 1,
      appearMax: 1,
      appearIds: [],
      rows: [
        {
          id: 'A',
          list: [
            {              imgurl: '/src/images/user_picture1.png',
              name: 'Alice Gill'            },
            {              imgurl: '/src/images/user_picture4.png',
              name: 'Adam Smith'            }
          ]
        },
        {
          id: 'B',
          list: [
            {
              imgurl: '/src/images/user_picture2.png',
              name: 'Brian Costilla'
            },
            {
              imgurl: '/src/images/user_picture5.png',
              name: 'Billy Marrone'
            },
            {
              imgurl: '/src/images/user_picture2.png',
              name: 'Bruce Wayne'
            },
          ]
        },
        {
          id: 'C',
          list: [
            {
              imgurl: '/src/images/user_picture3.png',
              name: 'Carolyn Zamora'
            }
          ]
        },
        {
          id: 'D',
          list: [
            {
              imgurl: '/src/images/user_picture5.png',
              name: 'Daniel White'
            }
            ,{
              imgurl: '',
              name: ''
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
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
.title {
  background-color: #ebebeb;
  height: 80px;
}
.title_num {
  line-height: 80px;
  padding-left: 70px;
}
.item {
  flex-direction: row;
  justify-content: start;
  border-bottom-width: 2px;
  border-bottom-color: #c0c0c0;
  padding: 20px;
}
.item:active {
  background-color: #00bdff;
}
.item-title {
  padding-left: 50px;
  line-height: 120px;
  font-size: 60px;
  color: #707070;
}
.item-image {
}
</style>
