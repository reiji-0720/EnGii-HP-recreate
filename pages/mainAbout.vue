<template>
  <div class="mainAboutContainer">
    <div class="visionText">
      <h1>VISION</h1>
      <h2>
        新しい自分に
        <br />出会えるキッカケを
      </h2>
      <p>
        1人ではできないことが新しい出会いの中で
        <br />できるようになる縁起がいい出会い＝EnGii
        <br />EnGiiが介在することでより多くの人に今までなかった出会い、
        <br />喜び、楽しさ、嬉しさを提供し皆さんが前に進んでいけるような
        <br />サポートができる。そんなグループを目指します。
        <br />私たちEnGiiは「あったらいいな、できたらいいな」を形にして、
        <br />皆様の力になれたらと思っています。
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
  font-weight: 500;
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
  z-index: -100;
}

.leaderMessageMainTitle {
  margin-top: 2%;
  width: 50%;
  position: absolute;
  top:0;
  margin-left: 1%;
  text-align: center;
}

.leaderMessageMainTitle h1 {
  font-weight: 500;
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
  top:0;
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
  margin-left: 35%;
  background-color: #3bb2db;
}

.leaderMessageText p {
  font-size: 16px;
  color: #ffff;
  padding: 25px 0 0 25px;
}

.blank {
    margin-top: 3%;
}
</style>