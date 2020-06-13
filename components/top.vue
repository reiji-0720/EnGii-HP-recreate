<template>
  <div class="topContainer">
    <div class="topMainTitle">
      <div class="topContents">
        <img src="~/assets/EngiiLogoNew.png" class="topLogo" width="620" />
      </div>
      <p class="topText">EnGiiで叶える、EnGiiが適える。</p>
    </div>

    <div class="topImg slider">
      <div class="slider-wrap">
        <div class="slide">
          <img
            src="~/assets/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg"
            class="slide-image"
            width="620"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/pensive-young-female-athlete-standing-near-window-in-modern-3931372.jpg"
            class="slide-image"
            width="620"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
            class="slide-image"
            width="620"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg"
            class="slide-image"
            width="620"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/pensive-young-female-athlete-standing-near-window-in-modern-3931372.jpg"
            class="slide-image"
            width="620"
          />
        </div>
        <div class="slide">
          <img
            src="~/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
            class="slide-image"
            width="620"
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
  width: 60%;
  /* margin: auto; */
  overflow: hidden;
  /* border: 1px solid #e5e5e5; */
  display: flex;
  height: 400px;
  transform: rotate(-8deg);
}
.slider-wrap {
  animation: scroll 30s linear infinite;
  display: flex;
  width: calc(760px * 6);
  height: 100%;
}
.slide-image {
  /* width: 80%; */
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
  margin: 13% auto;
  position: relative;
  z-index: 900;
}

.topText {
  font-size: 30px;
  margin-top: 5%;
}

.topImg {
  position: relative;
  position: absolute;
  top: -90px;
  display: -webkit-flex;
  display: flex;
  left: 50%;
  margin-left: -50vw;
  /* overflow: hidden; */
  width: 100%;
  z-index: -200;
}

.topLogo {
  margin: 0 5%;
}

/* .topImg img:first-child {
  -webkit-animation: loop 25s 20s linear infinite;
  animation: loop 25s -45s linear infinite;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
}

.topImg img + img {
  -webkit-animation: loop2 25s linear infinite;
  animation: loop2 25s -45s linear infinite;
}

.topImg img:nth-child(3) {
  animation: loop3 25s -45s linear infinite;
} */
/* @-webkit-keyframes loop {
  0% {
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  to {
    -webkit-transform: translateX(-250%);
    -ms-transform: translateX(-250%);
    transform: translateX(-250%);
  }
} */

@keyframes loop {
  0% {
    /* -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%); */
    transform: translateX(0);
  }
  to {
    /* -webkit-transform: translateX(-250%);
    -ms-transform: translateX(-250%); */
    transform: translateX(-400%);
  }
}

/* @-webkit-keyframes loop2 {
  0% {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(-200%);
    -ms-transform: translateX(-200%);
    transform: translateX(-200%);
  }
} */

@keyframes loop2 {
  0% {
    /* -webkit-transform: translateX(0);
    -ms-transform: translateX(0); */
    transform: translateX(0);
  }
  to {
    /* -webkit-transform: translateX(-200%);
    -ms-transform: translateX(-200%); */
    transform: translateX(-400%);
  }
}
/* @-webkit-keyframes loop3 {
  0% {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-300%);
    -ms-transform: translateX(-300%);
    transform: translateX(-300%);
  }
} */

@keyframes loop3 {
  0% {
    /* -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%); */
    transform: translateX(0);
  }
  to {
    /* -webkit-transform: translateX(-300%);
    -ms-transform: translateX(-300%); */
    transform: translateX(-400%);
  }
}
</style>