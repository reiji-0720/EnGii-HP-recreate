<template>
  <div class="container">
    <div class="adjustClass" v-bind:style="styleObject" >

    <Top id="Top" />

    <div class="scrollOne">
      <div class="borderOne"></div>
      <p class="textOne colorOne">scroll</p>
    </div>
    <MediaFooter class="MediaFooter" />
    </div>
    
    <h2 class="newsMainText">NEWS</h2>
    <Newstop :newstop="newsitems" id="News" />
    <div id="sreviceTitle">
      <h2 class="serviceMainText">SERVICE</h2>
      <p class="serviceSubText">
        多くの人が抱える悩みや不安とHP作成やアプリ制作といったメディア領域の問題に対して
        <br />対面での寄り添ったサポート、デザインやデジタルプロフェッショナル面で
        <br />解決できる場所としてサービスを展開しています。
      </p>
    </div>
    <div class="Activity clearfix">
      <nuxt-link class="borderNone" to="/sevice/support">
        <engiiSupport />
      </nuxt-link>
      <nuxt-link class="borderNone" to="/sevice/media">
        <engiiMedia />
      </nuxt-link>
    </div>
    <div class="scrollsecond">
      <p class="scrolltext">scroll</p>
      <div class="scrollborder"></div>
    </div>
    <Influencer id="Influencer" />
    <About id="About" />
    <contact id="indexContact" />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import MediaFooter from "~/components/MediaFooter.vue";
import Contact from "~/components/contact.vue";
import Influencer from "~/components/influencer.vue";
import engiiSupport from "~/components/engiiSupport.vue";
import engiiMedia from "~/components/engiiMedia.vue";
import About from "~/components/About.vue";
import Newstop from "~/components/newstop.vue";
import Vue from "vue";
import Top from "~/components/top.vue";
import axios from "axios";

export default {
  data() {
    return {
      newsitems: "",

       windowWidth: window.innerWidth,
       windowHeight: window.innerHeight,

       styleObject:{
         height: null,
       }
    };
  },

  async asyncData() {
    const { data } = await axios.get("https://engii.microcms.io/api/v1/news", {
      headers: { "X-API-KEY": "ff71a3f4-d0d9-4250-9060-9b660b690fe6" },
    });
    return {
      newsitems: data.contents,
    };
  },
 
  components: {
    Logo,
    MediaFooter,
    Contact,
    Influencer,
    engiiSupport,
    engiiMedia,
    About,
    Newstop,
    Top,
  },
  
     methods:{
       window:onload = function(){
        this.windowWidth = window.innerWidth;
       if(this.windowWidth > 730){
           this.styleObject.height = window.innerHeight-200+'px';
       } else  {
         this.styleObject.height = window.innerHeight-20+'px';
       }
       },

        handleResize: function(){
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;

        
       if(this.windowWidth > 730){
         if(this.windowHeight < 620 ){
           this.styleObject.height = '420px';
         }else{
            this.styleObject.height = window.innerHeight-200+'px';
         }
           
       } else  {
          //スマホサイズで高さより横幅が大きいとき
         if(this.windowWidth > this.windowHeight){
           this.styleObject.height = '480px';
         }
         else{
           this.styleObject.height = window.innerHeight-20+'px';
         }
       }
    }
  },
 created: function(){
   //ウインドウの横幅と高さを取得
  this.windowWidth = window.innerWidth;
  this.windowHeight = window.innerHeight;

　　
       if(this.windowWidth > 730){
         if(this.windowHeight < 620 ){
           this.styleObject.height = '420px';
         }else{
            this.styleObject.height = window.innerHeight-200+'px';
         }

       } else  {
          //スマホサイズで高さより横幅が大きいとき
         if(this.windowWidth > this.windowHeight){
           this.styleObject.height = '480px';
         }
         else{
           this.styleObject.height = window.innerHeight-20+'px';
         }
       }
 },
  mounted: function(){
    if((this.windowWidth > 730 )||((this.windowWidth <730)&&(this.windowWidth>this.windowHeight))){
       window.addEventListener('resize',this.handleResize)
    }
    
  },
  beforeDestroy: function(){

    if((this.windowWidth > 730 )||((this.windowWidth <730)&&(this.windowWidth>this.windowHeight))){
       window.removeEventListener('resize',this.handleResize)
    }

    
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

/**adjustClass */
.adjustClass{
  position: relative;
}
.MediaFooter{
  position:absolute;
  bottom:0px;
}



#About,
#indexContact {
  margin-top: 15%;
}
#Top {
  margin-top: 200px;
  max-width: 1500px;
}
#News {
  margin-top: 3%;
}

.Activity {
  margin: 3% auto;
  max-width: 1500px;
}

#Influencer {
  margin: 5% auto auto auto;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.newsMainText {
  font-size: 54px;
  margin: 10% auto 0 auto;
  font-weight: 600;
}

#sreviceTitle {
  margin-top: 20%;
}

.serviceMainText {
  font-size: 54px;
  margin: 10px 0;
  font-weight: 600;
}

.serviceSubText {
  display: inline-block;
  text-align: left;
  margin: 15px auto;
}

.scrolltext {
  writing-mode: vertical-rl;
  margin-left: 25px;
  color: #3bb2db;
  font-size: 14px;
}

.textOne {
  writing-mode: vertical-rl;
  margin-left: 25px;
  color: #231815;
  font-size: 14px;
}

.scrollsecond {
  padding-top: 5%;
  max-width: 1500px;
  margin: auto;
}

.scrollborder {
  border-left: 1px solid #3bb2db;
  display: block;
  height: 80px;
  margin: 10px 0 10px 32px;
}
.backColor {
  background-color: #3e3a39;
}
.borderOne {
  border-left: 1px solid #231815;
  height: 80px;
  margin: 0 auto;
  width: 1px;
  display: inline-block;
}
.scrollOne {
  position:absolute;
  width: 100%;
  bottom:20px;
  margin: 0 auto -6px;
}
.colorOne {
  color: #231815;
  text-align: center;
  line-height: 100%;
  display: inline-block;
  /* height: 80px; */
  margin: 0 0 45px 3px;
}
.colorSecond {
  color: #3bb2db;
}

.borderSecond {
  border-left: 1px solid #3bb2db;
}
.backColor {
  background-color: #3e3a39;
}
@media screen and (max-width: 1366px) {
}

@media screen and (max-width: 1000px) {
  .serviceMainText {
    font-size: 35px;
  }
  #sreviceTitle {
    margin-top: 20%;
  }
  .newsMainText {
    font-size: 35px;
    margin: 10% auto 0 auto;
    font-weight: 600;
  }
  .serviceSubText {
    font-size: 10px;
  }
}

@media screen and (max-width: 730px) {
  .scrollOne {
    display: none;
  }
  #Top {
    margin-top: 20px;
  }
  #News {
    margin-top: 20px;
  }
  .newsMainText {
    font-size: 26px;
    margin-top: 110px;
  }
  .MediaFooter {
  }
  .colorOne {
    margin-bottom: 25px;
  }
  #sreviceTitle {
    width: 90%;
    margin: 110px auto 10% auto;
  }
  .serviceSubText {
    font-size: 10px;
  }
  .serviceMainText {
    font-size: 26px;
  }

  .serviceSubText {
    margin: 0 auto;
  }

  .scrollsecond {
    display: none;
  }

  #Influencer {
    margin-top: 110px;
  }

  #About, #indexContact {
    margin-top: 110px;
  }
}
</style>
