<template>
  <div class="support clearfix">
    <div class="supportlogo"></div>
    <h2 class="supporthead">EnGii support</h2>
    <p class="supporttext">
      理想の自分、なりたい自分に向けて
      <br />足踏みしているあなたをサポートしたい
    </p>

    <div class="supportlist1 clearfix">
      <p class="listbox">
        <span class="blueCircle"></span>
        ワークトーク
      </p>
      <p class="listbox">
        <span class="blueCircle"></span>
        知恵の輪
      </p>
    </div>

    <div class="supportlist2 clearfix">
      <p class="listbox">
        <span class="blueCircle"></span>
        ダイエットサポート
      </p>
      <p class="listbox">
        <span class="blueCircle"></span>
        進学・就活サポート
      </p>
    </div>

    <div class="supportimg"></div>
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
.support {
  float: left;
  width: 50%;
  margin: 0 auto;
}
.supportlogo {
  background-image: url("~@/assets/supportIcon.png");
  background-size: cover;
  background-position: center;
  height: 126px;
  width: 126px;
  margin: 0 auto;
}
.supporthead {
  font-size: 54px;
  margin: 15px 5px;
  text-align: center;
}
.supporttext {
  font-size: 18px;
}
.supportimg {
  background-image: url("~@/assets/christina-wocintechchat-com-LQ1t-8Ms5PY-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 338px;
  width: 520px;
  margin: 0 auto;
}

.supportlist1,
.supportlist2 {
  display: flex;
  margin: 30px auto;
  width: 100%;
}
.listbox {
  display: block;
  float: left;
  text-align: center;
  padding: 0 10px;
}


.blueCircle {
  display: inline-block;
  background-color: #39acd8;
  border-radius: 50%;
  height: 11px;
  width: 11px;
}
</style>