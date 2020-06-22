<template>
  <div class="graphics">
    <div class="graphicsBox">
      <div class="graphicsLogo"></div>
      <p class="graphicsText">動画・CG編集</p>
      <p class="graphicsTextEng">MOVIE / CG EDIT</p>
    </div>
    <p class="graphicsExplanation">
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
.graphicsBox {
  height: 372px;
  width: 372px;
  border: solid 2px #3bb2db;
}
.graphicsLogo {
  height: 116px;
  width: 121px;
  background-image: url("~@/assets/graphics.png");
  background-size: cover;
  background-position: center;
  margin: 60px auto;
}
.graphicsText{
  text-align: center;
  font-size: 26px;
}
.graphicsTextEng{
  text-align: center;
  font-size: 19px;
  margin-top: 15px;
}
.graphicsExplanation{
  font-size: 20px;
  margin-top: 60px;
}
</style>