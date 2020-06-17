<template>
  <div class="aboutContainer">
    <div class="aboutTitle">
      <p>ABOUT</p>
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
          <nuxt-link to class="about">
            <btnMore />
            <Triangle />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btnMore from '~/components/parts/btnMore'


export default {
  components: {
    btnMore
  }
};
</script>

<style>



.aboutContainer{
    
}
.aboutTitle {
  margin: 0 0 30px 0;
}
.aboutTitle p {
  font-size: 54px;
  color: #231815;
}
.aboutImg {
  width: 50%;
  /* position: relative; */
}
.aboutImgBox{
    padding-top:10px;
    height:455px;
    width:455px;
    float: right;
    position:relative;
}
.aboutBackImg {
  
  height: 420px;
  width: 420px;
  position:absolute;
  /* position: absolute; */
  bottom: 0px;
  right: 0;
  z-index: -200;
}
.leaderLogo {
  position:absolute;
  top:10px;
  left:0;
  z-index: 100;
  width:  calc(100% - 40px);
  height:calc(100% - 40px);
  filter:drop-shadow(30px 30px 0 #3bb2db);
}
.aboutMain {
  display: flex;
  margin-top: 70px;
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
@media screen and (min-width:1001px) and (max-width:1365px){
.aboutText .aboutMainText{
        font-size:32.64px;
        margin-bottom: 10px;
    }
    .aboutText .aboutSubText{
        font-size: 16.32px;
        line-height: 32px;
    }
    .aboutImg .aboutImgBox{
      height:426.8px;   /* 455pxの0.9380倍　aboutTextの高さと等しい*/
      width:426.8px;
    }
    .aboutImgBox .aboutBackImg {
      height: 393.96px;  /* 420 × 0.9380　= 393.96 */
      width: 393.96px;
    }
    .aboutImgBox .leaderLogo {
      z-index: 100;
     
    }
}

@media screen and (max-width:1000px){
    .aboutText .aboutMainText{
        font-size:24px;
        margin-bottom: 10px;
    }
    .aboutText .aboutSubText{
        font-size: 12px;
        line-height: 24px;
    }
    .aboutImg .aboutImgBox{
      height:344.8px;    /* 455pxの0.615倍　aboutTextの高さと等しい*/
      width:344.8px;
    }
    .aboutImgBox .aboutBackImg {
      background-color: #3bb2db;
      height: 318.86px;    /* 420 × 0.615　= 318.86 */
      width: 318.86px;
      position:absolute;
      /* position: absolute; */
      bottom: 0px;
      right: 0;
      z-index: -200;
    }
    .aboutImgBox .leaderLogo {
      position:absolute;
      top:10px;
      left:0;
      z-index: 100;
      
    }
    
}


@media screen and ( max-width:730px){
  .aboutMain{
    display:block;
  }
}
</style>