<template>
    <div class="influencer-main-container">
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
        <btnMore />
      </nuxt-link>
    </div>
    </div>
</template>
<script>
import btnMore from '~/components/parts/btnMore'

export default {
  components: {
    btnMore
  }
};
</script>
<style scoped>
    .influencer-main-container{
        height:375.97px;
        background-color: #e2f1f7;
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
    
</style>