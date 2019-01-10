<template>
    <div class="wrapper">

        <div class="wrapper-bg">
            <div class="wrapper-bg-top"></div>
            <div class="wrapper-bg-bottom"></div>
        </div>
        <!--<div class="header">-->
            <!--<image class="icon-chart" src="local:///arrow_back_while.png" @click="onBackClick"></image>-->
            <!--<text class="header-title">STATS</text>-->
        <!--</div>-->

        <!--页面滚动区域-->

        <scroller class="scroller">
            <div style="">
                <text class="stats-title">{{title[currentChartDetails]}}</text>
                <slider class="slider" style="height: 780px; margin-top: 40px;" @change="onSliderChange">
                    <indicator class="indicator"></indicator>

                    <lottieAnimation ref="barAnimation" animationName="alwaysmeet" style="width: 500px; height: 500px;"></lottieAnimation>

                    <div class="line-chart">
                        <image class="show-line-chart" src="local:///line_chart.png"></image>
                    </div>

                    <div class="show-balance-chart-area">
                        <image class="show-balance-chart" src="local:///word_image.png"></image>
                    </div>

                    <div class="line-chart">
                        <image class="show-word-chart" style="width: 660px;height: 548px;" src="local:///balance_image.png"></image>
                    </div>

                    <div class="line-chart">
                        <image class="show-mark-chart" src="local:///mark_image.png"></image>
                    </div>

                    <div class="line-chart">
                        <image class="show-circle-chart" src="local:///circle_chart.png"></image>
                    </div>

                    <div class="line-chart">
                        <image class="show-bar-chart" src="local:///bar_chart.png"></image>
                    </div>

                </slider>

                <curve-chart-component v-if="currentChartDetails == 0"></curve-chart-component>
                <word-chart-component v-if="currentChartDetails == 1"></word-chart-component>
                <balance-chart-component v-if="currentChartDetails == 2"></balance-chart-component>
                <mark-chart-component v-if="currentChartDetails == 3"></mark-chart-component>
                <circle-chart-component v-if="currentChartDetails == 4"></circle-chart-component>
                <bar-chart-component v-if="currentChartDetails == 5"></bar-chart-component>
            </div>
        </scroller>
    </div>
</template>

<script>
    import CurveChartComponent from './components/CurveChartComponent'
    import WordChartComponent from './components/WordChartComponent'
    import BalanceChartComponent from './components/BalanceChartComponent'
    import MarkChartComponent from './components/MarkChartComponent'
    import CircleChartComponent from './components/CircleChartComponent'
    import BarChartComponent from './components/BarChartComponent'

    const modal = weex.requireModule('modal')

    export default {
        data () {
            return {
                title: [
                    'Number of events you attended',
                    'Your favorite hashtags',
                    'Balancing Social VS Personal Time',
                    'Explore Events In New Neighborhoods',
                    'Meet people in other industries',
                    'Top contacts you met with this year'
                ],
                currentChartDetails: 0
            }
        },

        components: {
            CurveChartComponent,
            WordChartComponent,
            BalanceChartComponent,
            MarkChartComponent,
            CircleChartComponent,
            BarChartComponent
        },

        methods: {
            onSliderChange (event) {
                // modal.toast({message:event.index,duration:1})
                this.currentChartDetails = event.index;
                this.$refs.barAnimation.play();
            }
        }
    }
</script>

<style scoped>
    .scroller {
        flex: 2;
        /*height: 700px;*/
        /*border-width: 3px;*/
        /*border-style: solid;*/
        /*border-color: rgb(162, 217, 192);*/
        /*margin-left: 25px;*/
    }

    .event-main-scroller {
        height: 800px;
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
        /*position: relative;*/
        /*display: flex;*/
        /*height: 700px;*/
        /*flex: 2;*/
        /*align-items: stretch;*/
        /*align-content: stretch;*/
        /*margin-top: 89px;*/
    }

    .slider-frame {
        /*flex: 2;*/
    }

    .stats-title {
        margin-top: 90px;
        width: 700px;
        font-size: 32px;
        color: #fff;
        text-align: center;
    }

    .show-balance-chart-area {
        margin-top: 220px;
    }

    .show-line-chart {
        width: 738px;
        height: 576px;
        margin-left: -20px;
    }

    .show-word-chart {
        /*width: 660px;*/
        /*height: 548px;*/
        margin-left: 28px;
    }

    .show-balance-chart {
        width: 750px;
        height: 388px;
    }

    .show-mark-chart {
        width: 600px;
        height: 560px;
        margin-left: 34px;
    }

    .show-circle-chart {
        width: 658px;
        height: 590px;
        margin-left: 22px;
    }

    .show-bar-chart {
        width: 670px;
        height: 576px;
        margin-left: 40px;
    }

    .indicator {
        position: absolute;
        top: 620px;
        left: 0;
        item-color: #ccc;
        item-selected-color: #fff;
        item-size: 20px;
        width: 750px;
        height: 75px;
    }
    /*event 详情部分*/
    .stats-details {
        /*padding-left: 38px;*/
        /*margin-top: 140px;*/
    }

    .details-description {
        padding-right: 64px;
        font-size: 34px;
        color: #fff;

    }
</style>