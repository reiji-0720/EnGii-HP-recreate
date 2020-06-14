import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
 duration: 1800,
 easing: [0, 0, 0.1, 1],
 offset: -110,
})