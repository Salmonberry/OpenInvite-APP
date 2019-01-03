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
                                     <text ref="no" class="CreateEventLastPage-Public-title-details-btn-text">NO</text>
                                     <div ref="btn" class="CreateEventLastPage-Public-title-details-btn-img"></div>
                                     <text ref="yes" class="CreateEventLastPage-Public-title-details-btn-text-yes">YES</text>
                             </div>
                         </div>
                   </div>

                   <div ref="Showbox" class="CreateEventLastPage-Public-Showbox">
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
              </div>

        </scroller>
    </div>
</template>

<script>
const animation = weex.requireModule('animation')
    export default {
        data() {
            return {
                statuss:true
            }
        },
        methods:{
            slide(){
                var testEl = this.$refs.test;
                var btn = this.$refs.btn;
                var no = this.$refs.no;
                var yes = this.$refs.yes;
                var Showbox = this.$refs.Showbox;
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

                    animation.transition(no, {
                    styles: {
                          display: 'none'
                    },
                    });

                    animation.transition(yes, {
                    styles: {
                          display: 'block'
                    },
                    });
                    animation.transition(Showbox, {
                    styles: {
                          display: 'block'
                    },
                    });

                    this.statuss=false;
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

                    animation.transition(no, {
                    styles: {
                          display: 'block'
                    },
                    });

                    animation.transition(yes, {
                    styles: {
                          display: 'none'
                    },
                    });

                    animation.transition(Showbox, {
                    styles: {
                          display: 'none'
                    },
                    });

                    this.statuss=true;

                }

                   
            }
        }
    }
</script>

<style scoped>
 .header {
        display: flex;
        flex-direction: row;
        padding-top: 82px;
        height: 122px;
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
        font-size: 30px;
        color: #242424;
        margin-left: 233.8px;
    }
    
     .main {
        margin-top: 81.2px;
        padding-left: 38px;
        padding-right: 40px;
    }
    
    .CreateEventLastPage-title {
        border-bottom-width: 2px;
        border-bottom-color: rgba(112, 112, 112, .48);
        border-bottom-style: solid;
    }
    .CreateEventLastPage-title-text {
        color: #313131;
        font-size: 50px;
        padding-bottom: 16px;
    }
    .CreateEventLastPage-label {
         margin-top: 20px;
         flex-direction: row;
         flex-wrap:wrap ;
         align-items:center ;
    }
    .CreateEventLastPage-label-list {
        background-color: #57B1E3;
        width: auto;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 28px;
        padding-right: 28px;
        border-radius:18px;
        margin-right: 10px;
        margin-bottom: 10px;
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
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom-width: 2px;
        border-bottom-color: rgba(112, 112, 112, .24);
        border-bottom-style: solid;
        flex-direction: row;
        align-items:center ;
        justify-content:space-between;
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
       margin-top: 23px;
        flex-direction: row;
        align-content: center ;
        justify-content:space-between;
    }
    .CreateEventLastPage-Public-title-details-text {
        color: #707070;
    }
    .CreateEventLastPage-Public-title-details-btn {
        width: 104px;
        height: 42px;
        background-color: #707070;
        border-radius:18px;
        flex-direction: row;
        align-items:  center;
        position: relative;
    }
    .CreateEventLastPage-Public-title-details-btn-text {
        color: #ffffff;
        margin-left: 20px;
        font-size: 18px;
    }
    .CreateEventLastPage-Public-title-details-btn-img {
        width: 28px;
        height: 28px;
        background-color: #57B1E3;
        border-radius:50%;
        position: absolute;
        right: 10px;
    }
     .CreateEventLastPage-Public-title-details-btn-text-yes {
        color: #ffffff;
        font-size: 18px;
        display: none;
        margin-left: 50px;
    }
    .CreateEventLastPage-Public-Showbox {
        padding-bottom: 35px;
        display: none;
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
        padding-left: 30px;
        padding-right: 30px;
        flex-direction: row;
        align-items: center;
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
</style>