<template>
    <div class="wrapper">
        <!--顶部导航栏-->
        <!--<div class="header">-->
            <!--<a href=""><image class="icon-chart" src="local:///icon_chart.png"></image></a>-->
            <!--<text class="header-title">Stephanie Mak</text>-->
        <!--</div>-->
        <scroller class="scroller">
        <div class="main">
            <div class="basic-info">
                <div class="picture-left">
                    <image class="picture" src="local:///user_picture.png"></image>
                </div>
                <div class="basic-info-right">
                    <text class="name-info">Stephanie Mak</text>
                    <text class="company-info">Sss Company</text>
                    <text class="company-role-info">Manage</text>
                    <text class="edit-button">Edit Profile</text>
                </div>
            </div>

            <div class="details-area">
                <div class="details-operation-area">
                    <!--<text class="about-operation operation-item" :class="isAbout ? 'active-operation' : ''" @click="onAboutClick">About</text>-->
                    <text class="about-operation operation-item" :class="[isAbout ? 'active-operation' : '']" @click="onAboutClick">About</text>
                    <text class="event-operation operation-item" :class="[!isAbout ? 'active-operation' : '']" @click="onEventClick">Your Events</text>
                </div>
                <!--about区域-->
                <div class="about-details-introduction" v-if="isAbout">
                    <div class="about-area">
                        <text class="title">About Myself:</text>
                        <text class="introduction">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</text>
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

                <!--your events区域-->
                <div class="event-details-introduction" v-if="!isAbout">
                <!--<div class="event-details-introduction" v-if="!isAbout">-->

                    <div class="event-item">
                        <image src="local:///event_picture1.png" class="event-image"></image>
                        <div class="event-info-area">
                            <div class="event-hobbies">
                                <text class="event-detail">#Snooker</text>
                                <text class="event-detail">#Sport</text>
                            </div>
                            <text class="event-title">Happy Snooker Day</text>
                            <text class="event-date">Wed,Dec 11, 2018</text>
                            <text class="event-time">3:00pm - 5:00pm</text>
                            <text class="event-status">Status : Waiting For Participants To Join </text>
                        </div>
                    </div>

                    <div class="event-item">
                        <image src="local:///event_picture2.png" class="event-image" @click="onEventItemClick"></image>
                        <div class="event-info-area">
                            <div class="event-hobbies">
                                <text class="event-detail">#Cooking</text>
                            </div>
                            <text class="event-title">Make a cake</text>
                            <!--<text class="event-date">Wed,Dec 11, 2018</text>-->
                            <!--<text class="event-time">3:00pm - 5:00pm</text>-->
                            <text class="event-status">Status : Provide your availability  </text>
                        </div>
                    </div>

                    <div class="event-item">
                        <image src="local:///event_picture3.png" class="event-image"></image>
                        <div class="event-info-area">
                            <div class="event-hobbies">
                                <text class="event-detail">#Wine</text>
                                <text class="event-detail">#Beverage</text>
                            </div>
                            <text class="event-title">Wine Tasting</text>
                            <text class="event-date">Wed, Dec 11, 2018</text>
                            <text class="event-time">3:00pm - 5:00pm</text>
                            <text class="event-status">Status : Confirmed </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </scroller>
        <!--<bar-component></bar-component>-->
    </div>
</template>

<script>
    import barComponent from '@/components/BarComponent'
    const swifter = weex.requireModule('swifter');

    export default {
        name: "UserAboutPage",
        data() {
            return {
                isAbout: true
            }
        },
        components : {barComponent},
        methods: {
            onAboutClick () {
                this.isAbout = true;
            },

            onEventClick () {
                this.isAbout = false;
            },

            onEventItemClick () {
                swifter.openTransparentPage('Home/EventDetailsPage.js');
            }
        }
    }
</script>

<style scoped>

    /*.wrapper{*/
        /*position: absolute;*/
        /*top: 0;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*left: 0;*/
    /*}*/

    .scroller {
        /*display: flex;*/
        /*flex: 2;*/
        /*border-width: 3px;*/
        /*border-style: solid;*/
        /*border-color: rgb(162, 217, 192);*/
        /*margin-left: 25px;*/
        /*height: 700px;*/
        /*position: absolute;*/
        /*right: 0;*/
        /*bottom: 200px;*/
        /*left: 0;*/
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
        top: 63.34px;
        /*padding-bottom: 453px;*/
        padding-bottom: 153px;
    }

    .basic-info {
        display: flex;
        flex-direction: row;
        margin-left: 65.8px;
        /*padding-top: 92.8px;*/
        padding-bottom: 56.6px;
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
        margin-top: 16px;
    }

    .edit-button {
        font-size: 26px;
        color: #383838;
        width: 402px;
        height: 48.4px;
        line-height: 48.4px;
        border-color: #707070;
        border-width: 1px;
        border-radius: 16px;
        text-align: center;
        margin-top: 17.8px;
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

    /*详情信息区域*/
    .about-details-introduction {
        padding-left: 52.4px;
    }

    .title {
        font-size: 26px;
        color: #707070;
    }

    .introduction {
        font-size: 26px;
        color: #707070;
        margin-top: 20px;
        padding-right: 56.8px;
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

    .event-image {
        width: 663.48px;
        height: 394.6px;
        margin-left: 43px;
    }

    .event-hobbies {
        display: flex;
        flex-direction: row;
        margin-top: 42.2px;
    }

    .event-item {
        padding-bottom: 43.2px;
        margin-bottom: 76.8px;
        border-color: #707070;
        border-bottom-width: 1px;
    }

    .event-info-area {
        padding-left: 63px;
    }

    .event-detail {
        font-size: 32px;
        color: #57B1E3;
        margin-right: 54px;
    }

    .event-title {
        font-size: 44px;
        color: #000;
        margin-top: 14px;
    }

    .event-date {
        font-size: 32px;
        color: #696969;
        margin-top: 22px;
    }

    .event-time {
        font-size: 30px;
        color: #696969;
        margin-top: 21.2px;
    }

    .event-status {
        font-size: 30px;
        color: #EC2079;
        margin-top: 20px;
    }

</style>