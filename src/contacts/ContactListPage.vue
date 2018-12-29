<template>
  <div class='lizApp'>
    <contactlistpage-header></contactlistpage-header>
    <contactlistpage-source></contactlistpage-source>
    <contactlistpage-friendlist></contactlistpage-friendlist>
    <contactlistpagebar-component></contactlistpagebar-component>
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
<style>

</style>