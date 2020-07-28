<template>
  <div class="topContainer">
    <div class="topMainTitle">
      <div class="topContents">
        <img src="~/assets/EngiiLogoNew.png" class="topLogo" width="45%" alt="EnGii エンギー" />
        <p class="topText">EnGiiで叶える、EnGiiが適える。</p>
      </div>
    </div>

    <div class="topImg slider">
      <div class="slider-wrap">
        <div class="slide">
          <img src="~/assets/TopSubSecond.jpg" class="slide-image" alt="EnGii エンギー" />
        </div>
        <div class="slide">
          <img src="~/assets/homeTop.png" class="slide-image" alt="EnGii エンギー" />
        </div>
        <div class="slide">
          <img src="~/assets/TopSubOne.jpg" class="slide-image" alt="EnGii エンギー" />
        </div>
        <div class="slide">
          <img src="~/assets/TopSubSecond.jpg" class="slide-image" alt="EnGii エンギー" />
        </div>
        <div class="slide">
          <img src="~/assets/homeTop.png" class="slide-image" alt="EnGii エンギー" />
        </div>
        <div class="slide">
          <img src="~/assets/TopSubOne.jpg" class="slide-image" alt="EnGii エンギー" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-760px * 3));
  }
}

.slider {
  /* width: 60%; */
  /* margin: auto; */
  overflow: hidden;
  display: flex;
  height: 400px;
}
.slider-wrap {
  animation: scroll 30s linear infinite;
  display: flex;
  width: calc(760px * 6);
  height: 100%;
}
.slide-image {
  /* width: 800px; */
  height: 100%;
  object-fit: cover;
}
.slide {
  width: 800px;
  height: 100%;
  text-align: center;
  margin: 0 70px;
}

.topContainer {
  position: relative;
  z-index: 100;
  height: 400px;
  max-width: 1500px;
  margin: auto;
  z-index: -200;
}

.topText {
  font-size: 30px;
  margin-top: 5%;
}

.topImg {
  position: relative;
  position: absolute;
  top: -90px;
  display: flex;
  /* left: 50%;
  margin-left: -50vw; */
  width: 100%;
  z-index: -200;
}
.topMainTitle {
  /* vertical-align: middle; */
  position: relative;
  height: 400px;
}

.topLogo {
  margin: 0 5%;
  /* vertical-align: middle; */
}

@media screen and (max-width: 730px) {
  @keyframes scrollRes {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-470px * 3));
    }
  }
  .topContainer {
    height: 495px;
  }
  .topText {
    font-size: 16px;
  }
  .topContents {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 140px;
  }
  .slide-image {
    height: 100%;
    width: 100%;
  }
  .slide {
    margin: 0 10px;
    width: 450px;
    height: 260px;
  }
  .slider-wrap {
    width: calc(470px * 6);
    margin-top: 130px;
    animation: scrollRes 20s linear infinite;
  }
}
</style>