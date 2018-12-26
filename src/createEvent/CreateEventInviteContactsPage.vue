<template>
    <div class="wrapper">
        <div class="header">
            <image class="icon-chart" src="/src/images/arrow_back_gray.png" @click="onBackClick"></image>
            <text class="header-title">Create Event</text>
        </div>

        <div class="main">
            <div class="create-event">
                <text class="create-title">Name Of The Event</text>
            </div>

            <div class="contact-operation-area">
                <text class="suggest-operation">Suggest Contacts</text>
                <text class="suggest-operation">All Contacts</text>
            </div>

            <div class="suggest-area">
                <text class="some-interest-text">They also have interest in</text>
                <div class="interest-area">
                    <text class="event-item">#Snooker</text>
                </div>

                <div class="suggest-contact-list">
                    <div class="suggest-contact">
                        <image class="contact-picture" src=""></image>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">1st contact</text>
                        </div>
                        <image class="status" src=""></image>
                    </div>

                    <div class="suggest-contact">
                        <image class="contact-picture" src=""></image>
                        <div class="text-info">
                            <text class="contact-name">John</text>
                            <text class="called-number">1st contact</text>
                        </div>
                        <image class="status" src=""></image>
                    </div>

                    <div class="suggest-contact">
                        <image class="contact-picture" src=""></image>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">2nd contact</text>
                        </div>
                        <image class="status" src=""></image>
                    </div>
                </div>
            </div>

            <div class="buttom-operation-area">
                <text class="invited-text">0 person invited</text>
                <image class="arrow-forward" src=""></image>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateEventInviteContactsPage"
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
        padding-left: 38px;
        padding-right: 40px;
    }

    .create-event {
        padding-bottom: 17px;
    }

    .create-title {
        font-size: 50px;
        color: #EC2079;
    }

    /*操作suggest and contacts区域*/
    .suggest-area {
        margin-top: 56px;
    }

    /*interest area 部分*/

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


    .interest-area {
        display: flex;
        flex-direction: row;
    }


</style>