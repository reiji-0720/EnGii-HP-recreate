<template>
  <div class="graphics">
    <div class="graphicsBox">
      <div class="graphicsLogo"></div>
      <p class="graphicsText">グラフィックスデザイン</p>
      <p class="graphicsTextEng">GRAPHIC DESIGN</p>
    </div>
    <div class="center">
      <p class="graphicsExplanation">
        ロゴや名刺、メンバーズカードなどの
        <br />デザインを全般に手掛けています。
      </p>
    </div>
    <div class="graphicsBtn">
      <nuxt-link to="/sevice/media/graphic" >
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
.active {
  border: 2px solid #3BB2DB;
  padding: 5px;
}
.graphics {
  float: left;
  width: 50%;
  margin: 0 auto;
}
.graphicsBox {
  height: 372px;
  width: 372px;
  border: solid 2px #3bb2db;
  margin: 0 auto;
}
.graphicsLogo {
  height: 116px;
  width: 121px;
  background-image: url("~@/assets/graphics.png");
  background-size: cover;
  background-position: center;
  margin: 60px auto;
}
.graphicsText {
  text-align: center;
  font-size: 26px;
}
.graphicsTextEng {
  text-align: center;
  font-size: 19px;
  margin-top: 15px;
}
.center {
  margin: 0 auto;
  max-width: 398px;
}
.graphicsExplanation {
  font-size: 20px;
  margin-top: 60px;
  text-align: left;
  display: inline-block;
}
.graphicsBtn {
  margin: 100px auto;
  width: 165px;
}

@media screen and (max-width: 730px) {
  .graphics {
    float: none;
    width: 90%;
    margin: 0 auto;
  }
  .graphicsBox {
    width: 90%;
  }
  .graphicsBox p {
    font-size: 21px;
  }
  .graphicsExplanation {
    font-size: 16px;
  }
}
</style>