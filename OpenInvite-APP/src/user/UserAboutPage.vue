<template>
    <div class="wrapper">

        <div class="header">
            <image class="icon-chart" src="/src/images/icon_chart.png"></image>
            <text class="header-title">Stephanie Mak</text>
        </div>

        <div class="main">
            <div class="basic-info">
                <div class="picture-left">
                    <image class="picture" src="/src/images/user_picture.png"></image>
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
                    <text>About</text>
                    <text>Your Events</text>
                </div>
                <!--about区域-->
                <div class="about-details-introduction">
                    <div class="about-area">
                        <text class="title">About Myself:</text>
                        <text class="introduction">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</text>
                    </div>
                    <div class="hobbies-area">
                        <text class="title">Hobbies:</text>
                        <div class="hobbies">
                            <text>#Snooker</text>
                            <text>#Coffee</text>
                            <text>#Movie</text>
                            <text>#Netflix</text>
                        </div>
                    </div>
                    <div class="social-area">
                        <text class="title">Social Media:</text>
                        <div class="socials">
                            <image src="" class="social-way"></image>
                            <image src="" class="social-way"></image>
                            <image src="" class="social-way"></image>
                            <image src="" class="social-way"></image>
                        </div>
                    </div>
                </div>

                <!--your events区域-->

                <div class="event-details-introduction">

                    <div class="event-item">
                        <image src="" class="event-image"></image>
                        <div class="event-hobbies">
                            <text>#Snooker</text>
                            <text>#Sport</text>
                        </div>
                        <text class="event-title">Happy Snooker Day</text>
                        <text class="event-date">Wed,Dec 11, 2018</text>
                        <text class="event-time">3:00pm - 5:00pm</text>
                        <text class="event-status">Status : Waiting For Participants To Join </text>
                    </div>

                    <div class="event-item">
                        <image src="" class="event-image"></image>
                        <div class="event-hobbies">
                            <text>#Cooking</text>
                        </div>
                        <text class="event-title">Make a cake</text>
                        <!--<text class="event-date">Wed,Dec 11, 2018</text>-->
                        <!--<text class="event-time">3:00pm - 5:00pm</text>-->
                        <text class="event-status">Status : Provide your availability  </text>
                    </div>

                    <div class="event-item">
                        <image src="" class="event-image"></image>
                        <div class="event-hobbies">
                            <text>#Wine</text>
                            <text>#Beverage</text>
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
</template>

<script>

    export default {
        name: "UserAboutPage"
    }
</script>

<style scoped>
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
        top: 163.34px;
    }

    .basic-info {

    }

    .picture {
        width: 173.06px;
        height: 173.06px;
    }

    .basic-info-right {

    }

</style>