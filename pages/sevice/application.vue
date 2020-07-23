<template>
  <div class="applicationContainer">
    <div class="applicationTitle">
      <h2>アプリケーションデザイン</h2>
      <p>APPLICATION DESIGN</p>
    </div>
    <div class="requestPosition">
      <nuxt-link class="borderNone" to="/contact">
        <request />
      </nuxt-link>
    </div>
    <div class="neopaImg">
      <img src="~/assets/neopa6.png" width="15%" />
    </div>
    <div class="appConcept">
      <p class="appConceptText">concept</p>
    </div>
    <div class="applicationText">
      <p>
        オンラインマッチングアプリというコンセプトで作成した作品です。
        <br />マッチングアプリではお互いにメッセージを交換し、実際に会うという方法が
        <br />一般的ですが、今回はリモートでのオンライン飲み会を行い、
        <br />その場でマッチングするというアプリを制作しました。
      </p>

      <p>
        ロゴコンセプトは、新しい時代の飲み会という事で基本カラーをグラデーションにし、
        <br />時代に順応する、様々な人のカラーが混ざり合うというイメージです。
        <br />また、「パーティーの時に乾杯をして弾ける楽しさ」＝「泡」という印象から
        <br />neopaという文字を泡のように上昇するイメージで配置し
        <br />アイコニックに表現しています。
      </p>
    </div>
    <appAchievement />
    <nuxt-link class="borderNone" to="/contact">
      <request />
    </nuxt-link>
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
  max-width: 1500px;
}

.applicationTitle {
  margin: 5% auto 0 auto;
}

.applicationTitle h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #231815;
  margin-bottom: 1%;
}

.applicationTitle p {
  font-size: 1.5rem;
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
  margin: 10%;
}

.applicationText p {
  margin: 2% auto 0 20%;
  text-align: left;
  font-size: 1.125rem;
  color: #231815;
  font-weight: 500;
}

@media screen and (max-width: 1000px) {
  .applicationTitle h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #231815;
    margin-bottom: 1%;
  }
  .applicationTitle p {
    font-size: 1.3rem;
    font-weight: 500;
    color: #231815;
  }

  .appConcept p {
    margin: auto;
    width: 72px;
    font-size: 1rem;
    border-bottom: solid 2px #3bb2db;
  }

  .applicationText p {
    margin: 2% 10% 0 20%;
    text-align: left;
    font-size: 1rem;
    color: #231815;
    font-weight: 500;
  }
}

@media screen and (max-width: 730px) {
  .applicationContainer {
    margin: 25% auto;
    text-align: center;
  }
  .applicationTitle h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #231815;
    margin-bottom: 1%;
  }
  .applicationTitle p {
    font-size: 1.1rem;
    color: #231815;
  }
  .neopaImg img {
    width: 20%;
  }

  .appConcept p {
    margin: auto;
    width: 72px;
    font-size: 1rem;
    border-bottom: solid 2px #3bb2db;
  }

  .applicationText p {
    margin: 2% 9% 0 9%;
    text-align: left;
    font-size: 1rem;
    color: #231815;
    font-weight: 500;
  }
}
</style>