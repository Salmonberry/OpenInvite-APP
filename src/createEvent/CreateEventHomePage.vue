<template>
    <div class="wrapper">
        <!--顶部导航栏-->
        <!--<div class="header">-->
            <!--<image class="icon-chart" src="/src/images/arrow_back_gray.png" @click="onBackClick"></image>-->
            <!--<text class="header-title">Create Event</text>-->
        <!--</div>-->
        <div class="main">
            <div class="create-event">
                <text class="create-title">Name Of The Event</text>
                <input type="text" class="event-name-input" placeholder="Type in the event name">
            </div>

            <text class="event-about-text">The event is about...</text>
            <div class="search-area">
                <input type="text" class="event-about-input" placeholder="#">
                <image class="search-icon" src="/src/images/search.png"></image>
            </div>


            <div class="event-item-area">
                <text class="event-item" :class="[currentHobby == 1 ? 'event-item-active' : '']" @click="onEventItemClick(1)">#Snooker</text>
                <text class="event-item" :class="[currentHobby == 2 ? 'event-item-active' : '']" @click="onEventItemClick(2)">#Coffee</text>
                <text class="event-item" :class="[currentHobby == 3 ? 'event-item-active' : '']" @click="onEventItemClick(3)">#Movie</text>
                <text class="event-item" :class="[currentHobby == 4 ? 'event-item-active' : '']" @click="onEventItemClick(4)">#Netflix</text>

                <text class="event-item" :class="[currentHobby == 5 ? 'event-item-active' : '']" @click="onEventItemClick(5)">#BoardGame</text>
                <text class="event-item" :class="[currentHobby == 6 ? 'event-item-active' : '']" @click="onEventItemClick(6)">#Outdoor</text>
                <text class="event-item" :class="[currentHobby == 7 ? 'event-item-active' : '']" @click="onEventItemClick(7)">#Photography </text>
                <text class="event-item" :class="[currentHobby == 8 ? 'event-item-active' : '']" @click="onEventItemClick(8)">#Food&Drink</text>

                <text class="event-item" :class="[currentHobby == 9 ? 'event-item-active' : '']" @click="onEventItemClick(9)">#Relax</text>
                <text class="event-item" :class="[currentHobby == 10 ? 'event-item-active' : '']" @click="onEventItemClick(10)">#Gym</text>
                <text class="event-item" :class="[currentHobby == 11 ? 'event-item-active' : '']" @click="onEventItemClick(11)">#Indoor</text>
                <text class="event-item" :class="[currentHobby == 12 ? 'event-item-active' : '']" @click="onEventItemClick(12)">#Drawing</text>
            </div>

        </div>

        <div class="forward-operation" v-if="currentHobby!=0" @click="onForwardClick">
            <image src="/src/images/arrow_forward_while.png" class="arrow-forward"></image>
        </div>

    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const swifter = weex.requireModule('swifter');

    import utils from "@/utils";

    export default {
        name: "CreateEventHomePage",
        data() {
            return {
                currentHobby: 0
            }
        },
        methods: {
            onEventItemClick (e) {
                this.currentHobby = e;
            },
            onBackClick () {
                navigator.pop({animated: "true"})
            },
            onForwardClick () {
                // navigator.push({
                //     url: utils.getEntryUrl('CreateEventInviteContactsPage'),
                //     animated: "true"
                // })
                swifter.openWhitePage('createEvent/CreateEventInviteContactsPage.js','Create Event');
            }
        }
    }
</script>

<style scoped>

    .wrapper {
        flex: 2;
    }

    /*头部head*/
    .header {
        display: flex;
        flex-direction: row;
        height: 122px;
        padding-top: 82px;
       
    }

    .icon-chart {
        width: 20px;
        height: 40px;
        margin-left: 38px;
    }

    .header-title {
        margin-left: 233.8px;
        font-size: 30px;
        color: #242424;
       
    }

    /*main部分*/
    .main {
         padding-left: 52px;
        /*padding-right: 47px;*/
        margin-top: 81.2px;
    }

    /*event名称*/
    .create-event {
        width: 650px;
        padding-bottom: 17px;
        border-color: #707070;
        border-bottom-width: 1px;
    }

    .create-title {
        font-size: 50px;
        color: #EC2079;
    }

    .event-name-input {
        height: 46px;
        margin-top: 62px;
    }

    /*search 部分*/

    .search-area {
        position: relative;
        margin-top: 43px;
    }

    .search-icon {
        position: absolute;
        top: 15px;
        left: 22.8px;
        width: 30px;
        height: 30px;
        
    }
    
    .event-about-text {
        margin-top: 129px;
        font-size: 32px;
        color: #57B1E3;
    }

    .event-about-input {
        width: 652.22px;
        height: 58.48px;
        padding-left: 82.4px;
        /*margin-top: 43px;*/
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
        padding-right: 34px;
        padding-bottom: 10.8px;
        padding-left: 34px;
        margin-right: 22.2px;
        margin-bottom: 24.8px;
        background-color: #57B1E3;
        border-radius: 13px;
        font-size: 28px;
        color: #fff;
    }

    .event-item-active {
        background-color: #EC2079;
    }

    /*前进按钮区域*/

    .forward-operation {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        right: 38px;
        bottom: 56px;
        width: 114px;
        height: 114px;
        background-color: #EC2079;
        border-radius: 50%;
    }

    .arrow-forward {
        width: 40px;
        height: 26px;
    }

</style>