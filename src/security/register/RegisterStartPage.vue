<template>
    <div class="RegisterStartPage">
         <div class="RegisterStartPage-box">
              <text class="RegisterStartPage-text">Start exploring</text>
              <text class="RegisterStartPage-text">top events in</text>
              <text class="RegisterStartPage-text">your city</text>
         </div>
         
    </div>
</template>

<script>
    const swifter = weex.requireModule('swifter');

    export default {
        name:"RegisterStartPage",
        data() {
            return {
                
            }
        },

        created() {
            setTimeout(() => {
                swifter.openMainPage();
            }, 3000)
        }
    }
</script>

<style scoped>

.RegisterStartPage {
    background-color: #57B1E3;
}
.RegisterStartPage-box {
    margin-top: 342px;
    margin-left: 42px;
    margin-right: 21px;
}
.RegisterStartPage-text {
    font-size: 88px;
    color: #FFFFFF;
}
</style>