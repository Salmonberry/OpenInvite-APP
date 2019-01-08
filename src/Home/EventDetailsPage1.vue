<template>
    <div class="EventDetailsPage1">
        
        <scroller class="scroller">
        <div class="EventDetailsPage1-retreatxbox">
            <image class="EventDetailsPage1-retreatx" src="local:///retreatx.png" />
        </div>
        <image class="EventDetailsPage1-banner"  src="local:///f21b797039a100d7a405ffbbec4d1100.png" />
        <div class="EventDetailsPage1-content">

           <div class="EventDetailsPage1-content-titlebox">
                <div class="EventDetailsPage1-content-titlelabel">
                    <text class="EventDetailsPage1-content-titlelabel-text">#Snooker</text>
                     <text class="EventDetailsPage1-content-titlelabel-text"> #Sport </text>
                </div>
                <text class="EventDetailsPage1-content-titletext">Make a cake</text>
           </div>

            <div class="EventDetailsPage1-content-btnbox">
                     <image class="EventDetailsPage1-content-btnbox-img" src="local:///eventDetailsPage1-content-btnfenxun.png" />
                     <image class="EventDetailsPage1-content-btnbox-img" src="local:///eventDetailsPage1-content-btnxue.png" />
            </div>

            <div class="EventDetailsPage1-content-Locationbox">
                   <text class="EventDetailsPage1-content-Location-title">Location : </text>
                   <div class="EventDetailsPage1-content-Location-content">
                       <text class="EventDetailsPage1-content-Location-content-text">ABC Snooker Room</text>
                       <image class="EventDetailsPage1-content-Location-content-img" src="local:///maps-and-flags.png"/>
                   </div>
                   <text class="EventDetailsPage1-content-Location-details">C,12/F, ABCD street , Hong Kong</text>
            </div>

            <div class="EventDetailsPage1-content-datebox">
                <div class="EventDetailsPage1-content-datebox-title">
                      <text class="EventDetailsPage1-content-datebox-title-text">Date :</text>
                </div>
                <div v-if="content" class="EventDetailsPage1-content-datebox-content">

                    <text class="EventDetailsPage1-content-datebox-title-content">Please Confirm The Time Slot</text>
                    <div  class="EventDetailsPage1-content-datebox-title-contentlist-box">

                           <div @click="show" class="EventDetailsPage1-content-datebox-title-contentlist-boxlist">
                                <div class="EventDetailsPage1-content-datebox-title-contentlist-boxuser">
                                    <text class="EventDetailsPage1-content-datebox-title-contentlist-boxusertext boxusertextdate">Wed, Dec 11, 2018</text>
                                    <text class="EventDetailsPage1-content-datebox-title-contentlist-boxusertext">3:00pm - 5:00pm</text>
                                </div>
                                <text class="EventDetailsPage1-content-datebox-title-contentlist-boxuservotes">2 votes</text>
                           </div>

                           <div  class="EventDetailsPage1-content-datebox-title-contentlist-boxlist">
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
                <div v-if="textbox" class="EventDetailsPage1-content-datebox-content-textbox">
                        <text class="EventDetailsPage1-content-datebox-content-textbox-text">Wed, Dec 11, 2018</text>
                        <text class="EventDetailsPage1-content-datebox-content-textbox-text">3:00pm - 5:00pm</text>
                    </div>
            </div>

            <div class="EventDetailsPage1-content-aboutbox">
                <text class="EventDetailsPage1-content-aboutbox-title">About : </text>
                <text class="EventDetailsPage1-content-aboutbox-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</text>

            </div>

        </div>

         <div class="EventDetailsPage1-content-Invited">

                <div class="EventDetailsPage1-content-Invitedtitle">
                    <text class="EventDetailsPage1-content-Invitedtitletext">Invited Contacts :</text>
                    <div class="EventDetailsPage1-content-Invitedtitle-btn">
                        <text class="EventDetailsPage1-content-Invitedtitle-btntext">+ Invite Contact</text>
                    </div>
                </div>


                <div class="EventDetailsPage1-content-Invitedbox">

                       <div class="EventDetailsPage1-content-Invitedboxtitle">
                           <text class="EventDetailsPage1-content-Invitedboxtitle-text">Attending (0) </text>
                           <image class="EventDetailsPage1-content-Invitedboxtitle-img" src="local:///select.png" />
                       </div>

                </div>

                <div class="EventDetailsPage1-content-Invitedbox">

                       <div class="EventDetailsPage1-content-Invitedboxtitle">
                           <text class="EventDetailsPage1-content-Invitedboxtitle-text">Can’t Go (0)  </text>
                           <image class="EventDetailsPage1-content-Invitedboxtitle-img" src="local:///select.png" />
                       </div>

                </div>


                <div class="EventDetailsPage1-content-Invitedbox">

                       <div class="EventDetailsPage1-content-Invitedboxtitle">
                           <text class="EventDetailsPage1-content-Invitedboxtitle-text">Haven’t Declared (5) </text>
                           <image class="EventDetailsPage1-content-Invitedboxtitle-img" src="local:///selectup.png" />
                       </div>

                       <div class="EventDetailsPage1-content-Invitedbox-list">
                                   <div class="EventDetailsPage1-content-Invitedbox-listuser-img">
                                        <image class="EventDetailsPage1-content-Invitedbox-listuser-imgimg" src="local:///listuser-img.png" />
                                   </div>
                                   <text class="EventDetailsPage1-content-Invitedbox-listuser-text">Maggie Gill</text>
                       </div>

                        <div class="EventDetailsPage1-content-Invitedbox-list">
                                   <div class="EventDetailsPage1-content-Invitedbox-listuser-img">
                                        <image class="EventDetailsPage1-content-Invitedbox-listuser-imgimg" src="local:///listuser-img1.png" />
                                   </div>
                                   <text class="EventDetailsPage1-content-Invitedbox-listuser-text">Maggie Gill</text>
                       </div>

                        <div class="EventDetailsPage1-content-Invitedbox-list">
                                   <div class="EventDetailsPage1-content-Invitedbox-listuser-img">
                                        <image class="EventDetailsPage1-content-Invitedbox-listuser-imgimg" src="local:///listuser-img2.png" />
                                   </div>
                                   <text class="EventDetailsPage1-content-Invitedbox-listuser-text">Maggie Gill</text>
                       </div>

                       <div class="EventDetailsPage1-content-Invitedbox-list">
                                   <div class="EventDetailsPage1-content-Invitedbox-listuser-img">
                                        <image class="EventDetailsPage1-content-Invitedbox-listuser-imgimg" src="local:///listuser-img3.png" />
                                        <image class="EventDetailsPage1-content-Invitedbox-listuser-imgimgx" src="local:///listuser-imgx.png"/>
                                   </div>
                                   <text class="EventDetailsPage1-content-Invitedbox-listuser-text">Maggie Gill</text>
                       </div>

                       <div class="EventDetailsPage1-content-Invitedbox-list">
                                   <div class="EventDetailsPage1-content-Invitedbox-listuser-img">
                                        <image class="EventDetailsPage1-content-Invitedbox-listuser-imgimg" src="local:///listuser-img4.png" />
                                        <image class="EventDetailsPage1-content-Invitedbox-listuser-imgimgx" src="local:///listuser-imgx.png"/>
                                   </div>
                                   <text class="EventDetailsPage1-content-Invitedbox-listuser-text">Maggie Gill</text>
                       </div>

                </div>

            </div>

        </scroller>

        <div  v-if="ups" class="EventDetailsPage1-upsbox">


            <div class="EventDetailsPage1-ups-content">

                   <div class="EventDetailsPage1-ups-contentClosed-box">
                            <image @click="closed" class="EventDetailsPage1-ups-contentClosed" src="local:///eventDetailsPage-ups-content-Closed.png"/>
                   </div>

                    <div class="EventDetailsPage1-ups-content-box">

                        <div class="EventDetailsPage1-ups-content-boxlist">
                              <image class="EventDetailsPage1-ups-content-boxlistimg" src="local:///eventDetailsPage1-ups-content-boxlistimg.png" />
                              <text class="EventDetailsPage1-ups-content-boxlisttext">John</text>
                        </div>

                        <div class="EventDetailsPage1-ups-content-boxlist">
                              <image class="EventDetailsPage1-ups-content-boxlistimg" src="local:///eventDetailsPage1-ups-content-boxlistimg.png" />
                              <text class="EventDetailsPage1-ups-content-boxlisttext">John</text>
                        </div>

                        <div class="EventDetailsPage1-ups-content-boxlist">
                              <image class="EventDetailsPage1-ups-content-boxlistimg" src="local:///eventDetailsPage1-ups-content-boxlistimg.png" />
                              <text class="EventDetailsPage1-ups-content-boxlisttext">John</text>
                        </div>

                        <div class="EventDetailsPage1-ups-content-boxlist">
                              <image class="EventDetailsPage1-ups-content-boxlistimg" src="local:///eventDetailsPage1-ups-content-boxlistimg.png" />
                              <text class="EventDetailsPage1-ups-content-boxlisttext">John</text>
                        </div>

                    </div>

                    <div class="EventDetailsPage1-ups-content-datebox">
                          <div class="EventDetailsPage1-ups-content-datelist">
                               <div class="EventDetailsPage1-ups-content-datelist-textbox">
                                    <text class="EventDetailsPage1-ups-content-datelist-textboxtimer">Wed, Dec 11, 2018</text>
                                    <text class="EventDetailsPage1-ups-content-datelist-textboxtimer">3:00pm - 5:00pm</text>
                               </div>
                               <text class="EventDetailsPage1-ups-content-datelist-textboxnumber">3 votes</text>
                          </div>
                          
                          <div @click="datebtn" class="EventDetailsPage1-ups-content-datebtn">
                              <text class="EventDetailsPage1-ups-content-datebtntext">Confirm Time Slot</text>
                          </div>

                    </div>




            </div>


        </div>


    </div>
</template>

<script>
export default {
        name:'EventDetailsPage1',
        data() {
            return {
               ups:false,
               content:true,
               textbox:false
            }
        },
        methods: { 
            closed(){
               this.ups=false;
            },
            show(){
                this.ups=true;
            },
            datebtn(){
                this.ups=false;
                this.content=false;
                this.textbox=true;
            }

        }

}
</script>

<style scoped>
.EventDetailsPage1-retreatxbox{
    position: absolute;
    top: 44px;
    left: 26px;
    width: 26px;
    height: 44px;
    z-index: 11111;
}
.EventDetailsPage1-retreatx {
   width: 26px;
   height: 44px;
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
.EventDetailsPage1-content-datebox-content-textbox {
    margin-top: 23px;
}
.EventDetailsPage1-content-datebox-content-textbox-text {
    color: #696969;
    font-size: 30px;
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
.EventDetailsPage1-content-Invited {
    margin-top: 56px;
    border-bottom-width:2px;
    border-bottom-color: rgba(112, 112, 112, .31);
    border-bottom-style: solid;
}
.EventDetailsPage1-content-Invitedtitle {
    flex-direction: row;
    justify-content:space-between;
    margin-left: 22px;
    margin-right: 22px;

}
.EventDetailsPage1-content-Invitedtitletext {
    font-size: 28px;
    color: #57B1E3;
}
.EventDetailsPage1-content-Invitedtitle-btn {
    flex-direction: row;
    justify-content:center ;
    align-items: center ;
    background-color: #EC2079;
    width: 276px;
    height: 42px;
    border-radius:50px;
}
.EventDetailsPage1-content-Invitedtitle-btntext {
    color: #ffffff;
}
.EventDetailsPage1-content-Invitedbox {
    margin-top: 29px;
}
.EventDetailsPage1-content-Invitedboxtitle {
    flex-direction: row;
    align-items: center ;
    margin-left: 22px;
    margin-right: 22px;
    margin-bottom: 18px;

}
.EventDetailsPage1-content-Invitedboxtitle-text {
    font-size: 26px;
    color: #696969;
    margin-right: 10px;
}
.EventDetailsPage1-content-Invitedboxtitle-img {
   width: 18px;
   height: 16px;
}
.EventDetailsPage1-content-Invitedbox-list {
    flex-direction: row;
    align-items: center ;
    padding-right: 48px;
    padding-left: 48px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: rgba(112, 112, 112, .31);
}

.EventDetailsPage1-content-Invitedbox-listuser-img {
    margin-right: 44px;
}
.EventDetailsPage1-content-Invitedbox-listuser-imgimg {
    width: 86px;
    height: 86px;
}
.EventDetailsPage1-content-Invitedbox-listuser-imgimgx {
    position: absolute;
    bottom: 0;
    right: -31px;
    width: 62px;
    height: 62px;
}

.EventDetailsPage1-content-Invitedbox-listuser-text {
    color: #707070;
    font-size: 30px;
}

.EventDetailsPage1-upsbox {
    flex-direction: row;
    justify-content:center ;
    align-items:center ;
    position: fixed;
    top: 0;
    left: 0;
    width: 750px;
    height: 1500px;
    background-color: rgba(0, 0, 0, .48)
}
.EventDetailsPage1-ups-content {
    width: 614px;
    padding-bottom: 30px;
    border-radius:18px;
    background-color: #ffffff;
}
.EventDetailsPage1-ups-contentClosed-box {
    flex-direction: row;
    justify-content:flex-end;
    margin-top: 25px;
    margin-right: 24px;
    margin-bottom: 30px;
}

.EventDetailsPage1-ups-contentClosed {
    width: 42px;
    height: 42px;
}
.EventDetailsPage1-ups-content-boxlist {
    flex-direction: row;
    align-items:center ;
    padding-left: 50px;
    padding-top: 18px;
    padding-bottom: 18px;
    border-top-color: rgba(112, 112, 112, .33);
    border-top-width: 2px;
    border-top-style: solid;
}
.EventDetailsPage1-ups-content-boxlistimg {
    width: 68px;
    height: 68px;
    margin-right: 22px;
}
.EventDetailsPage1-ups-content-boxlisttext {
    font-size: 28px;
    color: #696969;
}
.EventDetailsPage1-ups-content-datebox {
    padding-top: 32px;
    padding-bottom: 30px;
    padding-left: 50px;
    padding-right: 50px;
    border-top-color: #707070;
    border-top-width: 2px;
    border-top-style: solid;
}
.EventDetailsPage1-ups-content-datelist {
    flex-direction: row ;
    justify-content:space-between;
    align-items:center ;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 18px;
    padding-bottom: 18px;
    border-color: #707070;
    border-width: 2px;
    border-style: solid;
    border-radius:18px;
}
.EventDetailsPage1-ups-content-datelist-textboxtimer {
    font-size: 30px;
    color: #696969;
}
.EventDetailsPage1-ups-content-datelist-textboxnumber {
    font-size: 32px;
    color: #57B1E3;
}
.EventDetailsPage1-ups-content-datebtn {
    flex-direction: row;
    justify-content:center ;
    align-items:center ;
    width: 530px;
    height: 66px;
    margin-top: 23px;
    background-color: #57B1E3;
    border-radius:50px;
}
.EventDetailsPage1-ups-content-datebtntext {
    color: #ffffff;
    font-size: 30px;

}
</style>