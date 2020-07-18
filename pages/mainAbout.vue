<template>
  <div class="mainAboutContainer">
    <div class="visionText">
      <h1>VISION</h1>
      <h2>
        新しい自分に
        <br />出会えるキッカケを
      </h2>
      <p>
        縁起がいい出会い = EnGii
        <br />1人ではできないことが新しい出会いの中で
        <br />できるようになる縁起がいい出会い
        <br />EnGiiが介在することで今までなかった出会い、
        <br />喜び、楽しさ、嬉しさを提供し皆様が前に進んでいけるような
        <br />サポートができる。そんなグループを目指します。
        <br />私たちEnGiiは「あったらいいな、できたらいいな」を形にして、
        <br />皆様の力になりたいと思っています。
      </p>
    </div>
    <div class="mainAboutScroll"></div>
    <div class="leaderMessage">
      <img src="~/assets/IMG_3609.jpeg" class="leaderImg" width="40%" />
      <div class="leaderMessageMainTitle">
        <h1>代表メッセージ</h1>
      </div>
      <div class="leaderMessageSubTitle">
        <h2>「自らの経験は必ず誰かの役に立つ」</h2>
      </div>
      <div class="leaderMessageText">
        <p>「自らの経験は必ず誰かの役に立つ」</p>
        <div class="blank"></div>
        <p>
          私は、高校受験から新卒で大手鉄道会社に就職し
          <br />現職で働くまでに沢山の後悔をし、多くのタラレバを吐いてきました。
          <br />自らが目指す姿は当時は漠然としていましたが、
          <br />タラレバを実現するために転職を決断し、
          <br />2年間の転職活動の末、現職に出会い入社することを決めました。
        </p>
        <div class="blank"></div>
        <p>
          生まれ育った長野を出て、自分ができることを
          <br />最大限やりきる覚悟を持って都内へ出ました。
          <br />安定を手放すことに大きな不安も抱きましたが
          <br />「自分はこの分野が向いてるのではないか」
          <br />と思った現職で全力で働いたことで自らの人生は大きく前進しました。
        </p>
        <div class="blank"></div>
        <p>
          そして、挑戦を選んだことで出会えた人達のおかげで
          <br />1人ではできなかったことができるようになり
          <br />当グループもデザイナー、エンジニアと
          <br />出会えた事で立ち上げることができました。
        </p>
      </div>
    </div>
    <div class="leaderSecondMessage">
      <div class="leaderMessagePosition">
        <img src="~/assets/leaderVision.png" class="leaderSecondImg" width="70%" />
        <div class="leaderSecondMessageSubTitle">
          <h2>「縁起のいい出会い」は</h2>
        </div>
        <div class="leaderSecondMessageSubTitle2">
          <h2>人生を変えてしまうこともある</h2>
        </div>
      </div>
      <div class="leaderSecondMessageText">
        <p>
          EnGiiは「縁起のいい出会い」から派生したグループ名ですが、
          <br />今まで知らなかったサービス、知識、商品や新しい人との出会いは
          <br />その人にとっては人生を変えてしまう事だってあります。
          <br />私達はそんな出会いを創造、提供したいと思っています。
        </p>
        <div class="blank"></div>
        <p>EnGiiが提供することで、より多くの人の手助けができればと思います。</p>
        <div class="blank"></div>
        <p>
          EnGii CEO
          <br />宮坂 塁
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mainAboutContainer {
  margin-top: 10%;
}

.visionText {
  text-align: center;
}

.visionText h1 {
  font-size: 58px;
  color: #231815;
  font-weight: 700;
}

.visionText h2 {
  font-size: 39px;
  color: #3bb2db;
  font-weight: 500;
  margin-top: 3%;
}

.visionText p {
  font-size: 20px;
  color: #3bb2db;
  margin-top: 3%;
}

.leaderMessage {
  position: relative;
  background-color: #f0f0f0;
  margin-top: 10%;
  z-index: -100;
}

.leaderMessageMainTitle {
  margin-top: 2%;
  width: 50%;
  position: absolute;
  top: 0;
  margin-left: 1%;
  text-align: center;
}

.leaderMessageMainTitle h1 {
  font-weight: 700;
  font-size: 54px;
  color: #231815;
  padding-top: 2%;
}

.leaderMessageSubTitle {
  background-color: #3bb2db;
  width: 50%;
  z-index: 2;
  margin-left: 7%;
  margin-top: 22%;
  position: absolute;
  top: 0;
}

.leaderMessageSubTitle h2 {
  font-weight: 500;
  font-size: 34px;
  color: #ffff;
}

.leaderImg {
  margin-left: 50%;
  z-index: -1;
}

.leaderMessageText {
  width: 45%;
  background-color: #3bb2db;
  margin: -7px 0 auto 35%;
  padding: 25px 0 25px 25px;
}

.leaderMessageText p {
  font-size: 16px;
  color: #ffff;
}

.leaderSecondMessage {
  background-color: #c2edfb;
  padding-bottom: 20%;
}

.leaderMessagePosition {
  position: relative;
  padding-top: 12%;
}

.leaderSecondImg {
  margin-left: 8%;
}

.leaderSecondMessageSubTitle {
  position: absolute;
  top: 0;
  margin-top: 37.7%;
  width: 35%;
  margin-left: 50%;
  background-color: #3bb2db;
}

.leaderSecondMessageSubTitle h2 {
  font-weight: 500;
  font-size: 34px;
  color: #ffff;
}

.leaderSecondMessageSubTitle2 {
  position: absolute;
  top: 0;
  margin-top: 43%;
  width: 41%;
  margin-left: 52%;
  background-color: #3bb2db;
}

.leaderSecondMessageSubTitle2 h2 {
  font-weight: 500;
  font-size: 34px;
  color: #ffff;
}

.leaderSecondMessageText {
  background-color: #3bb2db;
  width: 56%;
  padding: 25px 0 25px 25px;
  margin: 10% 0 0 12%;
}

.leaderSecondMessageText p {
  font-size: 16px;
  font-weight: 500;
  color: #ffff;
}

.blank {
  margin-top: 3%;
}

@media screen and (max-width: 1200px) {
  .visionText h1 {
    font-size: 2.2rem;
  }

  .visionText h2 {
    font-size: 2rem;
  }

  .visionText p {
    font-size: 0.87rem;
  }
  .leaderMessageMainTitle h1 {
    font-size: 2.2rem;
  }

  .leaderMessageSubTitle h2 {
    font-size: 2rem;
  }

  .leaderMessageText p {
    font-size: 0.87rem;
  }

  .leaderSecondMessageSubTitle h2 {
    font-size: 2rem;
  }

  .leaderSecondMessageSubTitle2 h2 {
    font-size: 2rem;
  }

  .leaderSecondMessageText p {
    font-size: 0.87rem;
  }
}
@media screen and (max-width: 1115px) {
  .leaderMessageSubTitle h2 {
    font-size: 1.8rem;
  }

  .leaderSecondMessageSubTitle h2 {
    font-size: 1.8rem;
  }

  .leaderSecondMessageSubTitle2 h2 {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 1000px) {
  .leaderMessageSubTitle h2 {
    font-size: 1.4rem;
  }

  .leaderSecondMessageSubTitle h2 {
    font-size: 1.4rem;
  }

  .leaderSecondMessageSubTitle2 h2 {
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 782px) {
  .leaderMessageMainTitle,
  .leaderMessageSubTitle,
  .leaderSecondMessageSubTitle,
  .leaderSecondMessageSubTitle,
  .leaderSecondMessageSubTitle2 {
    position: static;
  }

  .visionText h1 {
    font-size: 1.625rem;
  }

  .leaderMessageMainTitle h1 {
    font-size: 1.625rem;
  }

  .visionText h2,
  .leaderMessageSubTitle h2,
  .leaderSecondMessageSubTitle h2,
  .leaderSecondMessageSubTitle2 h2 {
    font-size: 1.2rem;
  }

  .leaderMessageSubTitle {
    margin-top: 12px;
    width: 50%;
  }

  .leaderMessageText {
    width: 70%;
    margin: 20px auto 0 auto;
    padding: 10px 10px;
  }

  .leaderSecondMessageSubTitle {
    margin-top: 12px;
    width: 40%;
    margin-left: 20%;
  }

  .leaderSecondMessageSubTitle2 {
    margin-top: 12px;
    width: 50%;
    margin-left: 20%;
  }

  .leaderSecondMessageText {
    width: 70%;
    margin: 30px auto 0 auto;
    padding: 10px 10px;
  }
}

@media screen and (max-width: 470px) {
  .leaderMessageMainTitle,
  .leaderMessageSubTitle,
  .leaderSecondMessageSubTitle,
  .leaderSecondMessageSubTitle,
  .leaderSecondMessageSubTitle2 {
    position: static;
  }

  .visionText h1 {
    font-size: 1.5rem;
  }

  .leaderMessageMainTitle h1 {
    font-size: 1.3rem;
  }

  .visionText h2,
  .leaderMessageSubTitle h2,
  .leaderSecondMessageSubTitle h2,
  .leaderSecondMessageSubTitle2 h2 {
    font-size: 0.9rem;
  }

  .visionText p,
  .leaderMessageText p,
  .leaderSecondMessageText p {
    font-size: 0.7rem;
  }

  .leaderMessageSubTitle {
    margin-top: 12px;
    width: 73%;
  }

  .leaderMessageText {
    width: 75%;
    margin: 20px auto 0 auto;
    padding: 10px 10px;
  }

  .leaderSecondMessageSubTitle {
    margin-top: 12px;
    width: 50%;
    margin-left: 20%;
  }

  .leaderSecondMessageSubTitle2 {
    margin-top: 12px;
    width: 59%;
    margin-left: 20%;
  }

  .leaderSecondMessageText {
    width: 75%;
    margin: 30px auto 0 auto;
    padding: 10px 10px;
  }
}
</style>