<template>
    <div class="UserEditProfilePage" @viewappear="onshow" @viewdisappear="onhide">
        <scroller>
         <div class="EditProfile_information">

              <div class="EditProfile_information_list">
                  <text class="information_list_title">Name :</text>
                  <text class="information_list_con">Stephanie Mak</text>
              </div>
              <div class="EditProfile_information_list">
                  <text class="information_list_title">Company :</text>
                  <text class="information_list_con">Morgan Stanley</text>
              </div>
              <div class="EditProfile_information_list">
                  <text class="information_list_title">Position :</text>
                  <text class="information_list_con">AVP</text>
              </div>
              <div class="EditProfile_information_list">
                  <text class="information_list_title">Gender :</text>
                  <text class="information_list_con">Female</text>
              </div>

         </div>
        

        <div class="EditProfile_about">
             <text class="EditProfile_about_title">About Myself :</text>
             <div class="EditProfile_about_con">
                 <text class="EditProfile_about_con_text">Stephanie Mak is an Assistant Vice President within the Digital Platforms Team (Online & Mobile). Stephanie is working cross-functionally to develop Morgan Stanley’s Self-Directed Brokerage Digital Product which will be available on Mobile & the Web</text>
                 <image class="EditProfile_about_con_img" src="/src/images/ahead-gray.png"></image>
             </div>
        </div>

        <div class="EditProfile_hobbies">
             <text class="EditProfile_hobbies_title">Hobbies :</text>

             <div class="EditProfile_hobbies_content">

                  <div class="EditProfile_hobbies_content_list" v-for="(ltem,index) in list_text" :key="index">
                      <text class="EditProfile_hobbies_content_list_text">{{ltem.text}}</text>
                      <div class="EditProfile_hobbies_content_list_ion"><text class="EditProfile_hobbies_content_list_ion_text">-</text></div>
                  </div>

                  <div class="EditProfile_hobbies_content_list_jia" @click="jump">
                      <text class="EditProfile_hobbies_content_list_jiatext">+</text>
                  </div>

             </div>
        </div>

        <div class="EditProfile_connection">

            <div class="EditProfile_connection_list">
               
                <div class="start">
                <div class="EditProfile_connection_list_title">
                    <image class="EditProfile_connection_list_title_img" src="/src/images/icon_social1.png"></image>
                    <text class="EditProfile_connection_list_title_text">Instagram :</text>
                </div>
                <text class="EditProfile_connection_list_text">StephanieMak123</text>
                </div>
                
                <div class="end">
                    <image class="EditProfile_about_con_img" src="/src/images/ahead-gray.png"></image>
                </div>

            </div>

            <div class="EditProfile_connection_list">
               
                <div class="start">
                <div class="EditProfile_connection_list_title">
                    <image class="EditProfile_connection_list_title_img" src="/src/images/icon_social2.png"></image>
                    <text class="EditProfile_connection_list_title_text">Facebook :</text>
                </div>
                <text class="EditProfile_connection_list_text">StephanieMak123</text>
                </div>
                
                <div class="end">
                    <image class="EditProfile_about_con_img" src="/src/images/ahead-gray.png"></image>
                </div>

            </div>

            <div class="EditProfile_connection_list">
               
                <div class="start">
                <div class="EditProfile_connection_list_title">
                    <image class="EditProfile_connection_list_title_img" src="/src/images/icon_social3.png"></image>
                    <text class="EditProfile_connection_list_title_text">SnapChat :</text>
                </div>
                <text class="EditProfile_connection_list_text">StephanieMak123</text>
                </div>
                
                <div class="end">
                    <image class="EditProfile_about_con_img" src="/src/images/ahead-gray.png"></image>
                </div>

            </div>

            <div class="EditProfile_connection_list">
               
                <div class="start">
                <div class="EditProfile_connection_list_title">
                    <image class="EditProfile_connection_list_title_img" src="/src/images/icon_social4.png"></image>
                    <text class="EditProfile_connection_list_title_text">LinkIn :</text>
                </div>
                <text class="EditProfile_connection_list_text">StephanieMak123</text>
                </div>
                
                <div class="end">
                    <image class="EditProfile_about_con_img" src="/src/images/ahead-gray.png"></image>
                </div>

            </div>

        </div>

        </scroller>
    </div>
</template>

<script>
const storage = weex.requireModule('storage')
var navigator = weex.requireModule('navigator')
import getJumpBaseUrl from '@/url.js'
    export default {
        data() {
            return {
                list_text:[
                    {text:'#Snooker'},
                    {text:'#Coffee'},
                    {text:'#Movie'},
                    {text:'#Netflix'},
                ]
            }
        },
        created() {
            if(weex.config.env.platform=='Web'){
                
                this.onshow()
            }
            
        },
         methods: {
              jump(){
                console.log(weex.config.env.platform)
                if(weex.config.env.platform=='Web'){
                     this.onhide()
                }
                navigator.push({
                     url: getJumpBaseUrl('user/UserAddHobbiesPage')
                })
              },
              onhide(){
                  storage.setItem('list_text',JSON.stringify(this.list_text))
              },
              onshow(){
                    storage.getItem('list_text',(e)=>{
                        if(e.result==='success'){
                            this.list_text=JSON.parse(e.data)
                        }else {
                            this.list_text=[]
                        }
                    })
                 
              }

         }

    }
</script>

<style scoped>
.UserEditProfilePage {
    background-color: #F0F0F0;
}
.EditProfile_information {
    margin-top: 30px;
    background-color: #ffffff;
}
.EditProfile_information_list {
    padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 34px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(112, 112, 112, .41);
}
.information_list_title {
    margin-bottom: 16px;
    font-size: 32px;
    color: #57B1E3;
}
.information_list_con {
    font-size: 32px;
    color: #696969;
}
.EditProfile_about {
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #ffffff;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(112, 112, 112, .41);
}
.EditProfile_about_title {
    margin-bottom: 15px;
    color: #57B1E3;
}
.EditProfile_about_con {
    flex-direction: row;
    
    align-items:center;
    justify-content:space-between;
}
.EditProfile_about_con_text {
    width: 522px;
    color: #696969;
}
.EditProfile_about_con_img {
    width: 27px;
    height: 45px;
}
.EditProfile_hobbies {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 35px;
    background-color: #ffffff;
}
.EditProfile_hobbies_title {
     color: #57B1E3;
}
.EditProfile_hobbies_content {
    flex-direction: row;
    flex-wrap:wrap ;
    align-items:center;
    margin-top: 15px;
}
.EditProfile_hobbies_content_list {
    padding-left: 46px;
    padding-right: 46px;
    padding-bottom: 16px;
    padding-top: 16px;
    margin-right: 16px;
    margin-bottom: 20px;
    border-radius:36px;
    background-color: #57B1E3;
}
.EditProfile_hobbies_content_list_text {
    color: #ffffff;
}
.EditProfile_hobbies_content_list_ion {
    position: absolute;
    top: -6px;
    right: -6px;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    width: 40px;
    height: 40px;
    border-radius:20px;
    background-color: #EC2079;
}
.EditProfile_hobbies_content_list_ion_text {
    color: #ffffff;
}
.EditProfile_hobbies_content_list_jia{
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 16px;
    padding-top: 16px;
    margin-right: 16px;
    margin-bottom: 20px;
    border-radius:36px;
    background-color: #30E3AC;
}
.EditProfile_hobbies_content_list_jiatext {
    color: #ffffff;
}
.EditProfile_connection {
    margin-top: 30px;
    margin-bottom: 75px;
    background-color: #ffffff;
}
.EditProfile_connection_list {
    flex-direction: row;
    justify-content:space-between;
    align-items:flex-end;
    padding-left: 33px;
    padding-right: 33px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(112, 112, 112, .41);
}
.EditProfile_connection_list_title {
    flex-direction: row;
    align-items:center ;
    align-items:flex-end;
    margin-bottom: 18px;
}
.EditProfile_connection_list_title_img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    
}
.EditProfile_connection_list_title_text {
   color: #57B1E3;
}
.EditProfile_connection_list_text {
    color: #696969;
    font-size: 34px;
}
</style>