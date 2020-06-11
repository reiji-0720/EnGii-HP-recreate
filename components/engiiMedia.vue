<template>
  <div class="media clearfix">
    <div class="medialogo"></div>
    <h2 class="mediahead">EnGii media</h2>
    <p class="mediattext">EnGiiが持つ様々なサービスを展開します</p>

    <div class="medialist1 clearfix">
      <p class="listbox">
        <span class="blueCircle">グラフィックデザイン</span>
      </p>
      <p class="listbox">
        <span class="blueCircle">HPデザイン・制作</span>
      </p>
    </div>

    <div class="medialist2 clearfix">
      <p class="listbox">
        <span class="blueCircle">アプリデザイン・制作</span>
      </p>
      <p class="listbox">
        <span class="blueCircle">動画・CG編集</span>
      </p>
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
}
.mediattext {
  display: inline-block;
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
  margin: 30px auto;
  width: 50%;
}
.listbox {
  display: inline-block;
}
span::before {
  display: inline-block;
  background-color: #39acd8;
  border-radius: 50%;
  height: 11px;
  width: 11px;
}
</style>