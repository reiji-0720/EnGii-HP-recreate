<template>
  <div class="mediaFooter">
    <div class="footerContainer">
      <p>copyright 2020- EnGii all rights reserved</p>
      <div class="mediaLogo">
        <a href="https://www.instagram.com/engii_official">
          <img src="~/assets/instagram.png" />
        </a>
        <a href="https://twitter.com/EnGii_official">
          <img src="~/assets/twitter.png" />
        </a>
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
  max-width: 1500px;
  margin: auto;
}
.mediaFooter p {
  color: #ffff;
  margin-left: 20px;
}
.mediaLogo {
  position: absolute;
  right: 20px;
  align-items: center;
}
.mediaLogo img {
  margin: 0 7px 0 7px;
}

@media screen and (min-width: 1001px) {
}

@media screen and (min-width: 731px) and (max-width: 1000px) {
  .footerContainer {
    display: flex;
    align-items: center;
    position: relative;
    padding: 7px 0 7px 0;
  }
  .footerContainer p {
    color: #ffff;
    font-size: 0.7rem;
  }
  .mediaLogo {
    position: absolute;
    right: 7px;
    align-items: center;
  }
  .mediaLogo img {
    margin: 4px 5px 0 5px;
    width: 25%;
  }
}

@media screen and (max-width: 730px) {
  .footerContainer {
    display: flex;
    align-items: center;
    position: relative;
    padding: 7px 0 7px 0;
  }
  .footerContainer p {
    color: #ffff;
    font-size: 0.6rem;
  }
  .mediaLogo {
    position: absolute;
    right: 7px;
    align-items: center;
  }
  .mediaLogo img {
    margin: 4px 5px 0 5px;
    width: 20%;
  }
}
</style>