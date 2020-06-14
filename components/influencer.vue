<template>
  <div class="main-container">
    <div class="influencerleft">
      <div class="title-box">
        <img src="~/assets/influencer-logo.png" class="influencerLogo" width="15%" />
        <h1 class="influencerhead">インフルエンサー事業</h1>
      </div>
      <div class="content">
        <p>
          EnGiiではインフルエンサーの方々に向けたサービス
          <br />win-winを提供しています。
        </p>
      </div>
      <div class="btn-more">
        <nuxt-link to class="influencer">
          
          <btnMore />
        </nuxt-link>
      </div>
    </div>

    <div class="influencerImg"></div>
  </div>
</template>
<script>
import btnMore from '~/components/parts/btnMore.vue'

export default {
	components:{
		btnMore
	}
};

</script>




<style scoped>
.main-container {
  height: 375.97px;
  background-color: #e2f1f7;
  padding: 0 15%;
}
.title-box {
  padding-top: 100px;
  display: flex;
}
h1 {
  line-height: 101.65px;
  padding-left: 20px;
  font-weight: 100;
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
.influencer {
  padding: 10px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  /* height: 60px; */
  /* width: 159.89px; */
  /* background-color: #66bad7; */
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
}
.influencerleft {
  /* float: left; */
}
.main-container {
  height: 375.97px;
  background-color: #e2f1f7;
  padding: 0 0 0 15%;
  width: 100%;
  display: flex;
  float: left;
  position: relative;
  z-index: 900;
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

.influencerImg::after {
  left: 0;
  content: "";
  height: 0;
  width: 0;
  border-bottom: 375.97px solid #e2f1f7;
  border-right: 50px solid transparent;
  /* border-top: 50px solid white;
  border-left: 50px solid yellow; */
  display: block;
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
.influencer {
  padding: 10px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  /* height: 60px; */
  width: 159.89px;
  background-color: #66bad7;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;
}

.influencerImg {
  display: inline-block;
  background-image: url("~@/assets/influence.jpg");
  background-size: cover;
  background-position: center;
  height: 375.97px;
  width: 612px;
  position: absolute;
  right: 0;
  z-index: -1;
}
</style>