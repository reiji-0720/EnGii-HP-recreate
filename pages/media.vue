<template>
  <div class="mediacontainer">
    <div class="mediaTop clearfix">
      <div class="mediaTopLeft">
        <div class="mediaImg"></div>
      </div>
      <div class="mediaTopRight">
        <div class="mediaIcon"></div>
        <h2 class="mediaText">EnGii media</h2>
        <p class="mediaExp">EnGiiが持つ様々なサービスを展開します</p>
      </div>
    </div>
    <div class="subArea">
      <div class="mediaContens">
        <p class="mediaContentsText">contents</p>
      </div>
    </div>
    <div class="mediaUp clearfix">
      <graphics id="graphics" />
      <app id="app" />
    </div>
    <div class="mediaDown">
      <webHP id="webHP" />
      <video id="video" />
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
.flex {
  display: flex;
}
.mediaTopLeft {
  float: left;
}
.mediaTopRight {
  float: left;
  margin-left: 30px;
}
.mediaTop {
  height: 568px;
}
.mediaImg {
  background-image: url("~@/assets/anonymous-woman-using-laptop-in-bedroom-3975590.jpg");
  background-size: cover;
  background-position: center;
  width: 853px;
  height: 568px;
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
  text-align: center;
}
.subArea {
  height: 380px;
  position: relative;
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
  width: 79px;
}
.mediaUp {
  height: 600px;
}
</style>