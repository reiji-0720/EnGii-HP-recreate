<template>
  <div class="container">
    <Top />
    <MediaFooter />
    <News />
    <div class="sreviceTitle">
      <p class="serviceMainText">SERVICE</p>
      <p class="serviceSubText">
        多くの人が抱える悩みや不安とHP作成やアプリ制作といったメディア領域の問題に対して
        <br />対面での寄り添ったサポート、デザインやデジタルプロフェッショナル面で
        <br />解決できる場所としてサービスを展開しています。
      </p>
    </div>
    <section class="Activity clearfix">
      <engiiSupport />
      <engiiMedia />
    </section>
    <div class="scrollsecond">
      <p class="scrolltext">scroll</p>
      <div class="scrollborder"></div>
    </div>
    <Influencer />
    <About />
    <contact />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import MediaFooter from "~/components/MediaFooter.vue";
import Contact from "~/components/contact.vue";
import Influencer from "~/components/influencer.vue";
import engiiSupport from "~/components/engiiSupport.vue";
import engiiMedia from "~/components/engiiMedia.vue";
import About from "~/components/About.vue";
import News from "~/components/news.vue";
import Vue from "vue";
import Top from "~/components/Top.vue";

export default {
  components: {
    Logo,
    MediaFooter,
    Contact,
    Influencer,
    engiiSupport,
    engiiMedia,
    About,
    News,
    Top
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.sreviceTitle {
  margin: 50px 0;
}

.serviceMainText {
  font-size: 54px;
  margin: 10px 0;
}

.serviceSubText {
  display: inline-block;
  text-align: left;
  margin: 15px auto;
}

.scrolltext {
  writing-mode: vertical-rl;
  margin-left: 25px;
  color: #3bb2db;
  font-size: 14px;
}
.scrollborder{
  border-left: 1px solid #3bb2db;
  display: block;
  height: 80px;
  margin: 10px 0 10px 32px;
}
@media screen and (max-width: 1366px) {
}
</style>
