<template>
    <div class="ContactAddFriendsPage">
         <!--<a href=""><image class="ContactAddFriendsPage-retreatx"  src="local:///retreatx.png" /></a>-->
         <scroller>
             <text class="ContactAddFriendsPage-title">Add Friends</text>
             <div class="ContactAddFriendsPage-searchbox">
                     <div class="ContactAddFriendsPage-searchinput">
                        <image class="ContactAddFriendsPage-searchinputimg" src="local:///search.png" />
                        <input type="text" placeholder="Mobile / Email" class="ContactAddFriendsPage-searchinputbox" />
                     </div>
                     <image class="ContactAddFriendsPage-searchboximg" src="local:///qr-code.png" />
             </div>
             <div class="ContactAddFriendsPage-match" @click="onMatchClick">
                  <image class="ContactAddFriendsPage-matchimg" src="local:///contactAddFriendsPage-matchimg.png" />
                  <div class="ContactAddFriendsPage-matchtextbox">
                      <text class="ContactAddFriendsPage-matchtextboxtext">MATCH</text>
                      <text class="ContactAddFriendsPage-matchtextboxtextdist">Click here to meet new people with similar hobbies</text>
                  </div>
             </div>

             <div class="ContactAddFriendsPage-Invite">
                 <text class="ContactAddFriendsPage-Invitetitle">Invite Friends To Use OpenInvite</text>
                 <div class="ContactAddFriendsPage-Invitebox">
                      <div class="ContactAddFriendsPage-Inviteboxlist">
                              <image class="ContactAddFriendsPage-Inviteboxlistwhatsapp"  src="local:///whatsapp.png" />
                              <text class="ContactAddFriendsPage-Inviteboxlisttext">Through WhatsApp</text>
                      </div>
                       <div class="ContactAddFriendsPage-Inviteboxlist">
                              <image class="ContactAddFriendsPage-Inviteboxlistchat"  src="local:///chat-bubbles-with-ellipsis.png" />
                              <text class="ContactAddFriendsPage-Inviteboxlisttext">Through SMS</text>
                      </div>

                      <div class="ContactAddFriendsPage-Inviteboxlist">
                              <image class="ContactAddFriendsPage-Inviteboxlistclose"  src="local:///close-envelope.png" />
                              <text class="ContactAddFriendsPage-Inviteboxlisttext">Through Email</text>
                      </div>
                 </div>
             </div>

         </scroller>
    </div>
</template>

<script>
    const swifter = weex.requireModule('swifter');

    export default {
        name:"ContactAddFriendsPage",
        data() {
            return {
                
            }
        },
        methods: {
            onMatchClick () {
                swifter.openMeetNewFriendsPage();
            }
        }
    }
</script>

<style scoped>
.ContactAddFriendsPage {
    background-color: #57B1E3;
}
.ContactAddFriendsPage-retreatx {
    width: 26px;
    height: 44px;
    margin-top: 88px;
    margin-left: 20px;
}
.ContactAddFriendsPage-title {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 70px;
    color: #ffffff;
}
.ContactAddFriendsPage-searchbox {
    flex-direction: row;
    justify-content:space-between;
    align-items:center ;
    margin-top: 23px;
    margin-left: 21px;
    margin-right: 37px;
}
.ContactAddFriendsPage-searchinput {
    flex-direction: row;
    justify-content:space-around;
    align-items:center ;
    width: 552px;
    height: 64px;
    padding-left: 17px;
    padding-right: 17px;
    background-color: #ffffff;
    border-radius:50px;
}
.ContactAddFriendsPage-searchboximg {
    width: 56px;
    height: 56px;
}
.ContactAddFriendsPage-searchinputimg {
    width: 42px;
    height: 42px;
    margin-right: 10px;
}
.ContactAddFriendsPage-searchinputbox {
    flex: 1;
    height: 64px;
    background-color: #ffffff;
    border-radius:50px;
    font-size: 28px;
    color: #707070;
}
.ContactAddFriendsPage-match {
    flex-direction: row;
    align-items:center ;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 60px;
    margin-top: 36px;
    border-top-width: 2px;
    border-top-color: #ffffff;
    border-top-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: #ffffff;
    border-bottom-style: solid;
}

.ContactAddFriendsPage-matchimg {
    width: 118px;
    height: 118px;
    margin-right: 18px;
}

.ContactAddFriendsPage-matchtextbox {
    flex: 1;
}

.ContactAddFriendsPage-matchtextboxtext {
    font-size: 68px;
    color: #ffffff;
}
.ContactAddFriendsPage-matchtextboxtextdist {
    width: 466px;
    flex-wrap: wrap;
    font-size: 28px;
    color: #ffffff;
}
.ContactAddFriendsPage-Invite {
     margin-top: 59px;
}
.ContactAddFriendsPage-Invitetitle {
    padding-left: 38px;
    color: #ffffff;
    font-size: 28px;
}
.ContactAddFriendsPage-Invitebox {
    margin-top: 24px;
}
.ContactAddFriendsPage-Inviteboxlist {
    flex-direction: row;
    align-items:center ;
    height: 104px;
    padding-left: 30px;
    margin-bottom: 16px;
    background-color: #ffffff;
}
.ContactAddFriendsPage-Inviteboxlistwhatsapp {
    width: 60px;
    height: 60px;
    margin-right: 22px;
}
.ContactAddFriendsPage-Inviteboxlisttext {
    color: #707070;
    font-size: 28px;
}
.ContactAddFriendsPage-Inviteboxlistchat {
    width: 62px;
    height: 50px;
    margin-right: 22px;
}
.ContactAddFriendsPage-Inviteboxlistclose {
    width: 56px;
    height: 40px;
    margin-right: 22px;
}
</style>