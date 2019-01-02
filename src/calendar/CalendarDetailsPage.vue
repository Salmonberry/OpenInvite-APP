<template>
    <div class="wrapper">
        <div class="header">
            <text class="header-title">CALENDAR</text>
        </div>

        <scroller class="scroller">
        <div class="main">
            <div class="main-header" @click="onBack">
                <image class="back-icon" src="local:///arrow_back_pink.png"></image>
                <text class="day-text">Today</text>
                <text class="date-text">Wed, Dec 11</text>
            </div>

            <div class="process-area">
                <image class="process" src="local:///process_and_icon.png"></image>
            </div>

            <div class="event-area">
                <div class="event-item">
                    <image class="event-bg" src="local:///event_background1.png"></image>
                    <div class="event-info">
                        <div class="event-hour">
                            <image class="clock-icon" src="local:///clock-circular-outline.png"></image>
                            <text class="hour-text while-text">in 3hrs</text>
                        </div>

                        <div class="text-info">
                            <text class="event-title while-text">Latte Please</text>
                            <text class="event-description while-text small-font-size">ABC Cafe</text>
                            <text class="event-date while-text small-font-size">Wed, Dec 11, 2018</text>
                            <text class="event-time while-text small-font-size">3:00pm - 5:00pm</text>
                        </div>

                        <div class="user-area">
                            <image class="user-picture" src="local:///user_picture2.png"></image>
                            <image class="user-picture" src="local:///user_picture3.png"></image>
                            <image class="user-picture" src="local:///user_picture6.png"></image>
                        </div>
                    </div>
                </div>

                <div class="event-item">
                    <image class="event-bg" src="local:///event_background2.png"></image>
                    <div class="event-info">
                        <div class="event-hour">
                            <image class="clock-icon" src="local:///clock-circular-outline.png"></image>
                            <text class="hour-text while-text">in 3hrs</text>
                        </div>

                        <div class="text-info">
                            <text class="event-title while-text">Guitar Sharing</text>
                            <text class="event-description while-text small-font-size">ABC Band Room</text>
                            <text class="event-date while-text small-font-size">Wed, Dec 11, 2018</text>
                            <text class="event-time while-text small-font-size">3:00pm - 5:00pm</text>
                        </div>

                        <div class="user-area">
                            <image class="user-picture" src="local:///user_picture2.png"></image>
                            <image class="user-picture" src="local:///user_picture3.png"></image>
                            <image class="user-picture" src="local:///user_picture6.png"></image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </scroller>
        <bar-component></bar-component>
    </div>
</template>

<script>

    import barComponent from '@/components/BarComponent'
    const navigator = weex.requireModule('navigator')

    export default {
        name: "CalendarDetailsPage",
        components : {barComponent},
        methods: {
            onBack () {
                navigator.pop({animated: "true"});
            }
        }
    }
</script>

<style scoped>

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 750px;
        height: 166px;
        background-color: #EC2079;
        align-items: flex-end;
        padding-bottom: 36px;
    }

    .header-title {
        margin-left: 296px;
        font-size: 30px;
        color: #fff;
    }

    .scroller {
        /*width: 700px;*/
        /*height: 700px;*/
        /*border-width: 3px;*/
        /*border-style: solid;*/
        /*border-color: rgb(162, 217, 192);*/
        /*margin-left: 25px;*/
    }

    /*main部分*/

    .main {
        padding-left: 43px;
        padding-right: 40px;
        padding-bottom: 230px;
        margin-top: 60px;
    }

    .main-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;
        justify-content: space-between;
        width: 348px;
    }

    .back-icon {
        width: 12px;
        height: 24px;
    }
    
    .day-text {
        font-size: 30px;
        color: #57B1E3;
    }

    .date-text {
        font-size: 30px;
        color: #EC2079;
    }

    .process-area {
        margin-top: 60px;
    }

    .process {
        width: 680px;
        height: 92px;
    }

    .event-area {
        margin-top: 56px;
    }

    .while-text {
        color: #fff;
    }

    .event-item {
        position: relative;
        margin-buttom: 50px;
    }

    .event-info {
        position: absolute;
        left: 36px;
        bottom: 48px;
    }

    .event-hour {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 166px;
        height: 60px;
        border-radius: 16px;
        background-color: #FF5D5D;
    }

    .clock-icon {
        width: 30px;
        height: 30px;
    }

    .hour-text {
        font-size: 28px;
    }

    .text-info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: 200px;
        margin-top: 16px;
    }

    .event-title {
        font-size: 34px;
    }

    .small-font-size {
        font-size: 30px;
    }

    .event-bg {
        width: 664px;
        height: 796px;
    }

    .user-area {
        display: flex;
        flex-direction: row;
        margin-top: 34px;
    }

    .user-picture {
        width: 64px;
        height: 64px;
        margin-right: 10px;
    }

</style>