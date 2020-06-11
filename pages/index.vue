<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        EnGii-HP-recreate
      </h1>
      <h2 class="subtitle">
        My classy Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
<<<<<<< HEAD
    <div class="sreviceTitle">
      <p class="serviceMainText">
        SERVICE
      </p>
      <p class="serviceSubText">
        多くの人が抱える悩みや不安とHP作成やアプリ制作といったメディア領域の問題に対して<br>
        対面での寄り添ったサポート、デザインやデジタルプロフェッショナル面で<br>
        解決できる場所としてサービスを展開しています。
      </p>
    </div>
    <MediaFooter />
    <section class="Activity">
      <engiiSupport />
      <engiiMedia />
    </section>
    <Influencer />
    <About />
=======
    <Influencer />
    <MediaFooter />
    <engiiSupport />
>>>>>>> 68c320686a3194dde9702cf48cbdec3acdd8b6b4
    <contact />

  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import MediaFooter from '~/components/MediaFooter.vue'
import Contact from '~/components/Contact.vue'
import Influencer from '~/components/Influencer.vue'
import engiiSupport from '~/components/engiiSupport.vue'
<<<<<<< HEAD
import About from '~/components/About.vue'
=======
>>>>>>> 68c320686a3194dde9702cf48cbdec3acdd8b6b4

export default {
  components: {
    Logo,
    MediaFooter,
    Contact,
    Influencer,
    engiiSupport
  }
}
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
<<<<<<< HEAD

.Activity{
  width: 1366px;
}

.sreviceTitle {
  margin: 50px 0;
}

.serviceMainText {
  font-size: 54px;
  margin: 10px 0;
}

.serviceSubText {
  text-align: left;
  margin: 15px 0 15px 240px;
  
}
@media screen and (max-width: 1366px) {
=======
@media screen and ( max-width:1366px){
  
>>>>>>> 68c320686a3194dde9702cf48cbdec3acdd8b6b4
}

</style>
