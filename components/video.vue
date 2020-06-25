<template>
  <div class="video">
    <div class="videoBox">
      <div class="videoLogo"></div>
      <p class="videoText">動画・CG編集</p>
      <p class="videoTextEng">MOVIE / CG EDIT</p>
    </div>
    <p class="videoExplanation">
      テロップ作成やBGM、画面の構成
      <br />CG合成といった専門的な分野も
      <br />制作しています。
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.videoBox {
  height: 372px;
  width: 372px;
  border: solid 2px #3bb2db;
}
.videoLogo {
  height: 116px;
  width: 121px;
  background-image: url("~@/assets/video.png");
  background-size: cover;
  background-position: center;
  margin: 60px auto;
}
.videoText{
  text-align: center;
  font-size: 26px;
}
.videoTextEng{
  text-align: center;
  font-size: 19px;
  margin-top: 15px;
}
.videoExplanation{
  font-size: 20px;
  margin-top: 60px;
}
</style>