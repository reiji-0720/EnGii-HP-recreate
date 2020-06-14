<template>
  <div class="headerContainer">
    <img src="~/assets/EngiiLogoNew.png" class="headerLogo" width="15%" />
    <div class="headerMenue">
      <p>
        <a href="#" v-scroll-to="toNewsContainer">NEWS</a>
      </p>
      <p>SERVICE</p>
      <p>INFLUENCER</p>
      <p>ABOUT</p>
      <p>CONTACT</p>
      <p>MEMBER</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -100
});

export default {
  data: {
    toNewsContainer: '#newsContainer'
  }
};
</script>

<style>
.headerContainer {
  background-color: #ffff;
  height: 75px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.headerLogo {
  margin: 0 50px 0 70px;
}

.headerMenue {
  display: flex;
}

.headerMenue p {
  margin: 7px 17px 0 17px;
}
</style>