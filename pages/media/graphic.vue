<template>
  <div class="graphicContainer">
    <div class="graphicTop">
      <div class="graphicTopMain">
        <div class="graphicImg"></div>
        <div class="graphicText">
          <h2>グラフィックスデザイン</h2>
          <p>GRAPHIC DESIGN</p>
        </div>
      </div>
      <nuxt-link class="borderNone" to="/contact" exact exact-active-class="active">
        <request />
      </nuxt-link>
    </div>

    <div class="graphicLogo">
      <img src="~assets/EngiiLogoNew.png" alt="EnGii Logo" class="EnGiiLogo" width="25%" />
      <p class="LogoConcept">concept</p>
      <p class="LogoText">
        コンセプトとしては、ロゴタイポという文字を主体にした
        <br />ロゴで作成しました。理由として、「縁起が良い」という言葉を
        <br />アイコンでイメージさせるよりはこれから新しいサービスを
        <br />多く展開するにあたり、EnGii をブランド化することと文字で
        <br />表現することで覚えてもらい、伝わりやすいという特徴がある為に作成
        <br />また、ブランドやこのグループを覚えてもらいたいことを
        <br />最優先にした場合適していると考えた
        <br />
      </p>
      <div class="ConceptArea">
        <div class="ConceptAreaTop">
          <img src="~assets/EngiiLogoNew.png" alt="EnGii Logo" class="EnGiiConcept" />
          <div class="topArrow"></div>
          <img src="~assets/round.png" alt="EnGii Logo" class="EnGiiRound" width="40px" />
          <p class="ConceptRow">
            ・円が渦を巻いているような完璧な
            <br />塗りつぶした丸ではないのは手書きで
            <br />円を描くことで温かみをデザイン
            <br />・アナログとデジタルの
            <br />コントラストを生み出している
          </p>
        </div>

        <div class="secondArrow">
          <div class="ArrowOne"></div>
          <div class="ArrowSecond"></div>
        </div>
        <div class="thirdConcept">
          <p class="Helvetica">Helveticaを使用</p>
          <div class="ArrowThird"></div>
          <img src="~assets/graphicsRod.png" alt="EnGii Logo" class="EnGiiRod" />
          <p class="conceptdif">
            ・互いに違う大きさのまると直線
            <br />→様々な人と関わっていくので
            <br />iの文字の大きさを変えて表現
          </p>
        </div>
        <div class="conseptHill">
          <img src="~assets/graphicsHill.png" alt="EnGii Logo" class="EnGiiHill" />
        </div>
        <div class="conseptfin">
          <p class="lastconsept">
            直線の下の部分を少し斜め右上と斜め右下にすることで
            <br />丘の上に立ち、しっかりと立ち上がっていることを
            <br />イメージさせるようにデザインしました。
          </p>
        </div>
      </div>
    </div>

    <div class="REM">
      <img src="~assets/REMLogo.png" alt="REM Logo ロゴ" class="REMLogo" width="30%" />
      <p class="LogoConcept">concept</p>
      <p class="REMText">
        某法人様のサロン新ブランド立ち上げブランディングを担当
        <br />REMのロゴ名刺、メンバーズカード制作
        <br />
        <br />クライアント様からお店に訪れると夢の中のような空間を
        <br />イメージしてREMという名前をネーミングしたと言われたので
        <br />夢から連想する「幻」や「幻想」からぼやけた空間やフワッとした印象を
        <br />持ってもらうために、文字の外側をぼやかすことでREMという空間に
        <br />入っていただけることを表現
      </p>
      <div class="card">
        <div class="cardtop">
          <img src="~assets/REMBusinessCard.png" alt="REM 名刺デザイン" class="REMCardleft" />
          <img src="~assets/REMBusiness.png" alt="REM 名刺デザイン" class="REMCardright" />
        </div>
        <p class="cardText">名刺デザイン</p>
        <div class="cardDown">
          <img src="~assets/memberLeft.png" alt="REM メンバーズカード" class="memberLeft" />
          <img src="~assets/memberRight.png" alt="REM メンバーズカード" class="memberRight" />
        </div>
        <p class="memberText">メンバーズカード</p>
      </div>
    </div>

    <div class="atelier">
      <img
        src="~assets/atelierLogoMain.png"
        alt="atelier atelierLogo"
        class="atelierLogoMain"
        width="50%"
      />
      <p class="LogoConcept">concept</p>
      <p class="atelierText">
        某法人様のサロンリニューアルデザインを担当
        <br />ロゴや名刺、チラシ、看板制作
        <br />
        <br />ロゴのイメージとして、お店の頭文字を使ったモノグラム手法で
        <br />aとpの二文字を重なり合わせる。
        <br />美容室という事もあり、美容師さんが使用するハサミを表現している。
        <br />左右で円の大きさが違うのは対象であると無機質な感覚がでてしまうので
        <br />あえてバランスを崩した有機的なイメージを作成
        <br />プレゼンツという名前からも、リボンを結んだ状態も表しており
        <br />お客様が訪れた時に、プレゼントをもらったような特別感も演出している
      </p>
      <div class="atelierMain">
        <img
          src="~assets/atelierLogo.png"
          alt="atelier atelierLogo"
          width="50%"
          class="atelierLogo"
        />
        <div class="atelieTop">
          <img src="~assets/atelierCardleft.png" alt="atelier atelierLogo" class="atelierCardleft" />
          <img
            src="~assets/atelierCardright.png"
            alt="atelier atelierLogo"
            class="atelierCardright"
          />
        </div>
        <p>名刺デザイン</p>
        <div class="atelieDown">
          <img
            src="~assets/atelierTirasLeft.png"
            alt="atelier atelierLogo"
            class="atelierTirasLeft"
          />
          <img
            src="~assets/atelierTirasRight.png"
            alt="atelier atelierLogo"
            class="atelierTirasRight"
          />
        </div>
        <p>
          ダイレクトメッセージ
          <br />チラシデザイン
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import request from "~/components/request.vue";
export default {
  components: {
    request
  }
};
</script>

<style>
.graphicContainer {
  margin: 10% 0 300px;
}
.graphicTop {
  padding-bottom: 50px;
}
.graphicTopMain {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
}
.graphicImg {
  background-image: url("~@/assets/graphics.png");
  background-size: cover;
  background-position: center;
  width: 71px;
  height: 69px;
}
.graphicText {
  margin-left: 30px;
}
.graphicText h2 {
  font-size: 32px;
}
.graphicText p {
  font-size: 24px;
}
.graphicLogo {
  text-align: center;
  background-color: #e9f8fc;
  margin: 20px auto 0;
  padding-bottom: 110px;
}
.EnGiiLogo {
  margin-top: 40px;
}
.LogoConcept {
  margin: 40px auto;
  border-bottom: solid 2px #3bb2db;
  width: 65px;
}

.LogoText {
  text-align: left;
  display: inline-block;
  font-size: 18px;
  line-height: 32px;
}

.ConceptAreaTop {
  width: 750px;
  margin: 100px auto 0;
  display: flex;
}
.ConceptRow {
  text-align: left;
  display: inline-block;
  margin-left: 20px;
  font-size: 14px;
}
.EnGiiConcept {
  display: block;
  width: 314px;
  height: 59px;
  /* position: relative; */
}
.topArrow {
  background-image: url("~@/assets/arrow.png");
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 10px;
  margin: 30px 50px;
}
.EnGiiRound {
  width: 34px;
  height: 74px;
}
.secondArrow {
  display: flex;
  width: 750px;
  margin: 0 auto;
}
.ArrowOne {
  background-image: url("~@/assets/arrow.png");
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 10px;
  margin-left: -20px;
  transform: rotateZ(135deg);
}
.ArrowSecond {
  background-image: url("~@/assets/arrow.png");
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 10px;
  margin: 0 270px;
  transform: rotateZ(45deg);
}
.thirdConcept {
  display: flex;
  width: 750px;
  margin: 30px auto;
}
.Helvetica {
  margin-left: -90px;
}
.ArrowThird {
  background-image: url("~@/assets/arrow.png");
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 10px;
  margin-left: 210px;
  transform: rotateZ(90deg);
}
.EnGiiRod {
  width: 46.67px;
  height: 23.89px;
  margin-left: 70px;
}
.conceptdif {
  margin-left: 20px;
  font-size: 14px;
}
.conseptHill {
  display: flex;
  width: 750px;
  margin: 0 auto;
}
.conseptfin {
  width: 750px;
  margin: 0 auto;
  display: flex;
}
.lastconsept {
  text-align: left;
  margin: 20px 190px 0;
  font-size: 14px;
}
.EnGiiHill {
  width: 130px;
  height: 37px;
  margin: -40px 190px;
}
.REM {
  padding: 110px 0;
  text-align: center;
  background-color: #f9faf9;
}
.REMLogo {
  margin: 0 auto;
  border: solid 1px black;
  padding: 20px;
}
.REMText {
  font-size: 18px;
  line-height: 32px;
  text-align: left;
  display: inline-block;
}
.card {
  margin-top: 50px;
}
.cardtop {
  border: 1px solid #4d4d4d;
  width: 737px;
  height: 412;
  margin: 0 auto;
  padding: 80px 0;
}
.REMCardleft {
  height: 257px;
  width: 154px;
}
.REMCardright {
  margin-left: 110px;
  height: 257px;
  width: 154px;
}
.cardText {
  font-size: 18px;
  margin-top: 15px;
}
.cardDown {
  border: 1px solid #4d4d4d;
  width: 737px;
  height: 412;
  margin: 110px auto 0;
  padding: 80px 0;
}
.memberLeft {
  height: 146px;
  width: 226px;
}
.memberRight {
  margin-left: 110px;
  height: 146px;
  width: 226px;
}
.memberText {
  font-size: 18px;
  margin-top: 15px;
}
.atelier {
  text-align: center;
  padding-top: 110px;
}
.atelierText {
  font-size: 18px;
  line-height: 32px;
  text-align: left;
  display: inline-block;
}
.atelierLogo {
  display: block;
  margin: 110px auto 0;
  /* width: 632px;
  height: 212px; */
}
.atelieTop {
  border: 1px solid #4d4d4d;
  width: 737px;
  height: 412;
  margin: 110px auto 15px;
  padding: 80px 0;
}
.atelierCardleft {
  height: 257px;
  width: 154px;
}
.atelierCardright {
  margin-left: 110px;
  height: 257px;
  width: 154px;
}
.atelieDown {
  border: 1px solid #4d4d4d;
  width: 737px;
  height: 412;
  margin: 110px auto 15px;
  padding: 80px 0;
}
.atelierTirasLeft {
  height: 289px;
  width: 209px;
}
.atelierTirasRight {
  margin-left: 110px;
  height: 289px;
  width: 209px;
}
@media screen and (max-width: 730px) {
  .graphicContainer {
    margin-top: 110px;
  }
  .graphicTop {
    margin: 0 auto;
  }
  .graphicTop,
  .cardtop,
  .cardDown,
  .atelieTop,
  .atelieDown {
    width: 90%;
  }
  .REMCardleft,
  .memberLeft,
  .atelierCardleft,
  .atelierTirasLeft {
    display: block;
    margin: 0 auto;
  }
  .REMCardright,
  .memberRight,
  .atelierCardright,
  .atelierTirasRight {
    display: block;
    margin: 20px auto 0;
  }
  .atelierLogo,
  .LogoText,
  .REMText,
  .atelierText,
  .REMLogo,
  .atelierLogoMain,
  .ConceptArea,
  .EnGiiLogo {
    width: 90%;
  }
  .ConceptAreaTop,
  .secondArrow,
  .thirdConcept,
  .conseptHill,
  .conseptfin {
    display: block;
  }
  .topArrow,
  .ArrowOne,
  .ArrowSecond,
  .ArrowThird {
    display: none;
  }
  .graphicText h2 {
    font-size: 21px;
  }
  .graphicText p {
    font-size: 18px;
    text-align: center;
  }
  .LogoText,
  .REMText,
  .atelierText {
    font-size: 10px;
  }
}
</style>