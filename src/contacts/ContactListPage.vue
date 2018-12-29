<template>
  <div class='lizApp'>
  <scroller class="scroller">
    <contactlistpage-header></contactlistpage-header>
    <contactlistpage-source></contactlistpage-source>
      <contactlistpage-friendlist class="list"></contactlistpage-friendlist>
    </scroller>
    <!-- <contactlistpagebar-component class="bar"></contactlistpagebar-component> -->
  </div>
</template>
<script>
  import ContactlistpageHeader from './components/header'
  import ContactlistpageSource from './components/source'
  import ContactlistpageFriendlist from './components/friendList'
  import ContactlistpagebarComponent from './components/barComponent'

  export default{
    name:'ContactListPage',
    components: {
      ContactlistpageHeader,
      ContactlistpageSource,
      ContactlistpageFriendlist,
      ContactlistpagebarComponent
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
.list {
  height: 50px;
}
/* .bar {
  position: fixed;
  width: 100%;
  bottom: -250px;
} */
</style>