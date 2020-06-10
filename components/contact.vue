<template>
  <div class="contactContainer">
    <h1 class="contactText">CONTACT</h1>
    <div class="contactArea">
      <nuxt-link to class="contact">
        お気軽にお問い合わせください<span class="triangle"></span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contactContainer {
}

.contactArea {
  background-color: #e2f1f7;
  height: 130px;
	line-height: 130px;
}

.contact {
	display: inline-block;
  vertical-align: middle;
		line-height: 130px;

  height: 60px;
  width: 350px;
  background-color: #66bad7;
  text-decoration: none;
  color: #FFFFFF;
}
</style>