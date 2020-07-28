<template>
  <div class="main-container">
    <div class="conInfluencerPosi">
      <div class="influencerleft">
        <div class="title-box">
          <img src="~/assets/influencer-logo.png" class="influencerLogo" width="15%" />
          <h2 class="influencerhead">インフルエンサー事業</h2>
        </div>
        <div class="content">
          <p>
            EnGiiではインフルエンサーの方々に向けたサービス
            <br />win-winを提供しています。
          </p>
        </div>
        <div class="btn-more">
          <nuxt-link to="/influencer" class="influencer">
            <btnMore />
          </nuxt-link>
        </div>
      </div>
      <div class="influencerImg"></div>
    </div>
  </div>
</template>
<script>
import btnMore from "~/components/parts/btnMore.vue";

export default {
  components: {
    btnMore
  }
};
</script>


<style scoped>
.main-container {
  height: 375.97px;
  background-color: #e2f1f7;
  padding: 0 15%;
  margin: auto;
}

.conInfluencerPosi {
  position: relative;
  height: 375.97px;
  width: 100%;
  max-width: 1500px;
  margin: auto;
}

.influencerleft {
  margin: auto;
}

.title-box {
  padding-top: 100px;
  display: flex;
}
.title-box h2 {
  font-weight: 700;
}
h2 {
  line-height: 101.65px;
  padding-left: 20px;
}
.influencerLogo {
  height: 101.65px;
  width: 101.65px;
}
.content {
  margin-top: 20px;
  text-align: left;
}
.btn-more {
  padding-top: 20px;
  text-align: left;
}
.main-container {
  height: 375.97px;
  background-color: #e2f1f7;
  padding: 0 0 0 15%;
  width: 100%;
  display: flex;
  position: relative;
  z-index: 10;
}
.title-box {
  padding-top: 100px;
  display: flex;
}
.influencerhead {
  line-height: 101.65px;
  padding-left: 20px;
  font-weight: 100;
  font-size: 54px;
}

.influencerLogo {
  height: 101.65px;
  width: 101.65px;
}
.content {
  margin-top: 20px;
  text-align: left;
}
.btn-more {
  padding-top: 20px;
  text-align: left;
  float: left;
}

.influencerImg {
  display: inline-block;
  background-image: url("~@/assets/influence.jpg");
  background-size: cover;
  background-position: center;
  height: 375.97px;
  width: 612px;
  position: absolute;
  margin: auto;
  top: 0;
  z-index: -1;
  clip-path: polygon(15% 0%, 0% 100%, 100% 100%, 100% 0%);
}
@media screen and (max-width: 1366px) {
  .influencerImg {
    width: 35%;
  }
}
@media screen and (max-width: 1000px) {
  .main-container {
    height: 300px;
  }
  .influencerhead {
    line-height: 101.65px;
    padding-left: 20px;
    font-weight: 100;
    font-size: 30px;
  }
  .Influencer {
    margin-top: 5%;
  }
  .influencerImg {
    width: 40%;
    height: 300px;
  }
  .title-box {
    padding-top: 50px;
  }
}

@media screen and (max-width: 730px) {
  .influencerLogo {
    height: 60px;
    width: 60px;
  }
  .influencerImg {
    width: 50%;
    height: 300px;
  }
  .main-container {
    padding: 0;
  }
  .influencerleft {
    margin: 0 auto;
    padding: 0;
  }
  .title-box h2 {
    margin-left: 30px;
  }
  .content p {
    font-size: 12px;
    margin-left: 30px;
  }
  .influencerhead {
    line-height: 60px;
    padding-left: 20px;
    font-weight: 100;
    font-size: 26px;
  }
  .influencerLogo {
    width: 67.28px;
    height: 67.28px;
  }
  .influencerleft .btn-more {
    padding-top: 50px;
    float: none;
    text-align: center;
    margin: 0 auto;
  }
}
@media screen and (max-width: 400px) {
  .main-container {
    height: 350px;
  }
  .title-box {
    display: block;
    padding-top: 30px;
  }
  .influencerImg {
    height: 350px;
  }
  .influencerhead {
    text-align: left;
    padding: 0;
  }
}
</style>