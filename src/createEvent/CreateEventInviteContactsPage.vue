<template>
    <div class="wrapper">
        <!--顶部导航栏-->
        <!--<div class="header">-->
            <!--<image class="icon-chart" src="local:///arrow_back_gray.png" @click="onBackClick"></image>-->
            <!--<text class="header-title">Create Event</text>-->
        <!--</div>-->

        <div class="main">

            <div class="main-header">
                <div class="create-event">
                    <text class="create-title">{{title}}</text>
                </div>

                <div class="contact-operation-area">
                    <text class="contact-operation" :class="[isSuggestActive ? 'contact-operation-active' : '']" @click="onSuggest(1)">Suggest Contacts</text>
                    <text class="contact-operation" :class="[!isSuggestActive ? 'contact-operation-active' : '']" @click="onSuggest(2)">All Contacts</text>
                </div>
            </div>

            <!--suggest area-->

            <div class="suggest-area" v-if="isSuggestActive">
                <text class="some-interest-text">They also have interest in</text>
                <div class="interest-area">
                    <text class="event-item">#Snooker</text>
                </div>

                <scroller class="contact-scroller">
                <div class="suggest-contact-list">
                    <div class="suggest-contact some-contact" @click="onContactClick(1)">
                        <image class="contact-picture" src="local:///user_picture6.png"></image>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">1st contact</text>
                        </div>
                        <div class="status" :class="[isActive(1) ? 'status-active' : '']"></div>
                    </div>

                    <div class="suggest-contact some-contact" @click="onContactClick(2)">
                        <image class="contact-picture" src="local:///user_picture7.png"></image>
                        <div class="text-info">
                            <text class="contact-name">John</text>
                            <text class="called-number">1st contact</text>
                        </div>
                        <div class="status" :class="[isActive(2) ? 'status-active' : '']"></div>
                    </div>

                    <div class="suggest-contact some-contact" @click="onContactClick(3)">
                        <image class="contact-picture" src="local:///user_picture8.png"></image>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">2nd contact</text>
                        </div>
                        <div class="status" :class="[isActive(3) ? 'status-active' : '']"></div>
                    </div>
                </div>
                </scroller>
            </div>



            <!--all contacts 区域-->
            <div class="all-contact-area" v-if="!isSuggestActive">

                <div class="all-contact-header">
                    <div class="search-area">
                        <input type="text" placeholder="search" class="search-input">
                        <image src="local:///search_blue.png" class="search-icon"></image>
                    </div>

                    <div class="filter-area">
                        <text class="filter-text">Filter: None</text>
                        <image src="local:///triangle_while.png" class="triangle-icon"></image>
                    </div>
                </div>

                <scroller class="all-contact-scroller">
                <!--star friends 区域-->
                <div class="all-contact-wrapper">
                    <div class="star-contact-area contact-area">
                        <div class="star-header-area">
                            <image src="local:///star_icon.png" class="star-icon"></image>
                            <text class="star-title">Star Friends</text>
                        </div>

                        <div class="some-contact contact-item-wrapper" @click="onContactClick(4)">
                            <image class="contact-picture" src="local:///user_picture1.png"></image>
                            <div class="text-info">
                                <text class="contact-name">Alice Gill</text>
                            </div>
                            <div class="status" :class="[isActive(4) ? 'status-active' : '']"></div>
                        </div>

                        <div class="some-contact contact-item-wrapper" @click="onContactClick(5)">
                            <image class="contact-picture" src="local:///user_picture9.png"></image>
                            <div class="text-info">
                                <text class="contact-name">Patrick Chan</text>
                            </div>
                            <div class="status" :class="[isActive(5) ? 'status-active' : '']"></div>
                        </div>
                    </div>

                    <div class="frequene-contact-area contact-area">
                        <div class="star-header-area">
                            <text class="star-title">All Contacts</text>
                        </div>
                        <div class="star-header-area">
                            <text class="star-title">A</text>
                        </div>

                        <div class="some-contact contact-item-wrapper" @click="onContactClick(6)">
                            <image class="contact-picture" src="local:///user_picture1.png"></image>
                            <div class="text-info">
                                <text class="contact-name">Alice Gill</text>
                            </div>
                            <div class="status" :class="[isActive(6) ? 'status-active' : '']"></div>
                        </div>

                        <div class="some-contact contact-item-wrapper" @click="onContactClick(7)">
                            <image class="contact-picture" src="local:///user_picture12.png"></image>
                            <div class="text-info">
                                <text class="contact-name">Adam Smith </text>
                            </div>
                            <div class="status" :class="[isActive(7) ? 'status-active' : '']"></div>
                        </div>

                        <div class="some-contact contact-item-wrapper" @click="onContactClick(8)">
                            <image class="contact-picture" src="local:///user_picture14.png"></image>
                            <div class="text-info">
                                <text class="contact-name">Albert Gatewood</text>
                            </div>
                            <div class="status" :class="[isActive(8) ? 'status-active' : '']"></div>
                        </div>
                    </div>
                </div>
                </scroller>
            </div>

            <div class="buttom-operation-area">
                <text class="invited-text">{{currentSelectContact.length}} person invited</text>
                <image class="arrow-forward" src="local:///arrow_forward_while.png" @click="onForwardClick"></image>
            </div>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    const storage = weex.requireModule('storage');
    const swifter = weex.requireModule('swifter');

    export default {
        name: "CreateEventInviteContactsPage",
        data () {
            return {
                currentSelectContact: [],
                isSuggestActive: true,
                titles: {
                    invite: 'Invite Your Contact',
                    share: 'Share Event With…'
                },
                title: 'Invite Your Contact'
            }
        },
        methods: {
            onContactClick (e) {
                let index = this.currentSelectContact.indexOf(e);
                if (index == -1)
                {
                    this.currentSelectContact.push(e);
                    return;
                }
                this.currentSelectContact.splice(index,1);
            },

            // switch of suggest and all contacts
            onSuggest (index) {
                index == 1 ? this.isSuggestActive = true : this.isSuggestActive = false;
            },

            //页面后退
            onBackClick () {
                navigator.pop({animated: 'true'});
            },

            onForwardClick () {
                // navigator.push({
                //     url: utils.getEntryUrl('CreateEventLastPage'),
                //     animated: "true"
                // })
                swifter.openWhitePage('createEvent/CreateEventLastPage.js','Create Event');
            },

            isActive (index) {
                if(this.currentSelectContact.indexOf(index) != -1) return 'status-active';
            }

        },

        created() {
            storage.getItem('page', event => {
                event.data == 'sharePage' && (this.title = this.titles.share);
                storage.removeItem('currentPage');
            })
        }
    }
</script>

<style scoped>

    .wrapper{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    /*头部head*/
    .header {
        display: flex;
        flex-direction: row;
        padding-top: 82px;
        height: 122px;
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
        margin-top: 81.2px;
    }

    .main-header {
        padding-left: 38px;
        padding-right: 40px;
    }

    .create-event {
        padding-bottom: 17px;
    }

    .create-title {
        font-size: 50px;
        color: #EC2079;
    }

    /*操作suggest and contacts区域*/

    .contact-operation-area {
        display: flex;
        flex-direction: row;
    }

    .contact-operation {
        padding-bottom: 16px;
        margin-right: 38px;
        font-size: 30px;
        color: #242424;
    }
    
    .contact-operation-active {
        color: #EC2079;
        border-color: #EC2079;
        border-bottom-width: 12px;
    }

    /*suggest区域*/
    .suggest-area {
        margin-top: 56px;
        padding-left: 38px;
        padding-right: 40px;
    }

    .some-interest-text {
        font-size: 40px;
        color: #707070;
    }

        /*interest area 部分*/

    .interest-area {
        display: flex;
        flex-direction: row;
    }

    .event-item {
        padding-top: 10.8px;
        padding-right: 40px;
        padding-bottom: 10.8px;
        padding-left: 40px;
        margin-top: 16.4px;
        margin-right: 22.2px;
        margin-bottom: 24.8px;
        background-color: #57B1E3;
        border-radius: 13px;
        font-size: 28px;
        color: #fff;
    }

        /*contact人区域*/
    .suggest-contact-list {
        position: relative;
        margin-top: 44.8px;
    }

    .some-contact {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 35.4px;

    }

    .suggest-contact {
        margin-bottom: 22px;
        border-radius: 30px;
        box-shadow: 0 0 5px rgba(211, 210, 210, 0.50);
        background-color: #fff;
    }

    .text-info {
        margin-left: 75px;
    }

    .contact-picture {
        width: 87px;
        height: 87px;
    }

    .contact-name {
        font-size: 50px;
        color: #707070;
    }

    .called-number {
        font-size: 30px;
        color: #EC2079;
    }

    .status {
        position: absolute;
        top: 50px;
        right: 56px;
        width: 20px;
        height: 20px;
        background-color: #D3D3D3;
        border-radius: 50%;
    }

    .status-active {
        background-color: #57B1E3;
    }

    .buttom-operation-area {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 132px;
        padding-left: 40px;
        padding-right: 48px;
        background-color: #57B1E3;
    }

    .arrow-forward {
        width: 40px;
        height: 26px;
    }

    .invited-text {
        font-size: 28px;
        color: #fff;
    }

    .contact-scroller {
        height: 600px;
    }

    /* all contacts 部分 */
    .all-contact-scroller {
        margin-top: 72px;
        height: 550px;
    }

        /* search and filter operation area*/

    .all-contact-header {
        padding-left: 38px;
        padding-right: 40px;
    }

    .search-area {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        margin-top: 82px;
    }

    .search-input {
        width: 652px;
        height: 68px;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 22px;
        background-color: #F4F4F4;
        border-radius: 20px;
    }

    .search-icon {
        position: absolute;
        top: 20px;
        right: 40px;
        width: 26px;
        height: 26px;
    }

    .filter-area {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        display: flex;
        width: 264px;
        height: 56px;
        margin-top: 56px;
        background-color: #57B1E3;
        border-radius: 28px;
       
    }

    .filter-text {
        font-size: 26px;
        color: #fff;
    }

    .triangle-icon {
        width: 16px;
        height: 14px;
    }

    /* contact 列表 */

    .all-contact-wrapper {
        /*margin-top: 72px;*/
    }

    .star-header-area {
        flex-direction: row;
        align-items: center;
        display: flex;
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 38px;
        background-color: #EBEBEB;
       
    }

    .star-icon {
        width: 32px;
        height: 30px;
        margin-right: 18px;
    }

    .contact-item-wrapper {
        padding-top: 24px;
        padding-bottom: 24px;
        border-color: #707070;
        border-bottom-width: 1px;
    }
</style>