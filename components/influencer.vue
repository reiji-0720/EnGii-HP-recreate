<template>
    <div class="main-container">
        <div class="title-box">
            <img src="~/assets/influencer-logo.png" class="influencerLogo" width="15%">
            <h1>インフルエンサー事業</h1>
        </div>
        <div class="content">
            <p>EnGiiではインフルエンサーの方々に向けたサービス<br>
            win-winを提供しています。</p>
        </div>
        <div class="btn-more">
      <nuxt-link to class="influencer">
        more<Triangle />
      </nuxt-link>
    </div>
    </div>
</template>
<script>
import Triangle from '~/components/Triangle.vue'

export default {
  components: {
    Triangle
  }
};
</script>
<style scoped>
    .main-container{
        height:375.97px;
        background-color: #e1f3f5;
        padding: 0 15%;
    }
    .title-box{
        padding-top:100px;
        display:flex;
    }
    h1{
        line-height:101.65px;
        padding-left: 20px;
        font-weight: 100;
    }
    .influencerLogo{
        height:101.65px;
        width:101.65px;
    }
    .content{
        margin-top: 20px;
        text-align: left;
    }
    .btn-more{
        padding-top: 20px;
        text-align:left;
        
    }
    .influencer{
        padding: 10px;
      text-align: center;
	  display: inline-block;
      vertical-align: middle;
      /* height: 60px; */
      width: 159.89px;
      background-color: #66bad7;
      text-decoration: none;
      color: #FFFFFF;
      font-size: 16px;
    }
</style>