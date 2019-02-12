<template>
    <div class="HomeExplorePage">
      <!--<Homeheaer></Homeheaer>-->
      <scroller class="scroller">
      <div class="HomeExplorePage-content">
            <div class="HomeExplorePage-search-box">
                  <div class="HomeExplorePage-search">
                      <input class="HomeExplorePage-search-input" type="text"/>
                      <image class="HomeExplorePage-search-img" src="local:///search.png"></image>
                  </div>
                  <div class="HomeExplorePage-search-btn"><image class="HomeExplorePage-search-btn-img" src="local:///filter-tool-black-shape.png"></image></div>
            </div>

           <div class="HomeExplorePage-list">
                <div class="HomeExplorePage-list-title-box">
                    <text class="HomeExplorePage-list-title-title">Trending  #</text>
                   <a> <text class="HomeExplorePage-list-title-a">See All</text></a>
                </div>
                <div class="HomeExplorePage-list-content">
                    <scroller class="scroller HomeExplorePage-list-content-scroller" style="height: 304px;" scroll-direction="horizontal" show-scrollbar='false'>
                             <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///homeExplorePage-list-content-tabl-imgt1.png"></image>
                                 <image class="HomeExplorePage-list-content-tabl-img-bg" src="local:///homeExplorePage-list-content-tabl-img-bg.png"></image>
                                 <text class="HomeExplorePage-list-content-tabl-text">#FineDining</text>
                             </div>
                              <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///homeExplorePage-list-content-tabl-imgt2.png"></image>
                                 <image class="HomeExplorePage-list-content-tabl-img-bg" src="local:///homeExplorePage-list-content-tabl-img-bg.png"></image>
                                 <text class="HomeExplorePage-list-content-tabl-text">#Yoga</text>
                             </div>

                    </scroller>

                </div>
           </div>

            <div class="HomeExplorePage-list">
                <div class="HomeExplorePage-list-title-box">
                    <text class="HomeExplorePage-list-title-title">What’s Hot</text>
                   <a> <text class="HomeExplorePage-list-title-a">See All</text></a>
                </div>
                <div class="HomeExplorePage-list-content">
                    <scroller class="scroller HomeExplorePage-list-content-scroller" style="height: 370px;" scroll-direction="horizontal" show-scrollbar='false'>
                             <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///homeExplorePage-list-content-tabl-imgh1.png"></image>

                                 <div class="HomeExplorePage-list-content-Hot-text">
                                     <text class="HomeExplorePage-list-content-Hot-text-a">#Drawing #Painting #Relax</text>
                                 </div>
                                 <text class="event-title">Draw Something</text>
                                 <text class="event-date">Wed, Dec 11, 2018</text>
                             </div>
                              <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///homeExplorePage-list-content-tabl-imgh2.png"></image>
                                  <div class="HomeExplorePage-list-content-Hot-text">
                                      <text class="HomeExplorePage-list-content-Hot-text-a">#Running #Sport</text>
                                  </div>

                                  <text class="event-title">RUN!!!!</text>
                                  <text class="event-date">Wed, Dec 11, 2018</text>

                             </div>

                    </scroller>

                </div>
           </div>

            <div class="HomeExplorePage-list">
                <div class="HomeExplorePage-list-title-box">
                    <text class="HomeExplorePage-list-title-title">Your Friends Are Attending</text>
                   <a> <text class="HomeExplorePage-list-title-a">See All</text></a>
                </div>
                <div class="HomeExplorePage-list-content">
                    <scroller class="scroller HomeExplorePage-list-content-scroller" style="height: 450px;" scroll-direction="horizontal" show-scrollbar='false'>
                             <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///homeExplorePage-list-content-tabl-imgf1.png"></image>

                                 <div class="HomeExplorePage-list-content-Hot-text">
                                     <text class="HomeExplorePage-list-content-Hot-text-a">#Drawing #Painting #Relax</text>
                                     <text class="HomeExplorePage-list-content-Hot-text-user">Guitar Sharing</text>
                                     <text class="HomeExplorePage-list-content-Hot-text-date">Wed, Dec 11, 2018</text>
                                 </div>
                                 <div class="HomeExplorePage-list-content-Hot-imgbox">
                                     <image class="HomeExplorePage-list-content-Hot-img" src="local:///user_picture2.png"/>
                                     <image class="HomeExplorePage-list-content-Hot-img" src="local:///user_picture11.png"/>
                                 </div>

                             </div>
                              <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///homeInvitesPage-content-box-image-img.png"></image>

                                  <div class="HomeExplorePage-list-content-Hot-text">
                                      <text class="HomeExplorePage-list-content-Hot-text-a">#Yoga #Sport</text>
                                      <text class="HomeExplorePage-list-content-Hot-text-user">Love Yoga</text>
                                      <text class="HomeExplorePage-list-content-Hot-text-date">Wed, Dec 11, 2018</text>
                                  </div>
                                  <div class="HomeExplorePage-list-content-Hot-imgbox">
                                      <image class="HomeExplorePage-list-content-Hot-img" src="local:///homeExplorePage-list-content-tabl-imgfuser_picture3.png"/>
                                  </div>

                              </div>

                    </scroller>
                </div>
           </div>

           <div class="HomeExplorePage-box">
               <text class="HomeExplorePage-box-title">You May Like</text>
               <a @click="eventDetails"><image class="HomeExplorePage-box-img" src="local:///homeExplorePage-list-content-tabl-imgl1.png" /></a>
               <div class="HomeExplorePage-box-label">
                     <text class="HomeExplorePage-box-label-text"> #Snooker </text>
                     <text class="HomeExplorePage-box-label-text">  #Sport</text>
               </div>
               <text class="HomeExplorePage-box-user">Snooker Is Fun</text>
               <text class="HomeExplorePage-box-date">Wed, Dec 11, 2018</text>
           </div>

            <div class="HomeExplorePage-box">
               <a><image class="HomeExplorePage-box-img" src="local:///homeExplorePage-list-content-tabl-imgl2.png" /></a>
               <div class="HomeExplorePage-box-label">
                     <text class="HomeExplorePage-box-label-text"> #Videogame </text>
               </div>
               <text class="HomeExplorePage-box-user">FIFA Night</text>
               <text class="HomeExplorePage-box-date">Wed, Dec 11, 2018</text>
           </div>

      </div>
      </scroller>
      <!--<barComponent></barComponent>-->
    </div>
</template>

<script>
import Homeheaer from '@/components/Homeheaer'
import barComponent from '@/components/BarComponent'
const swifter = weex.requireModule('swifter');

    export default {
        name:"HomeExplorePage",
        components: {
            Homeheaer,barComponent
        },
        data() {
            return {
                
            }
        },
        methods: {
            eventDetails () {
                swifter.openTransparentPage('Home/EventDetailsPage2.js');
            }
        }
    }
</script>

<style scoped>
.HomeExplorePage-content {
    padding-top: 34px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 150px;
}
.HomeExplorePage-search-box {
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
}
.HomeExplorePage-search {
    position: relative;
    width: 508px;
    height: 72px;
    background-color: #EDEDED;
    border-radius:30px;
}
.HomeExplorePage-search-input {
    padding-left: 52px;
    width: 508px;
    height: 72px;
    background-color: #EDEDED;
    border-radius:30px;
}

.HomeExplorePage-search-img {
    position: absolute;
    top: 22px;
    left: 20px;
    width: 30px;
    height: 30px;
}

.HomeExplorePage-search-btn {
    flex-direction: row;
    justify-content: center;
    align-items:center;
    width: 144px;
    height: 72px;
    background-color: #57B1E3;
    border-radius:30px;

}
.HomeExplorePage-search-btn-img {
    width: 30px;
    height: 30px;
}
.HomeExplorePage-list {
    margin-top: 52px;
    margin-bottom: 53px;
}
.HomeExplorePage-list-title-box {
    flex-direction: row ;
    justify-content:space-between;
}
.HomeExplorePage-list-title-title {
    color: #EC2079;
    font-size: 30px;
}
.HomeExplorePage-list-title-a {
    color: #959595;
    font-size: 30px;
}
.HomeExplorePage-list-content {
   margin-top: 17px;
}

.HomeExplorePage-list-content-scroller {
    flex-direction:row;
}

.HomeExplorePage-list-content-tabl {
    position: relative;
}
.HomeExplorePage-list-content-tabl-img {
    width: 416px;
    height: 254px;
    margin-right: 38px
}
.HomeExplorePage-list-content-tabl-img-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 416px;
    height: 254px;
}
.HomeExplorePage-list-content-tabl-text {
    position: absolute;
    top: 100px;
    left: 90px;
    color: #ffffff;
    font-size: 46px;
}

.HomeExplorePage-list-content-Hot-text-a {
    font-size: 22px;
    color: #57B1E3;
}

.HomeExplorePage-list-content-Hot-text-user {
    font-size: 28px;
    color: #000000;
    margin-top: 9px;
    margin-bottom: 9px;
}

.HomeExplorePage-list-content-Hot-text-date {
    color: rgba(0, 0, 0, .55);
    font-size: 22px;
}
.HomeExplorePage-list-content-Hot-imgbox {
    flex-direction: row;
    align-items:center;
    margin-top: 18px;
}
.HomeExplorePage-list-content-Hot-img {
    width: 50px;
    height: 48px;
    margin-right: 8px;
}
.HomeExplorePage-box {
    margin-bottom: 52px;
}
.HomeExplorePage-box-title {
    color: #EC2079;
    font-size: 30px;
}
.HomeExplorePage-box-img {
    width: 700px;
    height: 404px;
    margin-top: 17px;
    margin-bottom: 17px;
}
.HomeExplorePage-box-label {
    flex-direction: row;
    align-items:center;
}
.HomeExplorePage-box-label-text {
    color: #57B1E3;
    font-size: 32px;
}
.HomeExplorePage-box-user {
    margin-top: 16px;
    margin-bottom: 16px;
    color: #000000;
    font-size: 44px;
}
.HomeExplorePage-box-date {
    color: rgba(0, 0, 0, .55);
    font-size: 32px;
}

.event-title {
    font-size: 28px;
    color: #000;
    margin-top: 10px;
}

.event-date {
    font-size: 22px;
    color: #707070;
    margin-top: 10px;
}
</style>