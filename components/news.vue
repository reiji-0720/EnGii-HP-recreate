<template>
  <div class="newsContainer">
    <div class="newsList" v-for="elem in lists" :key="elem.name">
      <p class="newsText">{{elem.name}} {{elem.date}} {{elem.title}}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      lists: [
        { name: "NEWS", date: "2020.06.07", title: "お知らせが入ります。" },
        { name: "NEWS", date: "2020.06.03", title: "お知らせが入ります。" },
        { name: "NEWS", date: "2020.06.01", title: "HPリニューアルのお知らせ" }
      ]
    };
  }
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
}

@media screen and (max-width: 730px){
  .newsText{
    font-size: 10px;
  }
  .newsText::after{
    top: 11px;
  }
}
</style>