<template>
    <scroller>
    <div class="wrapper">
        <text class="select-title">Select Location</text>

        <div class="search-area">
            <input class="search-input" type="text" placeholder="Search" >
            <image class="search-icon" src="local:///search_blue.png"></image>
        </div>

        <div class="current-Location">
            <image class="location-icon" src="local:///location-icon.png"></image>
            <text class="current-location-text">Current Location</text>
        </div>

        <div class="near-location-area">
            <text class="location-title">Suggested locations near you</text>

            <div class="location-option" @click="onLocationSelected">
                <image class="location-image" src="local:///location-image.png"></image>

                <div class="location-info-area">
                    <text class="location-name">ABC Snooker Room</text>
                    <text class="location-description">AdressAdress Adress Adress Adress Adress Adress  </text>
                </div>
            </div>

            <div class="location-option">
                <image class="location-image" src="local:///location-image2.png"></image>

                <div class="location-info-area">
                    <text class="location-name">DEF Snooker Room</text>
                    <text class="location-description">AdressAdress Adress Adress Adress Adress Adress  </text>
                </div>
            </div>

            <div class="location-option">
                <image class="location-image" src="local:///location-image3.png"></image>

                <div class="location-info-area">
                    <text class="location-name">HIJ Snooker Room</text>
                    <text class="location-description">AdressAdress Adress Adress Adress Adress Adress  </text>
                </div>
            </div>
        </div>
    </div>
    </scroller>
</template>

<script>
    const swifter = weex.requireModule('swifter');
    export default {
        name: "SelectLocationPage",
        methods: {
            onLocationSelected () {
                swifter.openWhitePage('createEvent/CreateEventLastPage.js','Create Event');
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        padding-left: 48px;
        padding-right: 48px;
        padding-top: 34px;
        padding-bottom: 96px;
    }
    
    .select-title {
        font-size: 50px;
        color: #313131;
    }

    /*搜索部分*/

    .search-area {
        position: relative;
        margin-top: 36px;
        height: 62px;
    }

    .search-input {
        padding-left: 22px;
        height: 62px;
        background-color: #F4F4F4;
        border-radius: 20px;
    }

    .search-icon {
        position: absolute;
        top: 20px;
        right: 40px;
        width: 24px;
        height: 26px;
    }

    .current-Location {
        display: flex;
        flex-direction: row;
        margin-top: 62px;
    }

    .location-icon {
        width: 36px;
        height: 36px;
        margin-right: 26px;
    }
    
    .current-location-text {
        font-size: 32px;
        color: #57B1E3;
    }

    /*附近位置部分*/

    .near-location-area {
        margin-top: 112px;
    }

    .location-title {
        margin-bottom: 44px;
        font-size: 32px;
        color: #707070;
    }

    .location-option {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 68px;
        margin-top: 26px;
        background-color: #F8F8F8;
        box-shadow: 0 3px 10px #707070;
        border-radius: 28px;
        height: 254px;
    }

    .location-image {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-right: 32px;
    }

    .location-info-area {
        align-self: center;
    }

    .location-name {
        font-size: 32px;
    }

    .location-description {
        width: 266px;
        font-size: 28px;
        color: #505050;
        margin-top: 10px;
    }
</style>