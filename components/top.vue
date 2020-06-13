<template>
  <div class="topContainer">
    <div class="topMainTitle">
      <div class="topContents">
        <img src="~/assets/EngiiLogoNew.png" class="topLogo" width="620" />
      </div>
      <p class="topText">EnGiiで叶える、EnGiiが適える。</p>
    </div>
    <div class="topImg">
      <img src="~/assets/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg" class="topLogo" width="620" />
      <img
        src="~/assets/pensive-young-female-athlete-standing-near-window-in-modern-3931372.jpg"
        class="topLogo"
        width="620"
      />
      <img
        src="~/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg"
        class="topLogo"
        width="620"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.topContainer {
  margin: 13% auto;
  position: relative;
  z-index: 900;
}

.topMainTitle {
}

.topContents {
}

.topText {
  font-size: 30px;
  margin-top: 5%;
}

.topImg {
  position: relative;
  position: absolute;
  top:-90px;
  display: -webkit-flex;
  display: flex;
  left: 50%;
  margin-left: -50vw;
  overflow: hidden;
  width: 100%;
  z-index: -200;
}

.topLogo { 
    margin: 0 5%;
}

.topImg img:first-child {
  -webkit-animation: loop 50s -25s linear infinite;
  animation: loop 50s -25s linear infinite;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
}

/* 2つ目の画像 */
.topImg img + img {
  -webkit-animation: loop2 50s  linear infinite;
  animation: loop2 50s linear infinite;
}
@-webkit-keyframes loop {
  0% {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@keyframes loop {
  0% {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@-webkit-keyframes loop2 {
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
}

@keyframes loop2 {
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
}
@-webkit-keyframes loop3 {
  0% {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -webkit-transform: translateX(-300%);
    -ms-transform: translateX(-300%);
    transform: translateX(-300%);
  }
}

@keyframes loop3 {
  0% {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -webkit-transform: translateX(-300%);
    -ms-transform: translateX(-300%);
    transform: translateX(-300%);
  }
}
</style>