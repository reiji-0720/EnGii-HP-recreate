<template>
  <div class="headerContainer">
    <div class="headerContainerPosition">
      <nuxt-link class="borderNone headerImgPosition" to="/">
        <img src="~/assets/EngiiLogoNew.png" class="headerLogo" width="57%" alt="EnGii エンギー" />
      </nuxt-link>
      <ul class="headerMenue">
        <li>
          <nuxt-link class="borderNone" to="/mainAbout">VISION</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/member">MEMBER</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/sevice/support">SUPPORT</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/sevice/media">MEDIA</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/influencer">INFLUENCER</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/contact">CONTACT</nuxt-link>
        </li>
      </ul>
    </div>
    <div id="nav-drawer">
      <input id="nav-input" type="checkbox" class="nav-unshown" />
      <label id="nav-open" for="nav-input">
        <span></span>
      </label>
      <label class="nav-unshown" id="nav-close" for="nav-input"></label>
      <ul id="nav-content">
        <li>
          <nuxt-link class="borderNone" to="/">TOP</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/mainAbout">VISION</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/member">MEMBER</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone subMenuePosition" to="/sevice/support">SUPPORT</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone subMenuePosition" to="/sevice/media">MEDIA</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone subMenuePosition" to="/influencer">INFLUENCER</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/contact">CONTACT</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style>
ul {
  list-style: none;
}

.headerPosition {
  position: fixed;
  top: 0;
  z-index: 900;
  margin: auto;
  /* max-width: 1500px; */
}
.headerContainerPosition {
  display: flex;
  /* justify-content: center; */
}


@media screen and (min-width: 1001px) {
  .headerContainer {
    background-color: #ffff;
    display: flex;
    align-items: center;
    height: 90px;
    width: 100%;
  }

  .headerImgPosition {
    width: 30%;
  }

  .headerLogo {
    margin: 0 50px 0 70px;
  }

  .headerMenue {
    display: flex;
    font-weight: 700;
    align-items: center;
  }

  .headerMenue li {
    margin: 7px 17px 0 17px;
    position: relative;
    display: inline-block;
    text-decoration: none;
  }
  .headerMenue li::after {
    position: absolute;
    bottom: -3px;
    left: 0;
    content: "";
    width: 100%;
    height: 3px;
    background: #39acd8;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform 0.3s;
  }
  .headerMenue li:hover::after {
    transform: scale(1, 1);
  }
  .borderNone {
    text-decoration: none;
    color: #231815;
  }

  #nav-drawer {
    display: none;
  }
}
@media screen and (min-width: 1500px) {
  /* .headerContainer {
    right: calc(50% - 30%);
  } */
  .headerContainerPosition {
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
  }
  .headerLogo{
    margin:0 50px 0 0;
  }
}
@media screen and (min-width: 731px) and (max-width: 1000px) {
  .headerContainer {
    background-color: #ffff;
    height: 55px;
    display: flex;
    /* position: fixed; */
    align-items: center;
    margin-bottom: 20px;
  }
  .headerLogo {
    margin: 0 30px 0 40px;
  }
  .headerMenue {
    display: flex;
    font-weight: 700;
  }

  .headerImgPosition {
    width: 30%;
  }

  .headerMenue li {
    margin: 4px 15px 0 15px;
    font-size: 0.7rem;
  }

  .headerMenu > li.menu__single {
    position: relative;
  }

  ul.menu__second-level {
    visibility: hidden;
    display: flex;
    opacity: 0;
    z-index: 1;
    padding: 15px 0;
  }

  li.menu__single ul.menu__second-level {
    position: absolute;
    top: 40px;
    margin-left: -100px;
    width: 100%;
    margin-left: -70px;
    background: #e2f1f7;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  li.menu__single:hover ul.menu__second-level {
    top: 50px;
    visibility: visible;
    opacity: 1;
  }

  li.menu__single:hover + .result {
  }

  .subMenuePosition {
    margin: auto 20px auto 0;
    padding: 10px auto;
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

  #nav-content li {
    padding: 40px 0 0 50px;
    text-align: left;
    margin: auto;
    font-size: 0.9rem;
    font-weight: 700;
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
.active {
  border-bottom: 2px solid #3bb2db;
  padding: 5px;
}
</style>