<template>
  <div class="newsContainer">
    <div v-for="news in newstop" :key="news" class="newsList">
      <div class="newsText">
        <p>{{news.date}}</p>
        <p v-html="news.text"></p>
      </div>
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
  max-width: 1500px;
  width: 70%;
  overflow-y: scroll;
  margin: 0 auto;
  height: 300px;
  padding: 10px 20px;
  border: 2px solid #ccc;
}

.newsList {
  margin: 10px auto;
  padding-right: 20px;
  width: 100%;
}

.newsText {
  margin-top: 40px;
  text-align: left;
  border-bottom: solid 1px #3bb2db;
  position: relative;
  color: black;
  display: flex;
}
.newsText p {
  margin: auto 10px;
}

@media screen and (max-width: 730px) {
  .newsContainer {
    width: 80%;
  }
  .newsText {
    font-size: 10px;
  }
  .newsText::after {
    top: 11px;
  }
  .newsList {
    margin: 10px auto;
    padding-right: 20px;
    width: 230%;
  }
}
</style>