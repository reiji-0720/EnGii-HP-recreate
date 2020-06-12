<template>
  <div class="support clearfix">
    <div class="supportlogo"></div>
    <h2 class="supporthead">EnGii support</h2>
    <p class="supporttext">
      理想の自分、なりたい自分に向けて
      <br />足踏みしているあなたをサポートしたい
    </p>
    <div class="clearfix">
      <div class="supportlist1 clearfix">
        <p class="supportlistboxwork">
          <span class="blueCircle"></span>
          ワークトーク
        </p>
        <p class="supportlistboxdai">
          <span class="blueCircle"></span>
          ダイエットサポート
        </p>
      </div>

      <div class="supportlist2 clearfix">
        <p class="supportlistboxchie">
          <span class="blueCircle"></span>
          知恵の輪
        </p>
        <p class="supportlistboxEmployment">
          <span class="blueCircle"></span>
          進学・就活サポート
        </p>
      </div>
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
  font-family: "Helvetica Neue";
}
.supporttext {
  display: inline-block;
  font-size: 18px;
  text-align: left;
}
.supportimg {
  opacity: 0.7;
  background-image: url("~@/assets/christina-wocintechchat-com-LQ1t-8Ms5PY-unsplash.jpg");
  background-size: cover;
  background-position: center;
  height: 338px;
  width: 520px;
  margin: 0 auto;
}

.supportlist1,
.supportlist2 {
  /* display: flex; */
  margin: 30px 0;
  width: 50%;
  float: left;
}
.supportlistboxwork,
.supportlistboxdai,
.supportlistboxchie,
.supportlistboxEmployment {
  display: block;
  text-align: left;
  margin-bottom: 20px;
  font-size: 22px;
  font-family: "YuGo-Bold-83pv-RKSJ-H";
}
.supportlistboxwork,
.supportlistboxdai {
  margin-left: 87px;
}
.supportlistboxchie,
.supportlistboxEmployment {
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