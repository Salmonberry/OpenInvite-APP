<template>
    <div class="CreateEventLastPage">
        <div class="header">
            <image class="icon-chart" src="/src/images/arrow_back_gray.png" />
            <text class="header-title">Create Event</text>
        </div>
        <scroller>
              <div class="main">
                  <div class="CreateEventLastPage-title">
                      <text class="CreateEventLastPage-title-text">Happy Snooker Day</text>
                  </div>
                  <div class="CreateEventLastPage-label">
                       <div class="CreateEventLastPage-label-list">
                           <text class="CreateEventLastPage-label-list-text">#Snooker</text>
                       </div>
                       <div class="CreateEventLastPage-label-list">
                           <text class="CreateEventLastPage-label-list-text">#Snooker</text>
                       </div>
                       <div class="CreateEventLastPage-label-list">
                           <text class="CreateEventLastPage-label-list-text">#Snooker</text>
                       </div>
                       <div class="CreateEventLastPage-label-list">
                           <text class="CreateEventLastPage-label-list-text">#Snooker</text>
                       </div>
                       <image class="createEventLastPage-labeladd" src="/src/images/createEventLastPage-labeladd.png"/>
                  </div>

                  <div class="CreateEventLastPage-Invite">
                        <text class="CreateEventLastPage-Invite-title">Invite</text>
                        <div class="CreateEventLastPage-Invite-content">

                             <div class="CreateEventLastPage-Invite-list">
                                 <div class="CreateEventLastPage-Invite-user">
                                      <image  class="CreateEventLastPage-Invite-user-img" src="/src/images/createEventLastPage-Invite-user.png"/>
                                      <text class="CreateEventLastPage-Invite-user-text">Kelvin</text>
                                 </div>
                                 <image class="CreateEventLastPage-Invite-list-close" src="/src/images/createEventLastPage-Invite-user-close.png" />
                             </div>

                             <div class="CreateEventLastPage-Invite-list">
                                 <div class="CreateEventLastPage-Invite-user">
                                      <image  class="CreateEventLastPage-Invite-user-img" src="/src/images/createEventLastPage-Invite-user.png"/>
                                      <text class="CreateEventLastPage-Invite-user-text">Kelvin</text>
                                 </div>
                                 <image class="CreateEventLastPage-Invite-list-close" src="/src/images/createEventLastPage-Invite-user-close.png" />
                             </div>
                             <div class="CreateEventLastPage-Invite-list">
                                 <div class="CreateEventLastPage-Invite-user">
                                      <image  class="CreateEventLastPage-Invite-user-img" src="/src/images/createEventLastPage-Invite-user.png"/>
                                      <text class="CreateEventLastPage-Invite-user-text">Kelvin</text>
                                 </div>
                                 <image class="CreateEventLastPage-Invite-list-close" src="/src/images/createEventLastPage-Invite-user-close.png" />
                             </div>
                             <text class="CreateEventLastPage-Invite-listadd">+ Contact</text>
                        </div>
                  </div>
              </div>
              <div class="separate"></div>
              <div class="CreateEventLastPage-Public">

                   <div class="CreateEventLastPage-Public-title">
                         <text class="CreateEventLastPage-Public-title-text">Public</text>
                         <div class="CreateEventLastPage-Public-title-details">
                             <text class="CreateEventLastPage-Public-title-details-text">Allow others join your event? </text>
                             <div ref="test" class="CreateEventLastPage-Public-title-details-btn" @click="slide">
                                     <text v-if="statuss" class="CreateEventLastPage-Public-title-details-btn-text">NO</text>
                                     <div ref="btn" class="CreateEventLastPage-Public-title-details-btn-img"></div>
                                     <text v-if="pauss" class="CreateEventLastPage-Public-title-details-btn-text-yes">YES</text>
                             </div>
                         </div>
                   </div>

                   <div v-if="pauss" class="CreateEventLastPage-Public-Showbox">
                        <div class="CreateEventLastPage-Public-Showbox-can">
                               <text class="CreateEventLastPage-Public-Showbox-can-text">Which contacts can attend?</text>
                               <div class="CreateEventLastPage-Public-Showbox-can-select">
                                   <text class="CreateEventLastPage-Public-Showbox-can-select-text">1st Degree Contact only </text>
                                   <image class="CreateEventLastPage-Public-Showbox-can-select-img" src="/src/images/createEventLastPage-Public-Showbox-can-select.png" />
                               </div>
                        </div>

                        <div class="CreateEventLastPage-Public-Showbox-Number">
                            <text class="CreateEventLastPage-Public-Showbox-Number-text">Max Number</text>
                            <text class="CreateEventLastPage-Public-Showbox-Number-number">10</text>
                        </div>

                   </div>
              </div>
              <div class="separate"></div>

              <div class="CreateEventLastPage-Public-Time">

                    <div class="CreateEventLastPage-Public-Time-title">
                        <text class="CreateEventLastPage-Public-Time-title-text">Time Slot 1 </text>
                        <image class="CreateEventLastPage-Public-Time-title-text-img" src="/src/images/createEventLastPage-labeladd.png" />
                    </div>
                    
                    <div class="CreateEventLastPage-Public-Time-content">
                         
                         <div class="CreateEventLastPage-Public-Time-content-list">

                              <text>All Day Event</text>
                             <div class="CreateEventLastPage-Public-title-details-btn">
                                     <text class="CreateEventLastPage-Public-title-details-btn-text">NO</text>
                                     <div class="CreateEventLastPage-Public-title-details-btn-img"></div>
                             </div>
                             
                         </div>

                         <div class="CreateEventLastPage-Public-Time-content-list">
                             <text>Start</text>
                             <text class="CreateEventLastPage-Public-Time-content-list-hui">Please select</text>
                         </div>
                           <div class="CreateEventLastPage-Public-Time-content-list">
                             <text>Start</text>
                             <text class="CreateEventLastPage-Public-Time-content-list-hui">Please select</text>
                         </div>

                    </div>
              </div>

              <div class="separate"></div>

              <div class="CreateEventLastPage-Location">
                  <text class="CreateEventLastPage-Location-title">Location</text>
                  <div class="CreateEventLastPage-Location-content">
                      <input type="text" placeholder="Search" class="CreateEventLastPage-Location-input"/>
                      <image class="CreateEventLastPage-Location-img" src="/src/images/maps-search.png"/>
                  </div>
              </div>

              <div class="separate"></div>

              <div class="CreateEventLastPage-Location-CoverImage">
                  <text class="CreateEventLastPage-Location-CoverImage-title">Cover Image</text>
                  <image class="CreateEventLastPage-Location-CoverImage-img" src="/src/images/createEventLastPage-Location-CoverImage-img.png" />
                  <div class="CreateEventLastPage-Location-CoverImage-btn">
                          <image class="CreateEventLastPage-Location-CoverImage-btn-img" src="/src/images/refresh-button.png"/>
                          <text class="CreateEventLastPage-Location-CoverImage-btn-text">New random photo</text>
                  </div>
                  <div class="CreateEventLastPage-Location-CoverImage-btn">
                          <image class="CreateEventLastPage-Location-CoverImage-btn-img-pic" src="/src/images/gallery.png"/>
                          <text class="CreateEventLastPage-Location-CoverImage-btn-text">Choose From Your Gallery</text>
                  </div>
                  <div class="CreateEventLastPage-Location-CoverImage-btn">
                          <image class="CreateEventLastPage-Location-CoverImage-btn-imgphoto" src="/src/images/photo-camera.png"/>
                          <text class="CreateEventLastPage-Location-CoverImage-btn-text">Take A Photo</text>
                  </div>
              </div>
               <div class="separate"></div>
               <div class="CreateEventLastPage-Location-Other">
                    <text class="CreateEventLastPage-Location-Other-title">Other</text>

                    <div class="CreateEventLastPage-Location-Other-list">
                        <text class="CreateEventLastPage-Location-Other-list-text">Repeat :</text>
                        <div class="CreateEventLastPage-Location-Other-list-select">
                            <text class="CreateEventLastPage-Location-Other-list-select-text">No</text>
                            <image class="CreateEventLastPage-Location-Other-list-select-img" src="/src/images/select.png"/>
                        </div>
                        
                    </div>
                    
                    <div class="CreateEventLastPage-Location-Other-list">
                        <text class="CreateEventLastPage-Location-Other-list-text">Show As :</text>
                        <div class="CreateEventLastPage-Location-Other-list-select">
                            <text class="CreateEventLastPage-Location-Other-list-select-text">Busy</text>
                            <image class="CreateEventLastPage-Location-Other-list-select-img" src="/src/images/select.png"/>
                        </div>
                    </div>
                    
                    <div class="CreateEventLastPage-Location-Other-list">
                        <text class="CreateEventLastPage-Location-Other-list-text">Alert:</text>
                        <div class="CreateEventLastPage-Location-Other-list-select">
                            <text class="CreateEventLastPage-Location-Other-list-select-text">No</text>
                            <image class="CreateEventLastPage-Location-Other-list-select-img" src="/src/images/select.png"/>
                        </div>
                    </div>
                    
                    <div class="CreateEventLastPage-Location-Other-list">
                        <text class="CreateEventLastPage-Location-Other-list-text">Event Fee </text>
                         <text class="CreateEventLastPage-Location-Other-list-text">$0 /person </text>
                    </div>
                    <text class="CreateEventLastPage-Location-Other-What">What will you be doing?</text>
               </div>
            <div class="separate"></div>
            <div class="CreateEventLastPage-Location-Check">
                <text class="CreateEventLastPage-Location-Check-title">Item Check List</text>
                <text class="CreateEventLastPage-Location-Check-titleIntroduction">What should people bring to your event? </text>
                <text class="CreateEventLastPage-Location-Check-selecttext">Item 1</text>
                <div class="CreateEventLastPage-Location-Check-label">
                    <image class="CreateEventLastPage-Location-Check-label-img" src="/src/images/createEventLastPage-labeladd.png"/>
                    <text class="CreateEventLastPage-Location-Check-label-text">Item </text>
                </div>
            </div>
               <div class="CreateEventLastPage-Location-Submit">
            <text class="CreateEventLastPage-Location-Submit-text">Submit</text>
        </div>
        </scroller>
    </div>
</template>

<script>
const animation = weex.requireModule('animation')
    export default {
        data() {
            return {
                statuss:true,
                pauss:false
            }
        },
        methods:{
            slide(){
                var testEl = this.$refs.test;
                var btn = this.$refs.btn;
                if(this.statuss){

                    animation.transition(testEl, {
                    styles: {
                            backgroundColor: '#EC2079',
                    }
                    });

                    animation.transition(btn, {
                    styles: {
                          transform: 'translateX(-55px)'
                    },
                    duration: 100, //ms
                    timingFunction: 'ease',
                    });

                    this.statuss=!this.statuss;
                      this.pauss=!this.pauss;
                }else {
                    animation.transition(testEl, {
                    styles: {
                            backgroundColor: '#707070',
                    }
                    });

                    animation.transition(btn, {
                    styles: {
                          transform: 'translateX(0px)'
                    },
                    duration: 100, //ms
                    timingFunction: 'ease',
                    });

                  this.statuss=!this.statuss;
                   this.pauss=!this.pauss;

                }

            }
        }
    }
</script>

<style scoped>
 .header {
        flex-direction: row;
        display: flex;
        height: 122px;
        padding-top: 82px;
    }
   .separate {
       width: 750px;
       height: 30px;
       background-color: #E2E2E2;
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
    
     .main {
        padding-left: 38px;
        padding-right: 40px;
        margin-top: 81.2px;
       
    }
    
    .CreateEventLastPage-title {
        border-bottom-width: 2px;
        border-bottom-color: rgba(112, 112, 112, .48);
        border-bottom-style: solid;
    }
    .CreateEventLastPage-title-text {
        padding-bottom: 16px;
        color: #313131;
        font-size: 50px;
    }
    .CreateEventLastPage-label {
         flex-direction: row;
         flex-wrap:wrap ;
         align-items:center ;
         margin-top: 20px;
    }
    .CreateEventLastPage-label-list {
        background-color: #57B1E3;
        width: auto;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 28px;
        padding-right: 28px;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius:18px;
       
    }
    .CreateEventLastPage-label-list-text {
        color: #ffffff;
    }
    .createEventLastPage-labeladd {
        width: 30px;
        height: 30px;
    }
    .CreateEventLastPage-Invite {
        margin-top: 28px;
    }
    .CreateEventLastPage-Invite-title {
        color: #313131;
        font-size: 50px;
    }
    .CreateEventLastPage-Invite-content {
        margin-top: 23px;
    }
    .CreateEventLastPage-Invite-list {
        flex-direction: row;
        align-items:center ;
        justify-content:space-between;
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom-width: 2px;
        border-bottom-color: rgba(112, 112, 112, .24);
        border-bottom-style: solid;
        
    }
    .CreateEventLastPage-Invite-user {
        flex-direction: row;
        align-items:center ;
        padding-left: 14px;
    }
    .CreateEventLastPage-Invite-user-img {
        width: 52px;
        height: 52px;
        margin-right: 20px;
    }
    .CreateEventLastPage-Invite-user-text {
        color: #242424;
    }
    .CreateEventLastPage-Invite-list-close {
        width: 20px;
        height: 20px;
    }
    .CreateEventLastPage-Invite-listadd {
        padding-top: 27px;
        padding-bottom: 27px;
        padding-left: 24px;
        color: #57B1E3;
        font-size: 32px;
    }
    .CreateEventLastPage-Public {
        padding-top: 35px;
    
    }
    .CreateEventLastPage-Public-title {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 18px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: rgba(112, 112, 112, .34);
    }
    .CreateEventLastPage-Public-title-text {
        color: #313131;
        font-size: 50px;
    }
    .CreateEventLastPage-Public-title-details {
        flex-direction: row;
        align-content: center ;
        justify-content:space-between;
       margin-top: 23px;
       
    }
    .CreateEventLastPage-Public-title-details-text {
        color: #707070;
    }
    .CreateEventLastPage-Public-title-details-btn {
        flex-direction: row;
        align-items:  center;
        position: relative;
        width: 104px;
        height: 42px;
        background-color: #707070;
        border-radius:18px;
       
       
    }
    .CreateEventLastPage-Public-title-details-btn-text {
        margin-left: 20px;
        color: #ffffff;
        font-size: 18px;
    }
    .CreateEventLastPage-Public-title-details-btn-img {
        position: absolute;
        right: 10px;
        top:7px;
        width: 28px;
        height: 28px;
        background-color: #57B1E3;
        border-radius:50%;
    }
     .CreateEventLastPage-Public-title-details-btn-text-yes {
        color: #ffffff;
        font-size: 18px;
        margin-left: 50px;
    }
    .CreateEventLastPage-Public-Showbox {
        padding-bottom: 35px;
        
    }
    .CreateEventLastPage-Public-Showbox-can {
        flex-direction: row;
        align-items: center ;
        justify-content:space-between;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 35px;
        padding-bottom: 35px;
        border-bottom-width: 2px;
        border-bottom-color: rgba(112, 112, 112, .34);
        border-bottom-style: solid;
    }
    .CreateEventLastPage-Public-Showbox-can-text {
        width: 240px;
        color: #707070;
    }
    .CreateEventLastPage-Public-Showbox-can-select {
        flex-direction: row;
        justify-content:space-between;
    }
    .CreateEventLastPage-Public-Showbox-can-select-text {
        width: 180px;
        color: #57B1E3;
    }
    .CreateEventLastPage-Public-Showbox-can-select-img {
        width: 12px;
        height: 10px;
    }
    .CreateEventLastPage-Public-Showbox-Number {
        flex-direction: row;
        align-items: center ;
        justify-content:space-between;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 35px;
    }
    .CreateEventLastPage-Public-Showbox-Number-text {
          color: #707070;
    }
    .CreateEventLastPage-Public-Showbox-Number-number {
        color: #57B1E3;
    }

    .CreateEventLastPage-Public-Time {
        padding-bottom: 35px;
        padding-top: 35px;
    }
    .CreateEventLastPage-Public-Time-title {
         flex-direction: row;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
       
    }
    .CreateEventLastPage-Public-Time-title-text {
        font-size: 50px;
        color: #313131;
    }
    .CreateEventLastPage-Public-Time-title-text-img {
        width: 32px;
        height: 30px;
    }
    .CreateEventLastPage-Public-Time-content {
        margin-top: 43px;
    }
    .CreateEventLastPage-Public-Time-content-list {
        flex-direction: row;
        align-items: center ;
        justify-content:space-between;
        padding-top: 35px;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 35px;
        border-bottom-width: 2px;
        border-bottom-color: rgba(112, 112, 112, .34);
        border-bottom-style: solid;
    }
    .CreateEventLastPage-Public-Time-content-list-hui {
        color: #707070;
    }

    .CreateEventLastPage-Location {
        padding-bottom: 35px;
        padding-top: 35px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .CreateEventLastPage-Location-title {
        color: #313131;
        font-size: 50px;
        margin-bottom: 20px;
    }
    .CreateEventLastPage-Location-content {
        flex-direction: row;
        align-items: center ;
        justify-content:space-between;
         height: 62px;
        padding-left: 12px;
        padding-right: 12px;
        padding-bottom: 12px;
        padding-top: 12px;
        background-color: #F4F4F4;
        border-radius:18px;
       
    }
    .CreateEventLastPage-Location-input {
        width: 300px;
        height: 62px;
        font-size:25px;
        color: #242424;
        flex: 1;
    }
    .CreateEventLastPage-Location-img {
        width: 26px;
        height: 28px;
    }
    .CreateEventLastPage-Location-CoverImage {
        padding-top: 35px;
        padding-bottom: 35px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .CreateEventLastPage-Location-CoverImage-title {
        color: #313131;
        font-size: 50px;
    }
    .CreateEventLastPage-Location-CoverImage-img {
        width: 700px;
        height: 750px;
        margin-top: 18px;
        margin-bottom: 18px;
    }
    .CreateEventLastPage-Location-CoverImage-btn {
        flex-direction: row;
        align-items: center ;
        justify-content:center;
        height: 88px;
        margin-bottom: 18px;
        background-color: #57B1E3;
    }
    .CreateEventLastPage-Location-CoverImage-btn-img {
        width: 24px;
        height: 26px;  
        margin-right: 7px;
    }
    .CreateEventLastPage-Location-CoverImage-btn-img-pic {
        width: 34px;
        height: 34px;
        margin-right: 7px;
    }
    .CreateEventLastPage-Location-CoverImage-btn-imgphoto {
        width: 38px;
        height: 30px;
        margin-right: 7px;
    }
    .CreateEventLastPage-Location-CoverImage-btn-text {
        color: #ffffff;
        font-size: 30px;
    }

    .CreateEventLastPage-Location-Other {
        padding-top: 35px;
        padding-bottom: 35px;
    }
    .CreateEventLastPage-Location-Other-title {
       padding-left: 30px;
        color: #313131;
        font-size: 50px;
    }
    .CreateEventLastPage-Location-Other-list {
        flex-direction: row;
        align-items: center ;
        justify-content:space-between;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-bottom-width: 2px;
        border-bottom-color: rgba(112, 112, 112, .34);
        border-bottom-style: solid;
    }
    .CreateEventLastPage-Location-Other-list-text {
        color: #707070;
        font-size: 32px;
    }
    .CreateEventLastPage-Location-Other-list-select {
        flex-direction: row;
        align-items: center ;
        justify-content:space-between;
    }
    .CreateEventLastPage-Location-Other-list-select-text {
        color: #707070;
        font-size: 32px;
    }
    .CreateEventLastPage-Location-Other-list-select-img {
        width: 22px;
        height: 20px;
        margin-left: 18px;
    }
    .CreateEventLastPage-Location-Other-What {
        padding-left: 30px;
        padding-top: 30px;
        color: #707070;
        font-size: 32px;
    }
    .CreateEventLastPage-Location-Check {
         padding-top: 35px;
        padding-bottom: 201px;
          padding-left: 30px;
        padding-right: 30px;
    }
    .CreateEventLastPage-Location-Check-title {
        color: #313131;
        font-size: 50px;
    }
    .CreateEventLastPage-Location-Check-titleIntroduction {
         margin-bottom: 66px;
        color: #707070;
        font-size: 32px;
    }
    .CreateEventLastPage-Location-Check-selecttext {
        padding-bottom: 10px;
        margin-bottom: 16px;
        color: rgba(112, 112, 112, .5);
        font-size: 32px;
        border-bottom-width: 2px;
        border-bottom-color: rgba(112, 112, 112);
        border-bottom-style: solid;
        
    }
    .CreateEventLastPage-Location-Check-label {
         flex-direction: row;
        align-items: center ;
    }
    .CreateEventLastPage-Location-Check-label-img {
        width: 32px;
        height: 30px;
    }
    .CreateEventLastPage-Location-Check-label-text{
        color: #57B1E3;
        font-size: 32px;
    }
    .CreateEventLastPage-Location-Submit {
        flex-direction: row;
        align-items: center ;
        justify-content:center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 750px;
        height: 166px;
        background-color: #57B1E3;
        
    }
    .CreateEventLastPage-Location-Submit-text {
        color: #ffffff;
        font-size: 30px;
    }
</style>