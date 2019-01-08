<template>
    <div class="HomeInvitesPage-content">
           <div class="HomeInvitesPage-content-box HomeInvitesPage-content-box-list">
                    <div class="HomeInvitesPage-content-box-title">
                        <image class="HomeInvitesPage-content-box-title-img" src="/src/images/user_picture12.png"></image>
                        <div class="HomeInvitesPage-content-box-title-area">
                            <text class="HomeInvitesPage-content-box-title-contact">2nd Degree Contact</text>
                            <text class="HomeInvitesPage-content-box-title-text">David Invited You :</text>
                        </div>
                    </div>
                    <div class="HomeInvitesPage-content-box-image">
                        <image class="HomeInvitesPage-content-box-image-img" src="/src/images/event-image13.png"></image>

                        <div v-if="maskshow" class="HomeInvitesPage-content-box-mask">
                              
                              <div class="HomeInvitesPage-content-box-masktextbox">
                                   <text class="HomeInvitesPage-content-box-masktextboxtitle">Your vote is in!</text>
                                   <text class="HomeInvitesPage-content-box-masktextboxcontent">Final event time will appear in Upcoming Events once all votes are confirmed.</text>
                              </div>


                        </div>


                    </div>
                    <div class="HomeInvitesPage-content-box-text">
                        <text class="HomeInvitesPage-content-box-text-a">#TableTennis #Sport</text>
                        <text class="HomeInvitesPage-content-box-text-name">Table Tennis</text>   
                    </div>
                    <div class="HomeInvitesPage-content-box-select">

                          <div class="HomeInvitesPage-content-box-select-list" @click="boxbright">
                              <div class="HomeInvitesPage-content-box-select-list-textbox">
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-text">Wed, Dec 11, 2018</text>
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-texttimer">3:00pm - 5:00pm</text>
                              </div>
                              <div :class="boxbrighttr ? 'HomeInvitesPage-content-box-select-list-iconbox iconboxbright': 'HomeInvitesPage-content-box-select-list-iconbox' "></div>
                          </div>

                           <div class="HomeInvitesPage-content-box-select-list">
                              <div class="HomeInvitesPage-content-box-select-list-textbox">
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-text">Wed, Dec 11, 2018</text>
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-texttimer">4:00pm - 6:00pm</text>
                              </div>
                              <div class="HomeInvitesPage-content-box-select-list-iconbox"></div>
                          </div>
                           <div class="HomeInvitesPage-content-box-select-list">
                              <div class="HomeInvitesPage-content-box-select-list-textbox">
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-text">Wed, Dec 11, 2018</text>
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-texttimer">5:00pm - 7:00pm</text>
                              </div>
                              <div class="HomeInvitesPage-content-box-select-list-iconbox"></div>
                          </div>

                    </div>
                    <div class="HomeInvitesPage-content-box-btn">
                          <div class="HomeInvitesPage-content-box-btn-btn can-btn" @click="vote">
                              <text class="HomeInvitesPage-content-box-btn-btn-text">Vote</text>
                          </div>
                          <div class="HomeInvitesPage-content-box-btn-btn canot-btn">
                              <text class="HomeInvitesPage-content-box-btn-btn-text">I Can’t Go</text>
                          </div>
                    </div>
               </div>     
    </div>
</template>

<script>
var navigator = weex.requireModule('navigator')
    export default {
        data() {
            return {
                boxbrighttr:false,
                maskshow:false
            }
        },
         methods: {
           boxbright(){
               this.boxbrighttr=true;
           },
           vote(){
               if(this.boxbrighttr){
                    this.maskshow=true;
                    setTimeout(function(){
                    navigator.push({
                        url: './HomeInvitesfindPage.html',
                        animated: "true"
                    })
                   },1000);
               }
           }

         }
    }
</script>

<style scoped>
.HomeInvitesPage-content {
    padding-bottom: 141px;
    padding-left: 22px;
    padding-right: 22px;
    margin-top: 35px;
}

.HomeInvitesPage-content-box-title {
    flex-direction: row;
    align-items:center;
}

.HomeInvitesPage-content-box-title-contact {
    font-size: 22px;
    color: #EC2079;
}

.HomeInvitesPage-content-box-title-img {
    width: 74px;
    height: 74px;
    margin-right: 20px;
}
.HomeInvitesPage-content-box-image {
    position: relative;
    margin-top: 32px;
}
.HomeInvitesPage-content-box-image-img {
    width: 700px;
    height: 404px;
}
.HomeInvitesPage-content-box-mask {
    flex-direction: row;
    align-items:center ;
    position: absolute;
    top: 0;
    left: 0;
    width: 700px;
    height: 404px;
    background-color: #57B1E3;
    border-radius:18px;
}
.HomeInvitesPage-content-box-masktextbox {
    width: 482px;
    margin-left: 20px;
}
.HomeInvitesPage-content-box-masktextboxtitle {
    margin-bottom: 17px;
    font-size: 56px;
    color:#ffffff;
}
.HomeInvitesPage-content-box-masktextboxcontent {
   font-size: 36px;
   color:#ffffff;
}

.HomeInvitesPage-content-box-text {
    margin-top: 12px;
    margin-bottom: 16px;
}
.HomeInvitesPage-content-box-text-a {
    color: #57B1E3;
}
.HomeInvitesPage-content-box-text-name {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 44px;
}
.HomeInvitesPage-content-box-text-date {
  color: rgba(0, 0, 0, .55);
}

.HomeInvitesPage-content-box-text-money {
    margin-top: 26px;
    font-size: 32px;
    color: #EC2079;
}

.HomeInvitesPage-content-box-btn {
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
}
.HomeInvitesPage-content-box-btn-btn {
    flex-direction: row;
    justify-content:center;
    align-items:center;
    width: 310px;
    height: 82px;
    border-radius:20px;
}
.can-btn {
    background-color: #57B1E3;
}
.canot-btn {
     background-color: #DE7676;
}
.HomeInvitesPage-content-box-btn-btn-text {
    color: #ffffff;
}

.HomeInvitesPage-content-box-select {
    margin-bottom: 32px;
}
.HomeInvitesPage-content-box-select-list {
    flex-direction: row;
    justify-content:space-between;
    align-items:center ;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-width: 2px;
    border-color: #707070;
    border-style: solid;
    margin-bottom: 18px;
    border-radius:20px;
}

.HomeInvitesPage-content-box-select-list-iconbox {
    width: 20px;
    height: 20px;
    background-color: #CBCBCB;
    border-radius: 10px;
}

.iconboxbright {
     background-color: #57B1E3;
}

.HomeInvitesPage-content-box-select-list-textbox-text {
    margin-bottom: 12px;
    color: #696969;
}
.HomeInvitesPage-content-box-select-list-textbox-texttimer {
    color: #696969;
}

</style>