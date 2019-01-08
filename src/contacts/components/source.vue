<template>
  <div class="source">
    <input type="text" class="search-input" placeholder="Name/#">
    <image class="icon_search" src='local:///search.png' style='width:50px;height:50px'/>
  </div>
</template>
<script>
export default {
  name:'ContactlistpageSource'
}
</script>
<style scoped>
.source {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
}

.search-input {
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
  margin-top: -20px;
  top:36px;
}
</style>
