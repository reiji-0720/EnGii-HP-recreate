<template>
  <div class="contactContainer">
    <p class="contactText">CONTACT</p>
    <div class="contactArea">
      <nuxt-link to class="contact">
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
  margin-top:100px;
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
  background-color: #66bad7;
  text-decoration: none;
  color: #FFFFFF;
  font-size: 16px;
}
</style>