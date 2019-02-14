<template>
    <div>

        <div class="setting_box" v-for="(item,index) in text" :key="index">
            <text class="setting_text">{{item.text}}</text>
        </div>
        <text class="setting_bottom">Copyright 2016 Openinvite</text>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                text:[
                    {text:'Change Password'},
                    {text:'Send Feedback'},
                    {text:'Notifications'},
                    {text:'Blocking'},
                    {text:'Privacy & Terms of Service '},
                ]
            }
        },
    }
</script>

<style scoped>
.setting_box {
    padding-left: 30px;
    padding-bottom: 26px;
    padding-top: 26px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(112, 112, 112, .24);
}
.setting_text {
    color: #2B2B2B;
}
.setting_bottom {
    position: absolute;
    left: 30px;
    bottom: 30px;
}
</style>