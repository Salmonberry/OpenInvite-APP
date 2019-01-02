<template>
  <div class="source">
    <input type="text" name="" id=""/>
    <image class="icon_search" src='/src/images/search.png' style='width:50px;height:50px'/>
  </div>
</template>
<script>
export default {
  name:'ContactlistpageSource'
}
</script>
<style scoped>
.source {
  background-color: #fff;
  padding: 50px 20px;
  position: relative;
}

.source input {
  margin-left: 10px;
  height: 80px;
  border-radius: 50px;
  background-color:#EDEDED;
  background-color: #ccc;
}

.icon_search {
  position: absolute;
  left: 55px;
  margin-top: 13px;
  top:50%px;
}
</style>
