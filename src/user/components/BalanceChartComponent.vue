<template>
    <div class="wrapper">
        <div class="stats-details">
            <text class="details-description">This month you spent 68% of your time attending social events. Next month you may want to set aside more personal time.</text>

            <div class="times-statistics-area">
                <div class="times-area">
                    <text class="title-text font-while-color">Social</text>
                    <text class="time-count font-while-color">15hrs</text>
                </div>

                <div class="times-area" style="margin-top: 66px">
                    <text class="title-text font-while-color">Personal Time</text>
                    <text class="time-count font-while-color">8hrs</text>
                </div>
            </div>

            <div class="advice-area">
                <text class="advice-area-text font-while-color">Advice : </text>
                <text class="advice-area-text font-while-color">Make more time for yourself next month.</text>
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
        padding-bottom: 300px;
    }

    .font-while-color {
        color: #fff;
    }

    .details-description {
        padding-right: 64px;
        padding-left: 40px;
        font-size: 34px;
        color: #fff;

    }

    .times-statistics-area {
        padding-top: 52px;
        padding-right: 160px;
        padding-left: 40px;
        padding-bottom: 70px;
        margin-top: 50px;
        border-color: #fff;
        border-top-width: 1px;
        border-bottom-width: 1px;
    }

    .times-area {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .time-count {
        font-size: 94px;
    }

    .advice-area {
        padding-left: 40px;
        margin-top: 52px;
    }

    .advice-area-text {
        font-size: 28px;
    }

</style>