<template>
  <div class="headerContainer">
    <img src="~/assets/EngiiLogoNew.png" class="headerLogo" width="15%" />
    <div class="headerMenue">
      <p>
        <nuxt-link class="borderNone" v-scroll-to="'#News'" to>NEWS</nuxt-link>
      </p>
      <p>
        <nuxt-link class="borderNone" v-scroll-to="'#sreviceTitle'" to>SERVICE</nuxt-link>
      </p>
      <p>
        <nuxt-link class="borderNone" v-scroll-to="'#Influencer'" to>INFLUENCER</nuxt-link>
      </p>
      <p>
        <nuxt-link class="borderNone" v-scroll-to="'#About'" to>ABOUT</nuxt-link>
      </p>
      <p>
        <nuxt-link class="borderNone" v-scroll-to="'#indexContact'" to>CONTACT</nuxt-link>
      </p>
      <p>
        <nuxt-link class="borderNone" v-scroll-to="'#indexContact'" to>MEMBER</nuxt-link>
      </p>
    </div>
    <div id="nav-drawer">
      <input id="nav-input" type="checkbox" class="nav-unshown" />
      <label id="nav-open" for="nav-input">
        <span></span>
      </label>
      <label class="nav-unshown" id="nav-close" for="nav-input"></label>
      <div id="nav-content">
        <p>
          <nuxt-link class="borderNone" v-scroll-to="'#News'" to>NEWS</nuxt-link>
        </p>
        <p>
          <nuxt-link class="borderNone" v-scroll-to="'#sreviceTitle'" to>SERVICE</nuxt-link>
        </p>
        <p>
          <nuxt-link class="borderNone" v-scroll-to="'#Influencer'" to>INFLUENCER</nuxt-link>
        </p>
        <p>
          <nuxt-link class="borderNone" v-scroll-to="'#About'" to>ABOUT</nuxt-link>
        </p>
        <p>
          <nuxt-link class="borderNone" v-scroll-to="'#indexContact'" to>CONTACT</nuxt-link>
        </p>
        <p>
          <nuxt-link class="borderNone" v-scroll-to="'#indexContact'" to>MEMBER</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@media screen and (min-width: 1001px) {
  .headerContainer {
    background-color: #ffff;
    height: 75px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .headerLogo {
    margin: 0 50px 0 70px;
  }

  .headerMenue {
    display: flex;
  }

  .headerMenue p {
    margin: 7px 17px 0 17px;
  }

  .borderNone {
    text-decoration: none;
    color: #231815;
  }

  #nav-drawer {
    display: none;
  }
}

@media screen and (min-width: 731px) and (max-width: 1000px) {
  .headerContainer {
    background-color: #ffff;
    height: 55px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .headerLogo {
    margin: 0 30px 0 40px;
  }
  .headerMenue {
    display: flex;
  }
  .headerMenue p {
    margin: 4px 15px 0 15px;
    font-size: 0.7rem;
  }
  .borderNone {
    text-decoration: none;
    color: #231815;
  }
  #nav-drawer {
    display: none;
  }
}

@media screen and (max-width: 730px) {
  .headerContainer {
    padding: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .headerLogo {
    display: none;
  }

  .headerMenue {
    display: none;
  }
  #nav-drawer {
    position: relative;
  }

  /*チェックボックス等は非表示に*/
  .nav-unshown {
    display: none;
  }

  /*アイコンのスペース*/
  #nav-open {
    display: inline-block;
    width: 30px;
    height: 22px;
    vertical-align: middle;
  }

  /*ハンバーガーアイコンをCSSだけで表現*/
  #nav-open span,
  #nav-open span:before,
  #nav-open span:after {
    position: absolute;
    height: 3px; /*線の太さ*/
    width: 25px; /*長さ*/
    border-radius: 3px;
    background: #555;
    display: block;
    content: "";
    cursor: pointer;
  }
  #nav-open span:before {
    bottom: -8px;
  }
  #nav-open span:after {
    bottom: -16px;
  }

  /*閉じる用の薄黒カバー*/
  #nav-close {
    display: none; /*はじめは隠しておく*/
    position: fixed;
    z-index: 99;
    top: 0; /*全体に広がるように*/
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  /*中身*/
  #nav-content {
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999; /*最前面に*/
    width: 70%; /*右側に隙間を作る（閉じるカバーを表示）*/
    max-width: 330px; /*最大幅（調整してください）*/
    height: 100%;
    background: #fff; /*背景色*/
    transition: 0.3s ease-in-out; /*滑らかに表示*/
    -webkit-transform: translateX(-105%);
    transform: translateX(-105%); /*左に隠しておく*/
  }

  #nav-content p {
    padding: 40px 0 0 50px;
    text-align: left;
    margin: auto;
    font-size: 1.2rem;
  }

  /*チェックが入ったらもろもろ表示*/
  #nav-input:checked ~ #nav-close {
    display: block; /*カバーを表示*/
    opacity: 0.5;
  }

  #nav-input:checked ~ #nav-content {
    -webkit-transform: translateX(0%);
    transform: translateX(0%); /*中身を表示（右へスライド）*/
    box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
  }
  .borderNone {
    text-decoration: none;
    color: #231815;
  }
}
</style>