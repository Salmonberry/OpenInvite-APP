<template>
    <div class="ContactCreateGroupPage">
         <!--<div class="ContactCreateGroupPageretreatx">-->
              <!--<image class="retreatxss" src="local:///retreatx.png"/>-->
         <!--</div>-->
         <scroller>

         <div class="ContactCreateGroupPage-head">
              <text class="ContactCreateGroupPage-headtitle">Create Group</text>
              <text class="ContactCreateGroupPage-headcontent">Select Friends</text>
         </div>
         
         <div class="ContactCreateGroupPage-searchbox">
              <div class="ContactCreateGroupPage-search">
                   <image class="ContactCreateGroupPage-searchinputimg" src="local:///search.png" />
                   <input type="text" placeholder="Name / #" class="ContactCreateGroupPage-searchinput" /> 
              </div>

              <div class="ContactCreateGroupPage-searchtext">
                   <text class="ContactCreateGroupPage-searchtexttext">Display : 1st Degree Contact</text>
                   <image class="ContactCreateGroupPage-searchadd" src="local:///contactCreateGroupPage-searadd.png" />
              </div>

         </div>

         <div class="Separate">
             <image class="Separateimg" src="local:///contact-operation-content-title-img.png" />
             <text class="Separatetext">Star Friends</text>
         </div>
        <div class="ContactCreateGroupPage-content">
         <div class="ContactCreateGroupPage-list">

              <div class="ContactCreateGroupPage-listuser">
                  <image class="contactCreateGroupPage-listuserimg" src="local:///contactCreateGroupPage-listuser.png"/>
                  <text class="contactCreateGroupPage-listusertext">Alice Gill</text>
              </div>
              <image class="ContactCreateGroupPage-listicon"  src="local:///contact-operation-content-list-icon.png" />
         </div>

         <div class="ContactCreateGroupPage-list">
              <div class="ContactCreateGroupPage-listuser">
                  <image class="contactCreateGroupPage-listuserimg" src="local:///contactCreateGroupPage-listuser.png"/>
                  <text class="contactCreateGroupPage-listusertext">Alice Gill</text>
              </div>
              <image class="ContactCreateGroupPage-listicon"  src="local:///contact-operation-content-list-icon.png" />
         </div>

          <div class="Separate">
             <text class="Separatetext">A</text>
         </div>
        
        <div class="ContactCreateGroupPage-list">
              <div class="ContactCreateGroupPage-listuser">
                  <image class="contactCreateGroupPage-listuserimg" src="local:///contactCreateGroupPage-listuser.png"/>
                  <text class="contactCreateGroupPage-listusertext">Alice Gill</text>
              </div>
              <image class="ContactCreateGroupPage-listicon"  src="local:///contact-operation-content-list-icon.png" />
        </div>
        
        <div class="ContactCreateGroupPage-list">
              <div class="ContactCreateGroupPage-listuser">
                  <image class="contactCreateGroupPage-listuserimg" src="local:///contactCreateGroupPage-listuser.png"/>
                  <text class="contactCreateGroupPage-listusertext">Alice Gill</text>
              </div>
              <image class="ContactCreateGroupPage-listicon"  src="local:///contact-operation-content-list-icon.png" />
         </div>

          <div class="Separate">
             <text class="Separatetext">A</text>
         </div>
        
        <div class="ContactCreateGroupPage-list">
              <div class="ContactCreateGroupPage-listuser">
                  <image class="contactCreateGroupPage-listuserimg" src="local:///contactCreateGroupPage-listuser.png"/>
                  <text class="contactCreateGroupPage-listusertext">Alice Gill</text>
              </div>
              <image class="ContactCreateGroupPage-listicon"  src="local:///contact-operation-content-list-icon.png" />
        </div>
        
        <div class="ContactCreateGroupPage-list">
              <div class="ContactCreateGroupPage-listuser">
                  <image class="contactCreateGroupPage-listuserimg" src="local:///contactCreateGroupPage-listuser.png"/>
                  <text class="contactCreateGroupPage-listusertext">Alice Gill</text>
              </div>
              <image class="ContactCreateGroupPage-listicon"  src="local:///contact-operation-content-list-icon.png" />
        </div>
        </div>
        <div class="ContactCreateGroupPage-selected">
            <text class="ContactCreateGroupPage-selected-text">0 person selected</text>
            <image class="ContactCreateGroupPage-selectedimg" src="local:///ahead.png"/>
        </div>
         </scroller>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

.ContactCreateGroupPageretreatx {
    padding-left: 34px;
    padding-top: 44px;
    padding-bottom: 42px;
    background-color: #57B1E3;
}
.retreatxss {
    padding-left: 34px;
    width: 26px;
    height: 44px;
}
.ContactCreateGroupPage-head {
    padding-left: 34px;
    padding-top: 10px;
    padding-bottom: 28px;
    background-color: #57B1E3;
}
.ContactCreateGroupPage-headtitle {
    font-size: 70px;
    color: #ffffff;
    padding-bottom: 23px;
}
.ContactCreateGroupPage-headcontent {
    font-size: 42px;
    color: #ffffff;
}
.ContactCreateGroupPage-content {
    padding-bottom: 132px;
}
.ContactCreateGroupPage-searchbox {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 36px;
    padding-bottom: 30px;
}
.ContactCreateGroupPage-search {
    flex-direction: row;
    align-items:center ;
    height: 72px;
    padding-left: 28px;
    padding-right: 28px;
    background-color: #EDEDED;
    border-radius:50px;
}
.ContactCreateGroupPage-searchinputimg {
    width: 42px;
    height: 42px;
    margin-right: 22px;
}
.ContactCreateGroupPage-searchinput {
    flex: 1;
    height: 72px;
    border-radius:50px;
    background-color: #EDEDED;
    font-size: 28px;
}
.ContactCreateGroupPage-searchtext {
    flex-direction: row;
    align-items:center ;
    margin-top: 32px;
}
.ContactCreateGroupPage-searchtexttext {
    margin-right: 15px;
   font-size: 28px;
   color: #57B1E3;
}
.ContactCreateGroupPage-searchadd {
    width: 18px;
    height: 16px;
}
.Separate {
    flex-direction: row;
    align-items:center ;
    height: 56px;
    padding-left: 40px;
    background-color: #EBEBEB;
}
.Separateimg {
    width: 34px;
    height: 32px;
    margin-right: 16px;
}
.Separatetext {
    color: #454545;
    font-size: 26px;
}
.ContactCreateGroupPage-list {
    flex-direction: row;
    justify-content:space-between;
    align-items:center ;
    height: 130px;
    padding-left: 38px;
    padding-right: 38px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgba(112, 112, 112, .28);
}
.ContactCreateGroupPage-listuser {
    flex-direction: row;
    justify-content:space-between;
    align-items:center ;
}
.contactCreateGroupPage-listuserimg {
    width: 86px;
    height: 86px;
    margin-right: 27px;
}
.contactCreateGroupPage-listusertext {
    color: #707070;
    font-size: 38px;
}
.ContactCreateGroupPage-listicon {
    width: 20px;
    height: 20px;
}
.ContactCreateGroupPage-selected {
    flex-direction: row;
    justify-content:space-around;
    align-items:center ;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 750px;
    height: 132px;
    background-color: #57B1E3;
}
.ContactCreateGroupPage-selected-text {
    font-size: 38px;
    color: #ffffff;
}
.ContactCreateGroupPage-selectedimg {
    width: 46px;
    height: 30px;
}
</style>