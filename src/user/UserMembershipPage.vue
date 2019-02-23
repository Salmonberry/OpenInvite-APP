<template>
    <div class="UserMembershipPage">

       <scroller>
       <div class="UserMembershipPage_content">
           <div class="UserMembershipPage_content_box">
               <image class="UserMembershipPage_content_box_img" src="local:///silver_img.png"></image>
               <div class="UserMembershipPage_content_box_text">
                    <text class="UserMembershipPage_content_box_text_text">Silver</text>
                    <text class="UserMembershipPage_content_box_text_text_title">Membership </text>
                    <text class="UserMembershipPage_content_box_text_text_text">Silver Membership </text>
                    <text class="UserMembershipPage_content_box_text_text_text">Silver Membership </text>
                    <text class="UserMembershipPage_content_box_text_text_text">Silver Membership </text>
               </div>
           </div>
           <div class="UserMembershipPage_content_box" @click="jpm">
               <image class="UserMembershipPage_content_box_img" src="local:///gold_img.png"></image>
               <div class="UserMembershipPage_content_box_text">
                    <text class="UserMembershipPage_content_box_text_text gold">Gold</text>
                    <text class="UserMembershipPage_content_box_text_text_title">Membership </text>
                    <text class="UserMembershipPage_content_box_text_text_text">Silver Membership </text>
                    <text class="UserMembershipPage_content_box_text_text_text">Silver Membership </text>
                    <text class="UserMembershipPage_content_box_text_text_text">Silver Membership </text>
               </div>
           </div>
       </div>
       </scroller>

    </div>
</template>

<script>
 const swifter = weex.requireModule('swifter');
    export default {
        methods: {
            jpm(){
              swifter.openTransparentPage('user/UserMembershipPricePage.js');
            }
        }
    }
</script>

<style scoped>
.UserMembershipPage {
    background-color: #EC2079;
}
.UserMembershipPage_content {
    margin-top: 25px;
    margin-left: 20px;
    margin-right: 20px;
}
.UserMembershipPage_content_box {
    height: 562px;
    margin-bottom: 16px;
    border-radius:20px;
    background-color: #ffffff;
}
.UserMembershipPage_content_box_img {
    width: 710px;
    height: 460px;
}
.UserMembershipPage_content_box_text {
    position: absolute;
    top: 90px;
    left: 30px;
}
.UserMembershipPage_content_box_text_text {
    font-size: 110px;
    color: #B9B9B9;
}
.UserMembershipPage_content_box_text_text_title {
    margin-bottom: 15px;
    color: #575757;
    font-size: 65px;
}
.UserMembershipPage_content_box_text_text_text {
    margin-bottom: 15px;
    color: #696969;
}
.gold {
    color: #B8A653;
}
</style>