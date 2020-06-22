<template>
  <div class="graphics">
    <div class="graphicsBox">
      <div class="graphicsLogo"></div>
      <p class="graphicsText">Webデザイン・HP制作</p>
      <p class="graphicsTextEng">Web DESIGN / PRODUCTION</p>
    </div>
    <p class="graphicsExplanation">
      ホームページ制作をデザインから担当し、
      <br />クライアント様の要望に合わせた
      <br />イメージを制作しています。
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
  background-image: url("~@/assets/HP.png");
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