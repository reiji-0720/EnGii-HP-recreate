<template>
  <div class="contactContainer">
    <p class="contactText">CONTACT</p>
    <div class="contactArea">
      <nuxt-link to="contact" class="contact bg-mainColor">
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

.contactText{
  font-size: 54px;
  font-weight: 700;
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
  width: 35%;
  text-decoration: none;
  color: #FFFFFF;
  font-size: 16px;
}

@media screen and (max-width: 1000px) {
  .contact {
    width: 50%;
  }
  .contactText{
    font-size: 35px;
  }
  .contact {
    font-size: 12px;
  }
}

@media screen and (max-width: 730px){
  .contactText{
    font-size: 26px;
  }
  .contact {
    font-size: 10px;
  }
}
@media screen and (max-width:400px){
  .contact {
    width: 80%;
  }
}
</style>