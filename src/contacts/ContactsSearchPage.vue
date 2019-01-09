<template>
    <div>
        <scroller>
        <div class="ContactsSearchPage-content">
             <div class="ContactsSearchPage-searchbox">
                 <input type="text" ref="input1" :autofocus=true class="ContactsSearchPage-searchinput" @change="oninput($event)"  />
             </div>

             <div v-if="show" class="ContactsSearchPage-result">
                 <text class="ContactsSearchPage-result-title">They also have interest in</text>
                 <div class="ContactsSearchPage-result-Details">
                     <text class="ContactsSearchPage-result-Detailstext">#Draw</text>
                 </div>
                 
             </div>
        </div>  

        <div v-if="show" class="ContactsSearchPage-resultbox">
                <text class="ContactsSearchPage-resultbox-title">1st Degree Contact</text>

                <div class="ContactsSearchPage-resultbox-list">
                    <div class="ContactsSearchPage-resultbox-listimgbox">
                    <image class="ContactsSearchPage-resultbox-listimg" src="local:///contactsSearchPage1.png" />
                    </div>
                    <text class="ContactsSearchPage-resultbox-listtext">Alice Gill</text>
                </div>
                <div class="ContactsSearchPage-resultbox-list">
                    <div class="ContactsSearchPage-resultbox-listimgbox">
                    <image class="ContactsSearchPage-resultbox-listimg" src="local:///contactsSearchPage2.png" />
                    </div>
                    <text class="ContactsSearchPage-resultbox-listtext">Brian Costilla</text>
                </div>
                <div class="ContactsSearchPage-resultbox-list">
                    <div class="ContactsSearchPage-resultbox-listimgbox">
                    <image class="ContactsSearchPage-resultbox-listimg" src="local:///contactsSearchPage3.png" />
                    </div>
                    <text class="ContactsSearchPage-resultbox-listtext">Daniel White </text>
                </div>

        </div>

        <div v-if="show" class="ContactsSearchPage-resultbox">
                <text class="ContactsSearchPage-resultbox-title">2nd Degree Contact</text>

                <div class="ContactsSearchPage-resultbox-list">
                    <div class="ContactsSearchPage-resultbox-listimgbox">
                        <image class="ContactsSearchPage-resultbox-listimg" src="local:///contactsSearchPage4.png" />
                        <image class="ContactsSearchPage-resultbox-listimgx" src="local:///contactsSearchPage1x.png" />
                    </div>
                    
                    <text class="ContactsSearchPage-resultbox-listtext">Ben Burke</text>
                </div>
                <div class="ContactsSearchPage-resultbox-list">
                    <div class="ContactsSearchPage-resultbox-listimgbox">
                        <image class="ContactsSearchPage-resultbox-listimg" src="local:///contactsSearchPage5.png" />
                        <image class="ContactsSearchPage-resultbox-listimgx" src="local:///contactsSearchPage1x.png" />
                    </div>
                    <text class="ContactsSearchPage-resultbox-listtext">Vivian Adams</text>
                </div>

                <div class="ContactsSearchPage-resultbox-list">
                    <div class="ContactsSearchPage-resultbox-listimgbox">
                       <image class="ContactsSearchPage-resultbox-listimg" src="local:///contactsSearchPage6.png" />
                       <image class="ContactsSearchPage-resultbox-listimgx" src="local:///contactsSearchPage1x.png" />
                    </div>
                    <text class="ContactsSearchPage-resultbox-listtext">Carolyn Zamora </text>
                </div>

                <div class="ContactsSearchPage-resultbox-list">
                    <div class="ContactsSearchPage-resultbox-listimgbox">
                         <image class="ContactsSearchPage-resultbox-listimg" src="local:///contactsSearchPage7.png" />
                         <image class="ContactsSearchPage-resultbox-listimgx" src="local:///contactsSearchPage1x.png" />
                    </div>
                    <text class="ContactsSearchPage-resultbox-listtext">Albert Gatewood </text>
                </div>
        </div>
      </scroller>
    </div>
</template>

<script>
    export default {
        name:"ContactsSearchPage",
        data() {
            return {
                show:false
            }
        },
         methods: {
             focus: function () {
                this.$refs['input1'].focus();
            },
            oninput(event){
                console.log(event.value)
                if(event.value!=" "){
                    this.show=true
                }
            }
         }
    }
</script>

<style scoped>
.ContactsSearchPage-content {
    margin-left: 22px;
    margin-right: 22px;
    margin-top: 32px;
}
.ContactsSearchPage-searchbox {
    height: 80px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius:50;
    background-color: #F5F5F5;
}
.ContactsSearchPage-searchinput {
    height: 80px;
    border-radius:50;
    background-color: #F5F5F5;
}
.ContactsSearchPage-result {
    margin-top: 44px;
}
.ContactsSearchPage-result-title {
    color: #707070;
    font-size: 40px;
}
.ContactsSearchPage-result-Details {
    flex-direction: row;
    margin-top: 8px;
}
.ContactsSearchPage-result-Detailstext {
    width: auto;
    padding-left: 28px;
    padding-right: 28px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #Ffffff;
    font-size: 28px;
    background-color: #57B1E3;
    border-radius:26px;
}
.ContactsSearchPage-resultbox {
    margin-top: 34px;
}
.ContactsSearchPage-resultbox-title {
    padding-left: 23px;
    padding-bottom: 18px;
    border-bottom-color: rgba(112, 112, 112, .31);
    border-bottom-style: solid;
    border-bottom-width: 2px;
    font-size: 26px;
    color: #57B1E3;
}
.ContactsSearchPage-resultbox-list  {
    flex-direction: row;
    align-items:center ;
    padding-left: 23px;
    padding-right: 23px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom-color: rgba(112, 112, 112, .31);
    border-bottom-style: solid;
    border-bottom-width: 2px;
}
.ContactsSearchPage-resultbox-listimg {
    width: 86px;
    height: 86px;
    
}
.ContactsSearchPage-resultbox-listtext {
    font-size: 30px;
    color: #707070;
}
.ContactsSearchPage-resultbox-listimgbox {
    position: relative;
    margin-right: 70px;
}
.ContactsSearchPage-resultbox-listimgx {
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 62px;
    height: 62px;

}
</style>