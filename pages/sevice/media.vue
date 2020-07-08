<template>
  <div class="mediacontainer">
    <div class="mediaTop clearfix">
      <div class="mediaTopLeft">
        <div class="mediaImg"></div>
      </div>
      <div class="mediaTopRight">
        <div class="mediaIcon"></div>
        <h2 class="mediaText">EnGii media</h2>
        <p class="mediaExp">
          EnGiiが持つ様々な
          <br class="sp-br" />サービスを展開します
        </p>
      </div>
    </div>

    <div class="subArea">
      <div class="mediLeftVertical">
        <div class="inline clearfix">
          <p class="verticalOne">EnGii support</p>
          <div class="border borderOne"></div>
        </div>

        <div class="inline clearfix">
          <p class="verticalSecond">EnGii media</p>
          <div class="border borderSecond"></div>
        </div>
      </div>
      <div class="mediaContens">
        <p class="mediaContentsText">contents</p>
      </div>
    </div>

    <div class="mediaUp clearfix">
      <graphics id="graphics" />
      <app />
      <div class="scrollsecond">
        <p class="scrolltext">scroll</p>
        <div class="scrollborder"></div>
      </div>
    </div>
    <div class="mediaDown clearfix">
      <webHP />
      <Video />
    </div>
  </div>
</template>

<script>
import Graphics from "~/components/graphics.vue";
import App from "~/components/app.vue";
import WebHP from "~/components/webHP.vue";
import Video from "~/components/video.vue";

export default {
  components: {
    Graphics,
    App,
    WebHP,
    Video
  }
};
</script>

<style scoped>
.mediacontainer {
  margin-top: 10%;
}
.mediaTopLeft {
  float: left;
  width: 60%;
  /* height: 568px; */
}
.mediaTopRight {
  float: left;
  padding-left: 30px;
  width: 40%;
}
.mediaTop {
  height: 568px;
}
.mediaImg {
  background-image: url("~@/assets/mediaTop.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  /* height: 75%; */
  padding-top: 75%;
}
.mediaIcon {
  background-image: url("~@/assets/mediaIcon.png");
  background-size: cover;
  background-position: center;
  height: 137px;
  width: 140px;
  /* float: left; */
}
.mediaText {
  font-size: 72px;
}
.mediaExp {
  font-size: 20px;
}
.sp-br {
  display: none;
}
.subArea {
  height: 380px;
  position: relative;
}
.inline {
  /* float: left; */
  display: inline-block;
}
.mediLeftVertical {
  padding-top: 72px;
}
.mediLeftVertical p {
  writing-mode: vertical-rl;
  font-size: 24px;
}
.verticalOne {
  padding-left: 32px;
  color: #9b9b9b;
}
.verticalSecond {
  padding-left: 15px;
}
.border {
  height: 80px;
  width: 1px;
  background-color: black;
  display: block;
}
.borderOne {
  margin: 10px 0 10px 47px;
  border: 1px solid #9b9b9b;
}
.borderSecond {
  margin: 10px 0 10px 31px;
  border: 1px solid #3bb2db;
}
.mediaContens {
  font-size: 20px;
  border-bottom: solid 2px #3bb2db;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
  height: 30px;
  width: 89px;
}
.scrollsecond {
  float: right;
  margin: -730px 30px 0;
}
.scrolltext {
  writing-mode: vertical-rl;
  margin-left: 25px;
  color: #3bb2db;
  font-size: 14px;
}
.scrollborder {
  border-left: 1px solid #3bb2db;
  display: block;
  height: 80px;
  margin: 10px 0 0 35px;
}

@media screen and (max-width: 1350px) {
  .mediaText {
    font-size: 70px;
  }
}
@media screen and (max-width: 1130px) {
  .mediaText {
    font-size: 64px;
  }
  .mediaTop {
    height: 510px;
  }
  .mediLeftVertical p {
    font-size: 20px;
  }
}
@media screen and (max-width: 1110px) {
  .mediaText {
    font-size: 60px;
  }
  .mediaExp {
    font-size: 18px;
  }
  .mediaTop {
    height: 480px;
  }
  .mediLeftVertical p {
    font-size: 18px;
  }
}
@media screen and (min-width: 731px) and (max-width: 960px) {
  .mediaText {
    font-size: 55px;
  }
  .mediaTop {
    height: 460px;
  }
  .mediLeftVertical {
    padding-top: 0;
  }
  .mediLeftVertical p {
    font-size: 17px;
  }
  .subArea {
    height: auto;
  }
  .scrollsecond {
    display: none;
  }
}
@media screen and (max-width: 885px) {
  .mediaText {
    font-size: 50px;
  }
  .mediaExp {
    font-size: 15px;
  }
  .mediaTop {
    height: 440px;
  }
}
@media screen and (max-width: 810px) {
  .mediaText {
    font-size: 45px;
  }
  .mediaExp {
    font-size: 13px;
  }
}
@media screen and (min-width: 731px) and (max-width: 765px) {
  .graphics,
  .app,
  .hp,
  .video {
    width: 330px;
    margin-left: 2px;
  }
  .app,
  .video {
    margin-left: 45px;
  }
}
@media screen and (max-width: 730px) {
  .mediaTop {
    margin-top: 15%;
  }
  .mediaTopLeft {
    float: none;
    margin: 0 auto;
    width: 100%;
  }
  .mediaIcon {
    float: right;
    width: 92px;
    height: 90px;
  }
  .mediaImg {
    width: 100%;
    padding: 0;
    height: 280px;
  }
  /* .mediaIcon h2, .mediaIcon p{
    float: left;
  } */

  .scrollsecond {
    display: none;
  }
  .mediLeftVertical {
    display: none;
  }
  .mediaText {
    font-size: 26px;
  }
  .mediaExp {
    font-size: 16px;
  }
  .sp-br {
    display: block;
  }
  .subArea {
    margin: 70px 0 -30px;
  }
  .mediaTopRight {
    padding: 0;
    float: none;
    margin: 25px auto;
    width: 85%;
  }
  .mediaTop {
    height: 230px;
  }
  .mediaDown {
    height: 1500px;
  }
}
</style>