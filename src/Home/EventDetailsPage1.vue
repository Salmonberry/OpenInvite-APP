<template>
    <div class="EventDetailsPage1">
        <div class="EventDetailsPage1-retreatxbox">
            <image class="EventDetailsPage1-retreatx" src="/src/images/retreatx.png" />
        </div>
        <scroller>
        <image class="EventDetailsPage1-banner"  src="/src/images/f21b797039a100d7a405ffbbec4d1100.png" />
        <div class="EventDetailsPage1-content">
           
           <div class="EventDetailsPage1-content-titlebox">
                <div class="EventDetailsPage1-content-titlelabel">
                    <text class="EventDetailsPage1-content-titlelabel-text">#Snooker</text>
                     <text class="EventDetailsPage1-content-titlelabel-text"> #Sport </text>
                </div>
                <text class="EventDetailsPage1-content-titletext">Make a cake</text>
           </div>

            <div class="EventDetailsPage1-content-btnbox">
                     <image class="EventDetailsPage1-content-btnbox-img" src="/src/images/eventDetailsPage1-content-btnfenxun.png" />
                     <image class="EventDetailsPage1-content-btnbox-img" src="/src/images/eventDetailsPage1-content-btnxue.png" />
            </div>

            <div class="EventDetailsPage1-content-Locationbox">
                   <text class="EventDetailsPage1-content-Location-title">Location : </text>
                   <div class="EventDetailsPage1-content-Location-content">
                       <text class="EventDetailsPage1-content-Location-content-text">ABC Snooker Room</text>
                       <image class="EventDetailsPage1-content-Location-content-img" src="/src/images/maps-and-flags.png"/>
                   </div>
                   <text class="EventDetailsPage1-content-Location-details">C,12/F, ABCD street , Hong Kong</text>
            </div>
            
            <div class="EventDetailsPage1-content-datebox">
                <div class="EventDetailsPage1-content-datebox-title">
                      <text class="EventDetailsPage1-content-datebox-title-text">Date :</text>
                </div>
                <div class="EventDetailsPage1-content-datebox-content">

                    <text class="EventDetailsPage1-content-datebox-title-content">Please Confirm The Time Slot</text>
                    <div class="EventDetailsPage1-content-datebox-title-contentlist-box">
                           <div class="EventDetailsPage1-content-datebox-title-contentlist-boxlist">
                                <div class="EventDetailsPage1-content-datebox-title-contentlist-boxuser">
                                    <text class="EventDetailsPage1-content-datebox-title-contentlist-boxusertext boxusertextdate">Wed, Dec 11, 2018</text>
                                    <text class="EventDetailsPage1-content-datebox-title-contentlist-boxusertext">3:00pm - 5:00pm</text>
                                </div>
                                <text class="EventDetailsPage1-content-datebox-title-contentlist-boxuservotes">2 votes</text>
                           </div>

                           <div class="EventDetailsPage1-content-datebox-title-contentlist-boxlist">
                                <div class="EventDetailsPage1-content-datebox-title-contentlist-boxuser">
                                    <text class="EventDetailsPage1-content-datebox-title-contentlist-boxusertext boxusertextdate">Wed, Dec 11, 2018</text>
                                    <text class="EventDetailsPage1-content-datebox-title-contentlist-boxusertext">3:00pm - 5:00pm</text>
                                </div>
                                <text class="EventDetailsPage1-content-datebox-title-contentlist-boxuservotes">2 votes</text>
                           </div>

                           <div class="EventDetailsPage1-content-datebox-title-contentlist-boxlist">
                                <div class="EventDetailsPage1-content-datebox-title-contentlist-boxuser">
                                    <text class="EventDetailsPage1-content-datebox-title-contentlist-boxusertext boxusertextdate">Wed, Dec 11, 2018</text>
                                    <text class="EventDetailsPage1-content-datebox-title-contentlist-boxusertext">3:00pm - 5:00pm</text>
                                </div>
                                <text class="EventDetailsPage1-content-datebox-title-contentlist-boxuservotes">2 votes</text>
                           </div>
                    </div>

                </div>
            </div>
            
            <div class="EventDetailsPage1-content-aboutbox">
                <text class="EventDetailsPage1-content-aboutbox-title">About : </text>
                <text class="EventDetailsPage1-content-aboutbox-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</text>

            </div>
            


        </div>

        </scroller>
    </div>
</template>

<script>
export default {
        name:'EventDetailsPage1',
        data() {
            return {
               
            }
        },
}
</script>

<style scoped>
.EventDetailsPage1-retreatxbox{
    position: fixed;
    top: 44px;
    left: 26px;
    width: 26px;
    height: 22px;
}
.EventDetailsPage1-retreatx {
   width: 26px;
   height: 22px;
}

.EventDetailsPage1-banner {
    width: 750px;
    height: 680px;
}

.EventDetailsPage1-content {
    margin-top: 35px;
    margin-left: 22px;
    margin-right: 22px;
}

.EventDetailsPage1-content-titlebox {
    position: relative;
}

.EventDetailsPage1-content-titlelabel {
    flex-direction: row ;
    justify-content: start ;
}
.EventDetailsPage1-content-titlelabel-text {
    margin-right: 18px;
    font-size: 28px;
    color: #57B1E3;
}
.EventDetailsPage1-content-titletext {
    margin-top: 21px;
    font-size: 42px;
}
.EventDetailsPage1-content-btnbox {
    position: absolute;
    top:0;
    right: 0;
}
.EventDetailsPage1-content-btnbox-img {
    width: 66px;
    height: 68px;
    margin-bottom: 30px;
}
.EventDetailsPage1-content-Locationbox {
    margin-top: 33px;
}
.EventDetailsPage1-content-Location-title {
    font-size: 28px;
    color: #57B1E3;
}
.EventDetailsPage1-content-Location-content {
    flex-direction: row;
    align-items:center ;
    margin-top: 10px;
}
.EventDetailsPage1-content-Location-content-text {
    margin-right: 6px;
    font-size: 50px;
}
.EventDetailsPage1-content-Location-content-img {
    width: 28px;
    height: 36px;
}
.EventDetailsPage1-content-Location-details {
    font-size: 26px;
}
.EventDetailsPage1-content-datebox {
    margin-top: 36px;
}

.EventDetailsPage1-content-datebox-title-text {
    color: #57B1E3;
    font-size: 28px;
}
.EventDetailsPage1-content-datebox-title-content {
    margin-top: 13px;
    margin-bottom: 19px;
    font-size: 26px;
}
.EventDetailsPage1-content-datebox-title-contentlist-boxlist {
    flex-direction: row;
    align-items:center ;
    justify-content:space-between; 
    height: 140px;
    padding-left: 18px;
    padding-right: 18px;
    border-width: 2px;
    border-style: solid;
    border-color: #707070;
    border-radius:18px;
    margin-bottom: 36px;
}
.EventDetailsPage1-content-datebox-title-contentlist-boxusertext {
    color: #696969;
}
.boxusertextdate {
    margin-bottom: 18px;
}
.EventDetailsPage1-content-datebox-title-contentlist-boxuservotes {
    color: #57B1E3;
}

.EventDetailsPage1-content-aboutbox {
    margin-top: 41px;
}
.EventDetailsPage1-content-aboutbox-title {
    color: #57B1E3;
    font-size: 28px;
}
.EventDetailsPage1-content-aboutbox-content {
    margin-top: 16px;
    font-size: 32px;
    color: #000000;
}
</style>