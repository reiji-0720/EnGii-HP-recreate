<template>
  <div class="support clearfix">
    <div class="supportlogo"></div>
    <h2 class="supporthead">EnGii support</h2>
    <p class="supporttext">
      理想の自分、なりたい自分に向けて
      <br />足踏みしているあなたをサポートしたい
    </p>
    <div class="clearfix">
      <div class="supportBox">
        <div class="supportlist1 clearfix">
          <p class="supportlistboxwork">
            <span class="blueCircle "></span>
            E-Chat
          </p>
          <p class="supportlistboxdai">
            <span class="blueCircle"></span>
            E-Support
          </p>
        </div>

        <div class="supportlist2 clearfix">
          <p class="supportlistboxchie">
            <span class="blueCircle"></span>
            E-Ring
          </p>
          <p class="supportlistboxEmployment">
            <span class="blueCircle"></span>
            E-Start
          </p>
        </div>
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
  height: 128px;
  width: 128px;
  margin: 0 auto;
}
.supporthead {
  font-size: 54px;
  margin: 15px 5px;
  text-align: center;
  font-weight: 700;
}
.supporttext {
  display: inline-block;
  font-size: 18px;
  text-align: left;
}
.supportimg {
  opacity: 0.7;
  background-image: url("~@/assets/TopLeft.jpg");
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
  font-size: 20px;
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

@media screen and (max-width: 730px){
  .support{
    float: none;
    width: 90%;
    margin: 0 auto;
    font-size: 25.84px;
  }
}
@media screen and (max-width:1000px){
  .support .supportlogo{
    height: 67.28px;  /* 126×0.534 = 67.284 */
    width: 67.28px;
  }
  .support .supporthead {
    font-size: 28.84px;  /* 126×0.534 = 28.836 */
    margin: 15px 5px;
  }
  .support .supporttext{
    font-size: 10px; /* 18×0.534 = 9.612 */
  }
  .supportBox{
    width:277.68px;
    margin:0 auto;
  }
  .support .supportimg {
    height: 180.49px;  /* 338×0.534 = 180.49 */
    width: 277.68px;      /* 520×0.534 = 277.68 */
  }
  .clearfix .supportlistboxwork,
  .clearfix .supportlistboxdai,
  .clearfix .supportlistboxchie,
  .clearfix .supportlistboxEmployment {
    margin-bottom: 10.68px;  /* 20×0.534 = 10.68 */
    font-size: 10.68px;
  }
  .blueCircle {
    height: 6px !important;  /* 11×0.534 = 5.874 */ 
    width: 6px !important;
    margin-right: 5px;
  }
  .supportlistboxchie,
.supportlistboxEmployment {
  margin-left: 20px;
}
  .supportlistboxwork,
  .supportlistboxdai {
    margin-left: 0;
  }
}
@media screen and (min-width:1001px) and (max-width:1365px){
  .support .supportlogo{
    height: 108px;  /* 126×0.732 = 92.232 */
    width: 108px;
  }
  .support .supporthead {
    font-size: 39.53px;  /* 54×0.732 = 39.528 */
    margin: 15px 5px;
  }
  .support .supporttext{
    font-size: 13.176px; /* 18×0.732 = 13.176 */
  }
  .supportBox{
    width:380.64px;
    margin:0 auto;
  }
  .support .supportimg {
    height: 244.49px;  /* 338×0.732 = 244.488 */
    width: 380.64px;      /* 520×0.732 = 380.64 */
  }
  .clearfix .supportlistboxwork,
  .clearfix .supportlistboxdai,
  .clearfix .supportlistboxchie,
  .clearfix .supportlistboxEmployment {
    margin-bottom: 14.64px !important;  /* 20×0.732 = 14.64 */
    font-size: 14.64px !important;
  }
  .blueCircle {
    height: 8px !important;  /* 11×0.732 = 8.052 */ 
    width: 8px !important;
    margin-right: 5px;
  }
  .supportlistboxwork,
  .supportlistboxdai {
    margin-left: 0px;
  }
}
</style>