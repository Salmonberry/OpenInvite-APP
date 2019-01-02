<template>
    <div class="wrapper">
        <div class="header">
            <text class="header-title">CALENDAR</text>
            <a href="./CalendarTablePage.js"><image class="icon-menu" src="local:///icon_menu.png"></image></a>
        </div>
        <calendar class="calendar" @click="onCalendar"></calendar>
        <bar-component></bar-component>
    </div>
</template>

<script>
    import barComponent from '@/components/BarComponent'
    const navigator = weex.requireModule('navigator');
    import utils from "@/utils";

    export default {
        name: "CalendarPage",
        components: {barComponent},
        methods: {
            onCalendar () {
                navigator.push({
                    url: utils.getEntryUrl('CalendarDetailsPage'),
                    animated: "true"
                })

            }
        }
    }
</script>

<style scoped>

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 750px;
        height: 128px;
        background-color: #EC2079;
        align-items: flex-end;
        padding-bottom: 36px;
    }

    .header-title {
        margin-left: 296px;
        font-size: 30px;
        color: #fff;
    }

    .icon-menu {
        width: 34px;
        height: 34px;
        margin-right: 46px;
    }

    .calendar {
        flex: 2;
    }
</style>