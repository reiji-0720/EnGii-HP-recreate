<template>
  <div class="headerContainer">
    <nuxt-link class="borderNone headerImgPosition" to="/">
      <img src="~/assets/EngiiLogoNew.png" class="headerLogo" width="57%" />
    </nuxt-link>
    <ul class="headerMenue">
      <li>
        <nuxt-link class="borderNone" to="/contact" exact exact-active-class="active">NEWS</nuxt-link>
      </li>
      <li class="menu__single">
        SERVICE
        <ul class="menu__second-level">
          <li>
            <nuxt-link
              class="borderNone subMenuePosition"
              to="/sevice/support"
              active-class="active"
            >SUPPORT</nuxt-link>
          </li>
          <li>
            <nuxt-link class="borderNone subMenuePosition" to="/sevice/media" active-class="active">MEDIA</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="borderNone subMenuePosition"
              to="/contact"
              exact
              exact-active-class="active"
            >INFLUENCER</nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link class="borderNone" to="/mainAbout" exact exact-active-class="active">ABOUT</nuxt-link>
      </li>
      <li>
        <nuxt-link class="borderNone" to="/contact" exact exact-active-class="active">CONTACT</nuxt-link>
      </li>
      <li>
        <nuxt-link class="borderNone" to="/member" exact exact-active-class="active">MEMBER</nuxt-link>
      </li>
    </ul>
    <div id="nav-drawer">
      <input id="nav-input" type="checkbox" class="nav-unshown" />
      <label id="nav-open" for="nav-input">
        <span></span>
      </label>
      <label class="nav-unshown" id="nav-close" for="nav-input"></label>
      <ul id="nav-content">
        <li>
          <nuxt-link class="borderNone" to="/contact" exact exact-active-class="active">NEWS</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone subMenuePosition" to="/sevice/support" active-class="active">SUPPORT</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone subMenuePosition" to="/sevice/media" active-class="active">MEDIA</nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="borderNone subMenuePosition"
            to="/contact"
            exact
            exact-active-class="active"
          >INFLUENCER</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/mainAbout" exact exact-active-class="active">ABOUT</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/contact" exact exact-active-class="active">CONTACT</nuxt-link>
        </li>
        <li>
          <nuxt-link class="borderNone" to="/member" exact exact-active-class="active">MEMBER</nuxt-link>
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

@media screen and (min-width: 1001px) {
  .headerContainer {
    background-color: #ffff;
    height: 75px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .headerImgPosition {
    width: 30%;
  }

  .headerLogo {
    margin: 0 50px 0 70px;
  }

  .headerMenue {
    display: flex;
  }

  .headerMenue li {
    margin: 7px 17px 0 17px;
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
    top: 75px;
    width: 100%;
    height:100%;
    margin-left: -80px;
    background:#e2f1f7 ;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  li.menu__single:hover ul.menu__second-level {
    top: 75px;
    visibility: visible;
    opacity: 1;
  }

  .subMenuePosition {
    margin: auto 20px auto 0;
    padding: 10px autos;
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
    background:#e2f1f7 ;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  li.menu__single:hover ul.menu__second-level {
    top: 50px;
    visibility: visible;
    opacity: 1;
  }

  li.menu__single:hover + .result{
    
  }

  .subMenuePosition {
    margin: auto 20px auto 0;
    padding: 10px autos;
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
  border: 2px solid #3bb2db;
  padding: 5px;
}
</style>