<template>
    <div class="HomeInvitesPage">
      <!--<Homeheaer></Homeheaer>-->
      <scroller class="scroller">
          <div class="HomeInvitesPage-content">
               <div class="HomeInvitesPage-content-box border-bottom" v-if="!isDoGo">
                    <div class="HomeInvitesPage-content-box-title">
                        <image class="HomeInvitesPage-content-box-title-img" src="local:///homeInvitesPageuser.png"></image>
                        <div class="HomeInvitesPage-content-box-title-area">
                            
                            <text class="HomeInvitesPage-content-box-title-contact">1st Degree Contact</text>
                            <text class="HomeInvitesPage-content-box-title-text">Sandy Invited You :</text>

                        </div>

                    </div>
                    <div class="HomeInvitesPage-content-box-image">
                        <image class="HomeInvitesPage-content-box-image-img" src="local:///c1a547731876c0ffea7f117f341d09f3.png"></image>
                        <div v-if="upsshow" class="HomeInvitesPage-content-box-image-ups">

                            <div class="HomeInvitesPage-content-box-image-upstextbox">
                            <text class="HomeInvitesPage-content-box-image-upstext" style="font-size: 46px;">Added successfully</text>
                            <text class="HomeInvitesPage-content-box-image-upstext" style="font-size: 46px;">to Upcoming Events</text>
                            </div>

                        </div>
                    </div>
                    <div class="HomeInvitesPage-content-box-text">
                        <text class="HomeInvitesPage-content-box-text-a">#Yoga #Sport</text>
                        <text class="HomeInvitesPage-content-box-text-name">Love Yoga</text>
                        <text class="HomeInvitesPage-content-box-text-date">Wed, Dec 11, 2018</text>
                        <text class="HomeInvitesPage-content-box-text-money">$15/person</text>
                    </div>
                    <div class="HomeInvitesPage-content-box-btn">
                          <div class="HomeInvitesPage-content-box-btn-btn can-btn">
                              <text @click="show" class="HomeInvitesPage-content-box-btn-btn-text">I Can Go</text>
                          </div>
                          <div class="HomeInvitesPage-content-box-btn-btn canot-btn">
                              <text class="HomeInvitesPage-content-box-btn-btn-text">I Can’t Go</text>
                          </div>
                    </div>
               </div>

                <div class="HomeInvitesPage-content-box HomeInvitesPage-content-box-list" v-if="!isVoted">
                    <div class="HomeInvitesPage-content-box-title">
                        <image class="HomeInvitesPage-content-box-title-img" src="local:///user_picture12.png"></image>
                        <div class="HomeInvitesPage-content-box-title-area">
                            <text class="HomeInvitesPage-content-box-title-contact">2nd Degree Contact</text>
                            <text class="HomeInvitesPage-content-box-title-text">David Invited You :</text>
                        </div>
                    </div>
                    <div class="HomeInvitesPage-content-box-image">
                        <image class="HomeInvitesPage-content-box-image-img" src="local:///event-image13.png"></image>
                        <div v-if="isVotedUps" class="HomeInvitesPage-content-box-image-ups">

                            <div class="HomeInvitesPage-content-box-image-upstextbox">
                                <text class="HomeInvitesPage-content-box-image-upstext" style="font-size: 56px;">Your vote is in!</text>
                                <text class="HomeInvitesPage-content-box-image-upstext" style="font-size: 36px; margin-top: 22px; width: 480px;">Final event time will appear in Upcoming Events once all votes are confirmed.</text>
                            </div>

                        </div>
                    </div>
                    <div class="HomeInvitesPage-content-box-text">
                        <text class="HomeInvitesPage-content-box-text-a">#TableTennis #Sport</text>
                        <text class="HomeInvitesPage-content-box-text-name">Table Tennis</text>   
                    </div>
                    <div class="HomeInvitesPage-content-box-select">
                          <div class="HomeInvitesPage-content-box-select-list">
                              <div class="HomeInvitesPage-content-box-select-list-textbox" @click="onVoteOptionSelected(1)">
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-text">Wed, Dec 11, 2018</text>
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-texttimer">3:00pm - 5:00pm</text>
                              </div>
                              <div class="HomeInvitesPage-content-box-select-list-iconbox" :class="[currentOptionIndex == 1 ? 'option-item-active' : '']"></div>
                          </div>

                           <div class="HomeInvitesPage-content-box-select-list" @click="onVoteOptionSelected(2)">
                              <div class="HomeInvitesPage-content-box-select-list-textbox">
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-text">Wed, Dec 11, 2018</text>
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-texttimer">4:00pm - 6:00pm</text>
                              </div>
                              <div class="HomeInvitesPage-content-box-select-list-iconbox" :class="[currentOptionIndex == 2 ? 'option-item-active' : '']"></div>
                          </div>
                           <div class="HomeInvitesPage-content-box-select-list" @click="onVoteOptionSelected(3)">
                              <div class="HomeInvitesPage-content-box-select-list-textbox">
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-text">Wed, Dec 11, 2018</text>
                                      <text class="HomeInvitesPage-content-box-select-list-textbox-texttimer">5:00pm - 7:00pm</text>
                              </div>
                              <div class="HomeInvitesPage-content-box-select-list-iconbox" :class="[currentOptionIndex == 3 ? 'option-item-active' : '']"></div>
                          </div>

                    </div>
                    <div class="HomeInvitesPage-content-box-btn">
                          <div class="HomeInvitesPage-content-box-btn-btn can-btn">
                              <text class="HomeInvitesPage-content-box-btn-btn-text" @click="onVoteClick">Vote</text>
                          </div>
                          <div class="HomeInvitesPage-content-box-btn-btn canot-btn">
                              <text class="HomeInvitesPage-content-box-btn-btn-text">I Can’t Go</text>
                          </div>
                    </div>
               </div>
              <find-activities v-if="isDoGo && isVoted"></find-activities>
          </div>

      </scroller>

    </div>
</template>

<script>
var navigator = weex.requireModule('navigator')
import Homeheaer from '@/components/Homeheaer'
import FindActivities from './HomeInvitesfindPage'
    export default {
        name:"HomeInvitesPage",
        components: {
            Homeheaer,
            FindActivities
        },
        data() {
            return {
                currentOptionIndex: 0,
                upsshow: false,
                isDoGo: false,
                isVoted: false,
                isVotedUps: false
            }
        },
         methods: { 
             show(){
                this.upsshow=true;
                setTimeout(() => {
                    this.isDoGo = true;
                },1000);
             },

             onVoteOptionSelected (optionIndex) {
                this.currentOptionIndex = optionIndex;
             },

             onVoteClick () {
                 if (this.currentOptionIndex != 0) {
                     this.isVotedUps = true;
                     setTimeout(() => {
                         this.isVoted = true;
                     },1000);
                 }
             }

         }


    }
</script>

<style scoped>
.border-bottom {
    padding-bottom: 34px ;
    border-bottom-width: 2px;
    border-top-color: #707070;
    border-top-style: solid;
}

.HomeInvitesPage-content {
    padding-bottom: 141px;
    margin-left: 22px;
    margin-right: 22px;
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


.HomeInvitesPage-content-box-image-ups {
    flex-direction: row; 
    align-items:center;
    position: absolute;
    top: 0;
    left: 0;
    width: 700px;
    height: 404px;
    background-color: #57B1E3;
    border-radius:30px;
}

.HomeInvitesPage-content-box-image-upstextbox {
    margin-left: 35px;
}

.HomeInvitesPage-content-box-image-upstext {
    font-size: 46px;
    color: #ffffff;
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

.HomeInvitesPage-content-box-list {
    /*padding-top: 50px;*/
    margin-top: 50px;
   
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
    border-radius:50%;
}
.HomeInvitesPage-content-box-select-list-textbox-text {
    margin-bottom: 12px;
    color: #696969;
}
.HomeInvitesPage-content-box-select-list-textbox-texttimer {
    color: #696969;
}

.option-item-active {
    background-color: #57B1E3;
}
</style>