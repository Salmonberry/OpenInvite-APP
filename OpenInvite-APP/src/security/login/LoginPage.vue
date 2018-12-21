<template>
    <div class="wrapper">
        <div class="logo-cell">
            <image class="logo" src="src/images/logo.png"></image>
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
            <div class="forgot-password-cell">
                <text class="forgot-password-text">Forgot Password</text>
            </div>
        </div>

        <div class="operation-area">
            <text class="operation-button operation-login">LOGIN</text>
            <text class="or-text">Or</text>
            <text class="operation-button operation-register">REGISTER</text>
        </div>

        <div class="login-way-area">
            <div class="login-way">
                <image class="google-login-icon" src="src/images/icon_google.png"></image>
                <text class="login-way-text">Login with Google</text>
            </div>
            <div class="login-way">
                <image class="facebook-login-icon" src="src/images/facebook.png"></image>
                <text class="login-way-text">Login with Facebook</text>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user-entry"
    }
</script>

<style scoped>
    .logo-cell{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 72px;
    }

    .logo {
        width: 286px;
        height: 74px;
    }

    .input-area {
        display: flex;
        align-items: center;
        margin-top: 52px;

    }

    .input-cell {
        margin-top: 14px;
    }

    .input-text{
        color: #707070;
        margin-bottom: 6px;
    }

    .forgot-password-cell {
        font-size: 15px;
        margin-top: 19px;
    }

    .forgot-password-text {
        color: #707070;
    }

    .operation-area {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 29px;
        height: 135px;
        font-size: 21px;
    }

    .operation-button{
        height: 43px;
        line-height: 43px;
        border-radius: 22px;
        font-size: 21px;
        color: #fff;
        text-align: center;
    }

    .operation-login {
        width: 315px;
        background-color: #EC2079;
    }

    .operation-register {
        width: 201px;
        background-color: #57B1E3;
    }

    .or-text{
        color: #707070;
        font-size: 15px;
    }
    
    .input{
        width: 315px;
        height: 43px;
        background-color: #F2F2F2;
        border-radius: 22px;
        margin-top: 20px;
    }


    .login-way-area {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 75.2px;
        height: 156px;
    }

    .login-way {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
    }

    .google-login-icon {
        width: 56px;
        height: 56px;
        margin-right: 20px;
    }

    .facebook-login-icon {
        width: 42px;
        height: 42px;
        margin-right: 20px;
    }

    .login-way-text{
        color: #707070;
    }
</style>