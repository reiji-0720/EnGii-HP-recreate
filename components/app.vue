<template>
  <div class="app clearfix">
    <div class="appBox">
      <div class="appLogo"></div>
      <p class="appText">アプリデザイン・制作</p>
      <p class="appTextEng">
        APPLICATION
        <br />DESIGN / PRODUCTION
      </p>
    </div>
    <div class="center">
      <p class="appExplanation">
        アプリケーションのロゴ作成から
        <br />システムの構築などをゼロから
        <br />クライアント様とご相談し制作しています。
      </p>
    </div>
    <div class="appBtn">
      <nuxt-link to="/sevice/application">
        <btnMore />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import btnMore from "~/components/parts/btnMore.vue";

export default {
  components: {
    btnMore
  }
};
</script>

<style>
.app {
  float: left;
  width: 50%;
  margin: 0 auto;
}
.appBox {
  height: 372px;
  width: 372px;
  border: solid 2px #3bb2db;
  margin: 0 auto;
}
.appLogo {
  height: 116px;
  width: 121px;
  background-image: url("~@/assets/app.png");
  background-size: cover;
  background-position: center;
  margin: 60px auto;
}
.appText {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
}
.appTextEng {
  text-align: center;
  font-size: 19px;
  margin-top: 15px;
}
.center {
  margin: 0 auto;
  max-width: 398px;
}
.appExplanation {
  font-size: 20px;
  margin-top: 60px;
  text-align: left;
  display: inline-block;
}
.appBtn {
  margin: 67px auto 100px;
  width: 165px;
}

@media screen and (max-width: 730px) {
  .app {
    float: none;
    width: 90%;
    margin: 0 auto;
  }
  .appBox {
    width: 90%;
  }
  .appBox p {
    font-size: 21px;
  }
  .appExplanation {
    font-size: 16px;
    text-align: left;
  }
  .center {
    margin: 0 auto;
    width: 100%;
  }
}
</style>