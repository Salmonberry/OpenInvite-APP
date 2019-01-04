<template>
    <div class="RegisterHobbiesPage">
            <text class="RegisterHobbiesPage-title">What are </text>
            <text class="RegisterHobbiesPage-title">your hobbies?</text>

            <div class="RegisterHobbiesPage-search-box">
                  <image class="RegisterHobbiesPage-search-img" src="/src/images/search.png"/>
                  <input type="text" class="RegisterHobbiesPage-search-input"/>
            </div>
            <div class="RegisterHobbiesPage-label-box">
                   
                   <text ref="text" class="RegisterHobbiesPage-label-text" @click="shows">#Snooker</text>
                   <text class="RegisterHobbiesPage-label-text">#Coffee</text>
                   <text class="RegisterHobbiesPage-label-text">#Snooker</text>
                   <text class="RegisterHobbiesPage-label-text">#Snooker</text>
                   <text class="RegisterHobbiesPage-label-text">#Snooker</text>
                   <text class="RegisterHobbiesPage-label-text">#Snooker</text>
                   <text class="RegisterHobbiesPage-label-text">#Snooker</text>
                   <text class="RegisterHobbiesPage-label-text">#Snooker</text>

            </div>

            <div ref="test" class="RegisterHobbiesPage-ahead">
                <a @click="onAheadClick"><image class="RegisterHobbiesPage-ahead-img" src="/src/images/ahead.png" /></a>
            </div>

    </div>
</template>

<script>
const swifter = weex.requireModule('swifter');
const animation = weex.requireModule('animation')
    export default {
        name:"RegisterHobbiesPage",
        data() {
            return {
                
            }
        },
        methods: {
           shows(){
            var testEl = this.$refs.test;
            animation.transition(testEl, {
            styles: {
                
                bottom:'70px'
            },
            duration: 800, //ms
            timingFunction: 'ease',
            needLayout:false,
            delay: 0 //ms
            })

           this.mationss()
           },
           
           mationss (){

            var texts = this.$refs.text;
            animation.transition(texts, {
            styles: {
                
                backgroundColor: '#EC2079'
            },
            duration: 800, //ms
            timingFunction: 'ease',
            needLayout:false,
            delay: 0 //ms
            })

           },

            onAheadClick () {
                swifter.openTransparentPage('register/RegisterUserPage.js');
            }
           

        }

    }
</script>

<style scoped>
.RegisterHobbiesPage {
    margin-top: 56px;
    padding-left: 20px;
    padding-right: 20px;
}
.RegisterHobbiesPage-title {
    color: #57B1E3;
    font-size: 82px;
}
.RegisterHobbiesPage-search-box {
    flex-direction: row;
    justify-content:space-between;
    align-items:center ;
    height: 80px;
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 24px;
    border-radius:50px;
    background-color: #F5F5F5;
}
.RegisterHobbiesPage-search-img {
    width: 42px;
    height: 42px;
}
.RegisterHobbiesPage-search-input {
    height: 80px;
    flex:1;
    background-color: #F5F5F5;
}
.RegisterHobbiesPage-label-box {
    flex-direction: row;
    flex-wrap:wrap ;
    justify-content:flex-start;
    align-items:center ;
    margin-top: 37px;
}
.RegisterHobbiesPage-label-text {
    padding-left: 34px;
    padding-right: 34px;
    padding-bottom: 18px;
    padding-top: 18px;
    margin-right: 16px;
    margin-bottom: 16px;
    border-radius:25px;
    background-color: #57B1E3;
    color: #ffffff;
}
.RegisterHobbiesPage-ahead {
    justify-content:center;
    align-items:center;
    position: fixed;
    bottom: -184px;
    right: 30px;
    width: 114px;
    height: 114px;
    background-color: #EC2079;
    border-radius:57px;
}
.RegisterHobbiesPage-ahead-img {
    width: 46px;
    height: 30px;
}
</style>