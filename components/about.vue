<template>
    <div class="aboutContainer">
        <div class="aboutTitle">
            <p>ABOUT</p>
        </div>
        <div class="aboutMain">
            <div class="aboutImg">
                <img src="~/assets/IMG_5646.JPG" class="leaderLogo" width="415">
                <div class="aboutBackImg"></div>
            </div>
            <div class="aboutText">
                <p class="aboutMainText">新しい自分に<br>
                出会えるキッカケを</p>
                <p class="aboutSubText">
                    EnGiiが介在し、沢山の人が関わり合うことで<br>
                    新しい自分に出会えるキッカケをより多く作り<br>
                    ありたい姿、なりたい姿を叶えることができる。<br>
                    そんなグループを目指します。<br>
                    私たちEnGiiは私達の今までの自身の経験から<br>
                    「あったらいいな、できたらいいな」<br>
                    を形にして、皆様の力になれたらと思っています。
                </p>
                <div class="aboutMore">
                    <p>MORE<Triangle /></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Triangle from '~/components/Triangle.vue'

export default {
    components: {
    Triangle
  }
}
</script>

<style>

.aboutTitle {
  margin: 0 0 30px 0;
}
.aboutTitle p {
  font-size: 54px;
  color: #231815;
}
.aboutImg {
    width: 50%;
    position: relative;
}
.aboutBackImg {
    background-color: #3BB2DB;
    height: 410px;
    width: 410px;
    position: absolute;
    top: 0px;
    margin: 25px 0 0 220px;
    z-index: -200;
}
.leaderLogo {
    margin-left: 170px;
    z-index: 900;
}
.aboutMain {
    display: flex;
    margin-top:70px;
}
.aboutText {
    width: 50%;
    padding-left: 60px;
}
.aboutMainText {
    color: #3E3A39;
    font-size: 36px;
    text-align: left;
    margin-bottom: 20px;
}
.aboutSubText {
    color: #231815;
    font-size: 19px;
    text-align: left;
}
.aboutMore {
    background-color: #3BB2DB;
    width: 33%;
    padding: 10px 0;
    margin-top: 55px;

}
.aboutMore p{
    text-align: center;
    color: #FFFFFF;
    font-size: 19px;
    align-items: center;
}
</style>