<template>
    <div class="HomeUpcomingPage">
             <scroller class="scroller">
              <!--<Homeheaer></Homeheaer>-->
             <div class="HomeUpcomingPage-content">
                  <div class="HomeUpcomingPage-list">
                       <div class="HomeUpcomingPage-list-title">
                            <text class="HomeUpcomingPage-list-text font-bold">Today</text>
                            <text class="HomeUpcomingPage-list-text-a font-bold" style="margin-left: 22px;">Wed, Dec 11</text>
                       </div>
                       <div class="HomeUpcomingPage-list-imges-box">
                             <image class="HomeUpcomingPage-list-imges-box-img" src="local:///HomeUpcomingPage-list-imges1.png"/>
                             <image class="HomeUpcomingPage-list-imges-box-img-bg" src="local:///HomeUpcomingPage-list-imges-bg.png"/>
                             <div class="HomeUpcomingPage-list-introduction">
                                   <div class="HomeUpcomingPage-list-introduction-btn">
                                       <image class="HomeUpcomingPage-list-introduction-btn-iocn" src="local:///clock-circular-outline.png"/>
                                       <text class="HomeUpcomingPage-list-introduction-btn-text">in 3hrs</text>
                                   </div>
                                <div class="HomeUpcomingPage-list-introduction-text-box">
                                   <text class="HomeUpcomingPage-list-introduction-text">Latte Please !</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">ABC Cafe</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">Wed, Dec 11, 2018</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">3:00pm - 5:00pm</text>
                                </div>

                                <div class="HomeUpcomingPage-list-introduction-img-box">
                                    <image  class="HomeUpcomingPage-list-introduction-img-img" src="local:///user_picture2.png"/>
                                    <image  class="HomeUpcomingPage-list-introduction-img-img"  src="local:///user_picture11.png"/>
                                    <image  class="HomeUpcomingPage-list-introduction-img-img"  src="local:///user_picture2.png"/>
                                </div>
                             </div>
                       </div>
                        <div class="HomeUpcomingPage-list-imges-box">
                             <image class="HomeUpcomingPage-list-imges-box-img" src="local:///event_background3.png"/>
                             <image class="HomeUpcomingPage-list-imges-box-img-bg" src="local:///HomeUpcomingPage-list-imges-bg.png"/>
                             <div class="HomeUpcomingPage-list-introduction">
                                   <div class="HomeUpcomingPage-list-introduction-btn">
                                       <image class="HomeUpcomingPage-list-introduction-btn-iocn" src="local:///clock-circular-outline.png"/>
                                       <text class="HomeUpcomingPage-list-introduction-btn-text">in 3hrs</text>
                                   </div>
                                <div class="HomeUpcomingPage-list-introduction-text-box">
                                   <text class="HomeUpcomingPage-list-introduction-text">Latte Please !</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">ABC Cafe</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">Wed, Dec 11, 2018</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">3:00pm - 5:00pm</text>
                                </div>

                                <div class="HomeUpcomingPage-list-introduction-img-box">
                                    <image  class="HomeUpcomingPage-list-introduction-img-img" src="local:///user_picture2.png"/>
                                    <image  class="HomeUpcomingPage-list-introduction-img-img"  src="local:///user_picture11.png"/>
                                    <image  class="HomeUpcomingPage-list-introduction-img-img"  src="local:///user_picture2.png"/>
                                </div>
                             </div>
                       </div>
                  </div>
                   <div class="HomeUpcomingPage-list">
                       <div class="HomeUpcomingPage-list-title">
                            <text class="HomeUpcomingPage-list-text font-bold">3 Days Left</text>
                            <text class="HomeUpcomingPage-list-text-a font-bold" style="margin-left: 22px;">Sat, Dec 14</text>
                       </div>
                       <div class="HomeUpcomingPage-list-imges-box">
                             <image class="HomeUpcomingPage-list-imges-box-img" src="local:///HomeUpcomingPage-list-imges1.png"/>
                             <image class="HomeUpcomingPage-list-imges-box-img-bg" src="local:///HomeUpcomingPage-list-imges-bg.png"/>
                             <div class="HomeUpcomingPage-list-introduction">
                                   <div class="HomeUpcomingPage-list-introduction-btn">
                                       <image class="HomeUpcomingPage-list-introduction-btn-iocn" src="local:///clock-circular-outline.png"/>
                                       <text class="HomeUpcomingPage-list-introduction-btn-text">in 3hrs</text>
                                   </div>
                                <div class="HomeUpcomingPage-list-introduction-text-box">
                                   <text class="HomeUpcomingPage-list-introduction-text">Latte Please !</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">ABC Cafe</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">Wed, Dec 11, 2018</text>
                                   <text class="HomeUpcomingPage-list-introduction-text">3:00pm - 5:00pm</text>
                                </div>

                                <div class="HomeUpcomingPage-list-introduction-img-box">
                                    <image  class="HomeUpcomingPage-list-introduction-img-img" src="local:///user_picture2.png"/>
                                    <image  class="HomeUpcomingPage-list-introduction-img-img"  src="local:///user_picture11.png"/>
                                    <image  class="HomeUpcomingPage-list-introduction-img-img"  src="local:///user_picture2.png"/>
                                </div>
                             </div>
                       </div>
                  </div>
             </div>
           </scroller>
    </div>
</template>

<script>
import Homeheaer from '@/components/Homeheaer'
    export default {
        name:"HomeUpcomingPage",
         components: {
            Homeheaer
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.font-bold {
    font-weight: bold;
}

.HomeUpcomingPage-content {
    padding-top: 34px;
    padding-left: 20px;
    padding-right: 20px;
}
.HomeUpcomingPage-list {
    margin-top: 19px;
}
.HomeUpcomingPage-list-title {
    flex-direction: row;
}
.HomeUpcomingPage-list-text {
    color: #57B1E3;
    font-size: 30px;
}
.HomeUpcomingPage-list-text-a {
   color: #EC2079;
    font-size: 30px;
}
.HomeUpcomingPage-list-imges-box {
    position: relative;
    margin-top: 19px;
    margin-bottom: 20px;
}
.HomeUpcomingPage-list-imges-box-img {
    width: 710px;
    height: 750px;
}
.HomeUpcomingPage-list-imges-box-img-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 710px;
    height: 750px;
}
.HomeUpcomingPage-list-introduction {
    position: absolute;
    bottom: 24px;
    left: 36px;
}
.HomeUpcomingPage-list-introduction-btn {
    flex-direction: row;
    align-items:center;
    width: 170px;
    padding-bottom: 18px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 18px;
    background-color: #FF5D5D;
     border-radius:10px;
}

.HomeUpcomingPage-list-introduction-btn-iocn {
    width: 30px;
    height: 30px;
    margin-right: 12px;
}
.HomeUpcomingPage-list-introduction-btn-text {
    color: #ffffff;
}
.HomeUpcomingPage-list-introduction-text-box {
    margin-top: 17px;
    margin-bottom: 17px;
}
.HomeUpcomingPage-list-introduction-text {
    margin-bottom: 17px;
    color: #ffffff;
}
.HomeUpcomingPage-list-introduction-img-box {
    flex-direction: row
}
.HomeUpcomingPage-list-introduction-img-img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius:50%;
}

</style>