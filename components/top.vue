<template>
  <div class="topContainer">
    <div class="topMainTitle">
      <div class="topContents">
        <img src="~/assets/EngiiLogoNew.png" class="topLogo" width="45%" />
      
      <p class="topText">EnGiiで叶える、EnGiiが適える。</p>
      </div>
    </div>

    <div class="topImg slider">
      <div class="slider-wrap">
        <div class="slide">
          <img
            src="~/assets/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg"
            class="slide-image"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/TopMain.png"
            class="slide-image"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/pensive-young-female-athlete-standing-near-window-in-modern-3931372.jpg"
            class="slide-image"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg"
            class="slide-image"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/TopMain.png"
            class="slide-image"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/pensive-young-female-athlete-standing-near-window-in-modern-3931372.jpg"
            class="slide-image"
          />
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
  border-radius: 10px;
}
.slide {
  width: 800px;
  height: 100%;
  text-align: center;
  margin: 0 70px;
}

.topContainer {
  /* margin: 13% auto; */
  position: relative;
  z-index: 100;
  height: 400px;
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
  left: 50%;
  margin-left: -50vw;
  width: 100%;
  z-index: -200;
}
.topMainTitle{
  /* vertical-align: middle; */
  position: relative;
  height: 400px;
}

.topLogo {
  margin: 0 5%;
  /* vertical-align: middle; */
}

@media screen and (max-width: 730px){
  @keyframes scrollRes {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-470px * 3));
  }
}
.topMainTitle{
  height: 350px;
}
  .topText{
    font-size: 16px;
  }
  .topContents{
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 110px
}
.slide-image{
  height: 100%;
  width: 100%;
}
.slide{
  margin: 0 10px;
  width: 450px;
  height: 260px;
}
.slider-wrap{
  width: calc(470px * 6);
  margin-top: 130px;
  animation: scrollRes 20s linear infinite;
}
}


</style>