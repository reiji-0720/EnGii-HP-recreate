<template>
  <div class="hp">
    <div class="hpBox">
      <div class="hpLogo"></div>
      <p class="hpText">Webデザイン・HP制作</p>
      <p class="hpTextEng">Web DESIGN / PRODUCTION</p>
    </div>
    <p class="hpExplanation">
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
.hpBox {
  height: 372px;
  width: 372px;
  border: solid 2px #3bb2db;
}
.hpLogo {
  height: 116px;
  width: 121px;
  background-image: url("~@/assets/hp.png");
  background-size: cover;
  background-position: center;
  margin: 60px auto;
}
.hpText{
  text-align: center;
  font-size: 26px;
}
.hpTextEng{
  text-align: center;
  font-size: 19px;
  margin-top: 15px;
}
.hpExplanation{
  font-size: 20px;
  margin-top: 60px;
}
</style>