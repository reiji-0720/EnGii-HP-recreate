<template>
  <div class="video">
    <div class="videoBox">
      <div class="videoLogo"></div>
      <p class="videoText">動画・CG編集</p>
      <p class="videoTextEng">MOVIE / CG EDIT</p>
    </div>
    <div class="center">
      <p class="videoExplanation">
        テロップ作成やBGM、画面の構成
        <br />CG合成といった専門的な分野も
        <br />制作しています。
      </p>
    </div>
    <div class="videoBtn">
      <btnComing />
    </div>
  </div>
</template>

<script>
import btnComing from "~/components/parts/btnComing.vue";

export default {
  components: {
    btnComing
  }
};
</script>

<style>
.video {
  float: left;
  width: 50%;
  margin: 0 auto;
}
.videoBox {
  height: 372px;
  width: 372px;
  border: solid 2px #3bb2db;
  margin: 0 auto;
}
.videoLogo {
  height: 120px;
  width: 123px;
  background-image: url("~@/assets/video.png");
  background-size: cover;
  background-position: center;
  margin: 60px auto;
}
.videoText {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
}
.videoTextEng {
  text-align: center;
  font-size: 19px;
  margin-top: 15px;
}
.center {
  margin: 0 auto;
  max-width: 398px;
}
.videoExplanation {
  font-size: 20px;
  margin-top: 60px;
  text-align: left;
  display: inline-block;
}
.videoBtn {
  margin: 100px auto;
  width: 165px;
}

@media screen and (max-width: 730px) {
  .video {
    float: none;
    width: 90%;
    margin: 0 auto;
  }
  .videoBox{
    width: 90%;
  }
  .videoBox p{
    font-size: 21px;
  }
  .videoExplanation{
    font-size: 16px;
  }
}
</style>