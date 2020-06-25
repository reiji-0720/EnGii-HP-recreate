<template>
  <div class="graphics">
    <div class="graphicsBox">
      <div class="graphicsLogo"></div>
      <p class="graphicsText">グラフィックスデザイン</p>
      <p class="graphicsTextEng">GRAPHIC DESIGN</p>
    </div>
    <p class="graphicsExplanation">
      ロゴや名刺、メンバーズカードなどの
      <br />デザインを全般に手掛けています。
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.graphics{
  float: left;
}
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