<template>
    <div class="wrapper">

        <div class="wrapper-bg">
            <div class="wrapper-bg-top"></div>
            <div class="wrapper-bg-bottom"></div>
        </div>
        <div class="header">
            <image class="icon-chart" src="/src/images/arrow_back_while.png" @click="onBackClick"></image>
            <text class="header-title">STATS</text>
        </div>

        <!--页面滚动区域-->
        <!--<scroller class="scroller">-->
            <!--<div class="row" v-for="(name, index) in rows" :ref="'item'+index">-->
                <!--<text class="text" :ref="'text'+index">{{name}}</text>-->
            <!--</div>-->
        <!--</scroller>-->
        <scroller class="scroller">
            <div>
            <slider class="slider">
                <indicator class="indicator"></indicator>
                <div class="slider-frame">
                    <text class="stats-title">Number of events you attended</text>
                    <div class="line-chart">
                        <image class="show-line-chart" src="/src/images/line-chart.png"></image>
                    </div>

                    <div class="stats-details">
                        <text class="details-description">This month you attended less events. If you’re looking for fun new events, check out what’s trending below.</text>

                        <div class="event-list">
                            <div class="event-header">
                                <text class="event-header-title">What's Hot</text>
                                <text class="header-operation">See more</text>
                            </div>

                            <!--event 滚动区域-->
                            <scroller class="event-main-scroller" scroll-direction="horizontal" show-scrollbar='false'>
                                <div class="event-item">
                                    <image class="event-item-image" src=""></image>
                                    <div class="event-item-label-area">
                                        <text class="event-item-label">#Drawing</text>
                                        <text class="event-item-label">#Painting</text>
                                        <text class="event-item-label">#Relax</text>
                                    </div>

                                    <text class="event-item-title">Draw Something</text>
                                    <text class="event-item-date">Wed, Dec 11, 2018</text>
                                </div>

                                <div class="event-item">
                                    <image class="event-item-image" src=""></image>
                                    <div class="event-item-label-area">
                                        <text class="event-item-label">#Running</text>
                                        <text class="event-item-label">#Sport</text>
                                    </div>

                                    <text class="event-item-title">RUN!!!!</text>
                                    <text class="event-item-date">Wed, Dec 11, 2018</text>
                                </div>
                            </scroller>
                        </div>
                    </div>
                </div>
            </slider>
            </div>
        </scroller>
    </div>
</template>

<script>
    const dom = weex.requireModule('dom')

    export default {
        data () {
            return {
                rows: []
            }
        },
        created () {
            for (let i = 0; i < 30; i++) {
                this.rows.push('row ' + i)
            }
        },
        methods: {
            goto10 (count) {
                const el = this.$refs.item10[0]
                dom.scrollToElement(el, {})
            },
            goto20 (count) {
                const el = this.$refs.item20[0]
                dom.scrollToElement(el, { offset: 0 })
            }
        }
    }
</script>

<style scoped>
    .scroller {
        width: 700px;
        height: 700px;
        border-width: 3px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        margin-left: 25px;
    }

    .wrapper-bg {
        position: absolute;
        display: flex;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .wrapper-bg-top {
        flex: 3;
        background-color: #EC2079;
    }

    .wrapper-bg-bottom {
        flex: 1;
        background-color: #57B1E3;
    }

    /*头部head*/
    .header {
        display: flex;
        flex-direction: row;
        padding-top: 82px;
        height: 120px;
    }

    .icon-chart {
        width: 20px;
        height: 40px;
        margin-left: 38px;
    }

    .header-title {
        font-size: 30px;
        color: #fff;
        margin-left: 233.8px;
    }

    /*页面活动部分*/
    .slider {
        position: relative;
        display: flex;
        height: 700px;
        flex: 2;
        align-items: stretch;
        align-content: stretch;
        margin-top: 89px;
    }

    .slider-frame {
        flex: 2;
    }

    .stats-title {
        width: 700px;
        font-size: 32px;
        color: #fff;
        text-align: center;
    }

    .show-line-chart {
        width: 738px;
        height: 576px;
        margin-left: -20px;
    }

    .indicator {
        position: absolute;
        top: 620px;
        left: 0;
        item-color: #ccc;
        item-selected-color: #fff;
        item-size: 50px;
        width: 750px;
        height: 75px;
    }
    /*event 详情部分*/
    .stats-details {
        padding-left: 38px;
        margin-top: 140px;
    }

    .details-description {
        padding-right: 64px;
        font-size: 34px;
        color: #fff;

    }
</style>