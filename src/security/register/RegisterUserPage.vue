<template>
    <div class="RegisterUserPage">
        <scroller>
         <div class="RegisterUserPage-Userimgbox">
               <image class="RegisterUserPage-Userimg" :src="srcurl"  @click="show" />
               <image class="RegisterUserPage-Userimgadd" :src="Userimgadd"/>
         </div>
         
         <div class="RegisterUserPage-content">
             <div class="RegisterUserPage-content-title"><text class="RegisterUserPage-content-titletex">Work</text></div>

             <div class="RegisterUserPage-content-list">
                 <text class="RegisterUserPage-content-listtext">Industry </text>
                 <div class="RegisterUserPage-content-listinput-box">
                     <input class="RegisterUserPage-content-listinput" />
                 </div>
             </div>

             <div class="RegisterUserPage-content-list">
                 <text class="RegisterUserPage-content-listtext">Company </text>
                 <div class="RegisterUserPage-content-listinput-box">
                     <input class="RegisterUserPage-content-listinput" />
                 </div>
             </div>

             <div class="RegisterUserPage-content-list">
                 <text class="RegisterUserPage-content-listtext">Title </text>
                 <div class="RegisterUserPage-content-listinput-box">
                     <input class="RegisterUserPage-content-listinput" />
                 </div>
             </div>

            <div class="RegisterUserPage-content-title"><text class="RegisterUserPage-content-titletex">Education</text></div>

            <div class="RegisterUserPage-content-list">
                 <text class="RegisterUserPage-content-listtext">Education </text>
                 <div class="RegisterUserPage-content-listinput-box">
                     <input class="RegisterUserPage-content-listinput" />
                 </div>
            </div>
            
            <div class="RegisterUserPage-content-newadd">
                 <text class="RegisterUserPage-content-newaddtext">+ add new education</text>
            </div>
             
            <div class="RegisterUserPage-content-btn" @click="onAheadClick">
                 <image class="RegisterUserPage-content-btnimg" src="local:///ahead.png" />
            </div>
         </div>
        </scroller>

        <div v-if="dd" class="RegisterUserPage-mask">
             <div class="RegisterUserPage-mask-btnbox">

                   <div class="RegisterUserPage-mask-btn RegisterUserPage-mask-btngallery" @click="gallery">
                           <text class="RegisterUserPage-mask-btn-text">From gallery</text>
                   </div>
                   <div class="RegisterUserPage-mask-btn RegisterUserPage-mask-btncamera" @click="camera">
                        <text class="RegisterUserPage-mask-btn-text">Camera</text>
                   </div>
                   <div class="RegisterUserPage-mask-btn RegisterUserPage-mask-btncancel">
                        <text class="RegisterUserPage-mask-btn-text-cancel">Cancel</text>
                   </div>

             </div>
        </div>
    </div>
</template>

<script>
    var ImageCropPicker = weex.requireModule('imageCropPicker')
    var options = {
    width: 300,
    height: 300,
    includeExif: true,
    mediaType: 'photo',
    cropping: true
    }

    const swifter = weex.requireModule('swifter');
    export default {
        name:"RegisterUserPage",
        data() {
            return {
                result:"",
                dd:false,
                srcurl:"local:///registerUserPage-Userimg.png",
                Userimgadd:'local:///registerUserPage-Userimgadd.png'
            }
        },
        methods: {
             show(){
                 this.dd=!this.dd
             },
             imgadd(){
                 this.srcurl="local:///registerUserPage-Userimgimg.png",
                 this.Userimgadd="local:///refreshbutton.png",
                 this.dd=!this.dd
             },

             onAheadClick () {
                swifter.swifter.openTransparentPage('security/register/RegisterStartPage.js');
            },
            
            gallery(e) {
                ImageCropPicker.openPicker(options, (response) => {
                // 成功返回 {code:'E_SUCCESS', data:{...}}
                this.result = JSON.stringify(response)
                
               })
            },

            camera(e) {
              ImageCropPicker.openCamera(options, (response) => {
                // 失败返回 {code:'E_PERMISSION_MISSING', message:'...'}
                this.result = JSON.stringify(response)
                })

            }


        }

    }
</script>

<style scoped>

.RegisterUserPage-Userimgbox {
    flex-direction: row;
    justify-content:center;
    position: relative;
    margin-top: 72px;
}

.RegisterUserPage-Userimg {
    width: 248px;
    height: 258px;
}
.RegisterUserPage-Userimgadd {
    width: 44px;
    height: 44px;
}
.RegisterUserPage-content {
padding-bottom: 149px;
}
.RegisterUserPage-content-title {
    flex-direction: row;
    align-items:center;
    height: 72px;
    margin-top: 22px;
    padding-left: 70px;
    background-color: #57B1E3;
}
.RegisterUserPage-content-titletex {
    font-size: 30px;
    color: #ffffff;
}
.RegisterUserPage-content-list {
   margin-top: 60px;
}
.RegisterUserPage-content-listtext {
    padding-left: 70px;
    margin-bottom: 6px;
    font-size: 30px;
    color: #707070;
}
.RegisterUserPage-content-listinput-box {
    height: 60px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 6px;
    background-color: #F7F7F7;
    border-radius:44px;
}
.RegisterUserPage-content-listinput {
    height: 60px;
    padding-left: 30PX;
    border-radius:44px;
    background-color: #F7F7F7;
}
.RegisterUserPage-content-newadd {
    flex-direction: row;
    align-items:center;
    justify-content:center;
    width: 390px;
    height: 60px;
    margin-left: 30px;
    margin-top: 30px;
    background-color: #EC2079;
    border-radius:44px;
}
.RegisterUserPage-content-newaddtext {
    color: #ffffff;
    font-size: 30px;
}
.RegisterUserPage-content-btn {
    flex-direction: row;
    align-items:center;
    justify-content:center;
    position: relative;
    top: 35px;
    left:  600px;
    width: 114px;
    height: 114px;
    background-color: #EC2079;
    border-radius:57px;
}
.RegisterUserPage-content-btnimg {
    width: 46px;
    height: 30px;
}
.RegisterUserPage-mask {
   
    position: fixed;
    top: 0;
    left: 0;
    width: 750px;
    height: 1500px;
    background-color: rgba(0, 0, 0, .47);
}
.RegisterUserPage-mask-btnbox {
    position: absolute;
    bottom: 250px;
    left: 0;
    width: 734px;
    margin-left: 8px;
    margin-right: 8px;
}
.RegisterUserPage-mask-btn {
    flex-direction: row;
    align-items:center;
    justify-content:center;
    height: 120px;
    border-radius:18px;
    background-color: rgba(248, 248, 248, .82);
}
.RegisterUserPage-mask-btngallery {
     border-radius:18px  18px 0 0   ;
}
.RegisterUserPage-mask-btncamera {
    border-radius:0 0  18px  18px ;
}
.RegisterUserPage-mask-btncancel {
    margin-top: 12px;
    margin-bottom: 12px;
}
.RegisterUserPage-mask-btn-text {
    font-size: 40px;
}
.RegisterUserPage-mask-btn-text-cancel {
    font-size: 40px;
    color: #EC2079;
}
</style>
