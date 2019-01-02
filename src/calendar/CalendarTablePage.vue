<template>
    <div class="wrapper">
        <div class="header">
            <text class="header-title">CALENDAR</text>
            <a href="./CalendarPage.js"><image class="icon-menu" src="local:///icon_table.png"></image></a>
        </div>
        <timeSpreadsheet class="timeSpreadsheet"></timeSpreadsheet>
        <bar-component></bar-component>
    </div>
</template>

<script>
    import barComponent from '@/components/BarComponent'
    export default {
        name: "CalendarTablePage",
        components: {barComponent}
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

    .timeSpreadsheet {
        flex: 2;
    }

</style>