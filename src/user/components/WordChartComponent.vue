<template>
    <div class="wrapper">
        <div class="stats-details">
            <text class="details-description">This month you attended less events. If you’re looking for fun new events, check out what’s trending below.</text>

            <div class="event-list">
                <div class="event-header">
                    <text class="event-header-title">What's Hot</text>
                    <text class="header-operation font-color-blue">See more</text>
                </div>

                <!--event 滚动区域-->
                <scroller class="event-main-scroller" scroll-direction="horizontal" show-scrollbar='false'>
                    <div class="event-item">
                        <image class="event-item-image" src="/src/images/event_picture5.png"></image>
                        <div class="event-item-label-area">
                            <text class="event-item-label font-color-blue">#Drawing</text>
                            <text class="event-item-label font-color-blue">#Painting</text>
                            <text class="event-item-label font-color-blue">#Relax</text>
                        </div>

                        <text class="event-item-title">Draw Something</text>
                        <text class="event-item-date">Wed, Dec 11, 2018</text>
                    </div>

                    <div class="event-item">
                        <image class="event-item-image" src="/src/images/event_picture6.png"></image>
                        <div class="event-item-label-area">
                            <text class="event-item-label font-color-blue">#Running</text>
                            <text class="event-item-label font-color-blue">#Sport</text>
                        </div>

                        <text class="event-item-title">RUN!!!!</text>
                        <text class="event-item-date">Wed, Dec 11, 2018</text>
                    </div>
                </scroller>
            </div>
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

    }

    .details-description {
        padding-right: 64px;
        padding-left: 40px;
        font-size: 34px;
        color: #fff;

    }

    .font-color-blue {
        color: #57B1E3;
    }

    /*event 部分区域*/

    .event-list {
        padding-top: 42px;
        padding-bottom: 42px;
        padding-left: 40px;
        margin-top: 104px;
        background-color: #fff;
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
        margin-right: 38px;
    }

    .event-item-image {
        width: 416px;
        height: 254px;
    }

    .event-item-label-area {
        display: flex;
        flex-direction: row;
        margin-right: 14px;
        margin-top: 14px;
    }

    .event-item-title {
        margin-top: 10px;
        font-size: 28px;
    }

    .event-item-date {
        margin-top: 10px;
        font-size: 22px;
        color: #707070;
    }
</style>