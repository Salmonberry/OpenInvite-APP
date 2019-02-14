<template>
    <div>
         <div class="UserAddHobbiesPage">
             <input  class="UserAddHobbiesPage_input"  placeholder="Input Text" :autofocus=true value="" @change="onchange"/>
         </div>

         <div class="UserAddHobbiesPage_text">
              <text v-if="status" class="UserAddHobbiesPage_text_text" @click="addHobbies">#{{text}}</text>
         </div>
    </div>
</template>

<script>
const storage = weex.requireModule('storage')
var navigator = weex.requireModule('navigator')
import getJumpBaseUrl from '@/url.js'
    export default {
        data() {
            return {
                text:"",
                status:false,
            }
        },
        methods: {
           onchange(event){
               this.text = event.value;
               console.log(event.value)
               if(event.value!==""){
                   this.status=true
               }else if(event.value==""){
                    this.status=false
               }
           },
           addHobbies(){
               let list_text
               storage.getItem('list_text',(e)=>{
                   if(e.result==='success'){
                      list_text=JSON.parse(e.data)
                     
                   }else{
                        list_text=[]
                   }
                    list_text.push({
                          text:`#${this.text}`
                      })

                   storage.setItem( 'list_text' ,JSON.stringify(list_text) ,(e)=>{
                       if(e.result==='success'){
                           navigator.pop({
                              
                           })
                       }
                         
                   })

               })

              
           }
        }
    }
</script>

<style scoped>
.UserAddHobbiesPage {
    
    height: 80px;
    margin-top: 32px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius:40px;
    background-color: #F5F5F5;
}
.UserAddHobbiesPage_input {
    height: 80px;
    padding-left: 30px;
    border-radius:40px;
    background-color:red;
    font-size: 50px;
}
.UserAddHobbiesPage_text {
    margin-top: 48px;
    margin-left: 20px;
    margin-right: 20px;
}
.UserAddHobbiesPage_text_text {
    color: #707070;
    padding-left: 20px;
    padding-bottom: 15px;
    border-bottom-width: 2px;
    border-bottom-color: rgba(112, 112, 112, .48);
    border-bottom-style: solid;
}
</style>