<template>
  <div class="applicationContainer">
    <div class="applicationTitle">
      <h2>アプリケーションデザイン</h2>
      <p>APPLICATION DESIGN</p>
    </div>
    <div class="requestPosition">
      <request />
    </div>
    <div class="neopaImg">
      <img src="~/assets/neopa6.png" width="15%" />
    </div>
    <div class="appConcept">
      <p class="appConceptText">concept</p>
    </div>
    <div class="applicationText">
      <p>
        オンラインマッチングアプリというコンセプトで作成した作品になります。
        <br />マッチングアプリではお互いにメッセージを交換し、実際に会うという方法が
        <br />ほとんどですが、今回はリモートでのオンライン飲み会を行ってもらい、
        <br />その場でマッチングするというアプリを制作しました。
      </p>

      <p>
        ロゴコンセプトとしては、新しい時代の飲み会という事もあり基本カラーをグラデーション
        <br />にし時代に順応する、様々な人たちのカラーが混ざり合うというイメージになります。
        <br />また、パーティーの時に乾杯をして弾ける楽しさ＝泡という印象があったので
        <br />気泡を使わず、あえてのneopaという文字を泡のように上昇するイメージで配置し
        <br />アイコニックに表現しています。
      </p>
    </div>
    <appAchievement />
    <request />
  </div>
</template>

<script>
import appAchievement from "~/components/appAchievement.vue";
import request from "~/components/request.vue";

export default {
  components: {
    appAchievement,
    request
  }
};
</script>

<style>
.applicationContainer {
  margin: 10% auto;
  text-align: center;
}

.applicationTitle {
  margin: 5% auto 0 auto;
}

.applicationTitle h2 {
  font-size: 2rem;
  font-weight: 500;
  color: #231815;
  margin-bottom: 1%;
}

.applicationTitle p {
  font-size: 1.5rem;
  font-weight: 500;
  color: #231815;
}

.requestPosition {
  margin: 7% auto;
}

.neopaImg {
  margin: 10% auto;
}

.appConcept {
  text-align: center;
}

.appConcept p {
  margin: auto;
  width: 72px;
  font-size: 1.125rem;
  border-bottom: solid 2px #3bb2db;
}

.applicationText {
  margin: 10% auto;
}

.applicationText p {
  margin: 2% auto 0 20%;
  text-align: left;
  font-size: 1.125rem;
  color: #231815;
  font-weight: 500;
}
</style>