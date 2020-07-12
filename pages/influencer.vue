<template>
  <div class="mainInfluencerContainer">
    <div class="mainInfluencerUpThree">
      <div class="mainInfluencerFrame" v-for="member in influence" :key="member">
        <div class="mainInfluencerImg">
            <img :src="member.img.url" alt="" width="20%">
        </div>
        <div class="mainInfluencerName">
          <p> {{member.name}}</p>
          <p>{{member.nameKey}}</p>
        </div>
        <div class="mainInfluencerPosition">
          <p>{{member.title}}</p>
        </div>
        <div class="mainInfluencerText">
          <p>{{member.introduction}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      influence: ""
    };
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://engii.microcms.io/api/v1/influencer",
      {
        headers: { "X-API-KEY" : "ff71a3f4-d0d9-4250-9060-9b660b690fe6" }
      }
    );
    return {
      influence: data.contents 
    };
  }
};
</script>

<style>

.mainInfluencerContainer {
    margin-top: 20%;
}

</style>