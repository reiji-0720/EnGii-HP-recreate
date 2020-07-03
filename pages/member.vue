<template>
  <div class="memberContainer">
    <div class="memberTopImg">
      <img src="~/assets/EngiiLogoNew.png" width="30%" />
    </div>
    <div class="memberTopTitle">
      <h1>MEMBER</h1>
    </div>
    <div class="memberConcept">
      <p class="memberConceptText">メンバー紹介</p>
    </div>
    <memberIntroduction />
  </div>
</template>

<script>
import memberIntroduction from "~/components/memberIntroduction.vue";

export default {
  components: {
    memberIntroduction
  }
};
</script>

<style>
.memberContainer {
  margin: 10% auto 0 auto;
}

.memberTopImg {
  text-align: center;
}

.memberTopTitle {
  margin: 5% auto;
  text-align: center;
}

.memberTopTitle h1 {
  font-size: 3.375rem;
  font-weight: 500;
}

.memberConcept {
  text-align: center;
}

.memberConcept p {
  margin: auto;
  width: 120px;
  font-size: 1.25rem;
  border-bottom: solid 2px #3bb2db;
}

@media screen and (max-width: 780px) {
  .memberTopTitle h1 {
    font-size: 2.1875rem;
    font-weight: 500;
  }
  .memberConcept p {
    margin: auto;
    width: 120px;
    font-size: 1rem;
    border-bottom: solid 2px #3bb2db;
  }
}

@media screen and (max-width: 500px) {
  .memberTopTitle h1 {
    font-size: 1.6rem;
    font-weight: 500;
  }
  .memberConcept p {
    margin: auto;
    width: 120px;
    font-size: 1.0rem;
    border-bottom: solid 2px #3bb2db;
  }
}
</style>