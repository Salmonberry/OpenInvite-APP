<template>
    <div class="wrapper">
        <div class="icon-area">
            <a href="../Home/HomeExplorePage.js"><image src="local:///icon_bar_home.png" class="icon icon-home"></image></a>
            <a href=""><image src="local:///icon_bar_friends.png" class="icon icon-friends"></image></a>
            <div class="create-event-operation">
                <a href="../createEvent/CreateEventHomePage.js"><image src="local:///icon_bar_add.png" class="operation-icon"></image></a>
            </div>
            <a href=""><image src="local:///icon_bar_calendar.png" class="icon icon-calendar"></image></a>
            <a href="../user/UserAboutPage.js"><image src="local:///icon_bar_me.png" class="icon icon-me"></image></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BarComponent"
    }
</script>

<style scoped>
    /*.wrapper {*/
        /*position: fixed;*/
        /*height: 200px;*/
        /**/
    /*}*/

    .icon-area {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #4D9CC7;
        padding-top: 27.2px;
        height: 155.6px;
    }

    .icon {

    }

    .icon-home {
        width: 50px;
        height: 43.36px;
    }

    .icon-friends {
        width: 50px;
        height: 41px;
    }

    .icon-calendar {
        width: 44px;
        height: 45px;
    }

    .icon-me {
        width: 31.46px;
        height: 43.42px;
    }

    .create-event-operation {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 129.32px;
        height: 129.32px;
        background-color: #EC2079;
        border-radius: 50%;
        margin-top: -80px;
    }

    .operation-icon {
        width: 41px;
        height: 41px;
    }
</style>