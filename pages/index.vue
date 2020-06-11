<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        EnGii-HP-recreate
      </h1>
      <h2 class="subtitle">
        My classy Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    
    <Influencer />
    <MediaFooter />
    <engiiSupport />
    <About />
    <contact />

  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import MediaFooter from '~/components/MediaFooter.vue'
import Contact from '~/components/Contact.vue'
import Influencer from '~/components/Influencer.vue'
import engiiSupport from '~/components/engiiSupport.vue'
import About from '~/components/About.vue'

export default {
  components: {
    Logo,
    MediaFooter,
    Contact,
    engiiSupport,
    About
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
@media screen and ( max-width:1366px){
  
}

</style>
