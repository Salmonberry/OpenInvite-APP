<template>
    <div>
           <div class="HomeUpcomingPage-head">
                <text class="HomeUpcomingPage-title-text">HOME</text>
                <div class="HomeUpcomingPage-a-box">
                        <a  class="HomeUpcomingPage-head-a" href=""><text class="HomeUpcomingPage-head-a-text-border">UPCOMING</text></a>
                        <a  class="HomeUpcomingPage-head-a" href=""><text class="HomeUpcomingPage-head-a-text-border">UPCOMING</text></a>
                        <a  class="HomeUpcomingPage-head-a" href=""><text class="HomeUpcomingPage-head-a-text-border">UPCOMING</text></a>
                </div>
             </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
 .HomeUpcomingPage-head {
    background-color: #EC2079;
}
.HomeUpcomingPage-title-text {
    font-size: 30px;
    padding-top: 24px;
    padding-bottom: 24px;
    color: #ffffff;
    text-align: center;
}
.HomeUpcomingPage-a-box {
    width: 750px;
    display: flex;
    flex-direction: row;
    justify-content:space-around ;
}
.HomeUpcomingPage-head-a {
    padding-bottom: 24px;
}
.HomeUpcomingPage-head-a-text {
    color: #ffffff;
    padding-bottom: 12px;
    font-size: 30px;
    border-bottom-width: 3px;
    border-bottom-color: transparent;
    border-bottom-style: solid;
}
.HomeUpcomingPage-head-a-text-border {
    color: #ffffff;
    padding-bottom: 12px;
    font-size: 30px;
    border-bottom-width: 3px;
    border-bottom-width: 3px;
    border-bottom-color: #ffffff;
    border-bottom-style: solid;
}
</style>