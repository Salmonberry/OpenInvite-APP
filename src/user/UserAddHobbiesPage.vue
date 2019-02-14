<template>
    <div>
         <div class="UserAddHobbiesPage">
             <input class="UserAddHobbiesPage_input" />
         </div>

         <div class="UserAddHobbiesPage_text">
              <text class="UserAddHobbiesPage_text_text">#Videogame</text>
         </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {

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
    background-color: #F5F5F5;
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