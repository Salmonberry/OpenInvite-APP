<template>
    <div class="wrapper">

        <div class="header">
            <image class="icon-chart" src="/src/images/arrow_back_gray.png"></image>
            <text class="header-title">Create Event</text>
        </div>
        <div class="main">
            <div class="create-event">
                <text class="create-title">Name Of The Event</text>
                <input type="text" class="event-name-input" placeholder="Type in the event name">
            </div>

            <text class="event-about-text">The event is about...</text>
            <input type="text" class="event-about-input" placeholder="#">

            <div class="event-item-area">
                <text class="event-item">#Snooker</text>
                <text class="event-item">#Coffee</text>
                <text class="event-item">#Movie</text>
                <text class="event-item">#Netflix</text>

                <text class="event-item">#Snooker</text>
                <text class="event-item">#Coffee</text>
                <text class="event-item">#Movie</text>
                <text class="event-item">#Netflix</text>

                <text class="event-item">#Snooker</text>
                <text class="event-item">#Coffee</text>
                <text class="event-item">#Movie</text>
                <text class="event-item">#Netflix</text>
            </div>

        </div>

        <div class="forward-operation">
            <image src="" class="arrow-forward"></image>
        </div>

    </div>
</template>

<script>
    export default {
        name: "CreateEventHomePage"
    }
</script>

<style scoped>

    /*头部head*/
    .header {
        display: flex;
        flex-direction: row;
        padding-top: 82px;
        height: 122px;
    }

    .icon-chart {
        width: 20px;
        height: 40px;
        margin-left: 38px;
    }

    .header-title {
        font-size: 30px;
        color: #242424;
        margin-left: 233.8px;
    }

    /*main部分*/
    .main {
        margin-top: 81.2px;
        padding-left: 52px;
        padding-right: 47px;
    }

    /*event名称*/
    .create-event {
        padding-bottom: 17px;
        border-color: #707070;
        border-bottom-width: 1px;
    }

    .create-title {
        font-size: 50px;
        color: #EC2079;
    }

    .event-name-input {
        margin-top: 62px;
    }

    /*search 部分*/

    .event-about-text {
        margin-top: 129px;
        font-size: 32px;
        color: #57B1E3;
    }

    .event-about-input {
        width: 652.22px;
        height: 58.48px;
        padding-left: 82px;
        margin-top: 43px;
        background-color: #F5F5F5;
        border-radius: 27px;
    }

    /*hobbies 选项部分*/
    .event-item-area {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 53px;
    }

    .event-item {
        padding-top: 10.8px;
        padding-right: 40px;
        padding-bottom: 10.8px;
        padding-left: 40px;
        background-color: #57B1E3;
        border-radius: 13px;
        margin-right: 22.2px;
        margin-bottom: 24.8px;
        font-size: 28px;
        color: #fff;
    }

    .event-item-active {
        background-color: #EC2079;
    }

    /*前进按钮区域*/

    .forward-operation {
        position: absolute;
        right: 38px;
        bottom: 56px;
        width: 114px;
        height: 114px;
        background-color: #EC2079;
        border-radius: 50%;
    }

</style>