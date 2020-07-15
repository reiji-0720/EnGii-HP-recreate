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
  width: 70%;
  overflow-y: scroll;
	margin: 0 auto;
  height: 300px;
	padding: 10px 20px;
	border: 2px solid #ccc;
}

.newsList {
  margin: 10px auto;
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