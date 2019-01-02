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
                             <text class="CreateEventLastPage-Public-title-details-text"></text>
                             <div></div>
                         </div>
                   </div>
              </div>
        </scroller>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
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
        padding-bottom: 35px;
    }
    .CreateEventLastPage-Public-title {
        padding-left: 30px;
        padding-right: 30px;
    }
    .CreateEventLastPage-Public-title-text {
        color: #313131;
        font-size: 50px;
    }
    .CreateEventLastPage-Public-title-details {

    }
</style>