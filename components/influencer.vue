<template>
  <div class="main-container">
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
  position: relative;
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
.influencerleft {
  /* float: left; */
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
@media screen and (max-width:1366px){
  .influencerImg{
    width: 35%;
  }
}
@media screen and (max-width:1000px) {
  .main-container {
    height: 300px;
  }
  .influencerhead{
    line-height: 101.65px;
    padding-left: 20px;
    font-weight: 100;
    font-size: 30px;
  }
  .Influencer{
    margin-top: 5%;
  }
  .influencerImg{
    width: 40%;
    height: 300px;
  }
  .title-box{
    padding-top:50px;
  }
  .influencerImg::after {
  left: 0;
  content: "";
  height: 0;
  width: 0;
  border-bottom: 300px solid #e2f1f7;
  border-right: 50px solid transparent;
  /* border-top: 50px solid white;
  border-left: 50px solid yellow; */
  display: block;
}
}

@media screen and (max-width:730px){
  .influencerhead h2{
    font-size: 26px;
  }
  .influencerLogo {
    height: 60px;
    width: 60px;
  }
  .influencerImg{
    width: 30%;
    height: 300px;
    position:relative;
    position:absolute;
  }
   .influencerImg::after{
     position:absolute;
     left:-1px;
   }
  .main-container{
    padding:0;
  }
  .influencerleft{
    margin:0 auto;
    padding:0;
  }
  .content p{
    font-size: 12px;
  }
  .influencerhead{
    line-height: 60px;
    padding-left: 20px;
    font-weight: 100;
    font-size: 30px;
  }
  .influencerleft .btn-more{
    padding-top:50px;
    float:none;
    text-align: center;
    margin: 0 auto;
  }
}
@media screen and (max-width: 400px) {
  .main-container{
    height:350px;
  }
  .title-box{
    display:block;
  }
  .influencerImg{
    height:350px;
  }
  .influencerImg::after{
    height:350px;
  }
  .title-box h2{
    text-align: left;
    padding:0;
  }
}
</style>