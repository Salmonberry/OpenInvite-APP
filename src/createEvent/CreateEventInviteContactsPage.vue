<template>
    <div class="wrapper">
        <div class="header">
            <image class="icon-chart" src="/src/images/arrow_back_gray.png" @click="onBackClick"/>
            <text class="header-title">Create Event</text>
        </div>

        <div class="main">
            <div class="create-event">
                <text class="create-title">Name Of The Event</text>
            </div>

            <div class="contact-operation-area">
                <text class="suggest-operation">Suggest Contacts</text>
                <text class="suggest-operation">All Contacts</text>
            </div>

            <div class="suggest-area">

                <text class="some-interest-text">They also have interest in</text>
                <div class="interest-area">
                    <text class="event-item">#Snooker</text>
                </div>

                <div class="suggest-contact-list">
                    <div class="suggest-contact">
                        <image class="contact-picture" src="/src/images/calendar.png"/>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">1st contact</text>
                        </div>
                    </div>
                    <div class="suggest-contact-iocn"></div>
                </div>
                
                <div class="suggest-contact-list">
                    <div class="suggest-contact">
                        <image class="contact-picture" src="/src/images/calendar.png"/>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">1st contact</text>
                        </div>
                    </div>
                    <div class="suggest-contact-iocn"></div>
                </div>

                <div class="suggest-contact-list">
                    <div class="suggest-contact">
                        <image class="contact-picture" src="/src/images/calendar.png"/>
                        <div class="text-info">
                            <text class="contact-name">Kelvin</text>
                            <text class="called-number">1st contact</text>
                        </div>
                    </div>
                    <div class="suggest-contact-iocn"></div>
                </div>

            </div>
            
            <div class="buttom-operation-area">
                <text class="invited-text">0 person invited</text>
                <image class="arrow-forward" src="/src/images/ahead.png"/>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateEventInviteContactsPage"
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
    
    .contact-operation-area {
        margin-top: 30px;
        flex-direction: row;
    }

    .suggest-operation {
        margin-right: 20px;
    }

    /*操作suggest and contacts区域*/
    .suggest-area {
        margin-top: 56px;
    }
     
    .suggest-contact-list {
        flex-direction: row;
        align-items: center ;
        justify-content:space-between;
        padding-left: 36px;
        padding-right: 36px;
        padding-top: 18px;
        padding-bottom: 18px;
        margin-bottom: 20px;
        box-shadow:4px 4px 10px rgba(0, 0, 0, .16);
        border-radius:18px;
    }
    .suggest-contact {
        flex-direction: row;
         align-items: center ;
    }
    .contact-picture {
        width: 86px;
        height: 86px;
        margin-right: 40px;
    }
   .suggest-contact-iocn {
       width: 20px;
       height: 20px;
       border-radius:50%;
       background-color: #D3D3D3;
   }

    /*interest area 部分*/
    .interest-area {
        margin-top: 18px;
    }
    .event-item {
        padding-top: 10.8px;
        padding-right: 40px;
        padding-bottom: 10.8px;
        padding-left: 40px;
        background-color: #57B1E3;
        border-radius: 13px;
        margin-right: 22.2px;
        margin-bottom: 24.8px;
        font-size: 28px;
        color: #fff;
    }


    .interest-area {
        display: flex;
        flex-direction: row;
    }
    
    .buttom-operation-area {
        position: fixed;
        bottom: 0;
        left: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items:center ;
        width: 750px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 26px;
        padding-bottom: 26px;
        background-color: #57B1E3;
    }
    .invited-text {
        color: #ffffff;
    }

    .arrow-forward {
        width: 46px;
        height: 30px;
    }

</style>