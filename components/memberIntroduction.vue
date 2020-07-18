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
          <p>
            Webフロントエンド、エンジニア統括担当しています。
            <br />主にNuxt.js,Vue.jsを中心に開発を行っています。
            <br />趣味は音楽鑑賞とDJとトランプマジックで、EDMフェスが生きがいです！
          </p>
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
          <p>
            Webフロントエンジニア
            <br />趣味は筋トレ、学生のうちにベンチプレスで100キロあげることが目標
            <br />小学1年の頃から空手道を習っており、高校で全国準優勝
            <br />大学に入りプログラミングを習った。現在フロントサイドをメインに活動している。サーバーサイドも今後学習していく。
          </p>
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
        <div class="memberText">
          <p>主にSwiftを使ってiOSアプリを作っています。ゲーム以外のアプリだったら基本的になんでもできます。<br>
            趣味は煙草とドライブです。地元神奈川の夜景が綺麗な穴場で煙草を吸うのが至福のひとときです。</p>
        </div>
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
          <p>
            Webサイト制作、動画編集をメインに活動しています。
            <br />最近ではNuxt.jsを活用したWebアプリケーションの作成をしています。
            <br />趣味はスクーバダイビングで沖縄や八丈島、伊豆へ良く行ってます！
          </p>
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
  background-color: #ecf7fb;
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
  background-image: url("~@/assets/noFace.jpeg");
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
  background-image: url("~@/assets/noFace.jpeg");
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

@media screen and (max-width: 1070px) {
  .memberIntroductionFrame {
    width: 225px;
    margin: 7% 5%;
  }

  .memberImgRui {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    background-position: right 40% bottom 40%;
    height: 225px;
    width: 225px;
  }

  .memberImgHiroaki {
    background-image: url("~@/assets/yamadaHiroaki.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
   height: 225px;
    width: 225px;
  }

  .memberImgMasato {
    background-image: url("~@/assets/tanakaMasato.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
    height: 225px;
    width: 225px;
  }

  .memberImgShun {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 225px;
    width: 225px;
  }

  .memberImgReiji {
    background-image: url("~@/assets/shinozakiReiji.JPG");
    background-size: cover;
   height: 225px;
    width: 225px;
  }

  .memberImgKazutomo {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 225px;
    width: 225px;
  }
}
@media screen and (max-width: 930px) {
  .memberIntroductionFrame {
    width: 195px;
    margin: 7% 5%;
  }

  .memberImgRui {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    background-position: right 40% bottom 40%;
    height: 195px;
    width: 195px;
  }

  .memberImgHiroaki {
    background-image: url("~@/assets/yamadaHiroaki.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
   height: 195px;
    width: 195px;
  }

  .memberImgMasato {
    background-image: url("~@/assets/tanakaMasato.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
    height: 195px;
    width: 195px;
  }

  .memberImgShun {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 195px;
    width: 195px;
  }

  .memberImgReiji {
    background-image: url("~@/assets/shinozakiReiji.JPG");
    background-size: cover;
    height: 195px;
    width: 195px;
  }

  .memberImgKazutomo {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 195px;
    width: 195px;
  }
}

@media screen and (max-width: 800px) {
  .memberIntroductionFrame {
    width: 168px;
    margin: 7% 5%;
  }

  .memberImgRui {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    background-position: right 40% bottom 40%;
    height: 168px;
    width: 168px;
  }

  .memberImgHiroaki {
    background-image: url("~@/assets/yamadaHiroaki.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
   height: 168px;
    width: 168px;
  }

  .memberImgMasato {
    background-image: url("~@/assets/tanakaMasato.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
    height: 168px;
    width: 168px;
  }

  .memberImgShun {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 168px;
    width: 168px;
  }

  .memberImgReiji {
    background-image: url("~@/assets/shinozakiReiji.JPG");
    background-size: cover;
    height: 168px;
    width: 168px;
  }

  .memberImgKazutomo {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 168px;
    width: 168px;
  }
}

@media screen and (max-width: 700px) {
  .memberIntroductionContainer {
    margin: 10% auto 0 auto;
    background-color: #ecf7fb;
  }
  .memberUpThree {
    display: block;
  }

  .memberDownThree {
    display: block;
  }
  .memberIntroductionFrame {
    margin: 10% auto 0 auto;
    padding: 10% 0;
    width: 400px;
  }

  .memberImgRui {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    background-position: right 40% bottom 40%;
    height: 400px;
    width: 400px;
  }

  .memberImgHiroaki {
    background-image: url("~@/assets/yamadaHiroaki.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
   height: 400px;
    width: 400px;
  }

  .memberImgMasato {
    background-image: url("~@/assets/tanakaMasato.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
    height: 400px;
    width: 400px;
  }

  .memberImgShun {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 400px;
    width: 400px;
  }

  .memberImgReiji {
    background-image: url("~@/assets/shinozakiReiji.JPG");
    background-size: cover;
    height: 400px;
    width: 400px;
  }

  .memberImgKazutomo {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 400px;
    width: 400px;
  }
}

@media screen and (max-width: 500px) {
  .memberIntroductionContainer {
    margin: 10% auto 0 auto;
    background-color: #ecf7fb;
  }
  .memberUpThree {
    display: block;
  }

  .memberDownThree {
    display: block;
  }
  .memberIntroductionFrame {
    margin: 10% auto 0 auto;
    width: 285px;
  }

  .memberImgRui {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    background-position: right 40% bottom 40%;
    height: 285px;
    width: 285px;
  }

  .memberImgHiroaki {
    background-image: url("~@/assets/yamadaHiroaki.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
   height: 285px;
    width: 285px;
  }

  .memberImgMasato {
    background-image: url("~@/assets/tanakaMasato.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
    height: 285px;
    width: 285px;
  }

  .memberImgShun {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 285px;
    width: 285px;
  }

  .memberImgReiji {
    background-image: url("~@/assets/shinozakiReiji.JPG");
    background-size: cover;
    height: 285px;
    width: 285px;
  }

  .memberImgKazutomo {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 285px;
    width: 285px;
  }
}
@media screen and (max-width: 400px) {
  .memberIntroductionContainer {
    margin: 10% auto 0 auto;
    background-color: #ecf7fb;
  }
  .memberUpThree {
    display: block;
  }

  .memberDownThree {
    display: block;
  }
  .memberIntroductionFrame {
    margin: 10% auto 0 auto;
    width: 228px;
  }

  .memberImgRui {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    background-position: right 40% bottom 40%;
    height: 228px;
    width: 228px;
  }

  .memberImgHiroaki {
    background-image: url("~@/assets/yamadaHiroaki.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
   height: 228px;
    width: 228px;
  }

  .memberImgMasato {
    background-image: url("~@/assets/tanakaMasato.jpg");
    background-size: cover;
    background-position: right 10% bottom 10%;
    height: 228px;
    width: 228px;
  }

  .memberImgShun {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
   height: 228px;
    width: 228px;
  }

  .memberImgReiji {
    background-image: url("~@/assets/shinozakiReiji.JPG");
    background-size: cover;
    height: 228px;
    width: 228px;
  }

  .memberImgKazutomo {
    background-image: url("~@/assets/miyasakaRui.JPG");
    background-size: cover;
    height: 228px;
    width: 228px;
  }
}
</style>