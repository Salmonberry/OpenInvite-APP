<template>
    <div>
        <div class="RegistersearchPage-content">

             <div class="RegistersearchPage-search">
                 <input class="Registersearchinput" type="text" :autofocus=true @change="onchange" />
             </div>

             <text v-if="rt" @click="jump" class="RegistersearchPage-searchtext"># Videogame</text>

        </div>
    </div>
</template>

<script>
// var navigator = weex.requireModule('navigator')
    const storage = weex.requireModule('storage');
    const modal = weex.requireModule('modal');
    const swifter = weex.requireModule('swifter');

    export default {
        data() {
            return {
                rt:false,
                hobby: {hobbyName: '#Videogame', isSelected: true}
            }
        },
        methods: {
           onchange(){
               if(this.value!=" "){
                   this.rt=true;
               }
           },
           jump(){
               // navigator.push({
               //     url: 'RegisterHobbiesPage.js',
               //     animated: "true"
               //  })
               modal.toast({
                   message: 1213214,
                   duration: 3
               })
               storage.setItem('SelectedHobby', JSON.stringify(this.hobby), () => {
                   swifter.openTransparentPage('security/register/RegisterHobbiesPage.js');
               })


           }
        }

    }
</script>

<style scoped>
.RegistersearchPage-content {
    margin-left: 21px;
    margin-right: 21px;
    margin-top: 32px;
}
.RegistersearchPage-search {
    height: 80px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #F5F5F5;
    border-radius:54px;
}
.Registersearchinput {
    height: 80px;
    background-color: #F5F5F5;
}
.RegistersearchPage-searchtext {
    margin-top: 51px;
    padding-bottom: 14px;
    padding-left: 18px;
    font-size: 30px;
    color: #707070;
    border-bottom-width: 2px;
    border-bottom-color: rgba(112, 112, 112, .48);
    border-bottom-style: solid;
}
</style>