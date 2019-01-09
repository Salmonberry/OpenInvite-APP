<template>
    <div class="HomeInvitesfindPage">
           <div class="HomeInvitesfindPage-content">

                <image class="homeInvitesfindPageimg" src="local:///homeInvitesfindPageimg.png" />
                <text class="HomeInvitesfindPage-content-details">You have not invited anyone to an activity yet</text>
                <div class="HomeInvitesfindPage-btnbox" @click="onFindClick">
                    <a><text class="HomeInvitesfindPage-btnboxtext">Find Activities</text></a>
                </div>

           </div>
    </div>
</template>

<script>
    const swifter = weex.requireModule('swifter');

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            onFindClick () {
                swifter.openMainPage();
            }
        }
    }
</script>

<style scoped>
.HomeInvitesfindPage-content {
    justify-content: center ;
    align-items:center ;
    margin-top: 66px;
    margin-left: 22px;
    margin-right: 22px;
}
.homeInvitesfindPageimg {
    width: 290px;
    height: 290px;
}
.HomeInvitesfindPage-content-details {
    width: 402px;
    font-size: 28px;
    color: #57B1E3;
    text-align: center;
}
.HomeInvitesfindPage-btnbox {
    flex-direction: row;
    justify-content: center;
    align-items:center;
    width: 710px;
    height: 106px;
    margin-top: 44px;
    background-color: #57B1E3;
    border-radius:62px;

}
.HomeInvitesfindPage-btnboxtext {
    font-size: 40px;
    color: #ffffff;
}

</style>