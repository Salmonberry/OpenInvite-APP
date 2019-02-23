<template>
    <div>
        <image class="membershipPrice_bg" src="local:///membershipPrice_bg.png"></image>
        <image class="membershipPrice_bg_bg" src="local:///gold_img.png" ></image>
        <div class="Membership_content">
         <text class="Membership_content_title">Gold</text>
         <text class="Membership_content_s">Membership</text>
         <text class="Membership_content_text">Silver Membership </text>
         <text class="Membership_content_text">Silver Membership </text>
         <text class="Membership_content_text">Silver Membership </text>
         
         <div class="Membership_content_listbox">
               
                <div class="Membership_content_list">
                       <div class="start">
                           <text class="start_text start_mun">12</text>
                           <text class="start_text">Months</text>
                       </div>
                       <div class="end">
                            <div class="end_content">
                                <text class="end_content_mun">$2.5</text>
                                <text class="end_content_text">Per month</text>
                            </div>

                            <div class="end_position">
                                <text class="end_position_text">Best Price</text>
                            </div>
                       </div>
                </div>

                <div class="Membership_content_list list_green">
                       <div class="start">
                           <text class="start_text start_mun">6</text>
                           <text class="start_text">Months</text>
                       </div>
                       <div class="end">
                            <div class="end_content">
                                <text class="end_content_mun">$2.5</text>
                                <text class="end_content_text">Per month</text>
                            </div>
                       </div>
                </div>

                <div class="Membership_content_list list_orange">
                       <div class="start">
                           <text class="start_text start_mun">1</text>
                           <text class="start_text">Months</text>
                       </div>
                       <div class="end">
                            <div class="end_content">
                                <text class="end_content_mun">$2.5</text>
                                <text class="end_content_text">Per month</text>
                            </div>
                       </div>
                </div>

         </div>

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.membershipPrice_bg {
    width: 750px;
    height: 1450px;
}
.membershipPrice_bg_bg {
    position: absolute;
    top: 0;
    right: 0;
    width: 710px;
    height: 460px;
}
.Membership_content {
    position: absolute;
    top: 180px;
    left: 30px;
    width: 700px;
}
.Membership_content_title {
    font-size: 100px;
    color: #B8A653;
}
.Membership_content_s {
    margin-bottom: 24px;
    font-size: 61px;
    color: #575757;
}
.Membership_content_text {
    margin-bottom: 12px;
    font-size: 26px;
    color: #696969;
}
.Membership_content_listbox {
    margin-top: 120px;
}
.Membership_content_list {
    flex-direction: row;
    align-items: center ;
    height: 144px;
    margin-bottom: 30px;
    border-radius:15px;
    background-color: #57B1E3;
}
.start {
    padding-left: 30px;
    padding-right: 30px;
}
.start_text {
    text-align: center;
    color: #ffffff;
}
.start_mun {
    font-size: 62px;
}
.end {
    flex-direction: row;
    align-items: center ;
    justify-content:center;
    flex: 1;
    height: 144px;
    border-radius:15px;
    background-color: #B1E3FF;
}
.end_position {
    position: absolute;
    top: 0;
    right: 0;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 6px;
    padding-top: 6px;
    border-radius:5px;
    background-color: #EC2079;
}
.end_position_text {
    font-size: 20px;
    color: #ffffff;
}
.end_content {
    flex-direction: row;
    align-items:flex-end;
}
.end_content_mun {
    margin-right: 10px;
    font-size: 42px;
    color: #696969;
}
.end_content_text {
    font-size: 30px;
    color: #696969;
}
.list_green {
    background-color: #30E3AC;
}
.list_orange {
    background-color: #FDB96A;
}
</style>