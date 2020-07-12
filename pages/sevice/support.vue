<template>
    <div class="supportContainer">
    <div class="supportTop clearfix">
      <div class="supportTopLeft">
        <div class="supportImg"></div>
      </div>
      <div class="supportTopRight">
        <div class="supportIcon"></div>
        <h2 class="supportText">EnGii support</h2>
        <p class="supportExp">理想の自分、なりたい自分に向けて<br class="sp-br">足踏みしているあなたをサポートしたい</p>
      </div>
    </div>

    <div class="subArea">
      <div class="supportLeftVertical">
        <div class="inline clearfix">
          <p class="verticalOne">EnGii support</p>
          <div class="border borderOne"></div>
        </div>

        <div class="inline clearfix">
          <p class="verticalSecond">EnGii media</p>
          <div class="border borderSecond"></div>
        </div>
      </div>
    </div>
      <div class="E-Chat_E-Ring_container">
        <div class="E-Chat_E-Ring_wrapper">
          <div class="E-Chat-wrapper">
            <img class="E-ChatIcon sp-icon" src="~/assets/サポート　アイコン　 chat.png">
            <h2>E-Chat</h2>
            <p>職種別チャット</p>
            <div class="borderSupport"></div>
            <p>
              E-Chatは興味がある業界や職種の人々と<br>
              コミュニケーションができる<br>
              オープンチャットサービスです。<br>
              業界ならではの話や相談、<br>
              気軽な雑談をすることができます。<br>
            </p>
            <nuxt-link to>
              <btnService class="supportBtn" />
            </nuxt-link>
            
          </div>
          <div class="E-Ring-wrapper">
            <img class="E-RingIcon sp-icon" src="~/assets/サポート　アイコン　 ring.png">
            <h2>E-Ring</h2>
            <p>知識共有</p>
            <div class="borderSupport"></div>
            <p>
              E-Ringは、オンライン上で周りに聞けない<br>
              悩みや疑問に思っていることを質問したり、<br>
              自分の持っている知識を使って<br>
              質問に回答することで、ユーザー同士で<br>
              悩みを解決し合うEnGii独自のサービスです。
            </p>
            <nuxt-link to >
              <btnService class="supportBtn" />
            </nuxt-link>
            
          </div>
        </div>
        <div class="E-Fitness-container">
          <div class="E-Fitness-wrapper">
            <img class="E-FitnessIcon sp-icon" src="~/assets/サポート　アイコン　 fitness.png">
            <h2>E-Fitness</h2>
            <p>ダイエットサポート</p>
            <div class="borderSupport"></div>
            <p>
              ダイエットサポート（1200円〜）<br>
              無理ないダイエットを叶えるE-Fitness！<br>
              1人だとついつい甘えてしまったり、<br>
              どうやったらうまく痩せれるか分からない、運動は苦手、<br>
              などなどダイエットって本当に難しいですよね。<br>
              痩せたいのに痩せれない！そんな人の「痩せたい！」を叶える<br>
              ダイエットサポートE-Fitness。<br>
              代表でもあるサポーターの宮坂が2週間、公式LINEでやり取りするだけ！<br>
              1日の振り返りを夜に10分ほど行います。<br>
              あなたの食生活、生活の仕方にフィードバックすることで<br>
              正しい知識を身につ、1人でもしっかりダイエット<br>
              できるように致します！！詳しいことをお聞きしたい場合は<br>
              コンタクトから公式LINEを追加してください！
            </p>
          </div>
          <div class="review-wrapper">
            <div class="E-Fitness_reviewTitle">
              <h3>Review</h3>
              <img class="sp-reviewIcon" src="~/assets/サポート　アイコン　 レビュー.png">
            </div>
            <div class="borderSupport"></div>
            <div class="review-main">
              <div class="reviewChatWrapper rcwTop">
                <div class="reviewChatBox"></div>
                <div class="customerLeft"></div>
              </div>
              <div class="reviewChatWrapper rcwMiddle">
                <div class="reviewChatBox"></div>
                <div class="customerRight"></div>
              </div>
              <div class="reviewChatWrapper rcwBottom">
                <div class="reviewChatBox"></div>
                <div class="customerLeft"></div>
              </div>
            </div>
            <btn-Service />
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Graphics from "~/components/graphics.vue";
import App from "~/components/app.vue";
import WebHP from "~/components/webHP.vue";
import Video from "~/components/video.vue";
import btnService from "~/components/parts/btnService.vue"

export default {
components: {
    Graphics,
    App,
    WebHP,
    Video,
    btnService
  }
};
</script>
<style scoped>
.supportContainer {
  margin-top: 10%;
}
.supportTopLeft {
  float: right;
  width: 60%;
  height:100%;
  overflow:hidden;
  /* height: 568px; */
}
.supportTopRight {
  float: left;
  padding-left: 30px;
  width: 40%;
}
.supportTop {
  height: 568px;
}
.supportImg {
  background-image: url("~@/assets/five-assorted-balloons.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  /* height: 75%; */
  padding-top: 75%;
}
.supportIcon {
  background-image: url("~@/assets/supportIcon.png");
  background-size: cover;
  background-position: center;
  height: 137px;
  width: 140px;
  /* float: left; */
}
.supportText {
  font-size: 72px;
  font-weight: 700
}
.supportExp {
  font-size: 20px;
}
.sp-br{
  display: none;
}
.subArea {
  height: 380px;
  position: relative;
}
.inline {
  /* float: left; */
  display: inline-block;
  transform:rotate(180deg);
}
.supportLeftVertical {
  padding-top: 72px;
   text-align:right;
}
.supportLeftVertical p {
  writing-mode: vertical-rl;
  font-size: 24px;
}
.verticalOne {
  padding-left: 18px;
  color: #9b9b9b;
}
.verticalSecond {
  padding-left: 18px;
}
.border {
  height: 80px;
  width: 1px;
  background-color: black;
  display: block;
}
.borderOne {
  margin: 10px 0 10px 35px;
  border: 1px solid #9b9b9b;
}
.borderSecond {
  margin: 10px 0 10px 35px;
  border: 1px solid #3bb2db;
}
.mediaContens {
  font-size: 20px;
  border-bottom: solid 2px #3bb2db;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
  height: 30px;
  width: 89px;
}
.scrollsecond {
  float: right;
  margin: -730px 30px 0;
}
.scrolltext {
  writing-mode: vertical-rl;
  margin-left: 25px;
  color: #3bb2db;
  font-size: 14px;
}
.scrollborder {
  border-left: 1px solid #3bb2db;
  display: block;
  height: 80px;
  margin: 10px 0 0 35px;
}
.mediaUp {
}
.mediaDown{
  height: 766px;
}

.E-Chat_E-Ring_wrapper{
  display: flex;
  
}

.E-Chat-wrapper,
.E-Ring-wrapper{
 background-color: rgb(241,241,241);
  text-align: center;
  flex:1;
  padding-bottom:100px;
  padding-top:50px;
}
.E-Chat-wrapper{
  border-right:solid 1px #3bb2db;
}
.E-Ring-wrapper{
  border-left:solid 1px #3bb2db;
}
.borderSupport{
  border-bottom:solid 2px  #3bb2db;
  margin: 0 auto;
  margin-top:30px;
  margin-bottom: 20px;
  width: 250px;
  

}
.E-Chat-wrapper h2,
.E-Ring-wrapper h2,
.E-Fitness-wrapper h2{
  font-size:45px;
}

.E-Chat-wrapper p,
.E-Ring-wrapper p,
.E-Fitness-wrapper p{

  line-height: 40px;
}
.sp-icon{
  width:100px;
  height: 100px;
}
.supportBtn{
  margin-top:60px;
}



/*****************************************************
                                                    **
              E-Fitness                             **
                                                    **
****************************************************** */

.E-Fitness-wrapper{
  text-align: center;
  margin-top:100px;
}
.E-Fitness_reviewTitle{
  display:flex;
  text-align: center;
  margin:0 auto;
  width:225px;
}
.E-Fitness_reviewTitle h3{
  font-size:30px;
  margin-top:60px;
  line-height: 40px;
  margin-right:20px;
}
/*      Review       */

.sp-reviewIcon{
  width: 100px;
  height:100px;
}

.review-wrapper .borderSupport{
  margin-top:10px;
}

@media screen and (max-width: 730px) {
  .supportTop{
    margin-top: 15%;
  }
  .supportTopLeft{
    float: none;
    margin: 0 auto;
    width: 100%;
  }
  .supportIcon{
    float: right;
    width: 92px;
    height: 90px;
  }
  .supportImg{
    width: 100%;
    padding: 0;
    height: 280px;
  }
  /* .mediaIcon h2, .mediaIcon p{
    float: left;
  } */

  .scrollsecond {
    display: none;
  }
  .supportLeftVertical{
    display: none;
  }
  .supportText{
    font-size: 26px;
  }
  .supportExp{
    font-size: 16px;
  }
  .sp-br{
    display: block;
  }
  .subArea{
    margin: 70px 0 -30px;
  }
  .supportTopRight{
    padding: 0;
    float: none;
    margin: 25px auto;
    width: 85%;
  }
  .supportTop{
    height: 230px;
  }
  .supportDown{
    height: 1500px;
  }
}
</style>