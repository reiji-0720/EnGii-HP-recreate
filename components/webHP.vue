<template>
  <div class="hp">
    <div class="hpBox">
      <div class="hpLogo"></div>
      <p class="hpText">Webデザイン・HP制作</p>
      <p class="hpTextEng">Web DESIGN / PRODUCTION</p>
    </div>
    <div class="center">
      <p class="hpExplanation">
        ホームページ制作をデザインから担当し、
        <br />クライアント様の要望に合わせた
        <br />イメージを制作しています。
      </p>
    </div>
    <div class="webHPBtn">
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
.hp {
  float: left;
  width: 50%;
  margin: 0 auto;
}
.hpBox {
  height: 372px;
  width: 372px;
  border: solid 2px #3bb2db;
  margin: 0 auto;
}
.hpLogo {
  height: 116px;
  width: 128px;
  background-image: url("~@/assets/hp.png");
  background-size: cover;
  background-position: center;
  margin: 60px auto;
}
.hpText {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
}
.hpTextEng {
  text-align: center;
  font-size: 19px;
  margin-top: 15px;
}
.center {
  margin: 0 auto;
  max-width: 398px;
}
.hpExplanation {
  font-size: 20px;
  margin-top: 60px;
  text-align: left;
  display: inline-block;
}
.webHPBtn {
  margin: 100px auto;
  width: 165px;
}

@media screen and (max-width: 730px) {
  .hp {
    float: none;
    width: 90%;
    margin: 0 auto;
  }
  .hpBox{
    width: 90%;
  }
  .hpBox p{
    font-size: 21px;
  }
  .hpExplanation{
    font-size: 16px;
  }
  .center{
    width: 90%;
  }
}
</style>