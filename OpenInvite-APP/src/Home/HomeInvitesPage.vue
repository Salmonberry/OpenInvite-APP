<template>
    <div class="HomeInvitesPage">
          <Homeheaer></Homeheaer>
          <scroller class="scroller">
            <div class="HomeInvitesPage-content">
                    <div class="HomeInvitesPage-box">
                         <div class="HomeInvitesPage-box-user">
                             <image class="HomeInvitesPage-box-user-img" src="local:///homeInvitesPageuser.png" />
                             <text class="HomeInvitesPage-box-user-text">Sandy Invited You :</text>
                         </div>
                         <image class="HomeInvitesPage-box-img" src="local:///c1a547731876c0ffea7f117f341d09f3.png" />

                    </div>
            </div>
          </scroller>
    </div>
</template>

<script>
import Homeheaer from '@/components/Homeheaer'
    export default {
        name:"HomeInvitesPage",
         components: {
            Homeheaer
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
.HomeInvitesPage-content {
    padding-top: 34px;
    padding-left: 20px;
    padding-right: 20px;
}

.HomeInvitesPage-box-user {
    flex-direction: row;
    align-items:center ;
}
.HomeInvitesPage-box-user-img {
    width: 72px;
    height: 72px;
}
.HomeInvitesPage-box-user-text {
    color: #696969;
    font-size: 32px;
}
.HomeInvitesPage-box-img {
    margin-top: 32px;
    width: 700px;
    height: 404px;
}

</style>