<template>
  <div class="newsContainer">
    <div v-for="news in newstop" :key="news" class="newsList">
      <p class="newsText">{{news.title}} {{news.date}} {{news.text}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["newstop"]
};
</script>

<style>
.newsContainer {
  margin: 0 auto;
  width: 55%;
}

.newsText::after {
  position: absolute;
  left: 100%;
  top: 20px;
  content: " ";
  width: 0;
  height: 0;
  border: solid transparent;
  border-width: 5px 20px;
  border-left-color: #3bb2db;
}

.newsText {
  margin-top: 40px;
  text-align: left;
  border-bottom: solid 1px #3bb2db;
  position: relative;
  color: black;
}

@media screen and (max-width: 730px) {
  .newsText {
    font-size: 10px;
  }
  .newsText::after {
    top: 11px;
  }
}
</style>