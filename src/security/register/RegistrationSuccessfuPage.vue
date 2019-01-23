<template>
    <div class="RegistrationSuccessfu">
            <text class="RegistrationSuccessfu-text">Registration
Successful </text>
    </div>
</template>

<script>
    const swifter = weex.requireModule('swifter');

    export default {
        name:'RegistrationSuccessfuPage',
        data() {
            return {
                
            }
        },

        created() {
            setTimeout(() => {
                swifter.openTransparentPage('security/register/RegisterHobbiesPage.js');
            }, 3000)
        }
    }
</script>

<style scoped>
.RegistrationSuccessfu {
    background-color: #57B1E3;
}

.RegistrationSuccessfu-text {
    margin-left: 42px;
    margin-top: 342px;
    color: #ffffff;
    font-size: 98px;
}

</style>