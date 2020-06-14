<template>
  <div class="contactContainer">
    <h2 class="contactText">CONTACT</h2>
    <div class="contactArea">
      <nuxt-link to class="contact bg-mainColor">
        お気軽にお問い合わせください<Triangle />
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

<style>
.contactContainer {
 
}

.contactText{
  font-size: 44px;
}
.contactArea {
  background-color: #e2f1f7;
  height: 152px;
	line-height: 152px;
}

.contact {
	display: inline-block;
  vertical-align: middle;
	line-height: 50px;
  /* height: 60px; */
  width: 334px;
  text-decoration: none;
  color: #FFFFFF;
  font-size: 16px;
}
@media screen and (max-width: 730px){
  .contactText{
    font-size: 25.84px;
  }
}
</style>