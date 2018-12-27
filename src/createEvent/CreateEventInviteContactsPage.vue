<template>
    <div class="wrapper">
        <div class="header">
            <image class="icon-chart" src="/src/images/arrow_back_gray.png" @click="onBackClick"></image>
            <text class="header-title">Create Event</text>
        </div>

        <div class="main">
            <div class="create-event">
                <text class="create-title">Name Of The Event</text>
            </div>

            <div class="contact-operation-area">
                <text class="contact-operation contact-operation-active">Suggest Contacts</text>
                <text class="contact-operation">All Contacts</text>
            </div>

            <div class="suggest-area">
                <text class="some-interest-text">They also have interest in</text>
                <div class="interest-area">
                    <text class="event-item">#Snooker</text>
                </div>

                <scroller class="contact-scroller">
                <div class="suggest-contact-list">
                    <div class="suggest-contact" @click="onContactClick(1)">
                        <image class="contact-picture" src="/src/images/user_picture6.png"></image>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">1st contact</text>
                        </div>
                        <div class="status" :class="isActive(1)"></div>
                    </div>

                    <div class="suggest-contact" @click="onContactClick(2)">
                        <image class="contact-picture" src="/src/images/user_picture7.png"></image>
                        <div class="text-info">
                            <text class="contact-name">John</text>
                            <text class="called-number">1st contact</text>
                        </div>
                        <div class="status" :class="isActive(2)"></div>
                    </div>

                    <div class="suggest-contact" @click="onContactClick(3)">
                        <image class="contact-picture" src="/src/images/user_picture8.png"></image>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">2nd contact</text>
                        </div>
                        <div class="status" :class="isActive(3)"></div>
                    </div>
                </div>
                </scroller>
            </div>

            <div class="add-contact-area">

            </div>

            <div class="buttom-operation-area">
                <text class="invited-text">{{currentSelectContact.length}} person invited</text>
                <image class="arrow-forward" src="/src/images/arrow_forward_while.png"></image>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateEventInviteContactsPage",
        data () {
            return {
                currentSelectContact: []
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
            }
        },
        computed: {
            isActive: function () {
                return function (index) {
                    if(this.currentSelectContact.indexOf(index) != -1) return 'status-active';
                }

            }
        }
    }
</script>

<style scoped>

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
        font-size: 30px;
        color: #242424;
        margin-left: 233.8px;
    }

    /*main部分*/
    .main {
        margin-top: 81.2px;
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
        font-size: 30px;
        color: #242424;
        margin-right: 38px;

    }
    
    .contact-operation-active {
        color: #EC2079;
        border-color: #EC2079;
        border-bottom-width: 12px;
    }

    /*suggest区域*/
    .suggest-area {
        margin-top: 56px;
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
        background-color: #57B1E3;
        border-radius: 13px;
        margin-right: 22.2px;
        margin-bottom: 24.8px;
        font-size: 28px;
        color: #fff;
    }

        /*contact人区域*/
    .suggest-contact-list {
        position: relative;
        margin-top: 44.8px;
    }

    .suggest-contact {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 35.4px;
        border-raduis: 30px;
        box-shadow: 0 0 5px rgba(211, 210, 210, 0.50);
        margin-bottom: 22px;
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
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 40px;
        padding-right: 48px;
        left: 0;
        right: 0;
        bottom: 0;
        height: 132px;
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
</style>