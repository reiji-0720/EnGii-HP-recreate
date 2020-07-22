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
      <div class="leaderMessageMax">
        <img src="~/assets/IMG_3609.jpeg" class="leaderImg" width="40%" />
        <div class="leaderMessageMainTitle">
          <h1>代表メッセージ</h1>
        </div>
        <div class="leaderMessageSubTitle">
          <h2>「自らの経験は必ず誰かの役に立つ」</h2>
        </div>
        <div class="leaderMessageText">
          <p>「自らの経験を誰かの為に」</p>
          <div class="blank"></div>
          <p>
            私は、新卒で大手鉄道会社に就職しましたが
            <br />自らの人生にたくさんの後悔をし、多くのタラレバを吐いてきました。
            <br />自らが目指す姿は漠然としていましたが、
            <br />タラレバを実現するために転職を決断しました。
          </p>
          <div class="blank"></div>
          <p>
            生まれ育った長野を出て、自分ができることを
            <br />最大限やりきる覚悟を持って都内へ出ました。
            <br />安定を手放すことに大きな不安も抱きましたが
            <br />「自分がやれること、やれそうなことをやらずに後悔はしたくない」
            <br />と思い現職で全力で働く決意をしました。
          </p>
          <div class="blank"></div>
          <p>
            そして、挑戦を選んだことで得られたいい出会いがありました。
            <br />考え方も深まり、視野も多少広くなったと思っています。
            <br />新しく出会えた人達のおかげで1人ではできなかったことができるようになり、当グループも立ち上げることもできました。
            <br />私の人生は常に新しい人や知識との出会い助けられてきました。
          </p>
          <div class="blank"></div>
          <p>1人1人のこれまでの経験や知識は誰かの役に経つことを私は知っています。繋がりの大切さもこれまでの経験からとても学びました。「個の時代」と言われる現代ですが、より多くの人にいい出会いの提供ができればと思います。</p>
          <div class="blank"></div>
          <p>私が今まで経験してきた中で得たものを、皆さんに少しでも還元できればと思います。</p>
        </div>
      </div>
    </div>
    <div class="leaderSecondMessage">
      <div class="leaderMessagePosition">
        <img src="~/assets/leaderVision.jpg" class="leaderSecondImg" width="70%" />
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
          EnGii 代表
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
  margin: 10% auto auto auto;
  /* max-width: 1500px; */
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
  font-weight: 600;
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

.leaderMessageMax{
  max-width: 1500px;
  margin: 0 auto;
}
.leaderMessageMainTitle {
  margin-top: 2%;
  width: 50%;
  position: absolute;
  top: 0;
  margin-left: 1%;
  text-align: center;
  max-width: 600px;
}

.leaderMessageMainTitle h1 {
  font-weight: 700;
  font-size: 54px;
  color: #231815;
  padding-top: 2%;
}

.leaderMessageSubTitle {
  background-color: #3bb2db;
  width: 52%;
  z-index: 2;
  margin-left: 7%;
  margin-top: 22%;
  position: absolute;
  top: 0;
  max-width: 700px;
}

.leaderMessageSubTitle h2 {
  font-weight: 500;
  font-size: 34px;
  padding-left: 30px;
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
  padding: 25px 10px 25px 25px;
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
  max-width: 1500px;
  margin: 0 auto;
}

.leaderSecondImg {
  margin-left: 8%;
}

.leaderSecondMessageSubTitle {
  position: absolute;
  top: 0;
  margin-top: 37.7%;
  width: 38%;
  margin-left: 50%;
  background-color: #3bb2db;
}

.leaderSecondMessageSubTitle h2 {
  font-weight: 500;
  font-size: 34px;
  color: #ffff;
  padding-left: 30px;
}

.leaderSecondMessageSubTitle2 {
  position: absolute;
  top: 0;
  margin-top: 43%;
  width: 45%;
  margin-left: 52%;
  background-color: #3bb2db;
}

.leaderSecondMessageSubTitle2 h2 {
  font-weight: 500;
  font-size: 34px;
  color: #ffff;
  padding-left: 40px;
}

.leaderSecondMessageText {
  background-color: #3bb2db;
  width: 56%;
  padding: 25px 10px 25px 25px;
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

  .leaderMessageSubTitle {
    width: 55%;
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
@media screen and (min-width: 1500px){
  .leaderSecondMessageText{
    max-width: 1500px;
    margin: 10% auto 0;
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
  .leaderMessageSubTitle {
    width: 55%;
  }

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
    width: 76%;
  }

  .leaderMessageText {
    width: 70%;
    margin: 20px auto 0 auto;
    padding: 10px 10px;
  }

  .leaderSecondMessageSubTitle {
    margin-top: 12px;
    width: 55%;
    margin-left: 20%;
  }

  .leaderSecondMessageSubTitle2 {
    margin-top: 12px;
    width: 70%;
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
    width: 80%;
  }

  .leaderMessageText {
    width: 75%;
    margin: 20px auto 0 auto;
    padding: 10px 10px;
  }

  .leaderSecondMessageSubTitle {
    margin-top: 12px;
    width: 60%;
    margin-left: 20%;
  }

  .leaderSecondMessageSubTitle2 {
    margin-top: 12px;
    width: 70%;
    margin-left: 20%;
  }

  .leaderSecondMessageText {
    width: 75%;
    margin: 30px auto 0 auto;
    padding: 10px 10px;
  }
}
</style>