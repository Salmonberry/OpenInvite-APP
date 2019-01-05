<template>
    <div class="wrapper">
        <div class="stats-details">
            <text class="details-description">Knowing more different people who work in different industry can help you walk out from the comfort zone.</text>
                <!--event 滚动区域-->
                <scroller class="event-main-scroller" scroll-direction="horizontal" show-scrollbar='false'>
                    <div class="event-item">
                        <div class="event-item-top">
                            <image src="/src/images/user_picture6.png" class="event-item-top-user-picture"></image>
                            <div class="event-item-top-user-info">
                                <text class="user-name">Jason</text>
                                <text class="user-details">Education Industry</text>
                            </div>
                        </div>

                        <div class="event-item-bottom">
                            <image src="/src/images/user_picture1.png" class="attender"></image>
                            <image src="/src/images/arrow_blue.png" class="arrow"></image>
                            <image src="/src/images/user_picture5.png" class="attender"></image>
                            <image src="/src/images/arrow_blue.png" class="arrow"></image>
                            <image src="/src/images/user_picture2.png" class="attender"></image>
                        </div>
                    </div>

                    <div class="event-item">
                        <div class="event-item-top">
                            <image src="/src/images/user_picture6.png" class="event-item-top-user-picture"></image>
                            <div class="event-item-top-user-info">
                                <text class="user-name">Jason</text>
                                <text class="user-details">Education Industry</text>
                            </div>
                        </div>

                        <div class="event-item-bottom">
                            <image src="/src/images/user_picture1.png" class="attender"></image>
                            <image src="/src/images/arrow_blue.png" class="arrow"></image>
                            <image src="/src/images/user_picture5.png" class="attender"></image>
                            <image src="/src/images/arrow_blue.png" class="arrow"></image>
                            <image src="/src/images/user_picture2.png" class="attender"></image>
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
        padding-bottom: 272px;
        padding-left: 38px;
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
        width: 554px;
        padding-top: 48px;
        padding-left: 50px;
        padding-right: 44px;
        padding-bottom: 50px;
        border-radius: 36px;
        background-color: #fff;
        margin-right: 26px;
    }

    .event-item-top {
        display: flex;
        flex-direction: row;

    }

    .event-item-top-user-picture {
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

    .event-item-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 38px;
        border-color: #707070;
        border-top-width: 1px;
        margin-top: 30px;
    }

    .attender {
        width: 86px;
        height: 86px;
    }

    .arrow {
        width: 50px;
        height: 26px;
    }
</style>