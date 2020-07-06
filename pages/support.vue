<template>
    <div class="supportContainer">
    <div class="supportTop clearfix">
      <div class="supportTopLeft">
        <div class="supportImg"></div>
      </div>
      <div class="supportTopRight">
        <div class="supportIcon"></div>
        <h2 class="supportText">EnGii support</h2>
        <p class="supportExp">理想の自分、なりたい自分に向けて<br class="sp-br">足踏みしているあなたをサポートしたい</p>
      </div>
    </div>

    <div class="subArea">
      <div class="supportLeftVertical">
        <div class="inline clearfix">
          <p class="verticalOne">EnGii support</p>
          <div class="border borderOne"></div>
        </div>

        <div class="inline clearfix">
          <p class="verticalSecond">EnGii media</p>
          <div class="border borderSecond"></div>
        </div>
      </div>
      <div class="supportContens">
        <p class="supportContentsText">contents</p>
      </div>
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
<style>
.supportContainer {
  margin-top: 10%;
}
.supportTopLeft {
  float: right;
  width: 60%;
  height:100%;
  overflow:hidden;
  /* height: 568px; */
}
.supportTopRight {
  float: left;
  padding-left: 30px;
  width: 40%;
}
.supportTop {
  height: 568px;
}
.supportImg {
  background-image: url("~@/assets/five-assorted-balloons.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  /* height: 75%; */
  padding-top: 75%;
}
.supportIcon {
  background-image: url("~@/assets/supportIcon.png");
  background-size: cover;
  background-position: center;
  height: 137px;
  width: 140px;
  /* float: left; */
}
.supportText {
  font-size: 72px;
}
.supportExp {
  font-size: 20px;
}
.sp-br{
  display: none;
}
.subArea {
  height: 380px;
  position: relative;
}
.inline {
  /* float: left; */
  display: inline-block;
  transform:rotate(180deg);
}
.supportLeftVertical {
  padding-top: 72px;
   text-align:right;
}
.supportLeftVertical p {
  writing-mode: vertical-rl;
  font-size: 24px;
}
.verticalOne {
  padding-left: 18px;
  color: #9b9b9b;
}
.verticalSecond {
  padding-left: 18px;
}
.border {
  height: 80px;
  width: 1px;
  background-color: black;
  display: block;
}
.borderOne {
  margin: 10px 0 10px 35px;
  border: 1px solid #9b9b9b;
}
.borderSecond {
  margin: 10px 0 10px 35px;
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
.mediaUp {
}
.mediaDown{
  height: 766px;
}

@media screen and (max-width: 730px) {
  .supportTop{
    margin-top: 15%;
  }
  .supportTopLeft{
    float: none;
    margin: 0 auto;
    width: 100%;
  }
  .supportIcon{
    float: right;
    width: 92px;
    height: 90px;
  }
  .supportImg{
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
  .supportLeftVertical{
    display: none;
  }
  .supportText{
    font-size: 26px;
  }
  .supportExp{
    font-size: 16px;
  }
  .sp-br{
    display: block;
  }
  .subArea{
    margin: 70px 0 -30px;
  }
  .supportTopRight{
    padding: 0;
    float: none;
    margin: 25px auto;
    width: 85%;
  }
  .supportTop{
    height: 230px;
  }
  .supportDown{
    height: 1500px;
  }
}
</style>