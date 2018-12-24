<template>
    <div class="wrapper">
        <scroller class="scroller">
        <div class="logo-cell">
            <image class="logo" src="/src/images/logo.png"></image>
        </div>
        <div class="input-area">
            <div class="input-cell">
                <text class="input-text">Email or Phone</text>
                <input type="text" class="input">
            </div>
            <div class="input-cell">
                <text class="input-text">Password</text>
                <input type="password" class="input">
            </div>
        </div>
        <div class="forgot-password-cell">
            <text class="forgot-password-text">Forgot Password</text>
        </div>

        <div class="operation-area">
            <text class="operation-button operation-login">LOGIN</text>
            <text class="or-text">Or</text>
            <text class="operation-button operation-register">REGISTER</text>
        </div>

        <div class="login-way-area">
            <div class="login-way" style="margin-left: 172.38px">
                <image class="google-login-icon" src="/src/images/icon_google.png"></image>
                <text class="login-way-text">Login with Google</text>
            </div>
            <div class="login-way" style="margin-left: 188px; margin-top: 54.4px;">
                <image class="facebook-login-icon" src="/src/images/facebook.png"></image>
                <text class="login-way-text">Login with Facebook</text>
            </div>
        </div>
        </scroller>
    </div>
</template>

<script>
    export default {
        name: "user-entry"
    }
</script>

<style scoped>
    .wrapper{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .scroller {
        /*display: flex;*/
        /*!*flex: 2;*!*/
        /*border-width: 3px;*/
        /*border-style: solid;*/
        /*border-color: rgb(162, 217, 192);*/
        /*margin-left: 25px;*/
        /*height: 700px;*/
    }
    .logo-cell{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 144px;
    }

    .logo {
        width: 572px;
        height: 144px;
    }

    .input-area {
        display: flex;
        align-items: center;
        margin-top: 104px;

    }

    .input-cell {
        margin-top: 28px;
    }

    .input-text{
        color: #707070;
        margin-bottom: 12px;
    }

    .forgot-password-cell {
        margin-left: 440px;
        margin-top: 38px;
    }

    .forgot-password-text {
        font-size: 30px;
        color: #707070;
    }

    .operation-area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 58px;
        height: 270px;
        font-size: 42px;
    }

    .operation-button{
        height: 86px;
        line-height: 86px;
        border-radius: 44px;
        font-size: 42px;
        color: #fff;
        text-align: center;
    }

    .operation-login {
        width: 630px;
        background-color: #EC2079;
    }

    .operation-register {
        width: 402px;
        background-color: #57B1E3;
    }

    .or-text{
        color: #707070;
        font-size: 30px;
    }
    
    .input{
        width: 630px;
        height: 86px;
        background-color: #F2F2F2;
        border-radius: 44px;
        margin-top: 40px;
        /*text-indent: 40px;*/
    }


    .login-way-area {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 150.4px;
        margin-bottom: 134px;
    }

    .login-way {
        display: flex;
        flex-direction: row;
        align-items: center;
        /*margin-left: auto;*/
        /*margin-right: auto;*/
    }

    .google-login-icon {
        width: 112px;
        height: 112px;
        margin-right: 40px;
    }

    .facebook-login-icon {
        width: 84px;
        height: 84px;
        margin-right: 40px;
    }

    .login-way-text{
        color: #707070;
        font-size: 30px;
    }
</style>