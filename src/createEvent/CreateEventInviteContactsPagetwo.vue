<template>
    <div>
         <div class="header">
            <image class="icon-chart" src="/src/images/arrow_back_gray.png" />
            <text class="header-title">Create Event</text>
        </div>
        <scroller>
        <div class="main">
            <div class="create-event">
                <text class="create-title">Name Of The Event</text>
            </div>

            <div class="contact-operation-area">
                <text class="suggest-operation">Suggest Contacts</text>
                <text class="suggest-operation">All Contacts</text>
            </div>

            <div class="contact-operation-form">
                 <input type="text" placeholder="Input Text" class="input" />
                 <image class="contact-operation-form-img" src="/src/images/maps-search.png"/>
            </div>
            
            <div class="contact-operation-select">
                <div class="contact-operation-select-text">
                    <text class="contact-operation-select-text-title">Filter :</text>
                    <text class="contact-operation-select-text-content">None</text>
                </div>
                <image class="contact-operation-select-image" src="/src/images/contact-operation-select.png"/>
            </div>

        </div>

        <div class="contact-operation-content">
                 <div class="contact-operation-content-box">
                     <div class="contact-operation-content-title">
                         <image class="contact-operation-content-title-img" src="/src/images/contact-operation-content-title-img.png"/>
                         <text class="contact-operation-content-title-text">Star Friends </text>
                     </div>

                     <div class="contact-operation-content-list">
                          <div class="contact-operation-content-list-user">
                               <image class="contact-operation-content-list-user-img" src="/src/images/contact-operation-content-list-user-img.png" />
                               <text class="contact-operation-content-list-text">Greg Woodburn</text>
                          </div>
                          <image class="contact-operation-content-list-icon" src="/src/images/contact-operation-content-list-icon.png" />
                     </div>
                     <div class="contact-operation-content-list">
                          <div class="contact-operation-content-list-user">
                               <image class="contact-operation-content-list-user-img" src="/src/images/contact-operation-content-list-user-img.png" />
                               <text class="contact-operation-content-list-text">Greg Woodburn</text>
                          </div>
                          <image class="contact-operation-content-list-icon" src="/src/images/contact-operation-content-list-icon.png" />
                     </div>
                 </div>
                  <div class="contact-operation-content-box">
                     <div class="contact-operation-content-title">
                         <image class="contact-operation-content-title-img" src="/src/images/contact-operation-content-title-img.png"/>
                         <text class="contact-operation-content-title-text">Star Friends </text>
                     </div>

                     <div class="contact-operation-content-list">
                          <div class="contact-operation-content-list-user">
                               <image class="contact-operation-content-list-user-img" src="/src/images/contact-operation-content-list-user-img.png" />
                               <text class="contact-operation-content-list-text">Greg Woodburn</text>
                          </div>
                          <image class="contact-operation-content-list-icon" src="/src/images/contact-operation-content-list-icon.png" />
                     </div>
                     <div class="contact-operation-content-list">
                          <div class="contact-operation-content-list-user">
                               <image class="contact-operation-content-list-user-img" src="/src/images/contact-operation-content-list-user-img.png" />
                               <text class="contact-operation-content-list-text">Greg Woodburn</text>
                          </div>
                          <image class="contact-operation-content-list-icon" src="/src/images/contact-operation-content-list-icon.png" />
                     </div>
                 </div>
        </div>

        </scroller>
        <div class="contact-operation-btn">
             <div class="contact-operation-btn-content">
                  <text class="contact-operation-btn-content-text">0 person invited</text>
                  <image class="contact-operation-btn-content-img" src="/src/images/ahead.png" />
             </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"CreateEventInviteContactsPagetwo",
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

/*头部head*/
    .header {
        display: flex;
        flex-direction: row;
        padding-top: 82px;
        height: 122px;
    }

    .icon-chart {
        width: 20px;
        height: 40px;
        margin-left: 38px;
    }

    .header-title {
        font-size: 30px;
        color: #242424;
        margin-left: 233.8px;
    }
    
     .main {
        margin-top: 81.2px;
        padding-left: 38px;
        padding-right: 40px;
    }

    .create-event {
        padding-bottom: 17px;
    }

    .create-title {
        font-size: 50px;
        color: #EC2079;
    }
    
    .contact-operation-area {
        flex-direction: row
    }
    
    .contact-operation-form {
        width: 700px;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 40px;
        flex-direction: row;
        justify-content:space-between;
        align-items:center; 
        background-color: #F4F4F4;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius:15px;
    }

    .contact-operation-form-img {
        width: 24px;
        height: 24px;
    }
    
    .input {
        font-size:25px;
        width: 300px;
        height: 62px;
    }
    
    .contact-operation-select {
        flex-direction: row;
        align-items:center ;
        justify-content:space-between;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 28px;
        background-color: #57B1E3;
        width: 264px;
        height: 56px;
        border-radius:25px;
    }
    .contact-operation-select-text {
         flex-direction: row;
         align-items:center ;
    }
    .contact-operation-select-text-title {
        color: #ffffff;
    }
    .contact-operation-select-text-content {
        color: #ffffff;
    }
    .contact-operation-select-image {
        width: 18px;
        height: 16px;
    }
    .contact-operation-content {
        margin-top: 36px;
        padding-bottom: 132px;
    }

  
    .contact-operation-content-title {
        flex-direction: row;
        align-items:center ;
        padding-left: 38px;
        padding-bottom: 10px;
        padding-top: 10px;
        background-color: #EBEBEB;
    }
    .contact-operation-content-title-img {
        width: 34px;
        height: 32px;
        margin-left: 18px;
    }
    .contact-operation-content-title-text {
        color: #696969;
    }
    .contact-operation-content-list {
        flex-direction: row;
        align-items:center ;
        justify-content:space-between;
        padding-left: 38px;
        padding-right: 38px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: rgba(112, 112, 112, .28);
    }
    .contact-operation-content-list-user {
        flex-direction: row;
        align-items:center ;
        justify-content:space-between;
    }
    .contact-operation-content-list-user-img {
        width: 84px;
        height: 84px;
        margin-right: 27px;
    }
    .contact-operation-content-list-icon {
        width: 20px;
        height: 20px;
    }
    .contact-operation-btn {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 750px;
        height: 132px;
        background-color: #57B1E3;
    }
    .contact-operation-btn-content {
        padding-left: 20px;
        padding-right: 20px;
        flex-direction: row;
        align-items:center ;
        justify-content:space-between;
         height: 132px;
        
    }
   
    .contact-operation-btn-content-text {
        color: #ffffff;
    }
    .contact-operation-btn-content-img {
        width: 46px;
        height: 30px;
    }
</style>