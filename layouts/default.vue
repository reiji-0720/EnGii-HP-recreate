<template>
  <div>
    <Header class="headerPosition" />
    <nuxt />
    <MediaFooter class="backColor" />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import MediaFooter from "~/components/MediaFooter.vue";

export default {
  components: {
    Header,
    MediaFooter
  }
};
</script>


<style>
html {
  font-family: "YakuHanJP, “Open sans”, “ヒラギノ角ゴ ProN W3",
    “Hiragino Kaku Gothic ProN”, “メイリオ“, Meiryo, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
.backColor {
  background-color: #3e3a39;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
/* 
.headerPosition {
  position: fixed;
  top: 0;
  z-index: 900;
  margin: auto;
  max-width: 1500px;
} */


</style>
