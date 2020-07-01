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
      <example />
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
        <img src="~assets/REMCard.png" alt="REM 名刺デザイン" class="REMCard" width="50%" />
        <p>名刺デザイン</p>
        <img src="~assets/REMmember.png" alt="REM メンバーズカード" class="REMMember" width="50%" />
        <p>メンバーズカード</p>
      </div>
    </div>

    <div class="atelier">
      <img
        src="~assets/atelierLogoMain.png"
        alt="atelier atelierLogo"
        class="atelierLogoMain"
        width="40%"
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
      <div class="atelier">
        <img
          src="~assets/atelierLogo.png"
          alt="atelier atelierLogo"
          class="atelierLogo"
          width="50%"
        />
        <img
          src="~assets/atelierCard.png"
          alt="atelier atelierLogo"
          class="atelierLogo"
          width="50%"
        />
        <p>名刺デザイン</p>
        <img
          src="~assets/atelierFlyer.png"
          alt="atelier atelierLogo"
          class="atelierLogo"
          width="50%"
        />
        <p>
          ダイレクトメッセージ
          <br />チラシデザイン
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import example from "~/components/example.vue";
export default {
  components: {
    example
  }
};
</script>

<style>
.graphicContainer {
  margin-top: 10%;
}
.graphicTop{
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
.graphicLogo {
  text-align: center;
  background-color: #e9f8fc;
  margin: 20px auto 0;
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
  margin: 0 auto;
}
</style>