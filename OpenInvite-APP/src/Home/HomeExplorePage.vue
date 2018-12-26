<template>
    <div class="HomeExplorePage">
      <Homeheaer></Homeheaer>
      <scroller class="scroller">
      <div class="HomeExplorePage-content">
            <div class="HomeExplorePage-search-box">
                  <div class="HomeExplorePage-search">
                      <input class="HomeExplorePage-search-input" type="text"/>
                      <image class="HomeExplorePage-search-img" src="local:///search.png"></image>
                  </div>
                  <div class="HomeExplorePage-search-btn"><image class="HomeExplorePage-search-btn-img" src="local:///filter-tool-black-shape.png"></image></div>
            </div>

           <div class="HomeExplorePage-list">
                <div class="HomeExplorePage-list-title-box">
                    <text class="HomeExplorePage-list-title-title">Trending  #</text>
                   <a> <text class="HomeExplorePage-list-title-a">See All</text></a>
                </div>
                <div class="HomeExplorePage-list-content">
                    <scroller class="scroller HomeExplorePage-list-content-scroller" scroll-direction="horizontal" show-scrollbar='false'>
                             <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///a5085dd95fcfc4b781849d230a1c9808.png"></image>
                                 <image class="HomeExplorePage-list-content-tabl-img-bg" src="local:///HomeExplorePage-list-content-tabl-img-bg.png"></image>
                                 <text class="HomeExplorePage-list-content-tabl-text">#FineDining</text>
                             </div>
                              <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///a5085dd95fcfc4b781849d230a1c9808.png"></image>
                                 <image class="HomeExplorePage-list-content-tabl-img-bg" src="local:///HomeExplorePage-list-content-tabl-img-bg.png"></image>
                                 <text class="HomeExplorePage-list-content-tabl-text">#FineDining</text>
                             </div>
                             <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///a5085dd95fcfc4b781849d230a1c9808.png"></image>
                                 <image class="HomeExplorePage-list-content-tabl-img-bg" src="local:///HomeExplorePage-list-content-tabl-img-bg.png"></image>
                                 <text class="HomeExplorePage-list-content-tabl-text">#FineDining</text>
                             </div>
                    </scroller>

                </div>
           </div>

            <div class="HomeExplorePage-list">
                <div class="HomeExplorePage-list-title-box">
                    <text class="HomeExplorePage-list-title-title">What’s Hot</text>
                   <a> <text class="HomeExplorePage-list-title-a">See All</text></a>
                </div>
                <div class="HomeExplorePage-list-content">
                    <scroller class="scroller HomeExplorePage-list-content-scroller" scroll-direction="horizontal" show-scrollbar='false'>
                             <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///a5085dd95fcfc4b781849d230a1c9808.png"></image>

                                 <div class="HomeExplorePage-list-content-Hot-text">
                                     <text class="HomeExplorePage-list-content-Hot-text-a">#Drawing #Painting #Relax</text>
                                 </div>

                             </div>
                              <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///a5085dd95fcfc4b781849d230a1c9808.png"></image>


                             </div>
                             <div class="HomeExplorePage-list-content-tabl">
                                 <image class="HomeExplorePage-list-content-tabl-img" src="local:///a5085dd95fcfc4b781849d230a1c9808.png"></image>
                                
                                 
                             </div>
                    </scroller>
                   
                </div>
           </div>
      </div>
      </scroller>
        <bar-component></bar-component>
    </div>
</template>

<script>
import Homeheaer from '@/components/Homeheaer'
import barComponent from '@/components/BarComponent'
    export default {
        name:"HomeExplorePage",
        components: {
            Homeheaer,barComponent
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>
.HomeExplorePage-content {
    padding-top: 34px;
    padding-left: 20px;
    padding-right: 20px;
}
.HomeExplorePage-search-box {
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
}
.HomeExplorePage-search {
    position: relative;
    width: 508px;
    height: 72px;
    background-color: #EDEDED;
     border-radius:30px;
}
.HomeExplorePage-search-input {
    width: 508px;
    height: 72px;
    background-color: #EDEDED;
     border-radius:30px;
}

.HomeExplorePage-search-img {
    position: absolute;
    top: 22px;
    left: 20px;
    width: 30px;
    height: 30px;
}

.HomeExplorePage-search-btn {
    width: 144px;
    height: 72px;
    background-color: #57B1E3;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    border-radius:30px;

}
.HomeExplorePage-search-btn-img {
    width: 30px;
    height: 30px;
}
.HomeExplorePage-list {
    margin-top: 52px;
    margin-bottom: 53px;
}
.HomeExplorePage-list-title-box {
    flex-direction: row ;
    justify-content:space-between;
}
.HomeExplorePage-list-title-title {
    color: #EC2079;
    font-size: 30px;
}
.HomeExplorePage-list-title-a {
    color: #959595;
    font-size: 30px;
}
.HomeExplorePage-list-content {
   margin-top: 17px;
}

.HomeExplorePage-list-content-scroller {
    flex-direction:row;
}

.HomeExplorePage-list-content-tabl {
    position: relative;
}
.HomeExplorePage-list-content-tabl-img {
    width: 416px;
    height: 254px;
    margin-right: 38px
}
.HomeExplorePage-list-content-tabl-img-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 416px;
    height: 254px;
}
.HomeExplorePage-list-content-tabl-text {
    position: absolute;
    top: 100px;
    left: 90px;
    color: #ffffff;
    font-size: 46px;
}

.HomeExplorePage-list-content-Hot-text-a {
    font-size: 20px;
    color: #57B1E3;
}



</style>