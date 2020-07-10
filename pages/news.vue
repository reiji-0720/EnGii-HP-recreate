<template>
  <div class="mainNewscontainer">
    <div class="mainNewsItemCont">
      <div v-for="item in items" :key="item" class="mainNewsItem">
        <div class="mainNewsTitle">
          <!-- picture_imgを取得する -->
          {{ item.title }}
        </div>
        <!-- picture_dateを取得する -->
        <p class="mainNewsDate">
             {{ item.date }}
        </p>
        <p class="mainNewsewsContent">
          <!-- picture_areaを取得する -->
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: ""
    };
  },
  head: {
    script: []
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://engii.microcms.io/api/v1/news",
      {
        headers: { "X-API-KEY" : "ff71a3f4-d0d9-4250-9060-9b660b690fe6" }
      }
    );
    return {
      items: data.contents
    };
  }
};
</script>

<style>

.mainNewscontainer {
    margin-top: 10%;
}
</style>