<template>
  <div class="mediacontainer">
    <graphics />
    <app />
    <webHP />
    <video />
  </div>
</template>

<script>
import Graphics from "~/components/graphics.vue";
import App from "~/components/app.vue";
import WebHP from "~/components/webHP.vue";
import Video from "~/components/video.vue";

export default {
  components: {
    Graphics,
    App,
    WebHP,
    Video
  }
};
</script>

<style>
</style>