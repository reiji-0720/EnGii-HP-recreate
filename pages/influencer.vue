<template>
  <div class="mainInfluencerContainer">
    <div class="influencerTop">
      <div class="influencerleft">
        <div class="title-box">
          <img src="~/assets/influencer-logo.png" class="influencerLogo" width="15%" />
          <h2 class="influencerhead">インフルエンサー事業</h2>
        </div>
        <div class="content">
          <p>
            EnGiiではインフルエンサーの方々に向けたサービス
            <br />win-winを提供しています。
          </p>
        </div>
      </div>
      <div class="influencerImg"></div>
    </div>

    <div class="influencerWinArea">
      <img src="~/assets/winwin.png" alt="win-win" class="winwin" />
      <h3>EnGiiとインフルエンサー、双方にメリットがある独自のサービス</h3>
      <p>
        もっとフォロワーを増やして有名になりたい。
        <br />いい動画を作りたいけど、編集ができないなど、
        <br />インフルエンサーの方々が思っている悩みや不安を
        <br />EnGiiが助力します！
      </p>
      <div class="solution"></div>
    </div>

    <div class="influencerExplanation">
      <div class="influencerExplanationTop">
        <div class="EnGiiMerritImage"></div>
        <p class="EnGiiMerritText">
          インフルエンサー様による
          <br />EnGiiのウェブサービスやアプリ
          <br />EnGiiの認知度の向上
        </p>
        <p class="EnGiiMerrit">EnGii メリット</p>
        <div class="influencerArrow">
          <div class="downArrow"></div>
          <div class="good"></div>
          <div class="upArrow"></div>
        </div>
        <div class="influencerMerritImage"></div>
        <p class="influencerMerrit">インフルエンサーメリット</p>
      </div>

      <div class="influencerMerritArea">
        <p class="ambassador">【EnGii official ambassador】</p>
        <p class="influencerMerritText">
          ・動画作成、編集をEnGiiでサポート
          <br />・各種SNSに載せる写真を専門ソフトを使って編集（エフェクト効果やCG効果等）
          <br />・広告案件や宣伝商品を優先的に EnGii所属のインフルエンサー様に振り分け
          <br />・EnGii 法人化後は事務所所属のインフルエンサーになる事も可能
          <br />・EnGii としてもインフルエンサー様のアピールをします
        </p>
      </div>
    </div>

    <div class="mainInfluencerUpThree">
      <div class="mainInfluencerFrame" v-for="member in influence" :key="member">
        <div class="mainInfluencerImg">
          <img :src="member.img.url" alt width="20%" />
        </div>
        <div class="mainInfluencerName">
          <p>{{member.name}}</p>
          <p>{{member.nameKey}}</p>
        </div>
        <div class="mainInfluencerPosition">
          <p>{{member.title}}</p>
        </div>
        <div class="mainInfluencerText">
          <p>{{member.introduction}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      influence: ""
    };
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://engii.microcms.io/api/v1/influencer",
      {
        headers: { "X-API-KEY": "ff71a3f4-d0d9-4250-9060-9b660b690fe6" }
      }
    );
    return {
      influence: data.contents
    };
  }
};
</script>

<style>
.mainInfluencerContainer {
  margin-top: 10%;
}
.title-box {
  padding-top: 100px;
  display: flex;
}
.title-box h2 {
  font-weight: 700;
}
h2 {
  line-height: 101.65px;
  padding-left: 20px;
}
.influencerLogo {
  height: 101.65px;
  width: 101.65px;
}
.content {
  margin-top: 20px;
  text-align: left;
}
.influencerTop {
  height: 375.97px;
  padding: 0 0 0 15%;
  width: 100%;
  display: flex;
  position: relative;
  z-index: 10;
}
.title-box {
  padding-top: 100px;
  display: flex;
}
.influencerhead {
  line-height: 101.65px;
  padding-left: 20px;
  font-weight: 100;
  font-size: 54px;
}

.influencerLogo {
  height: 101.65px;
  width: 101.65px;
}
.content {
  margin-top: 20px;
  text-align: left;
}
.btn-more {
  padding-top: 20px;
  text-align: left;
  float: left;
}

.influencerImg {
  display: inline-block;
  background-image: url("~@/assets/influencerTop.png");
  background-size: cover;
  background-position: center;
  height: 375.97px;
  width: 612px;
  position: absolute;
  right: 0;
  z-index: -1;
}

.influencerWinArea {
  text-align: center;
  padding: 30px 0;
}
.winwin {
  width: 352px;
  height: 98px;
}
.influencerWinArea h3 {
  font-size: 20px;
}
.influencerWinArea p {
  margin-top: 20px;
  text-align: left;
  display: inline-block;
  font-size: 18px;
}
.solution {
  background-image: url("~@/assets/solution.png");
  background-position: center;
  background-size: cover;
  width: 217px;
  height: 128px;
  margin: 0 auto;
}
.influencerExplanation {
  background-color: #dff3f9;
  padding: 30px 0;
}
.influencerExplanationTop {
  text-align: center;
}
.EnGiiMerritImage {
  background-image: url("~@/assets/ii.png");
  background-position: center;
  background-size: cover;
  width: 192px;
  height: 144px;
  margin: 0 auto;
}
.EnGiiMerritText {
  text-align: left;
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
  line-height: 30px;
}
.EnGiiMerrit {
  color: white;
  background-color: #39acd8;
  padding: 5px 10px;
  font-size: 20px;
  width: 204px;
  margin: 30px auto 0;
}
.influencerArrow {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.downArrow {
  background-image: url("~@/assets/arrowDown.png");
  background-position: center;
  background-size: cover;
  width: 68px;
  height: 135px;
}
.good {
  background-image: url("~@/assets/good.png");
  background-position: center;
  background-size: cover;
  width: 104px;
  height: 104px;
  margin: 0 70px
}
.upArrow {
  background-image: url("~@/assets/arrowUp.png");
  background-position: center;
  background-size: cover;
  width: 68px;
  height: 135px;
}
.influencerMerritImage {
  background-image: url("~@/assets/influencerIcon.png");
  background-position: center;
  background-size: cover;
  width: 123px;
  height: 164px;
  margin: 30px auto 0;
}
.influencerMerrit {
  color: #39acd8;
  background-color: white;
  padding: 5px 10px;
  font-size: 20px;
  width: 270px;
  margin: 30px auto 0;
  border: solid 2px #39acd8;
}
.influencerMerritArea {
  text-align: center;
  margin-top: 30px;
}
.ambassador {
  margin-left: -390px;
  font-size: 20px;
}
.influencerMerritText {
  text-align: left;
  display: inline-block;
  line-height: 35px;
  font-size: 18px;
}
</style>