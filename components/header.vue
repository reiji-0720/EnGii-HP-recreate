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
  </div>
</template>

<script>

</script>

<style>
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

</style>