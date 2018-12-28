<template>
  <div class='lizApp'>
    <contactlistpage-header></contactlistpage-header>
    <contactlistpage-source></contactlistpage-source>
    <contactlistpage-friendlist></contactlistpage-friendlist>
  </div>
</template>
<script>
  import ContactlistpageHeader from './components/header'
  import ContactlistpageSource from './components/source'
  import ContactlistpageFriendlist from './components/friendList'

  export default{
    name:'ContactListPage',
    components: {
      ContactlistpageHeader,
      ContactlistpageSource,
      ContactlistpageFriendlist
    }
  }
</script>
<style>

</style>