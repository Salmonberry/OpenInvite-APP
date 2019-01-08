<template>
    <div class="EventDetailsPage">
     <scroller class="scroller" @scroll="onScroll">
           <div class="EventDetailsPage-banner">
               <image class="EventDetailsPage-banner-img" src="local:///b7176d9c4af27430c302b792cbd2315c.png"  />
               <!--<image class="EventDetailsPage-banner-retreatx" src="local:///retreatx.png"  />-->
           </div>
           <div class="EventDetailsPage-content">

                <div class="EventDetailsPage-content-box">
                    <text class="EventDetailsPage-content-user-labeltext">#Coffee #Beverage</text>
                    <text class="EventDetailsPage-content-user-nametext">Latte Please !</text>

                    <div v-if="condition" class="EventDetailsPage-content-user-statustext-box" @click="close">
                            <text class="EventDetailsPage-content-user-statustext">I’m going</text>
                            <image class="EventDetailsPage-content-user-statusimg" src="local:///statusCorrect.png"/>
                    </div>
                    <div class="EventDetailsPage-content-userbtn" @click="onShareClick"><image class="EventDetailsPage-content-userbtn-img" src="local:///sharing-interface.png"/></div>
                </div>

                 <div class="EventDetailsPage-content-box">
                    <text class="EventDetailsPage-content-user-labeltext">Location : </text>
                    <div class="EventDetailsPage-content-user-namepoint">
                          <text class="EventDetailsPage-content-user-nametext">ABC Cafe</text>
                          <image class="EventDetailsPage-content-user-namepointimg" src="local:///maps-and-flags.png"/>
                    </div>
                    <text class="EventDetailsPage-content-point-statustext">C,12/F, ABCD street , Hong Kong</text>
                </div>

                <div class="EventDetailsPage-content-box">
                    <text class="EventDetailsPage-content-user-labeltext">Date :</text>
                    <div class="EventDetailsPage-content-point-statustext-box">
                    <text class="EventDetailsPage-content-point-statustext data-text">Wed, Dec 11, 2018</text>
                    <text class="EventDetailsPage-content-point-statustext data-text">3:00pm - 5:00pm</text>
                    </div>
                    <div class="EventDetailsPage-content-box-data-btn">
                        <text class="EventDetailsPage-content-box-data-btntext">You Are Available</text>
                    </div>
                </div>

                <div class="EventDetailsPage-content-box">
                      <text class="EventDetailsPage-content-user-labeltext">About :</text>
                      <text class="EventDetailsPage-content-about-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</text>
                </div>

                 <div class="EventDetailsPage-content-itembox">
                      <text class="EventDetailsPage-content-user-labeltext itemtext">Item Check List :</text>

                      <div class="EventDetailsPage-content-itemlistbox">

                          <div class="EventDetailsPage-content-itembox-list">
                               <text>Switch</text>
                               <div class="EventDetailsPage-content-itembox-listimg">
                                   <image class="EventDetailsPage-content-itembox-listimg-img" src="local:///addimg.png"/>
                                   <image class="EventDetailsPage-content-itembox-listimg-img" src="local:///add.png"/>
                               </div>
                          </div>

                          <div class="EventDetailsPage-content-itembox-list EventDetailsPage-content-itembox-list-with">
                               <text>Poker</text>
                               <div class="EventDetailsPage-content-itembox-listimg">
                                   <image class="EventDetailsPage-content-itembox-listimg-img" src="local:///user_picture8.png"/>
                                   <image class="EventDetailsPage-content-itembox-listimg-img" src="local:///add.png"/>
                               </div>
                          </div>

                      </div>
                </div>

                <div class="EventDetailsPage-content-box">
                      <text class="EventDetailsPage-content-user-labeltext">Participant (12) :</text>
                      <div class="EventDetailsPage-content-part-list">
                          <div class="EventDetailsPage-content-part-user">
                              <image class="EventDetailsPage-content-part-user-img" src="local:///user_picture25.png"/>
                              <text class="EventDetailsPage-content-part-user-text font-color-gray">John Nixon</text>
                          </div>

                          <div class="EventDetailsPage-content-part-comment">
                              <text class="EventDetailsPage-content-part-comment-text">1st Degree Contact</text>
                          </div>
                      </div>

                       <div class="EventDetailsPage-content-part-list">
                          <div class="EventDetailsPage-content-part-user">
                              <image class="EventDetailsPage-content-part-user-img" src="local:///user_picture4.png"/>
                              <text class="EventDetailsPage-content-part-user-text font-color-gray">Jerome Martin</text>
                          </div>

                          <div class="EventDetailsPage-content-part-comment">
                              <text class="EventDetailsPage-content-part-comment-text">1st Degree Contact</text>
                          </div>
                      </div>
                       <div class="EventDetailsPage-content-part-list">
                          <div class="EventDetailsPage-content-part-user">
                              <image class="EventDetailsPage-content-part-user-img" src="local:///user_picture8.png"/>
                              <text class="EventDetailsPage-content-part-user-text font-color-gray">Vanessa Mendez</text>
                          </div>

                          <div class="EventDetailsPage-content-part-comment">
                              <text class="EventDetailsPage-content-part-comment-text">1st Degree Contact</text>
                          </div>
                      </div>
                       <div class="EventDetailsPage-content-part-list">
                          <div class="EventDetailsPage-content-part-user">
                              <image class="EventDetailsPage-content-part-user-img" src="local:///user_picture6.png"/>
                              <text class="EventDetailsPage-content-part-user-text font-color-gray">John Nixon</text>
                          </div>

                          <div class="EventDetailsPage-content-part-comment">
                              <text class="EventDetailsPage-content-part-comment-text">1st Degree Contact</text>
                          </div>
                      </div>
                    <div class="EventDetailsPage-content-part-list">
                        <div class="EventDetailsPage-content-part-user">
                            <image class="EventDetailsPage-content-part-user-img" src="local:///user_picture26.png"/>
                            <text class="EventDetailsPage-content-part-user-text font-color-gray">Ruth Dixon</text>
                        </div>

                        <div class="EventDetailsPage-content-part-addFriend">
                            <text class="EventDetailsPage-content-part-addFriend-text">+ Friend</text>
                        </div>
                    </div>
                    <div class="EventDetailsPage-content-part-list">
                        <div class="EventDetailsPage-content-part-user">
                            <image class="EventDetailsPage-content-part-user-img" src="local:///user_picture27.png"/>
                            <text class="EventDetailsPage-content-part-user-text font-color-gray">Carolyn Mazzariello</text>
                        </div>

                        <div class="EventDetailsPage-content-part-addFriend">
                            <text class="EventDetailsPage-content-part-addFriend-text">+ Friend</text>
                        </div>
                    </div>
                </div>



           </div>

      </scroller>


    <div ref="test" class="EventDetailsPage-suspension-btn" @click="move">
                    <text class="EventDetailsPage-suspension-btn-text">JOIN</text>
    </div>

    <div  ref="boxss"  class="EventDetailsPage-suspension-box">
                    <text class="EventDetailsPage-suspension-box-text">The event was successfully add to your upcoming event !</text>
                    <image class="EventDetailsPage-suspension-box-img" src="local:///checked.png" />
    </div>
      <div v-if="ups" class="EventDetailsPage-ups">
          <div class="EventDetailsPage-ups-content">
               <image class="EventDetailsPage-ups-content-Closed" @click="close" src="local:///eventDetailsPage-ups-content-Closed.png" />
               <text class="EventDetailsPage-ups-content-text">Are you sure you cannot attend this event?</text>
               <div class="EventDetailsPage-ups-content-btn" @click="btnclose">
                   <text class="EventDetailsPage-ups-content-btn-text">I can’t attend this event</text>
               </div>
          </div>
      </div>

    </div>
</template>

<script>
const animation = weex.requireModule('animation');
const storage = weex.requireModule('storage');
const modal = weex.requireModule('modal');
const swifter = weex.requireModule('swifter');
    export default {
        name:'EventDetailsPage',
        data() {
            return {
                condition:false,
                ups:false
            }
        },
        methods: {
            move () {
                var testEl = this.$refs.test;
                animation.transition(testEl, {
                    styles: {
                        opacity:"0"
                    },
                    duration: 800, //ms
                    timingFunction: 'ease',
                    needLayout:false,
                    delay: 0 //ms
                    });
                    
                this.condition=!this.condition; 
                    this.movetwo()
            },
            
             movetwo(){
                 var that=this;
                 var boxs = this.$refs.boxss;
                 animation.transition(boxs, {
                            styles: {
                            transform: 'translateY(1050px)'
                            },
                            duration: 800, //ms
                            timingFunction: 'ease',
                            needLayout:false,
                            delay: 0 //ms
                            },function(){
                               setTimeout(function(){
                                    that.movethree()
                               },1000);

                            })
             },
            
             movethree(){
                 var boxs = this.$refs.boxss;
                     animation.transition(boxs, {
                            styles: {
                            transform: 'translateY(1850px)'
                            },
                            duration: 800, //ms
                            timingFunction: 'ease',
                            needLayout:false,
                            delay: 0 //ms
                            })
             },
            
            close(){
               this.ups=!this.ups
            },
            btnclose(){
                this.condition=false;
                this.ups=!this.ups
            },

            onShareClick () {
                storage.setItem('page','sharePage');
                swifter.openWhitePage('createEvent/CreateEventInviteContactsPage.js');
            },

            onScroll (event) {
                swifter.notifyContentScroll(event.contentOffset.y)
            }

        },
    }
</script>

<style scoped>
.font-color-gray {
    color: #696969;
}

.EventDetailsPage-banner {
    position: relative;
}
.EventDetailsPage-banner-img {
    width: 750px;
    height: 750px;
}
.EventDetailsPage-banner-retreatx {
    position: absolute;
    left: 26px;
    top: 44px;
    width: 26px;
    height: 44px;
}
.EventDetailsPage-content {
    margin-top: 35px;
}
.EventDetailsPage-content-box {
    position: relative;
    padding-top: 23px;
    padding-left: 26px;
    padding-right: 26px;
    padding-bottom: 23px;
    border-bottom-width: 2px;
    border-bottom-color: rgba(112, 112, 112, .22);
    border-bottom-style: solid;
}

.EventDetailsPage-content-user-labeltext {
    margin-bottom: 36px;
    color: #57B1E3;
}

.EventDetailsPage-content-part-user-text {
    font-size: 28px;
}

.EventDetailsPage-content-user-nametext {
    font-size: 42px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.EventDetailsPage-content-user-statustext-box {
     flex-direction: row;
     align-items:center;
}

.EventDetailsPage-content-user-statustext {
    color: #30E3AC;
}
.EventDetailsPage-content-user-statusimg {
    width: 34px;
    height: 34px;
    margin-left: 10px;
}
.EventDetailsPage-content-userbtn {
    position: absolute;
    top: 26px;
    right: 26px;
    flex-direction: row;
    justify-content:center ;
    align-items:center;
    width: 66px;
    height: 66px;
    border-radius:50%;
    background-color: #EC2079;
    box-shadow:4px 4px 6px rgba(0, 0, 0, .16);
}
.EventDetailsPage-content-userbtn-img {
    width: 30px;
    height: 30px; 
}
.EventDetailsPage-content-user-namepoint {
    flex-direction: row;
    align-items:center;
}
.EventDetailsPage-content-user-namepointimg {
    width: 28px;
    height: 38px;
    margin-left: 10px;
}
.EventDetailsPage-content-point-statustext-box {
    margin-top: 9px;
}
.data-text {
    margin-bottom: 9px;
}
.EventDetailsPage-content-box-data-btn {
    flex-direction: row;
    justify-content:center ;
    align-items:center;
    width: 300px;
    height: 65px;
    background-color: #30E3AC;
}
.EventDetailsPage-content-box-data-btntext {
    color: #ffffff;
}

.EventDetailsPage-content-itembox {
    position: relative;
    padding-top: 23px;
    padding-right: 26px;
    padding-bottom: 23px;
    border-bottom-width: 2px;
    border-bottom-color: rgba(112, 112, 112, .22);
    border-bottom-style: solid;
}

.itemtext {
    padding-left: 26px;
}

.EventDetailsPage-content-itemlistbox {
    margin-top: 14px;
}

.EventDetailsPage-content-itembox-list {
    flex-direction: row;
    justify-content:space-between ;
    align-items:center;
    padding-left: 26px;
    padding-right: 26px;
    padding-top: 18px;
    padding-bottom: 18px;
    background-color: #F2F2F2;
}
.EventDetailsPage-content-itembox-listimg {
    flex-direction: row;
    justify-content:space-between ;
    align-items:center;
}

.EventDetailsPage-content-itembox-listimg-img {
   width: 64px;
   height: 64px;
   margin-right: 12px;
}

.EventDetailsPage-content-itembox-list-with {
    background-color: #ffffff;
}

.EventDetailsPage-content-part-list {
    flex-direction: row;
    align-items:center ;
    justify-content:space-between;
    padding-top: 18px;
    padding-bottom: 18px;
    border-bottom-width: 2px;
    border-bottom-color: #707070;
    border-bottom-style: solid;
}
.EventDetailsPage-content-part-user {
    flex-direction: row;
    align-items:center ;
}
.EventDetailsPage-content-part-user-img {
    width: 70px;
    height: 70px;
    margin-right: 16px;
}
.EventDetailsPage-content-part-comment {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius:26px;
    background-color: #57B1E3;
}
.EventDetailsPage-content-part-comment-text {
    font-size: 22px;
    color: #ffffff;
}
.EventDetailsPage-suspension-btn {
    flex-direction: row;
    align-items:center ;
    justify-content:center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 156px;
    height: 156px;
    border-radius:78px;
    box-shadow:2px 4px 20px #333333;
    background-color: #30E3AC;
}
.EventDetailsPage-suspension-btn-text {
    color: #ffffff;
}
.EventDetailsPage-suspension-box {
    flex-direction: row;
    align-items:center ;
    justify-content:space-around;
    position: fixed;
    transform: translateY(1850px);
    right: 0;
    width: 750px;
    height: 204px;
    background-color: #30E3AC;
    box-shadow:2px -2px 20px #333333;
    
}
.EventDetailsPage-suspension-box-text {
    width: 476px;
    color: #ffffff;
    font-size: 30px;
}
.EventDetailsPage-suspension-box-img  {
   width: 66px;
   height: 50px;
}
.EventDetailsPage-ups {
    flex-direction: row;
    align-items:center ;
    justify-content:center;
    position: fixed;
    top: 0;
    left: 0;
    width: 750px;
    height: 1500px;
    background-color: rgba(0, 0, 0, .37);
}
.EventDetailsPage-ups-content {
    width: 614px;
    height: 462px;
    border-radius:18px;
    background-color: #ffffff;
}
.EventDetailsPage-ups-content {
    flex-direction: column;
    align-items:center ;
    justify-content:center;
}

.EventDetailsPage-ups-content-Closed {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 42px;
    height: 42px;
}
.EventDetailsPage-ups-content-text {
    width: 376px;
    color: #696969;
    font-size: 34px;
    text-align: center;
}
.EventDetailsPage-ups-content-btn {
    flex-direction: row;
    align-items:center ;
    justify-content:center;
    width: 522px;
    height: 68px;
    margin-top: 47px;
    background-color: #EC2079;
    border-radius:18px;
}
.EventDetailsPage-ups-content-btn-text {
    color: #ffffff;
}

.EventDetailsPage-content-part-addFriend {
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 40px;
    border-color: #707070;
    border-width: 1px;
    border-radius: 28px;
}

.EventDetailsPage-content-part-addFriend-text {
    text-align: center;
    font-size: 22px;
    color: #696969;
}
</style>