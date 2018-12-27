<template lang="pug">
<div id="app">
  div Text
  <div class="div1">我在這裏</div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
// 引入樣式
  @import "../../assets/css/them.styl";
#app
  div 
    height 50rem
    width 50rem
    border 1px solid blue
    font-size 2rem
    color pink
  .div1
    height 20px
    width 30px
    border 10px
    font-size 2rem

</style>
