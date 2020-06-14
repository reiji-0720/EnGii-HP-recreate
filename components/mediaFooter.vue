<template>
  <div class="mediaFooter">
    <div class="footerContainer">
      <p>copyright 2020- EnGii all rights reserved</p>
      <div class="mediaLogo">
        <img src="~/assets/instagram.png" />
        <img src="~/assets/twitter.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mediaFooter {
  width: 100%;
  background-color: #b4b4b5;
}
.footerContainer {
  display: flex;
  align-items: center;
  position: relative;
 padding: 10px 0 7px 0;
}
.mediaFooter p {
  color: #ffff;
  margin-left: 20px;
}
.mediaLogo {
  position:absolute;
  right:20px;
}
.mediaLogo img{
  margin: 0 7px 0 7px;
}
</style>