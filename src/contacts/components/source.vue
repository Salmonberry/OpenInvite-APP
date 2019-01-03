<template>
  <div class="source">
    <input type="text" name="" id="" placeholder="searching"/>
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
  padding: 50px 20px;
  position: relative;
}

.source input {
  margin-left: 10px;
  padding-left:150px; 
  height: 80px;
  border-radius: 50px;
  background-color:#EDEDED;
  font-size: 40px;
}

.icon_search {
  position: absolute;
  left: 55px;
  margin-top: 13px;
  top:50%px;
}
</style>
