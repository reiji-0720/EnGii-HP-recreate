<template>
  <div class="media clearfix">
    <div class="medialogo"></div>
    <h2 class="mediahead">EnGii media</h2>
    <p class="mediattext">EnGiiが持つ様々なサービスを展開します</p>

    <div class="clearfix">
      <div class="medialist1">
        <p class="medialistboxgura">
          <span class="blueCircle"></span>
          グラフィックデザイン
        </p>
        <p class="medialistboxApp">
          <span class="blueCircle"></span>
          アプリデザイン・制作
        </p>
      </div>

      <div class="medialist2">
        <p class="medialistboxHP">
          <span class="blueCircle"></span>
          HPデザイン・制作
        </p>
        <p class="medialistboxVedio">
          <span class="blueCircle"></span>
          動画・CG編集
        </p>
      </div>
    </div>
    <div class="mediaimg"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
.media {
  float: left;
  width: 50%;
  margin: 0 auto;
}
.medialogo {
  background-image: url("~@/assets/mediaIcon.png");
  background-size: cover;
  background-position: center;
  height: 126px;
  width: 126px;
  margin: 0 auto;
}
.mediahead {
  font-size: 54px;
  margin: 15px 5px;
  text-align: center;
  font-family: "Helvetica Neue";
}
.mediattext {
  /* display: inline-block; */
  font-size: 18px;
  height: 54px;
}
.mediaimg {
  background-image: url("~@/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 338px;
  width: 520px;
  margin: 0 auto;
}

.medialist1,
.medialist2 {
  /* display: flex; */
  margin: 30px 0;
  width: 50%;
  float: left;
}
.medialistboxgura,
.medialistboxApp,
.medialistboxHP,
.medialistboxVedio {
  display: block;
  text-align: left;
  margin-bottom: 20px;
  font-size: 22px;
  font-family: "YuGo-Bold-83pv-RKSJ-H";
}

.medialistboxgura,
.medialistboxApp {
  margin-left: 87px;
}

.medialistboxHP,
.medialistboxVedio {
  margin-left: 30px;
}
.blueCircle {
  display: inline-block;
  background-color: #39acd8;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  margin-right: 5px;
}
</style>