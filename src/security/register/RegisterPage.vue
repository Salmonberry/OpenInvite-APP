<template>
    <div class="RegisterPage">
         <div class="RegisterPage-retreat"><image resize="contain" class="retreat" src='local:///retreat.png' @click="onBack"/></div>
         <scroller class="main-list" offset-accuracy="300px">
          <div class="RegisterPage-title"><text class="RegisterPage-title-text">Create your account</text></div>
          <div class="RegisterPage-content">
               <div class="RegisterPage-list">
                    <text class="RegisterPage-list-title">You live in…</text>
                    <div :class="['RegisterPage-select-box', active ? 'RegisterPage-select-box-active' : '']" @click="onclick">
                         <text class="RegisterPage-select-box-text">New York</text>
                         <div class="RegisterPage-select-box-text-box">
                            <text class="RegisterPage-select-box-text">New York</text>
                            <text class="RegisterPage-select-box-text">New York</text>
                            <text class="RegisterPage-select-box-text">New York</text>
                            <text class="RegisterPage-select-box-text">New York</text>
                            <text class="RegisterPage-select-box-text">New York</text>
                         </div>
                         <image class="RegisterPage-select-box-img" src='local:///select.png'/>
                    </div>
               </div>
               <div class="RegisterPage-list">     
                    <text class="RegisterPage-list-title">First Name</text>
                    <div class="RegisterPage-list-input-box">
                        <input class="RegisterPage-list-input" type="text">
                    </div>
               </div>
               <div class="RegisterPage-list">     
                    <text class="RegisterPage-list-title">Last Name</text>
                    <div class="RegisterPage-list-input-box">
                        <input class="RegisterPage-list-input" type="text">
                    </div>
               </div>
               
               <div class="RegisterPage-list">     
                    <text class="RegisterPage-list-title">Phone Number</text>
                    <div class="RegisterPage-list-input-box">
                        <input class="RegisterPage-list-input" type="number">
                    </div>
               </div>

               <div class="RegisterPage-list">     
                    <text class="RegisterPage-list-title">Email</text>
                    <div class="RegisterPage-list-input-box">
                        <input class="RegisterPage-list-input" type="email">
                    </div>
               </div>

               <div class="RegisterPage-list">     
                    <text class="RegisterPage-list-title">Password </text>
                    <div class="RegisterPage-list-input-box">
                        <input class="RegisterPage-list-input" type="password">
                    </div>
               </div>

               <div class="RegisterPage-description-box">
                     <text class="RegisterPage-description-box-text">By clicking “Join Now”, you agree to OpenInvite’s</text>
                     <text class="RegisterPage-description-box-text-active">User Agreement, Privacy Policy, and Cookie Policy</text>
               </div>

               <div class="RegisterPage-btn">
                   <a><text class="RegisterPage-btn-text">Join Now</text></a>
               </div>

          </div>
          </scroller>
    </div>
</template>

<script>
    const modal = weex.requireModule('modal')
    const navigator = weex.requireModule('navigator')
    export default {
        name:"RegisterPage",
        data() {
            return {
                 active: true
            }
        },
        methods: {
            onclick (event) {
                   this.active = !this.active;
            },
            onBack () {
                navigator.pop({animated: "true"});
            }
        }
    }
</script>

<style scoped>
.RegisterPage {
    background-color: #57B1E3;
}
.RegisterPage-retreat {
     
    background-color: #57B1E3;
    width: 750px;
    height: 107px;
    flex-direction: row;
    align-items:center;

}
.retreat {
    width: 21px;
    height: 39px;
    margin-left: 26px;
}
.RegisterPage-title {
    
}

.RegisterPage-title-text {
    color: #ffffff;
    font-size: 60px;
    padding-left: 26px;
    padding-bottom: 16px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #ffffff;
}
.RegisterPage-content {
    margin-top: 22px;
    padding-left: 26px;
    padding-right: 26px;
    padding-bottom: 88px;
}
.RegisterPage-list {
    margin-bottom: 34px;
}
.RegisterPage-list-title {
    margin-left: 60px;
    color: #ffffff;
    margin-bottom: 12px;
}
.RegisterPage-select-box {
    position: relative;
    width: 700px;
    height: auto;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #ffffff;
    border-radius:50px;
}

.RegisterPage-select-box-active {
    height: 100px;
    overflow: hidden;
    position: relative;
    width: 700px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #ffffff;
    border-radius:50px;
}

.RegisterPage-select-box-text {
   line-height: 70px;
}
.RegisterPage-select-box-img {
    position: absolute;
    top: 50px;
    right: 46px;
    width: 21px;
    height: 20px;
}

.RegisterPage-list-input {
    width: 700px; 
    height: 100px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #ffffff;
    border-radius:50px;
}
.RegisterPage-list-input {
    height: 100px;
}

.RegisterPage-description-box {
   margin-top: 44px;
   margin-left: 60px;
   margin-right: 60px;
   margin-bottom: 27px;
}

.RegisterPage-description-box-text {
     color: #ffffff;
     font-size: 30px;
}

.RegisterPage-description-box-text-active {
     color: #FFFF2E;
     font-size: 30px;
}

.RegisterPage-btn {
    height: 100px;
    overflow: hidden;
    position: relative;
    width: 700px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #EC2079;
    border-radius:50px;
    text-align: center;
    justify-content:center;
    align-items:center ;
}
.RegisterPage-btn-text {
     color: #ffffff;
     font-size: 30px;
}

</style>