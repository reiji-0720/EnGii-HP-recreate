<template>
  <div class="memberIntroductionContainer">
    <div class="memberUpThree">
      <div class="memberIntroductionFrame">
        <div class="memberImgRui"></div>
        <div class="memberName">
          <p>
            宮坂 塁
            <br />Miyasaka Rui
          </p>
        </div>
        <div class="memberPosition">
          <p>CEO・営業</p>
        </div>
        <div class="memberText">
          <p>EnGiiの代表を務めています。</p>
        </div>
      </div>
      <div class="memberIntroductionFrame">
        <div class="memberImgHiroaki"></div>
        <div class="memberName">
          <p>
            山田 寛顕
            <br />Yamada Hiroaki
          </p>
        </div>
        <div class="memberPosition">
          <p>Webエンジニア</p>
        </div>
        <div class="memberText">
            <p>Webフロントエンド、エンジニア統括担当しています。<br>
            主にNuxt.js,Vue.jsを中心に開発を行っています。<br>
            趣味は音楽鑑賞とDJとトランプマジックで、EDMフェスが生きがいです！</p>
        </div>
      </div>
      <div class="memberIntroductionFrame">
        <div class="memberImgMasato"></div>
        <div class="memberName">
          <p>
            田中 雅人
            <br />Tanaka Masato
          </p>
        </div>
        <div class="memberPosition">
          <p>Webエンジニア</p>
        </div>
        <div class="memberText">
            <p>Webフロントエンジニア<br>
            趣味は筋トレ、学生のうちにベンチプレスで100キロあげることが目標<br>
            小学1年の頃から空手道を習っており、高校で全国準優勝<br>
            大学に入りプログラミングを習った。現在フロントサイドをメインに活動している。サーバーサイドも今後学習していく。</p>
        </div>
      </div>
    </div>
    <div class="memberDownThree">
      <div class="memberIntroductionFrame">
        <div class="memberImgShun"></div>
        <div class="memberName">
          <p>
            清浦 駿
            <br />Kiyoura Shun
          </p>
        </div>
        <div class="memberPosition">
          <p>アプリエンジニア</p>
        </div>
        <div class="memberText"></div>
      </div>
      <div class="memberIntroductionFrame">
        <div class="memberImgReiji"></div>
        <div class="memberName">
          <p>
            篠崎 玲士
            <br />Shinozaki Reiji
          </p>
        </div>
        <div class="memberPosition">
          <p>Webエンジニア</p>
        </div>
        <div class="memberText">
            <p>Webサイト制作、動画編集をメインに活動しています。<br>
            最近ではNuxt.jsを活用したWebアプリケーションの作成をしています。<br>
            趣味はスクーバダイビングで沖縄や八丈島、伊豆へ良く行ってます！</p>
        </div>
      </div>
      <div class="memberIntroductionFrame">
        <div class="memberImgKazutomo"></div>
        <div class="memberName">
          <p>
            土橋 一友
            <br />Dobashi Kazutomo
          </p>
        </div>
        <div class="memberPosition">
          <p>グラフィック・Webデザイナー</p>
        </div>
        <div class="memberText">
            <p>ロゴや名刺などグラフィックデザインWebページのデザインも担当しています。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.memberIntroductionContainer {
    margin: 10% auto 0 auto;
    background-color: #ECF7FB;
}

.memberUpThree {
  display: flex;
  justify-content: center;
}

.memberDownThree {
  display: flex;
  justify-content: center;
}

.memberIntroductionFrame {
 width: 269px;
 margin: 7% 5%;
}

.memberImgRui {
  background-image: url("~@/assets/miyasakaRui.JPG");
  background-size: cover;
  background-position: right 40% bottom 40%;
  height: 269px;
  width: 269px;
}

.memberImgHiroaki {
  background-image: url("~@/assets/yamadaHiroaki.jpg");
  background-size: cover;
  background-position: right 10% bottom 10%;
  height: 269px;
  width: 269px;
}

.memberImgMasato {
  background-image: url("~@/assets/tanakaMasato.jpg");
  background-size: cover;
  background-position: right 10% bottom 10%;
  height: 269px;
  width: 269px;
}

.memberImgShun {
  background-image: url("~@/assets/miyasakaRui.JPG");
  background-size: cover;
  height: 269px;
  width: 269px;
}

.memberImgReiji {
  background-image: url("~@/assets/shinozakiReiji.JPG");
  background-size: cover;
  height: 269px;
  width: 269px;
}

.memberImgKazutomo {
  background-image: url("~@/assets/miyasakaRui.JPG");
  background-size: cover;
  height: 269px;
  width: 269px;
}

.memberName {
  font-size: 1.125rem;
  margin: 50px auto 0 auto;
}

.memberPosition {
  font-size: 1rem;
  margin: 15% auto;
}

.memberText {
  font-size: 1rem;
  margin: 10% auto 0 auto;
}

</style>