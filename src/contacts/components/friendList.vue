<template>
<div>
    <list class="list">
      <cell
        v-for="(v,i) in rows"
        append="tree"
        :index="i"
        :key="i"
        class="row"
        @appear="onappear(i, $event)"
        @disappear="ondisappear(i, $event)">
        <div class="item">
          <image src='/src/images/user_picture.png' style='width:50px;height:50px' class='item-image'/>
          <text class="item-title">row {{v.id}}</text>
        </div>
      </cell>
    </list>
    <text class="count" :value="'Appear items: ' + appearMin + ' ~ ' + appearMax"></text>
  </div>
</template>
<script>
 module.exports = {
   name:'ContactlistpageFriendlist',
    methods: {
      onappear: function (idx, e) {
        var appearId = this.rows[idx].id;
        console.log('+++++', appearId);
        var appearIds = this.appearIds;
        appearIds.push(appearId);
        this.getMinAndMaxIds(appearIds);
      },
      ondisappear:function (idx, e) {
        var disAppearId = this.rows[idx].id;
        console.log('+++++', disAppearId);
        var appearIds = this.appearIds;
        var index = appearIds.indexOf(disAppearId);
        if (index > -1) {
          appearIds.splice(index, 1);
        }
        this.getMinAndMaxIds(appearIds);
      },
      getMinAndMaxIds:function (appearIds) {
        appearIds.sort(function(a, b) {
          return a - b;
        });
        this.appearIds = appearIds;
        this.appearMax = appearIds[appearIds.length - 1];
        this.appearMin = appearIds[0];
      }
    },
    data: function () {
      return {
        appearMin:1,
        appearMax:1,
        appearIds:[],
        rows:[
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6},
          {id: 7},
          {id: 8},
          {id: 9}
        ]
      }
    }
  }
</script>
<style scoped>
 .list {
    height:850px
  }
  .count {
    font-size: 48px;
    margin:10px;
  }
  .indicator {
    height: 40px;
    width: 40px;
    color:#45b5f0;
  }
  .row {
    background-color: #ccc;
    width: 750px;
    
  }
  .item {
    flex-direction: row;
    justify-content: start;
    border-bottom-width: 2px;
    border-bottom-color: #c0c0c0;
    height: 100px;
    padding:20px;
  }
  .item:active {
     background-color: #00BDFF;
   }
  .item-title {
    line-height: 60px
  }
  .item-image {

  }
</style>
