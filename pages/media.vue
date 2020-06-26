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
    </div>
    <div class="mediaDown">
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
  background-image: url("~@/assets/anonymous-woman-using-laptop-in-bedroom-3975590.jpg");
  background-size: cover;
  background-position: center;
  /* width: 853px; */
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
  width: 79px;
}

.mediaUp {
}
</style>