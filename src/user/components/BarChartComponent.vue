<template>
    <div class="wrapper">
        <div class="stats-details">
            <text class="details-description">Time to date your friends who lost track for a while.</text>
                <!--event 滚动区域-->
                <scroller class="event-main-scroller" scroll-direction="horizontal" show-scrollbar='false'>
                    <div class="event-item">
                        <image src="/src/images/user_picture10.png" class="event-item-user-picture"></image>
                        <div class="event-item-user-info">
                            <text class="user-name">Zoe Miah</text>
                            <text class="user-details">Number of meets</text>
                            <div class="count-number-area">
                                <text class="count-number">1</text>
                                <text class="time-text">Time</text>
                            </div>
                        </div>
                    </div>

                    <div class="event-item">
                        <image src="/src/images/user_picture10.png" class="event-item-user-picture"></image>
                        <div class="event-item-user-info">
                            <text class="user-name">Zoe Miah</text>
                            <text class="user-details">Number of meets</text>
                            <div class="count-number-area">
                                <text class="count-number">1</text>
                                <text class="time-text">Time</text>
                            </div>
                        </div>
                    </div>
                </scroller>

        </div>
    </div>
</template>

<script>

    export default {

    }
</script>

<style scoped>

    .wrapper {
        background-color: #57B1E3;
    }

    .stats-details {
        padding-left: 38px;
        padding-bottom: 272px;
    }

    .details-description {
        padding-right: 64px;
        /*padding-left: 40px;*/
        font-size: 34px;
        color: #fff;

    }

    /*event 部分区域*/

    .event-list {
        padding-top: 42px;
        padding-bottom: 42px;
        padding-left: 40px;
        margin-top: 104px;
        background-color: #fff;
        height: 580px;
    }

    /*event 头部区域*/

    .event-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 668px;
        /*margin-left: 40px;*/
    }

    .event-header-title {
        font-size: 30px;
        color: #EC2079;
    }

    .header-operation {
        font-size: 24px;
    }


    /*event item 行向滚动部分*/

    .event-main-scroller {
        display: flex;
        flex-direction: row;
        flex: 2;
        margin-top: 32px;
    }

    .event-item {
        display: flex;
        flex-direction: row;
        width: 554px;
        padding-top: 48px;
        padding-left: 50px;
        padding-right: 44px;
        padding-bottom: 50px;
        border-radius: 36px;
        background-color: #fff;
        margin-right: 26px;
    }

    .event-item-user-picture {
        width: 120px;
        height: 120px;
        margin-right: 50px;
    }

    .user-name {
        font-size: 46px;
        color: #696969;
    }

    .user-details {
        font-size: 28px;
        color: #EC2079;
    }

    .count-number-area {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-top: 3px;
    }

    .count-number {
        font-size: 52px;
        color: #EC2079;
    }

    .time-text {
        font-size: 28px;
        color: #EC2079;
    }

</style>