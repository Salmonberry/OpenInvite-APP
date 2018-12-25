<template>
    <div class="HomeExplorePage">
      <scroller class="scroller">
      <Homeheaer></Homeheaer>
      <div class="HomeExplorePage-content">

      </div>
      </scroller>
    </div>
</template>

<script>
import Homeheaer from '@/components/Homeheaer'
    export default {
        name:"HomeExplorePage",
        components: {
            Homeheaer
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
.HomeExplorePage-content {
    padding-top: 34px;
    padding-left: 20px;
    padding-right: 20px;
}

</style>