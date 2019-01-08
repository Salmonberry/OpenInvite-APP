<template>
    <div class="wrapper">
        <!--顶部导航栏-->
        <!--<div class="header">-->
            <!--<image class="icon-chart" src="local:///retreat.png"></image>-->
            <!--<text class="header-title">Stephanie Mak</text>-->
        <!--</div>-->
        <div class="alert-operation-area" v-if="isShowAlert">
            <text class="alert-text">Vivian wants to be your 1st degree contact </text>
            <div class="operation-area">
                <text class="operation confirm-operation">Confirm</text>
                <text class="operation delete-operation" style="margin-left: 12px;">Delete</text>
            </div>
        </div>
        <scroller class="scroller">
            <div class="main">
                <div class="basic-info">
                    <div class="picture-left">
                        <image class="picture" src="local:///user_picture1.png"></image>
                    </div>
                    <div class="basic-info-right">
                        <text class="name-info">Alice Gill</text>
                        <text class="company-info">Sss Company</text>
                        <text class="company-role-info">Manager</text>
                        <text class="edit-button">1st Degree Contact</text>
                    </div>
                    <image src="local:///star_icon.png" class="star-icon"></image>
                </div>

                <div class="details-area">
                    <div class="details-operation-area">
                        <!--<text class="about-operation operation-item" :class="isAbout ? 'active-operation' : ''" @click="onAboutClick">About</text>-->
                        <text class="about-operation operation-item" :class="[isAbout ? 'active-operation' : '']" @click="onAboutClick">About</text>
                        <text class="event-operation operation-item" :class="[!isAbout ? 'active-operation' : '']" @click="onEventClick">Our History</text>
                    </div>
                    <!--about区域-->
                    <div class="about-details-introduction" v-if="isAbout">
                        <div class="contact-area">
                            <text class="title">Mutual Contacts:</text>
                            <div class="contact-image">
                                <image src="local:///user_picture2.png" class="user-picture"></image>
                                <image src="local:///user_picture20.png" class="user-picture"></image>
                                <image src="local:///user_picture21.png" class="user-picture"></image>
                                <image src="local:///user_picture9.png" class="user-picture"></image>
                                <text class="contact-number">4</text>
                            </div>
                        </div>

                        <div class="about-area">
                            <text class="title">About Myself:</text>
                            <text class="introduction">{{about}}</text>
                        </div>
                        <div class="hobbies-area">
                            <text class="title">Hobbies:</text>
                            <div class="hobbies">
                                <text class="hobby">#Snooker</text>
                                <text class="hobby">#Coffee</text>
                                <text class="hobby">#Movie</text>
                                <text class="hobby">#Netflix</text>
                            </div>
                        </div>
                        <div class="social-area">
                            <text class="title">Social Media:</text>
                            <div class="socials">
                                <image src="local:///icon_social1.png" class="social-way"></image>
                                <image src="local:///icon_social2.png" class="social-way"></image>
                                <image src="local:///icon_social3.png" class="social-way"></image>
                                <image src="local:///icon_social4.png" class="social-way"></image>
                            </div>
                        </div>
                    </div>

                    <!--our history区域-->
                    <div class="event-details-introduction" v-if="!isAbout">
                        <!--<div class="event-details-introduction" v-if="!isAbout">-->

                        <div class="met-number-area">
                            <text class="met-title">We met</text>
                            <div class="met-number-and-operation-area">
                                <text class="met-number">12 Times</text>
                                <div class="met-chart-operation-area">
                                    <image src="local:///icon_chart.png" class="met-chart-operation"></image>
                                </div>
                            </div>
                        </div>

                        <div class="history-event-item">
                            <div class="image-background-area">
                                <image src="local:///history_event1.png" class="event-image"></image>
                                <image src="local:///event-background-gray.png" class="event-image event-gray-image"></image>
                            </div>

                            <div class="event-item-mask"></div>
                            <div class="event-info-area">
                                <text class="event-title">BBQ!!</text>
                                <text class="event-date">Wed,Dec 11, 2018</text>
                            </div>
                        </div>

                        <div class="history-event-item">
                            <div class="image-background-area">
                                <image src="local:///history_event2.png" class="event-image"></image>
                                <image src="local:///event-background-gray.png" class="event-image event-gray-image"></image>
                            </div>
                            <div class="event-item-mask"></div>
                            <div class="event-info-area">
                                <text class="event-title">Photo Day</text>
                                <text class="event-date">Wed,Dec 11, 2018</text>
                            </div>
                        </div>

                        <div class="history-event-item">
                            <div class="image-background-area">
                                <image src="local:///history_event3.png" class="event-image"></image>
                                <image src="local:///event-background-gray.png" class="event-image event-gray-image"></image>
                            </div>
                            <div class="event-item-mask"></div>
                            <div class="event-info-area">
                                <text class="event-title">Girls Talk</text>
                                <text class="event-date">Wed,Dec 11, 2018</text>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>

    export default {
        name: "UserAboutPage",
        data() {
            return {
                isAbout: true,
                isShowAlert: false,
                about: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
            }
        },
        methods: {
            onAboutClick() {
                this.isAbout = true;
            },
            onEventClick() {
                this.isAbout = false;
            }
        }
    }
</script>

<style scoped>

    .wrapper{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .alert-operation-area {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 38px;
        padding-right: 42px;
        padding-top: 26px;
        padding-bottom: 29px;
        border-color: #707070;
        border-bottom-width: 1px;
    }

    .alert-text {
        width: 308px;
        color: #707070;
        font-size: 30px;
    }

    .operation-area {
        display: flex;

        flex-direction: row;
    }

    .operation {
        padding-left: 30px;
        padding-right: 30px;
        height: 52px;
        line-height: 52px;
        border-radius: 28px;
    }

    .confirm-operation {
        background-color: #57B1E3;
        color: #fff;
    }

    .delete-operation {
        border-color: #707070;
        border-width: 1px;
        color: #696969;
    }

    .scroller {
        /*display: flex;*/
        /*!*flex: 2;*!*/
        /*border-width: 3px;*/
        /*border-style: solid;*/
        /*border-color: rgb(162, 217, 192);*/
        /*margin-left: 25px;*/
        /*height: 700px;*/
    }

    /*头部部分*/
    .header {
        position: fixed;
        height: 163.34px;
        background-color: #EC2079;
        top: 0;
        left: 0;
        right: 0;
    }

    .icon-chart {
        position: absolute;
        width: 45.54px;
        height: 44.08px;
        left: 53.6px;
        top: 85.8px;
    }

    .header-title {
        position: absolute;
        font-size: 30px;
        color: #fff;
        top: 96.8px;
        left: 277.6px;
    }

    /*主体部分*/
    .main {
        position: relative;
        /*top: 163.34px;*/
        padding-bottom: 253px;
    }

    .basic-info {
        display: flex;
        flex-direction: row;
        margin-left: 65.8px;
        padding-top: 92.8px;
        padding-bottom: 56.6px;
    }

    .star-icon {
        width: 36px;
        height: 34px;
    }

    .picture-left {
        align-self: center;
    }

    .picture {
        width: 173.06px;
        height: 173.06px;
    }

    .basic-info-right {
        margin-left: 31.2px;
    }

    .name-info {
        font-size: 46px;
        color: #000;

    }

    .company-info {
        font-size: 30px;
        color: #383838;
        margin-top: 8px;
    }

    .company-role-info {
        font-size: 30px;
        color: #383838;
        margin-top: 14px;
    }

    .edit-button {
        font-size: 28px;
        color: #57B1E3;
        width: 402px;
        height: 48.4px;
        line-height: 48.4px;
        margin-top: 13px;
    }

    /*operation Of About And YourEvent */

    .details-area {


    }

    .details-operation-area {
        display: flex;
        flex-direction: row;
        padding-left: 51.6px;
        padding-top: 38.6px;
        padding-bottom: 38.6px;
        margin-bottom: 67px;
        border-color: #707070;
        border-top-width: 1px;
        border-bottom-width: 1px;
    }

    .operation-item {
        font-size: 26px;
        color: #696969;
    }

    .about-operation {

    }

    .event-operation {
        margin-left: 152px;
    }

    .active-operation {
        color: #EC2079;
    }

    /*联系人区域*/

    .contact-image {
        display: flex;
        flex-direction: row;
        padding-top: 33px;
    }


    .user-picture {
        width: 96.6px;
        height: 96.6px;
        margin-right: 33.4px;
    }

    .contact-number {
        width: 96.6px;
        height: 96.6px;
        line-height: 96.6px;
        text-align: center;
        background-color: #EC2079;
        border-radius: 50%;
    }

    /*详情信息区域*/
    .about-details-introduction {
        padding-left: 52.4px;
    }

    .about-area {
        margin-top: 76.4px;
    }

    .title {
        font-size: 26px;
        color: #707070;
    }

    .introduction {
        font-size: 26px;
        color: #707070;
        margin-top: 20px;
        padding-right: 50px;
        height: 150px;
    }

    /*hobbies区域*/
    .hobbies-area {
        margin-top: 64px;
    }

    .hobbies {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .hobby {
        color: #fff;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #57B1E3;
        border-radius: 23px;
        margin-right: 12px;
        margin-top: 20px;
    }

    /*social选项区域*/

    .social-area {
        margin-top: 46px;
    }

    .socials {
        display: flex;
        flex-direction: row;
        margin-top: 28px

    }

    .social-way {
        width: 96px;
        height: 96px;
        margin-right: 52px;
    }

    /*your event 部分*/

    .event-details-introduction {
        /*padding-right: 43px;*/
        /*padding-left: 43px;*/
    }

    /* met times */

    .met-number-area {
        padding-left: 46px;
        padding-right: 52px;
        margin-bottom: 64px;
    }

    .met-title {
        font-size: 36px;
        color: #696969;
    }

    .met-number-and-operation-area {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 6px;
    }

    .met-number {
        font-size: 88px;
        color: #57B1E3;
    }

    .met-chart-operation-area {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 94px;
        height: 94px;
        background-color: #EC2079;
        border-radius: 50%;
    }

    .met-chart-operation {
        width: 40px;
        height: 40px;
    }

    .image-background-area {

    }

    .event-gray-image {
        position: absolute;
    }

    .event-image {
        width: 716px;
        height: 236px;
        margin-left: 18px;
        opacity: .8;
    }

    .event-item-mask{
        position: absolute;
        width: 716px;
        height: 236px;
        /*margin-left: 18px;*/
        /*background-color: #707070;*/
        /*opacity: .6;*/
    }

    .history-event-item {
        position: relative;
        margin-bottom: 22px;
    }

    .event-info-area {
        position: absolute;
        top: 73.2px;
        left: 42.4px;
        padding-left: 63px;
    }

    .event-title {
        font-size: 44px;
        color: #fff;
        margin-top: 14px;
    }

    .event-date {
        font-size: 32px;
        color: #fff;
        margin-top: 18px;
    }

</style>