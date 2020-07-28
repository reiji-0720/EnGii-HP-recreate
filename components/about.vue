<template>
  <div class="aboutContainer">
    <div class="aboutTitle">
      <p>VISION</p>
    </div>
    <div class="aboutMain">
      <div class="aboutImg">
        <div class="aboutImgBox">
          <img src="~/assets/IMG_5646.JPG" class="leaderLogo" width="415" />
        </div>
      </div>
      <div class="aboutText">
        <p class="aboutMainText">
          新しい自分に
          <br />出会えるキッカケを
        </p>
        <p class="aboutSubText">
          EnGiiが介在し、沢山の人が関わり合うことで
          <br />新しい自分に出会えるキッカケをより多く作り
          <br />ありたい姿、なりたい姿を叶えることができる。
          <br />そんなグループを目指します。
          <br />私たちEnGiiは私達の今までの自身の経験から
          <br />「あったらいいな、できたらいいな」
          <br />を形にして、皆様の力になれたらと思っています。
        </p>
        <div class="btn-more">
          <nuxt-link to="mainAbout" class="about">
            <btnMore />
            <Triangle />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnMore from "~/components/parts/btnMore";

export default {
  components: {
    btnMore
  }
};
</script>

<style>
.aboutContainer {
}
.aboutTitle {
  margin: 0 0 30px 0;
}
.aboutTitle p {
  font-size: 54px;
  font-weight: 700;
  color: #231815;
}
.aboutImg {
  width: 50%;
  /* position: relative; */
}
.aboutImgBox {
  padding-top: 10px;
  height: 455px;
  width: 455px;
  float: right;
  position: relative;
}

.leaderLogo {
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 100;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  filter: drop-shadow(30px 30px 0 #3bb2db);
}
.aboutMain {
  display: flex;
}
.aboutText {
  width: 50%;
  padding-left: 60px;
}
.aboutMainText {
  color: #3e3a39;
  font-size: 36px;
  text-align: left;
  margin-bottom: 20px;
}
.aboutSubText {
  color: #231815;
  font-size: 19px;
  text-align: left;
  line-height: 33px;
}
.aboutText .btn-more {
  margin-top: 55px;
  text-align: left;
}
.aboutMore p {
  text-align: center;
  color: #ffffff;
  font-size: 19px;
  align-items: center;
}
@media screen and (min-width: 1001px) and (max-width: 1365px) {
  .aboutText .aboutMainText {
    font-size: 32.64px;
    margin-bottom: 10px;
  }
  .aboutText .aboutSubText {
    font-size: 16.32px;
    line-height: 32px;
  }
  .aboutImg .aboutImgBox {
    height: 426.8px; /* 455pxの0.9380倍　aboutTextの高さと等しい*/
    width: 426.8px;
  }

  .aboutImgBox .leaderLogo {
    z-index: 100;
  }
}

@media screen and (max-width: 1000px) {
  .aboutTitle p {
    font-size: 35px;
  }
  .aboutText .aboutMainText {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .aboutText .aboutSubText {
    font-size: 12px;
    line-height: 24px;
  }
  .aboutImg .aboutImgBox {
    height: 344.8px; /* 455pxの0.615倍　aboutTextの高さと等しい*/
    width: 344.8px;
  }

  .aboutImgBox .leaderLogo {
    position: absolute;
    top: 10px;
    left: 0;
    z-index: 100;
  }
}

@media screen and (max-width: 730px) {
  .aboutTitle p {
    font-size: 26px;
  }
  .aboutMain {
    display: block;
  }
  .aboutImg {
    height: 350px;
    margin: 0 auto;
    width: 277.67px;
  }
  .aboutImg .aboutImgBox {
    height: 277.67px; /* 455pxの0.615倍　aboutTextの高さと等しい*/
    width: 277.67px;
  }
  .aboutText {
    padding: 0;
    margin: 0 auto;
    width: 277.67px;
  }
  .aboutText p {
  }
  .aboutText .btn-more {
    margin: 0 auto;
    margin-top: 50px;
    width: 159.88px;
  }
}
@media screen and (max-width: 278px) {
  .aboutImg {
    width: 220px;
    height: 250px;
  }
  .aboutImg .aboutImgBox {
    height: 220px; /* 455pxの0.615倍　aboutTextの高さと等しい*/
    width: 220px;
  }
  .leaderLogo {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    filter: drop-shadow(10px 10px 0 #3bb2db);
  }
  .aboutText {
    width: 220px;
  }
}
</style>