<template>
  <div class="media clearfix">
    <div class="medialogo"></div>
    <h2 class="mediahead">EnGii media</h2>
    <p class="mediatext">EnGiiが持つ様々なサービスを展開します</p>

    <div class="clearfix">
      <div class="mediaBox">
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
    </div>
    <div class="mediaimg"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.media {
  float: left;
  width: 50%;
  margin: 0 auto;
}
.medialogo {
  background-image: url("~@/assets/mediaIcon.png");
  background-size: cover;
  background-position: center;
  height: 128px;
  width: 130px;
  margin: 0 auto;
}
.mediahead {
  font-size: 54px;
  margin: 15px 5px;
  text-align: center;
  font-weight: 700;
  /* font-family: "Helvetica Neue"; */
}
.mediatext {
  /* display: inline-block; */
  font-size: 18px;
  height: 41px;
}
.mediaimg {
  opacity: 0.7;
  background-image: url("~@/assets/TopRight.jpg");
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
  font-size: 20px;
  /* font-family: "YuGo-Bold-83pv-RKSJ-H"; */
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

@media screen and (max-width: 730px){
  .media{
    float: none;
    margin-top:30px ;
    width: 90%;
    margin: 30px auto 0;
  }
}
@media screen and (max-width:1000px){
.media .medialogo{
    height: 67.28px;  /* 126×0.534 = 67.284 */
    width: 67.28px;
  }
  .media .mediahead {
    font-size: 28.84px;  /* 126×0.534 = 28.836 */
    margin: 15px 5px;
  }
  .mediaBox{
    width:277.68px;
    margin:0 auto;
  }
  .media .mediatext{
    font-size: 10px; /* 18×0.534 = 9.612 */
    height: 30px;
  }
  .media .mediaimg {
    height: 180.49px;  /* 338×0.534 = 180.49 */
    width: 277.68px;      /* 520×0.534 = 277.68 */
  }
  .medialistboxgura,
  .medialistboxApp,
  .medialistboxHP,
  .medialistboxVedio  {
    margin-bottom: 10.68px !important;  /* 20×0.534 = 10.68 */
    font-size: 10.68px !important;
  }
  .blueCircle {
    height: 6px !important;  /* 11×0.534 = 5.874 */ 
    width: 6px !important;
    margin-right: 5px;
  }
  .medialistboxgura,
  .medialistboxApp {
    margin-left: 0px;
  }
}


@media screen and (min-width:1001px) {
.media .medialogo{
    height: 108px;  /* 126×0.732 = 92.232 */
    width: 110px;
  }
  .media .mediahead {
    font-size: 39.53px;  /* 54×0.732 = 39.528 */
    margin: 15px 5px;
  }
  .media .mediatext{
    font-size: 13.176px; /* 18×0.732 = 13.176 */
    height: 42px;
  }
  .media .mediaimg {
    height: 244.49px;  /* 338×0.732 = 244.488 */
    width: 380.64px;      /* 520×0.732 = 380.64 */
  }
  .mediaBox{
    width:380.64px;
    margin:0 auto;
  }
  .medialistboxgura,
  .medialistboxApp,
  .medialistboxHP,
  .medialistboxVedio  {
    margin-bottom: 14.64px !important;  /* 20×0.732 = 14.64 */
    font-size: 14.64px !important;
  }
  .blueCircle {
    height: 8px !important;  /* 11×0.732 = 8.052 */ 
    width: 8px !important;
    margin-right: 5px;
  }
  .medialistboxgura,
  .medialistboxApp {
  margin-left: 0px;
}
}
/*@media screen and (min-width:1000px) and (max-width: 1240px) {
  .medialistboxgura,
  .medialistboxApp,
  .medialistboxHP,
  .medialistboxVedio {
    font-size: 10px !important;
  }
}*/


</style>