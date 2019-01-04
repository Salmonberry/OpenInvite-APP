<template>
  <div class='lizApp'>
  <scroller class="scroller">
    <contactlistpage-header></contactlistpage-header>
    <contactlistpage-source></contactlistpage-source>
    <!-- <contactlistpage-friendlist class="list"></contactlistpage-friendlist> -->
    <!-- <div class="displayComponent">
      <display-component class="displayComponents"></display-component>
    </div> -->
    </scroller>
    <!-- <contactlistpagebar-component class="bar"></contactlistpagebar-component> -->
  </div>
</template>
<script>
  import ContactlistpageHeader from './components/header'
  import ContactlistpageSource from './components/source'
  import ContactlistpageFriendlist from './components/friendList'
  import ContactlistpagebarComponent from './components/barComponent'
  import DisplayComponent from './components/display'

  export default{
    name:'ContactListPage',
    components: {
      ContactlistpageHeader,
      ContactlistpageSource,
      ContactlistpageFriendlist,
      ContactlistpagebarComponent,
      DisplayComponent
    }
  }
</script>
<style scoped>
.lizApp{
  position: relative;
}
.scroller{
  height: 1500px;
}
/* .list {
  height: 50px;
  position: absolute;
  top:300px;
} */
/* .bar {
  position: fixed;
  width: 100%;
  bottom: -250px;
} */

.displayComponent {
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  position: absolute;
  top:150px;
  left: 0;
}
.displayComponents {
  padding-left: 20px;
}
</style>