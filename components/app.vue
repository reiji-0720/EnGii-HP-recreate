<template>
  <div class="app clearfix">
    <div class="appBox">
      <div class="appLogo"></div>
      <p class="appText">アプリデザイン・制作</p>
      <p class="appTextEng">APPLICATION<br>DESIGN / PRODUCTION</p>
    </div>
    <p class="appExplanation">
      アプリケーションのロゴ作成から
      <br />システムの構築などをゼロから
      <br />クライアント様とご相談し制作しています。
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.app{
  float: left;
}
.appBox {
  height: 372px;
  width: 372px;
  border: solid 2px #3bb2db;
}
.appLogo {
  height: 116px;
  width: 121px;
  background-image: url("~@/assets/app.png");
  background-size: cover;
  background-position: center;
  margin: 60px auto;
}
.appText{
  text-align: center;
  font-size: 26px;
}
.appTextEng{
  text-align: center;
  font-size: 19px;
  margin-top: 15px;
}
.appExplanation{
  font-size: 20px;
  margin-top: 60px;
}
</style>